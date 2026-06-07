import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { gzipSync } from "node:zlib";
import * as esbuild from "esbuild";

// ===========================================================================
// PHASE 5 — TREE-SHAKING : lodash (CJS) vs lodash-es (ESM)
//
// Même import logique : on ne veut QUE `debounce`.
//   A) `import { debounce } from "lodash"`     → package CommonJS
//   B) `import { debounce } from "lodash-es"`  → package ESM
//
// On bundle les deux entrées avec la MÊME config esbuild (bundle + minify +
// format esm + production) et on compare la taille du bundle final.
//
// lodash (CJS) n'expose pas de structure statique analysable : esbuild ne
// peut pas secouer l'arbre et embarque la quasi-totalité du package.
// lodash-es (ESM) expose des modules statiques : seules les fonctions
// réellement atteintes par `debounce` survivent.
// ===========================================================================

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const common = {
    bundle: true,
    write: false,
    minify: true,
    treeShaking: true,
    format: "esm",
    platform: "browser",
    define: { "process.env.NODE_ENV": '"production"' },
    logLevel: "silent",
};

async function measure(pkg) {
    const entry = `import { debounce } from "${pkg}";\nwindow.fn = debounce(() => {}, 200);\n`;
    const result = await esbuild.build({
        ...common,
        stdin: { contents: entry, resolveDir: root, sourcefile: "entry.js" },
    });
    const js = result.outputFiles[0].contents;
    return { raw: js.byteLength, gzip: gzipSync(js).byteLength };
}

const lodash = await measure("lodash");
const lodashEs = await measure("lodash-es");

const fmt = (n) => `${(n / 1024).toFixed(1)} KB`;
const ratio = (lodash.raw / lodashEs.raw).toFixed(1);
const ratioGz = (lodash.gzip / lodashEs.gzip).toFixed(1);

console.log("\n🌳 PHASE 5 — Tree-shaking : import { debounce }\n");
console.log("Même fonction, deux packages, même config esbuild (bundle + minify) :\n");
console.log(`  lodash     (CJS)   ${fmt(lodash.raw).padStart(9)}   (${fmt(lodash.gzip)} gzip)`);
console.log(`  lodash-es  (ESM)   ${fmt(lodashEs.raw).padStart(9)}   (${fmt(lodashEs.gzip)} gzip)`);
console.log(`\n  → lodash-es est ~${ratio}× plus léger en brut (~${ratioGz}× en gzip).`);
console.log(`  → lodash (CJS) n'est pas analysable statiquement : tout le package est embarqué.\n`);

console.log(
    JSON.stringify(
        {
            lodash: { rawBytes: lodash.raw, gzipBytes: lodash.gzip },
            lodashEs: { rawBytes: lodashEs.raw, gzipBytes: lodashEs.gzip },
            ratioRaw: Number(ratio),
            ratioGzip: Number(ratioGz),
        },
        null,
        2
    )
);
