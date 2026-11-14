---
layout: basic-title
align: left
padding: p-0
transition: slide-left
---

::title::
Le plat est servi

::subtitle::
Qu'est-ce qui pèse dans l'assiette ?

::default::

<iframe class="ana-frame" src="/assets/captures/bundle-treemap.html" title="Treemap du bundle TodoMVC (esbuild-visualizer)" loading="lazy"></iframe>

<style>
.ana-frame {
  flex: 1;
}
</style>

<!--
Une treemap du bundle TodoMVC, générée par esbuild-visualizer. Chaque rectangle est un module, sa taille est son poids.

Ici, react-dom domine largement. Le code de l'app est minuscule à côté.

Sur un vrai projet, c'est là qu'on découvre une lib embarquée en entier par erreur (moment, lodash en CJS).

Les équivalents : rollup-plugin-visualizer (Vite, Rollup), webpack-bundle-analyzer, source-map-explorer.

Pour régénérer la treemap (dans demo/) : `ANALYZE=1 pnpm build:esbuild`, qui écrit public/assets/captures/bundle-treemap.html.
-->
