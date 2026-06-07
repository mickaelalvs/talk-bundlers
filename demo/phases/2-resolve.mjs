import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";
import * as esbuild from "esbuild";

// ===========================================================================
// PHASE 2 — RÉSOLUTION DE MODULES (isolée… autant que possible)
//
// La résolution ne tourne jamais « seule » : pour savoir ce qu'un fichier
// importe, il faut d'abord le parser. Ce qu'on PEUT isoler, c'est son
// ARTEFACT : le graphe de dépendances. On demande à esbuild de construire le
// graphe (metafile) SANS écrire de bundle (write:false), puis on l'affiche :
// chaque import (« lait », « œufs »…) résolu vers un chemin de fichier concret.
// ===========================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const ENTRY = join(root, "src", "index.js");

const start = performance.now();
const result = await esbuild.build({
    entryPoints: [ENTRY],
    bundle: true,
    write: false, // ← on ne produit AUCUN fichier : seul le graphe nous intéresse
    metafile: true,
    loader: { ".js": "jsx", ".css": "css" },
    outdir: "dist/_phase-resolve", // requis par esbuild même si write:false
    jsx: "automatic",
    logLevel: "silent",
});
const elapsed = performance.now() - start;

const inputs = result.metafile.inputs;

// Sépare le code de l'app (src/) des dépendances (node_modules).
const appFiles = [];
const deps = new Set();
for (const file of Object.keys(inputs)) {
    if (file.includes("node_modules")) {
        // Récupère le nom du package (ex: react, react-dom, classnames).
        const m = file.match(/node_modules\/(?:\.pnpm\/[^/]+\/node_modules\/)?((?:@[^/]+\/)?[^/]+)/);
        if (m) deps.add(m[1]);
    } else {
        appFiles.push(file);
    }
}

console.log("\n🧩 PHASE 2 — Résolution de modules\n");
console.log(`Entrée : ${relative(root, ENTRY)}\n`);

console.log("Graphe résolu — fichiers de l'app (chaque import → un chemin) :\n");
for (const file of appFiles.sort()) {
    const imports = inputs[file].imports
        .filter((i) => !i.path.includes("node_modules"))
        .map((i) => relative(root, i.path));
    console.log(`  📄 ${relative(root, file)}`);
    for (const imp of imports) {
        console.log(`        └─ import → ${imp}`);
    }
}

console.log("\nDépendances externes résolues (node_modules) :\n");
for (const dep of [...deps].sort()) {
    console.log(`  📦 ${dep}`);
}

console.log(
    `\n📊 ${appFiles.length} fichiers de l'app + ${deps.size} packages externes` +
        `\n⏱  graphe construit en ${elapsed.toFixed(1)} ms (aucun fichier écrit)\n`
);
