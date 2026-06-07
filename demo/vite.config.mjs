import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite : « la plancha express ».
// - Dev : sert les modules ES natifs, pré-bundle les deps avec esbuild.
// - Build : délègue à Rollup pour le bundle de prod (tree-shaking agressif).
//
// L'entrée HTML pointe vers src/main.vite.jsx (le JSX doit être dans un .jsx
// pour que Vite le transpile à temps). @vitejs/plugin-react gère le reste :
// transformation JSX + React Fast Refresh en dev.
export default defineConfig({
    root: __dirname,
    plugins: [react()],
    build: {
        outDir: "dist/vite",
        emptyOutDir: true,
        sourcemap: true,
    },
});
