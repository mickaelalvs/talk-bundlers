import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as esbuild from "esbuild";

// ===========================================================================
// PHASE 4 — OPTIMISATION (isolée : tree-shaking + minification)
//
// On compare le MÊME code bundlé, deux fois :
//   A) sans optimisation  (minify:false, treeShaking:false)
//   B) avec optimisation  (minify:true,  treeShaking:true)
// On mesure l'écart de taille, puis on montre le tree-shaking sur un petit
// module « utils » dont une seule fonction est utilisée.
// ===========================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const ENTRY = join(root, "src", "index.js");

const common = {
    entryPoints: [ENTRY],
    bundle: true,
    write: false,
    format: "esm",
    loader: { ".js": "jsx", ".css": "css" },
    outdir: "dist/_phase-optimize", // requis par esbuild même si write:false
    jsx: "automatic",
    define: { "process.env.NODE_ENV": '"production"' },
    logLevel: "silent",
};

// --- A) Sans optimisation --------------------------------------------------
const aStart = performance.now();
const raw = await esbuild.build({ ...common, minify: false, treeShaking: false });
const aMs = performance.now() - aStart;
const rawSize = raw.outputFiles.find((f) => f.path.endsWith(".js")).contents.byteLength;

// --- B) Avec optimisation --------------------------------------------------
const bStart = performance.now();
const opt = await esbuild.build({ ...common, minify: true, treeShaking: true });
const bMs = performance.now() - bStart;
const optSize = opt.outputFiles.find((f) => f.path.endsWith(".js")).contents.byteLength;

console.log("\n✨ PHASE 4 — Optimisation (tree-shaking + minification)\n");
console.log("Même bundle, deux configurations :\n");
console.log(`  A) brut         ${(rawSize / 1024).toFixed(1).padStart(8)} KB   (${aMs.toFixed(0)} ms)`);
console.log(`  B) optimisé     ${(optSize / 1024).toFixed(1).padStart(8)} KB   (${bMs.toFixed(0)} ms)`);
const saved = ((1 - optSize / rawSize) * 100).toFixed(1);
console.log(`\n  → ${saved}% de réduction grâce à l'optimisation.\n`);

// --- Démo tree-shaking ciblée ----------------------------------------------
// Un module exporte 3 fonctions, on n'en importe qu'UNE. Les deux autres
// doivent disparaître du bundle optimisé.
const utils = `
export function used() { return "JE SUIS UTILISÉE"; }
export function deadOne() { return "code mort numéro 1, jamais appelé"; }
export function deadTwo() { return "code mort numéro 2, jamais appelé"; }
`;
const entry = `import { used } from "./utils.js"; console.log(used());`;

const shakeResult = await esbuild.build({
    stdin: { contents: entry, resolveDir: root, sourcefile: "entry.js" },
    bundle: true,
    write: false,
    minify: false,
    treeShaking: true,
    format: "esm",
    logLevel: "silent",
    plugins: [
        {
            name: "virtual-utils",
            setup(build) {
                build.onResolve({ filter: /\.\/utils\.js$/ }, () => ({ path: "utils.js", namespace: "v" }));
                build.onLoad({ filter: /.*/, namespace: "v" }, () => ({ contents: utils }));
            },
        },
    ],
});

console.log("─".repeat(70));
console.log("Tree-shaking ciblé — utils.js exporte 3 fonctions, on importe `used` :");
console.log("─".repeat(70));
const shaken = shakeResult.outputFiles[0].text;
console.log(shaken.trim());
const keptDead = shaken.includes("deadOne") || shaken.includes("deadTwo");
console.log("─".repeat(70));
console.log(
    `\n   deadOne / deadTwo présents dans le bundle ? ${keptDead ? "OUI ❌" : "NON ✅ (secouées hors de l'arbre)"}\n`
);
