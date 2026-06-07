import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import html, { makeHtmlAttributes } from "@rollup/plugin-html";

// Génère un index.html avec le markup TodoMVC (section #root) + injection
// automatique des bundles JS/CSS produits par Rollup.
const htmlTemplate = ({ attributes, files, meta, publicPath, title }) => {
    const scripts = (files.js || [])
        .map((f) => `<script src="${publicPath}${f.fileName}" type="module"></script>`)
        .join("\n        ");
    const links = (files.css || [])
        .map((f) => `<link href="${publicPath}${f.fileName}" rel="stylesheet">`)
        .join("\n        ");
    const metas = meta.map((m) => `<meta${makeHtmlAttributes(m)}>`).join("\n        ");
    return `<!DOCTYPE html>
<html${makeHtmlAttributes(attributes.html)}>
    <head>
        ${metas}
        <title>${title}</title>
        ${links}
    </head>
    <body>
        <section class="todoapp" id="root"></section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <p>Created by the TodoMVC Team</p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        ${scripts}
    </body>
</html>`;
};

// Rollup : « le couteau du chef ».
// L'inventeur du tree-shaking, taillé pour les ES Modules. Tout est explicite :
// chaque transformation est un plugin qu'on branche soi-même.
export default {
    input: "src/index.js",
    output: {
        dir: "dist/rollup",
        format: "es",
        entryFileNames: "[name].[hash].js",
        sourcemap: true,
    },
    plugins: [
        // React lit process.env.NODE_ENV pour activer son mode prod.
        replace({
            preventAssignment: true,
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        // Transpile le JSX (présent dans des .js) AVANT commonjs, sinon son
        // parser bute sur la syntaxe JSX. On cible notre code source.
        esbuild({
            include: /src\/.*\.[jt]sx?$/,
            loaders: { ".js": "jsx" },
            jsx: "automatic",
            minify: true,
            target: "es2020",
        }),
        // Résout les imports depuis node_modules (conditions de prod).
        nodeResolve({
            extensions: [".js", ".jsx"],
            exportConditions: ["production", "module", "import", "default"],
        }),
        // React & react-dom sont publiés en CommonJS : on les convertit en ESM.
        commonjs(),
        // CSS importé dans le JS -> extrait dans un fichier séparé et minifié.
        postcss({ extract: true, minimize: true }),
        // Génère l'index.html (markup TodoMVC) avec injection du bundle.
        html({ title: "TodoMVC: React (Rollup)", template: htmlTemplate }),
    ],
};
