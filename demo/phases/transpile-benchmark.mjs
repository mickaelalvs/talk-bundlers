import { spawn } from "node:child_process";
import { performance } from "node:perf_hooks";
import { rm, mkdir, readdir, readFile, writeFile, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

// ===========================================================================
// BENCHMARK DE TRANSPILATION — esbuild vs SWC vs Babel
//
// Compare les trois transpileurs lancés comme ils le sont RÉELLEMENT dans un
// build : en tant que processus CLI sur tout un dossier (et non via l'API
// transform() fichier par fichier, qui pénalise esbuild à cause de l'IPC).
//
// Corpus : les fichiers JSX/JS du projet demo/ dupliqués N fois pour atteindre
// une taille représentative d'un vrai projet. Médiane de plusieurs runs à froid.
//
// Usage :
//   node phases/transpile-benchmark.mjs              # ×400 (3200 fichiers), 7 runs
//   node phases/transpile-benchmark.mjs --copies=200 --runs=5
// ===========================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEMO = join(__dirname, "..");
const SRC = join(DEMO, "src");
const BIN = join(DEMO, "node_modules", ".bin");
const WORK = join(DEMO, ".transpile-bench");
const CORPUS = join(WORK, "src");

const arg = (name, def) =>
    Number(process.argv.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? def);
const COPIES = arg("copies", 400);
const RUNS = arg("runs", 7);

// Fichiers sources réels du projet (composants + logique).
const SOURCE_FILES = [
    "todo/components/header.jsx",
    "todo/components/main.jsx",
    "todo/components/input.jsx",
    "todo/components/footer.jsx",
    "todo/components/item.jsx",
    "todo/app.jsx",
    "todo/reducer.js",
    "index.js",
];

async function buildCorpus() {
    await rm(WORK, { recursive: true, force: true });
    await mkdir(CORPUS, { recursive: true });
    const contents = await Promise.all(
        SOURCE_FILES.map((f) => readFile(join(SRC, f), "utf8"))
    );
    let i = 0;
    for (let c = 0; c < COPIES; c++) {
        for (const code of contents) {
            i++;
            await writeFile(join(CORPUS, `file_${i}.jsx`), code);
        }
    }
    // configs
    await writeFile(
        join(WORK, ".swcrc"),
        JSON.stringify(
            {
                jsc: {
                    parser: { syntax: "ecmascript", jsx: true },
                    transform: { react: { runtime: "automatic" } },
                    target: "es2020",
                },
            },
            null,
            2
        )
    );
    await writeFile(
        join(WORK, "babel.config.json"),
        JSON.stringify(
            { presets: [["@babel/preset-react", { runtime: "automatic" }]] },
            null,
            2
        )
    );
    return i;
}

const TOOLS = [
    {
        name: "esbuild (Go)",
        out: () => join(WORK, "out-esbuild"),
        cmd: (out) => [
            join(BIN, "esbuild"),
            `${CORPUS}/*.jsx`,
            "--outdir=" + out,
            "--loader:.jsx=jsx",
            "--jsx=automatic",
        ],
        cwd: WORK,
    },
    {
        name: "SWC (Rust)",
        out: () => join(WORK, "out-swc"),
        cmd: (out) => [join(BIN, "swc"), "src", "-d", out, "--config-file", join(WORK, ".swcrc")],
        cwd: WORK,
    },
    {
        name: "Babel (JS)",
        out: () => join(WORK, "out-babel"),
        cmd: (out) => [
            join(BIN, "babel"),
            "src",
            "-d",
            out,
            "--config-file",
            join(WORK, "babel.config.json"),
            "--extensions",
            ".jsx",
        ],
        cwd: WORK,
    },
];

function run(argv, cwd) {
    return new Promise((resolve, reject) => {
        const start = performance.now();
        const child = spawn(argv[0], argv.slice(1), { stdio: "ignore", cwd });
        child.on("error", reject);
        child.on("close", (code) => {
            if (code !== 0) return reject(new Error(`exit ${code}: ${argv.join(" ")}`));
            resolve(performance.now() - start);
        });
    });
}

const median = (a) => {
    const s = [...a].sort((x, y) => x - y);
    const m = s.length >> 1;
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const fmt = (ms) => (ms >= 1000 ? `${(ms / 1000).toFixed(2)} s` : `${Math.round(ms)} ms`);

async function main() {
    // Vérifie la présence des CLI.
    for (const bin of ["esbuild", "swc", "babel"]) {
        if (!existsSync(join(BIN, bin))) {
            console.error(
                `\n✗ CLI manquante : ${bin}. Installer @swc/cli et @babel/cli :\n` +
                    `  pnpm add -D @swc/cli @babel/cli\n`
            );
            process.exit(1);
        }
    }

    console.log(`\n🏁 Benchmark de transpilation — esbuild vs SWC vs Babel`);
    const fileCount = await buildCorpus();
    console.log(
        `   Corpus : ${fileCount} fichiers JSX (×${COPIES}) · ${RUNS} runs à froid + 1 chauffe\n`
    );

    const results = [];
    for (const t of TOOLS) {
        process.stdout.write(`  ${t.name.padEnd(14)} `);
        const out = t.out();
        await rm(out, { recursive: true, force: true });
        await mkdir(out, { recursive: true });
        await run(t.cmd(out), t.cwd); // warmup
        process.stdout.write("chauffe✓ ");
        const times = [];
        for (let i = 0; i < RUNS; i++) {
            await rm(out, { recursive: true, force: true });
            await mkdir(out, { recursive: true });
            times.push(await run(t.cmd(out), t.cwd));
            process.stdout.write(".");
        }
        const med = median(times);
        results.push({ name: t.name, median: med, min: Math.min(...times), max: Math.max(...times), runs: times });
        process.stdout.write(` ${fmt(med)}\n`);
    }

    results.sort((a, b) => a.median - b.median);
    const fastest = results[0].median;

    console.log("\n┌──────────────┬───────────┬───────────┬───────────┬─────────┐");
    console.log("│ Transpileur  │ médiane   │ min       │ max       │ ratio   │");
    console.log("├──────────────┼───────────┼───────────┼───────────┼─────────┤");
    for (const r of results) {
        console.log(
            `│ ${r.name.padEnd(12)} │ ${fmt(r.median).padStart(9)} │ ${fmt(r.min).padStart(9)} │ ${fmt(r.max).padStart(9)} │ ${(r.median / fastest).toFixed(1) + "×"} ${" ".repeat(Math.max(0, 6 - (r.median / fastest).toFixed(1).length))}│`
        );
    }
    console.log("└──────────────┴───────────┴───────────┴───────────┴─────────┘");

    const payload = {
        generatedAt: new Date().toISOString(),
        copies: COPIES,
        files: fileCount,
        runs: RUNS,
        env: {
            node: process.version,
            platform: `${os.type()} ${os.release()}`,
            cpu: os.cpus()[0]?.model,
            cores: os.cpus().length,
        },
        results,
    };
    await writeFile(join(DEMO, "transpile-benchmark-results.json"), JSON.stringify(payload, null, 2));
    console.log("\n📄 Détails écrits dans transpile-benchmark-results.json");

    // Pour le slide : largeurs de barres relatives au plus lent.
    const slowest = results[results.length - 1].median;
    console.log("\n📊 Pour le slide (largeurs relatives au plus lent) :");
    for (const r of results) {
        console.log(`   ${r.name.padEnd(14)} ${fmt(r.median).padStart(8)}  width: ${Math.round((r.median / slowest) * 100)}%`);
    }
    console.log("");

    await rm(WORK, { recursive: true, force: true });
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
