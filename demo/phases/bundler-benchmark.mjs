import { spawn } from "node:child_process";
import { performance } from "node:perf_hooks";
import { rm, mkdir, readdir, readFile, writeFile, stat } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { gzipSync } from "node:zlib";
import fs from "node:fs";
import os from "node:os";

// ===========================================================================
// BENCHMARK PAR PHASE — Babel · SWC · esbuild · Oxc · Rollup · Rolldown ·
//                       webpack · Rspack · Vite 6 · Vite 8
//
// Corpus : l'app TodoMVC React de demo/src, dupliquée N fois (un dossier par
// copie, imports relatifs intacts) + react, react-dom, react-router-dom,
// classnames. Le CSS est retiré : on mesure le JS.
//
// Phases mesurées :
//   1. Transpilation  JSX → JS, fichier par fichier (Babel, SWC, esbuild, Oxc)
//   2. Résolution     chaque import → chemin absolu (enhanced-resolve, oxc-resolver)
//   3. Build complet  par bundler, en trois modes cumulatifs :
//                       bundle      graphe + concaténation (sans tree-shaking ni minif)
//                       treeshake   + tree-shaking
//                       minify      + minification (minifieur par défaut de l'outil)
//                     → coût du tree-shaking = treeshake − bundle
//                     → coût de la minif     = minify − treeshake
//   4. Minification   le même bundle passé à Terser, esbuild, SWC, Oxc
//   + détail interne de Rollup (option perf: true)
//
// Chaque mesure tourne dans un processus Node neuf (comme une CLI : JIT froid),
// 1 chauffe ignorée puis N runs ; on garde la médiane. Le temps inclut le
// chargement de l'outil (import) et le travail.
//
// Usage :
//   node phases/bundler-benchmark.mjs                       # 100 copies, 5 runs
//   node phases/bundler-benchmark.mjs --copies=200 --runs=7
//   node phases/bundler-benchmark.mjs --only=bundle,minify  # sous-ensemble de phases
//   node phases/bundler-benchmark.mjs --offline             # sans vérif des versions npm
// ===========================================================================

const __filename = fileURLToPath(import.meta.url);
const DEMO = join(dirname(__filename), "..");
const SRC = join(DEMO, "src", "todo");
const WORK = join(DEMO, ".bundler-bench");
const CORPUS = join(WORK, "src");
const ENTRY = join(CORPUS, "entry.jsx");
const OUT = join(WORK, "out");
const MINIFY_INPUT = join(WORK, "minify-input.js");
const require = createRequire(join(DEMO, "package.json"));
const LATEST_DIR = join(DEMO, "latest");
const LATEST = {
    vite: pathToFileURL(join(LATEST_DIR, "vite.mjs")).href,
    esbuild: pathToFileURL(join(LATEST_DIR, "esbuild.mjs")).href,
};

const argv = process.argv.slice(2);
const opt = (name, def) => argv.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? def;
const flag = (name) => argv.includes(`--${name}`);

const EXTENSIONS = [".jsx", ".js", ".json"];
const PROD = { "process.env.NODE_ENV": '"production"' };
const MODES = ["bundle", "treeshake", "minify"];

// ---------------------------------------------------------------------------
// Ce que chaque outil utilise sous le capot (versions installées dans demo/).
// ---------------------------------------------------------------------------
const STACK = {
    webpack: { lang: "JS", transpile: "babel-loader (Babel)", resolve: "enhanced-resolve", treeshake: "usedExports + sideEffects + concatenateModules", minify: "Terser" },
    rspack: { lang: "Rust", transpile: "builtin:swc-loader (SWC)", resolve: "rspack-resolver (fork d'oxc-resolver)", treeshake: "usedExports + sideEffects (Rust)", minify: "SWC" },
    rollup: { lang: "JS + parser SWC", transpile: "JSX natif Rollup", resolve: "@rollup/plugin-node-resolve", treeshake: "Rollup (JS)", minify: "Terser (plugin)" },
    rolldown: { lang: "Rust", transpile: "Oxc", resolve: "oxc-resolver", treeshake: "Rolldown (Rust)", minify: "Oxc minifier" },
    esbuild: { lang: "Go", transpile: "esbuild", resolve: "esbuild", treeshake: "esbuild", minify: "esbuild" },
    vite6: { lang: "JS + Go", transpile: "esbuild (via plugin-react 4)", resolve: "plugin resolve Vite + Rollup", treeshake: "Rollup", minify: "esbuild" },
    vite8: { lang: "JS + Rust", transpile: "Oxc (via plugin-react 6)", resolve: "oxc-resolver (Rolldown)", treeshake: "Rolldown", minify: "Oxc minifier" },
};

// Paquets suivis : version installée vs dernière publiée sur npm.
// [nom, dossier] : "demo" = projet, "latest" = demo/latest/.
const PACKAGES = [
    ["@babel/core", "demo"],
    ["@swc/core", "demo"],
    ["esbuild", "demo"],
    ["esbuild", "latest"],
    ["oxc-transform", "demo"],
    ["oxc-minify", "demo"],
    ["oxc-resolver", "demo"],
    ["enhanced-resolve", "demo"],
    ["terser", "demo"],
    ["rollup", "demo"],
    ["rolldown", "demo"],
    ["webpack", "demo"],
    ["@rspack/core", "demo"],
    ["vite", "demo"],
    ["vite", "latest"],
    ["@vitejs/plugin-react", "demo"],
    ["@vitejs/plugin-react", "latest"],
];

const installedVersion = (pkg, where) =>
    JSON.parse(fs.readFileSync(join(where === "latest" ? LATEST_DIR : DEMO, "node_modules", pkg, "package.json"), "utf8")).version;

// ---------------------------------------------------------------------------
// Corpus
// ---------------------------------------------------------------------------
async function listFiles(dir) {
    const out = [];
    for (const e of await readdir(dir, { withFileTypes: true })) {
        const full = join(dir, e.name);
        if (e.isDirectory()) out.push(...(await listFiles(full)));
        else out.push(full);
    }
    return out;
}

async function buildCorpus(copies) {
    await rm(WORK, { recursive: true, force: true });
    await mkdir(CORPUS, { recursive: true });
    const files = (await listFiles(SRC)).filter((f) => /\.jsx?$/.test(f));
    const sources = await Promise.all(
        files.map(async (f) => [relative(SRC, f), (await readFile(f, "utf8")).replace(/^import\s+["'][^"']+\.css["'];?\s*$/gm, "")])
    );
    for (let c = 0; c < copies; c++) {
        for (const [rel, code] of sources) {
            const dest = join(CORPUS, `copy_${c}`, rel);
            await mkdir(dirname(dest), { recursive: true });
            await writeFile(dest, code);
        }
    }
    const imports = Array.from({ length: copies }, (_, c) => `import { App as App${c} } from "./copy_${c}/app";`).join("\n");
    const apps = Array.from({ length: copies }, (_, c) => `<App${c} />`).join("");
    await writeFile(
        ENTRY,
        `import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
${imports}

createRoot(document.getElementById("root")).render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<>${apps}</>} />
        </Routes>
    </HashRouter>
);
`
    );
    return { modules: copies * sources.length + 1, bytes: (await Promise.all((await listFiles(CORPUS)).map((f) => stat(f)))).reduce((s, x) => s + x.size, 0) };
}

async function corpusFiles() {
    const files = await listFiles(CORPUS);
    return Promise.all(files.map(async (f) => ({ path: f, code: await readFile(f, "utf8") })));
}

// Taille JS produite (brute + gzip) dans un dossier de sortie.
async function jsSize(dir) {
    const files = (await listFiles(dir)).filter((f) => f.endsWith(".js") || f.endsWith(".mjs"));
    let raw = 0;
    let gz = 0;
    for (const f of files) {
        const buf = await readFile(f);
        raw += buf.length;
        gz += gzipSync(buf).length;
    }
    return { raw, gz };
}

// ---------------------------------------------------------------------------
// Tâches (exécutées dans un processus enfant : --task=<id>)
// Chaque tâche renvoie { loadMs, workMs, ...extra }.
// ---------------------------------------------------------------------------
async function timed(load, work) {
    const t0 = performance.now();
    const mod = await load();
    const t1 = performance.now();
    const extra = (await work(mod)) ?? {};
    const t2 = performance.now();
    return { loadMs: t1 - t0, workMs: t2 - t1, ...extra };
}

const TRANSPILE = {
    babel: () =>
        timed(
            () => import("@babel/core"),
            async (babel) => {
                const files = await corpusFiles();
                for (const f of files) {
                    await babel.transformAsync(f.code, {
                        filename: f.path,
                        babelrc: false,
                        configFile: false,
                        presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
                    });
                }
            }
        ),
    swc: () =>
        timed(
            () => import("@swc/core"),
            async (swc) => {
                const files = await corpusFiles();
                await Promise.all(
                    files.map((f) =>
                        swc.transform(f.code, {
                            filename: f.path,
                            swcrc: false,
                            jsc: { parser: { syntax: "ecmascript", jsx: true }, transform: { react: { runtime: "automatic" } }, target: "es2020" },
                        })
                    )
                );
            }
        ),
    esbuild: () =>
        timed(
            () => import("esbuild"),
            async (esbuild) => {
                const files = await corpusFiles();
                await Promise.all(files.map((f) => esbuild.transform(f.code, { loader: "jsx", jsx: "automatic", sourcefile: f.path })));
            }
        ),
    oxc: () =>
        timed(
            () => import("oxc-transform"),
            async (oxc) => {
                const files = await corpusFiles();
                await Promise.all(files.map((f) => oxc.transform(f.path, f.code, { lang: "jsx", jsx: { runtime: "automatic" } })));
            }
        ),
};

async function collectSpecifiers() {
    const files = await corpusFiles();
    const out = [];
    for (const f of files) {
        for (const m of f.code.matchAll(/(?:from|import)\s+["']([^"']+)["']/g)) out.push([dirname(f.path), m[1]]);
    }
    return out;
}

const RESOLVE_OPTS = {
    extensions: EXTENSIONS,
    conditionNames: ["import", "module", "browser", "default"],
    mainFields: ["browser", "module", "main"],
};

const RESOLVE = {
    "enhanced-resolve": () =>
        timed(
            () => import("enhanced-resolve"),
            async ({ default: er }) => {
                const specs = await collectSpecifiers();
                const resolver = er.ResolverFactory.createResolver({
                    ...RESOLVE_OPTS,
                    fileSystem: new er.CachedInputFileSystem(fs, 4000),
                    useSyncFileSystemCalls: true,
                });
                for (const [dir, req] of specs) resolver.resolveSync({}, dir, req);
                return { count: specs.length };
            }
        ),
    "oxc-resolver": () =>
        timed(
            () => import("oxc-resolver"),
            async (oxc) => {
                const specs = await collectSpecifiers();
                const resolver = new oxc.ResolverFactory(RESOLVE_OPTS);
                for (const [dir, req] of specs) {
                    const r = resolver.sync(dir, req);
                    if (r.error) throw new Error(`${req}: ${r.error}`);
                }
                return { count: specs.length };
            }
        ),
};

function terserPlugin(terser) {
    return {
        name: "terser",
        async renderChunk(code) {
            const r = await terser.minify(code, { module: true, compress: true, mangle: true });
            return { code: r.code, map: null };
        },
    };
}

function webpackConfig(mode, dir, loaderRule) {
    const ts = mode !== "bundle";
    return {
        mode: "production",
        context: WORK,
        entry: ENTRY,
        output: { path: dir, filename: "[name].js" },
        devtool: false,
        cache: false,
        performance: { hints: false },
        infrastructureLogging: { level: "error" },
        stats: "none",
        resolve: { extensions: EXTENSIONS },
        module: { rules: [loaderRule] },
        optimization: {
            minimize: mode === "minify",
            usedExports: ts,
            sideEffects: ts,
            providedExports: ts,
            innerGraph: ts,
            concatenateModules: ts,
            mangleExports: ts,
        },
    };
}

function runCompiler(compilerFn, config) {
    return new Promise((resolve, reject) => {
        compilerFn(config, (err, stats) => {
            if (err) return reject(err);
            if (stats.hasErrors()) return reject(new Error(stats.toString({ all: false, errors: true })));
            resolve();
        });
    });
}

// Vite 6 : version du projet. Vite 8 : demo/latest/ (dossier isolé, sinon
// plugin-react 6 résoudrait le vite 6 de demo/ comme peer dependency).
async function viteBuild(mode, dir, latest) {
    const { build, react } = latest
        ? await import(LATEST.vite)
        : { build: (await import("vite")).build, react: (await import("@vitejs/plugin-react")).default };
    const bundlerOptions = { input: ENTRY, treeshake: mode !== "bundle" };
    await build({
        configFile: false,
        root: WORK,
        logLevel: "silent",
        plugins: [react()],
        build: {
            outDir: dir,
            emptyOutDir: true,
            minify: mode === "minify",
            modulePreload: false,
            reportCompressedSize: false,
            copyPublicDir: false,
            ...(latest ? { rolldownOptions: bundlerOptions } : { rollupOptions: bundlerOptions }),
        },
    });
}

const BUNDLERS = {
    esbuild: { label: "esbuild", stack: "esbuild", pkg: "esbuild" },
    "esbuild-latest": { label: "esbuild (latest)", stack: "esbuild", pkg: "esbuild-latest" },
    rollup: { label: "Rollup", stack: "rollup", pkg: "rollup" },
    rolldown: { label: "Rolldown", stack: "rolldown", pkg: "rolldown" },
    webpack: { label: "webpack", stack: "webpack", pkg: "webpack" },
    rspack: { label: "Rspack", stack: "rspack", pkg: "@rspack/core" },
    vite6: { label: "Vite 6", stack: "vite6", pkg: "vite" },
    vite8: { label: "Vite 8", stack: "vite8", pkg: "vite-latest" },
};

async function bundleTask(tool, mode) {
    const dir = join(OUT, `${tool}-${mode}`);
    await rm(dir, { recursive: true, force: true });
    let perf;
    const res = await (async () => {
        switch (tool) {
            case "esbuild":
            case "esbuild-latest":
                return timed(
                    () => import(tool === "esbuild" ? "esbuild" : LATEST.esbuild),
                    (esbuild) =>
                        esbuild.build({
                            entryPoints: [ENTRY],
                            bundle: true,
                            outdir: dir,
                            format: "esm",
                            platform: "browser",
                            jsx: "automatic",
                            define: PROD,
                            treeShaking: mode !== "bundle",
                            minify: mode === "minify",
                            logLevel: "silent",
                        })
                );
            case "rollup":
                return timed(
                    async () => ({
                        rollup: (await import("rollup")).rollup,
                        nodeResolve: (await import("@rollup/plugin-node-resolve")).nodeResolve,
                        commonjs: (await import("@rollup/plugin-commonjs")).default,
                        replace: (await import("@rollup/plugin-replace")).default,
                        terser: mode === "minify" ? await import("terser") : null,
                    }),
                    async ({ rollup, nodeResolve, commonjs, replace, terser }) => {
                        const bundle = await rollup({
                            input: ENTRY,
                            jsx: "react-jsx",
                            treeshake: mode !== "bundle",
                            perf: true,
                            onwarn: () => {},
                            plugins: [
                                replace({ preventAssignment: true, values: PROD }),
                                nodeResolve({ extensions: EXTENSIONS, browser: true }),
                                commonjs({ include: /node_modules/ }),
                            ],
                        });
                        await bundle.write({ dir, format: "es", plugins: terser ? [terserPlugin(terser)] : [] });
                        perf = bundle.getTimings();
                        await bundle.close();
                    }
                );
            case "rolldown":
                return timed(
                    () => import("rolldown"),
                    async ({ rolldown }) => {
                        const bundle = await rolldown({
                            input: ENTRY,
                            cwd: WORK,
                            platform: "browser",
                            treeshake: mode !== "bundle",
                            transform: { jsx: "react-jsx", define: PROD },
                            onLog: () => {},
                        });
                        await bundle.write({ dir, format: "esm", minify: mode === "minify" });
                        await bundle.close();
                    }
                );
            case "webpack":
                return timed(
                    async () => (await import("webpack")).default,
                    (webpack) =>
                        runCompiler(
                            webpack,
                            webpackConfig(mode, dir, {
                                test: /\.jsx?$/,
                                exclude: /node_modules/,
                                use: {
                                    loader: require.resolve("babel-loader"),
                                    options: {
                                        babelrc: false,
                                        configFile: false,
                                        cacheDirectory: false,
                                        presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
                                    },
                                },
                            })
                        )
                );
            case "rspack":
                return timed(
                    async () => (await import("@rspack/core")).rspack,
                    (rspack) =>
                        runCompiler(
                            rspack,
                            webpackConfig(mode, dir, {
                                test: /\.jsx?$/,
                                exclude: /node_modules/,
                                loader: "builtin:swc-loader",
                                type: "javascript/auto",
                                options: { jsc: { parser: { syntax: "ecmascript", jsx: true }, transform: { react: { runtime: "automatic" } } } },
                            })
                        )
                );
            case "vite6":
                return timed(
                    async () => null,
                    () => viteBuild(mode, dir, false)
                );
            case "vite8":
                return timed(
                    async () => null,
                    () => viteBuild(mode, dir, true)
                );
            default:
                throw new Error(`bundler inconnu : ${tool}`);
        }
    })();
    return { ...res, size: await jsSize(dir), ...(perf ? { perf } : {}) };
}

const MINIFIERS = {
    terser: () =>
        timed(
            () => import("terser"),
            async (terser) => {
                const r = await terser.minify(await readFile(MINIFY_INPUT, "utf8"), { module: true, compress: true, mangle: true });
                return { out: r.code };
            }
        ),
    esbuild: () =>
        timed(
            () => import("esbuild"),
            async (esbuild) => {
                const r = await esbuild.transform(await readFile(MINIFY_INPUT, "utf8"), { minify: true, format: "esm" });
                return { out: r.code };
            }
        ),
    swc: () =>
        timed(
            () => import("@swc/core"),
            async (swc) => {
                const r = await swc.minify(await readFile(MINIFY_INPUT, "utf8"), { module: true, compress: true, mangle: true });
                return { out: r.code };
            }
        ),
    oxc: () =>
        timed(
            () => import("oxc-minify"),
            async (oxc) => {
                const r = await oxc.minify("bundle.js", await readFile(MINIFY_INPUT, "utf8"), { module: true, compress: true, mangle: true });
                return { out: r.code };
            }
        ),
};

async function runTask(id) {
    const [phase, tool, mode] = id.split(":");
    if (phase === "transpile") return TRANSPILE[tool]();
    if (phase === "resolve") return RESOLVE[tool]();
    if (phase === "bundle") return bundleTask(tool, mode);
    if (phase === "minify") {
        const { out, ...rest } = await MINIFIERS[tool]();
        const buf = Buffer.from(out);
        return { ...rest, size: { raw: buf.length, gz: gzipSync(buf).length } };
    }
    throw new Error(`tâche inconnue : ${id}`);
}

// ---------------------------------------------------------------------------
// Orchestrateur
// ---------------------------------------------------------------------------
function spawnTask(id) {
    return new Promise((resolve, reject) => {
        const child = spawn(process.execPath, [__filename, `--task=${id}`], { cwd: DEMO, stdio: ["ignore", "pipe", "pipe"] });
        let stdout = "";
        let stderr = "";
        child.stdout.on("data", (d) => (stdout += d));
        child.stderr.on("data", (d) => (stderr += d));
        child.on("close", (code) => {
            const line = stdout.split("\n").find((l) => l.startsWith("@@RESULT "));
            if (code !== 0 || !line) return reject(new Error(`${id} a échoué (code ${code})\n${stderr.slice(-2000)}`));
            resolve(JSON.parse(line.slice(9)));
        });
    });
}

const median = (a) => {
    const s = [...a].sort((x, y) => x - y);
    const m = s.length >> 1;
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmtMs = (ms) => (ms == null ? "—" : Math.abs(ms) >= 1000 ? `${(ms / 1000).toFixed(2)} s` : `${Math.round(ms)} ms`);
const fmtKb = (b) => (b == null ? "—" : `${(b / 1024).toFixed(1)} KB`);

async function measure(id, runs) {
    await spawnTask(id); // chauffe : cache disque, binaires natifs
    const samples = [];
    for (let i = 0; i < runs; i++) samples.push(await spawnTask(id));
    const pick = (k) => median(samples.map((s) => s[k]));
    const last = samples[samples.length - 1];
    return {
        id,
        totalMs: median(samples.map((s) => s.loadMs + s.workMs)),
        loadMs: pick("loadMs"),
        workMs: pick("workMs"),
        runs: samples.map((s) => Math.round(s.loadMs + s.workMs)),
        ...(last.size ? { size: last.size } : {}),
        ...(last.count ? { count: last.count } : {}),
        ...(last.perf ? { perf: last.perf } : {}),
    };
}

function table(headers, rows) {
    const widths = headers.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)));
    const line = (l, m, r) => l + widths.map((w) => "─".repeat(w + 2)).join(m) + r;
    const fmtRow = (r) => "│" + r.map((c, i) => ` ${i === 0 ? String(c).padEnd(widths[i]) : String(c).padStart(widths[i])} `).join("│") + "│";
    console.log(line("┌", "┬", "┐"));
    console.log(fmtRow(headers));
    console.log(line("├", "┼", "┤"));
    rows.forEach((r) => console.log(fmtRow(r)));
    console.log(line("└", "┴", "┘"));
}

async function latestVersions() {
    const names = [...new Set(PACKAGES.map(([n]) => n))];
    // `npm view` plutôt que fetch : réutilise la config npm (proxy, certificats).
    const entries = await Promise.all(
        names.map(
            (n) =>
                new Promise((resolve) => {
                    const child = spawn("npm", ["view", n, "version"], { stdio: ["ignore", "pipe", "ignore"], timeout: 180000 });
                    let out = "";
                    child.stdout.on("data", (d) => (out += d));
                    child.on("close", (code) => resolve([n, code === 0 ? out.trim() || null : null]));
                    child.on("error", () => resolve([n, null]));
                })
        )
    );
    return Object.fromEntries(entries);
}

async function main() {
    const copies = Number(opt("copies", 100));
    const runs = Number(opt("runs", 5));
    const only = opt("only", "transpile,resolve,bundle,minify").split(",");

    console.log(`\n🏁 Benchmark par phase — ${runs} runs + 1 chauffe, processus neuf à chaque run`);
    const corpus = await buildCorpus(copies);
    console.log(`   Corpus : TodoMVC React ×${copies} → ${corpus.modules} modules sources (${fmtKb(corpus.bytes)}) + react, react-dom, react-router-dom\n`);

    // Versions
    const latest = flag("offline") ? {} : await latestVersions();
    const versions = PACKAGES.map(([name, where]) => ({ name, where, installed: installedVersion(name, where), latest: latest[name] ?? null }));
    console.log("📦 Versions (installée → dernière sur npm)");
    table(
        ["Paquet", "dossier", "installée", "dernière", ""],
        versions.map((v) => [v.name, v.where, v.installed, v.latest ?? "?", !v.latest ? "" : v.latest === v.installed ? "✓" : "↑ dispo"])
    );

    console.log("\n🧰 Ce que chaque outil utilise");
    table(
        ["Outil", "langage", "transpile", "résolution", "minif"],
        Object.entries(STACK).map(([k, s]) => [k, s.lang, s.transpile, s.resolve, s.minify])
    );

    const results = { transpile: [], resolve: [], bundle: [], minify: [] };
    const step = async (bucket, id, label) => {
        process.stdout.write(`   ${label.padEnd(34)} `);
        const r = await measure(id, runs);
        results[bucket].push({ label, ...r });
        process.stdout.write(`${fmtMs(r.totalMs)}\n`);
        return r;
    };

    if (only.includes("transpile")) {
        console.log("\n① Transpilation JSX → JS (fichier par fichier, sans bundling)");
        for (const t of Object.keys(TRANSPILE)) await step("transpile", `transpile:${t}`, t);
        const rows = [...results.transpile].sort((a, b) => a.workMs - b.workMs);
        const slow = rows[rows.length - 1].workMs;
        table(["Transpileur", "travail", "chargement", "total", "× plus rapide que le plus lent"], rows.map((r) => [r.label, fmtMs(r.workMs), fmtMs(r.loadMs), fmtMs(r.totalMs), `${(slow / r.workMs).toFixed(1)}×`]));
    }

    if (only.includes("resolve")) {
        console.log("\n② Résolution des imports");
        for (const t of Object.keys(RESOLVE)) await step("resolve", `resolve:${t}`, t);
        table(["Résolveur", "imports", "travail", "chargement"], results.resolve.map((r) => [r.label, r.count, fmtMs(r.workMs), fmtMs(r.loadMs)]));
    }

    if (only.includes("bundle")) {
        console.log("\n③ Build complet par bundler (bundle → +tree-shaking → +minification)");
        for (const tool of Object.keys(BUNDLERS)) {
            for (const mode of MODES) await step("bundle", `bundle:${tool}:${mode}`, `${BUNDLERS[tool].label} · ${mode}`);
        }
        const byTool = Object.keys(BUNDLERS).map((tool) => {
            const get = (mode) => results.bundle.find((r) => r.id === `bundle:${tool}:${mode}`);
            return { tool, label: BUNDLERS[tool].label, bundle: get("bundle"), treeshake: get("treeshake"), minify: get("minify") };
        });
        byTool.sort((a, b) => a.minify.totalMs - b.minify.totalMs);
        table(
            ["Bundler", "bundle", "+tree-shake", "+minif", "build prod", "brut", "tree-shaké", "minifié", "gzip"],
            byTool.map((b) => [
                b.label,
                fmtMs(b.bundle.totalMs),
                fmtMs(b.treeshake.totalMs - b.bundle.totalMs),
                fmtMs(b.minify.totalMs - b.treeshake.totalMs),
                fmtMs(b.minify.totalMs),
                fmtKb(b.bundle.size.raw),
                fmtKb(b.treeshake.size.raw),
                fmtKb(b.minify.size.raw),
                fmtKb(b.minify.size.gz),
            ])
        );
        console.log("   Les colonnes « + » sont des écarts entre médianes : un écart proche de 0 ou négatif = dans le bruit.");
        results.bundleSummary = byTool.map((b) => ({
            tool: b.tool,
            label: b.label,
            stack: STACK[BUNDLERS[b.tool].stack],
            bundleMs: b.bundle.totalMs,
            treeshakeMs: b.treeshake.totalMs - b.bundle.totalMs,
            minifyMs: b.minify.totalMs - b.treeshake.totalMs,
            prodMs: b.minify.totalMs,
            size: { bundle: b.bundle.size, treeshake: b.treeshake.size, minify: b.minify.size },
        }));

        const rollupPerf = results.bundle.find((r) => r.id === "bundle:rollup:treeshake")?.perf;
        if (rollupPerf) {
            console.log("\n🔬 Détail interne de Rollup (perf: true, mode treeshake, dernier run)");
            const rows = Object.entries(rollupPerf)
                .filter(([k]) => /^#{1,2} /.test(k))
                .map(([k, [ms]]) => [k, fmtMs(ms)]);
            table(["Étape Rollup", "durée"], rows);
            results.rollupPerf = rollupPerf;
        }
    }

    if (only.includes("minify")) {
        console.log("\n④ Minification seule (même bundle tree-shaké non minifié, produit par esbuild)");
        const esbuild = await import("esbuild");
        const r = await esbuild.build({ entryPoints: [ENTRY], bundle: true, write: false, format: "esm", jsx: "automatic", define: PROD, treeShaking: true, minify: false, logLevel: "silent" });
        await writeFile(MINIFY_INPUT, r.outputFiles[0].text);
        const inSize = r.outputFiles[0].contents.byteLength;
        for (const t of Object.keys(MINIFIERS)) await step("minify", `minify:${t}`, t);
        const rows = [...results.minify].sort((a, b) => a.workMs - b.workMs);
        table(
            ["Minifieur", "travail", "chargement", "entrée", "sortie", "gzip", "réduction"],
            rows.map((m) => [m.label, fmtMs(m.workMs), fmtMs(m.loadMs), fmtKb(inSize), fmtKb(m.size.raw), fmtKb(m.size.gz), `${((1 - m.size.raw / inSize) * 100).toFixed(1)}%`])
        );
        results.minifyInputBytes = inSize;
    }

    const payload = {
        generatedAt: new Date().toISOString(),
        copies,
        runs,
        corpus,
        env: { node: process.version, platform: `${os.type()} ${os.release()}`, cpu: os.cpus()[0]?.model, cores: os.cpus().length },
        versions,
        stack: STACK,
        results,
    };
    await writeFile(join(DEMO, "bundler-benchmark-results.json"), JSON.stringify(payload, null, 2));
    console.log("\n📄 Détails écrits dans bundler-benchmark-results.json\n");
    if (!flag("keep")) await rm(WORK, { recursive: true, force: true });
}

const taskArg = opt("task", null);
if (taskArg) {
    runTask(taskArg)
        .then((r) => {
            process.stdout.write(`\n@@RESULT ${JSON.stringify(r)}\n`);
            process.exit(0);
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
} else {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}
