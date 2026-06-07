import { readFile } from "node:fs/promises";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as esbuild from "esbuild";
import { transform as swcTransform } from "@swc/core";
import { transformAsync as babelTransform } from "@babel/core";

// ===========================================================================
// PHASE 1 — TRANSPILATION (isolée)
//
// La transpilation transforme un fichier source (JSX, syntaxe moderne) en JS
// que le navigateur comprend. C'est une opération PAR FICHIER : aucune
// résolution de modules, aucun bundling. On le prouve en passant le contenu
// d'un seul fichier à trois transpileurs (esbuild, SWC, Babel) et en comparant
// leurs sorties + leur vitesse.
// ===========================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE = join(__dirname, "..", "src", "todo", "components", "header.jsx");

const code = await readFile(FILE, "utf8");

console.log("\n📄 ENTRÉE — src/todo/components/header.jsx\n");
console.log(code);
console.log("─".repeat(70));

// --- esbuild (Go) ----------------------------------------------------------
const tEsbuildStart = performance.now();
const esbuildOut = await esbuild.transform(code, {
    loader: "jsx",
    jsx: "automatic",
});
const tEsbuild = performance.now() - tEsbuildStart;

// --- SWC (Rust) ------------------------------------------------------------
const tSwcStart = performance.now();
const swcOut = await swcTransform(code, {
    filename: "header.jsx",
    jsc: {
        parser: { syntax: "ecmascript", jsx: true },
        transform: { react: { runtime: "automatic" } },
        target: "es2020",
    },
});
const tSwc = performance.now() - tSwcStart;

// --- Babel (JavaScript) ----------------------------------------------------
const tBabelStart = performance.now();
const babelOut = await babelTransform(code, {
    filename: "header.jsx",
    presets: [["@babel/preset-react", { runtime: "automatic" }]],
    configFile: false,
    babelrc: false,
});
const tBabel = performance.now() - tBabelStart;

console.log("\n🟨 SORTIE — esbuild (Go)\n");
console.log(esbuildOut.code.trim());
console.log("─".repeat(70));

console.log("\n🟧 SORTIE — SWC (Rust)\n");
console.log(swcOut.code.trim());
console.log("─".repeat(70));

console.log("\n🟦 SORTIE — Babel (JavaScript)\n");
console.log(babelOut.code.trim());
console.log("─".repeat(70));

console.log("\n⏱  Temps de transpilation (un seul fichier, à froid)\n");
const rows = [
    { tool: "esbuild (Go)", ms: tEsbuild },
    { tool: "SWC (Rust)", ms: tSwc },
    { tool: "Babel (JS)", ms: tBabel },
].sort((a, b) => a.ms - b.ms);
for (const r of rows) {
    console.log(`   ${r.tool.padEnd(16)} ${r.ms.toFixed(2)} ms`);
}
console.log(
    "\n   Note : sur un seul petit fichier le bruit domine. Pour des chiffres" +
        "\n   crédibles, voir benchmark.mjs (build complet, multi-runs).\n"
);
