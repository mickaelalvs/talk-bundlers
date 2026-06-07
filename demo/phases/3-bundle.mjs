import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import * as esbuild from "esbuild";

// ===========================================================================
// PHASE 3 — BUNDLING (isolé : concaténation brute, sans optimisation)
//
// Une fois le graphe résolu et les fichiers transpilés, le bundler fait le
// geste le plus simple : tout assembler dans un seul fichier. Ici on désactive
// TOUT le reste (minify:false, treeShaking:false) pour voir le bundle « brut » :
// le code de tous les modules, concaténé, encore lisible. C'est « tout dans la
// même casserole » de la slide cuisson.
// ===========================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const ENTRY = join(root, "src", "index.js");

const start = performance.now();
const result = await esbuild.build({
    entryPoints: [ENTRY],
    bundle: true, // ← on assemble…
    write: false,
    minify: false, // …mais sans minifier
    treeShaking: false, // …sans tree-shaking
    format: "esm",
    loader: { ".js": "jsx", ".css": "css" },
    outdir: "dist/_phase-bundle", // requis par esbuild même si write:false
    jsx: "automatic",
    define: { "process.env.NODE_ENV": '"development"' },
    logLevel: "silent",
});
const elapsed = performance.now() - start;

const output = result.outputFiles.find((f) => f.path.endsWith(".js"));
const text = output.text;
const lines = text.split("\n");

console.log("\n🍲 PHASE 3 — Bundling (concaténation brute, sans optimisation)\n");
console.log(`Taille du bundle brut : ${(output.contents.byteLength / 1024).toFixed(1)} KB`);
console.log(`Nombre de lignes      : ${lines.length}`);
console.log(`Construit en          : ${elapsed.toFixed(1)} ms\n`);

console.log("─".repeat(70));
console.log("Aperçu — 40 premières lignes du bundle (lisible, non minifié) :");
console.log("─".repeat(70));
console.log(lines.slice(0, 40).join("\n"));
console.log("─".repeat(70));

// Montre les frontières de modules : esbuild annote chaque fichier concaténé.
const moduleMarkers = lines
    .map((l, i) => ({ l, i }))
    .filter(({ l }) => /^\/\/ (src\/|node_modules\/)/.test(l.trim()));
console.log(`\n🔖 Frontières de modules dans le bundle (commentaires "// chemin") :\n`);
for (const { l, i } of moduleMarkers.slice(0, 15)) {
    console.log(`   ligne ${String(i + 1).padStart(5)} : ${l.trim()}`);
}
console.log(
    `\n   → ${moduleMarkers.length} modules concaténés dans UN seul fichier.` +
        `\n   Tout est là, y compris le code mort : c'est le rôle de la phase 4` +
        `\n   (tree-shaking + minification) de nettoyer.\n`
);
