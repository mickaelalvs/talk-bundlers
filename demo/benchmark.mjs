import { spawn } from "node:child_process";
import { rm, stat, readdir, writeFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import { join } from "node:path";
import os from "node:os";

// ---------------------------------------------------------------------------
// Benchmark des temps de build — « Benchmark : Projet XXX »
//
// Pour chaque bundler : 1 run de chauffe (ignoré) + N runs mesurés.
// On reconstruit à froid (suppression du dist) avant chaque run.
// Résultats : tableau console + benchmark-results.json.
//
// Usage :
//   node benchmark.mjs            # 5 runs mesurés (défaut)
//   node benchmark.mjs --runs=3   # 3 runs mesurés
// ---------------------------------------------------------------------------

const RUNS = Number(
    process.argv.find((a) => a.startsWith("--runs="))?.split("=")[1] ?? 5
);

// Chaque bundler : son script npm et son dossier de sortie.
const BUNDLERS = [
    { name: "Webpack", script: "build:webpack", dist: "dist/webpack" },
    { name: "Vite", script: "build:vite", dist: "dist/vite" },
    { name: "Rollup", script: "build:rollup", dist: "dist/rollup" },
    { name: "esbuild", script: "build:esbuild", dist: "dist/esbuild" },
];

// Lance un script npm en silence et renvoie sa durée (ms).
function runBuild(script) {
    return new Promise((resolve, reject) => {
        const start = performance.now();
        const child = spawn("npm", ["run", script], {
            stdio: "ignore",
            shell: process.platform === "win32",
        });
        child.on("error", reject);
        child.on("close", (code) => {
            if (code !== 0) return reject(new Error(`${script} a échoué (code ${code})`));
            resolve(performance.now() - start);
        });
    });
}

// Taille totale d'un dossier de sortie (octets).
async function dirSize(dir) {
    let total = 0;
    let entries;
    try {
        entries = await readdir(dir, { withFileTypes: true });
    } catch {
        return 0;
    }
    for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory()) total += await dirSize(full);
        else total += (await stat(full)).size;
    }
    return total;
}

const median = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(s.length / 2);
    return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
};

const fmtMs = (ms) => (ms >= 1000 ? `${(ms / 1000).toFixed(2)} s` : `${Math.round(ms)} ms`);
const fmtKb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function main() {
    console.log(`\n🏁 Benchmark des temps de build — ${RUNS} run(s) mesuré(s) + 1 chauffe\n`);

    const results = [];

    for (const bundler of BUNDLERS) {
        process.stdout.write(`  ${bundler.name.padEnd(10)} `);

        // Run de chauffe (ignoré) : caches, JIT, etc.
        await rm(bundler.dist, { recursive: true, force: true });
        await runBuild(bundler.script);
        process.stdout.write("warmup✓ ");

        const times = [];
        for (let i = 0; i < RUNS; i++) {
            await rm(bundler.dist, { recursive: true, force: true });
            times.push(await runBuild(bundler.script));
            process.stdout.write(".");
        }

        const size = await dirSize(bundler.dist);
        results.push({
            name: bundler.name,
            median: median(times),
            min: Math.min(...times),
            max: Math.max(...times),
            runs: times,
            outputBytes: size,
        });
        process.stdout.write(` ${fmtMs(median(times))}\n`);
    }

    // Tri du plus rapide au plus lent + ratio vs le plus rapide.
    results.sort((a, b) => a.median - b.median);
    const fastest = results[0].median;

    console.log("\n┌─────────────┬───────────┬───────────┬───────────┬─────────┬───────────┐");
    console.log("│ Bundler     │ médiane   │ min       │ max       │ ratio   │ sortie    │");
    console.log("├─────────────┼───────────┼───────────┼───────────┼─────────┼───────────┤");
    for (const r of results) {
        const ratio = `${(r.median / fastest).toFixed(1)}×`;
        console.log(
            `│ ${r.name.padEnd(11)} │ ${fmtMs(r.median).padStart(9)} │ ${fmtMs(r.min).padStart(9)} │ ${fmtMs(r.max).padStart(9)} │ ${ratio.padStart(7)} │ ${fmtKb(r.outputBytes).padStart(9)} │`
        );
    }
    console.log("└─────────────┴───────────┴───────────┴───────────┴─────────┴───────────┘");

    const payload = {
        generatedAt: new Date().toISOString(),
        runs: RUNS,
        env: {
            node: process.version,
            platform: `${os.type()} ${os.release()}`,
            cpu: os.cpus()[0]?.model,
            cores: os.cpus().length,
        },
        results,
    };
    await writeFile("benchmark-results.json", JSON.stringify(payload, null, 2));
    console.log("\n📄 Détails écrits dans benchmark-results.json\n");
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
