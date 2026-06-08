import * as esbuild from "esbuild";
import { writeFileSync, mkdirSync } from "node:fs";
import { visualizer } from "esbuild-visualizer";

// esbuild : « le couteau japonais ».
// Écrit en Go, ultra-rapide, minimaliste. Un seul appel fait le bundling,
// la transpilation JSX, la minification et le tree-shaking.
const outdir = "dist/esbuild";
mkdirSync(outdir, { recursive: true });

const result = await esbuild.build({
    entryPoints: ["src/index.js"],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: "esm",
    splitting: true,
    target: ["es2020"],
    outdir,
    entryNames: "[name].[hash]",
    // Le JSX vit dans des .js : on force le loader. Le CSS importé est bundlé.
    loader: { ".js": "jsx" },
    jsx: "automatic",
    define: { "process.env.NODE_ENV": '"production"' },
    metafile: true,
});

// Retrouve les fichiers de sortie pour générer l'index.html.
const outputs = Object.keys(result.metafile.outputs);
const jsFile = outputs.find((f) => f.endsWith(".js"))?.replace(`${outdir}/`, "");
const cssFile = outputs.find((f) => f.endsWith(".css"))?.replace(`${outdir}/`, "");

const htmlContent = `<!DOCTYPE html>
<html lang="en" data-framework="react">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TodoMVC: React (esbuild)</title>
        ${cssFile ? `<link rel="stylesheet" href="./${cssFile}" />` : ""}
    </head>
    <body>
        <section class="todoapp" id="root"></section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Created by the TodoMVC Team</p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        <script type="module" src="./${jsFile}"></script>
    </body>
</html>
`;

writeFileSync(`${outdir}/index.html`, htmlContent);

// Petit rapport de taille pour les slides (benchmark / analyzer).
console.log(await esbuild.analyzeMetafile(result.metafile));

// ANALYZE=1 -> treemap du bundle (esbuild-visualizer, nourri par le metafile).
// Sortie BRUTE écrite dans public/, embarquée telle quelle dans la slide analyzer.
if (process.env.ANALYZE) {
    const html = await visualizer(result.metafile, {
        title: "TodoMVC React — bundle (esbuild)",
        template: "treemap",
    });
    // Post-traitement pour la slide :
    //  - thème clair (couleurs des slides)
    //  - masque le tooltip + les filtres Include/Exclude
    //  - palette des blocs dans les teintes du design (ambre -> bleu acier)
    const patched = html
        .replace(
            "</head>",
            "<style>" +
                ":root{--background-color:#f9f9f9;--text-color:#434343}" +
                ".tooltip{display:none!important}" +
                ".sidebar,.filters,.module-filters,.module-filter,.size-selectors{display:none!important}" +
                "main{padding-top:8px!important}" +
                ".node text{fill:#434343}" +
                "</style></head>",
        )
        .replace('var ri="#cecece";', 'var ri="#e7e9ee";')
        .replace(
            "i=>Ze(360*i,.3,.85)",
            "i=>Ze(33+i*172,.5,.72)",
        )
        .replace(
            "et().domain([0,e.height]).range([.9,.3])",
            "et().domain([0,e.height]).range([.82,.5])",
        );
    const dir = "../public/assets/captures";
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/bundle-treemap.html`, patched);
    console.log(`\n📊 Treemap -> public/assets/captures/bundle-treemap.html`);
}
