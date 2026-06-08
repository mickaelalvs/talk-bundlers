---
layout: basic-title
align: left
padding: p-0
---

::title::
Bundle analyzer : voir ce qui pèse vraiment

::default::

<iframe class="ana-frame" src="/assets/captures/bundle-treemap.html" title="Treemap du bundle TodoMVC (esbuild-visualizer)" loading="lazy"></iframe>

<style>
.ana-frame {
  flex: 1;
}
</style>

<!--
La visualisation qui fait toujours réagir l'audience.
Les outils :
  - esbuild-visualizer / esbuild.github.io/analyze (esbuild, via metafile)
  - rollup-plugin-visualizer (Vite, Rollup)
  - webpack-bundle-analyzer (Webpack)
  - source-map-explorer (universel, depuis source maps)

La treemap embarquée (<iframe>) est la sortie d'esbuild-visualizer
(nourri par le metafile esbuild) du demo TodoMVC, en thème clair.
Pour la régénérer (dans demo/) :
  `ANALYZE=1 pnpm build:esbuild`
  -> écrit public/assets/captures/bundle-treemap.html

Sur ce projet, pas de surprise « lodash » : c'est react-dom qui domine
(react-dom-client.production.js), devant le chunk react-router puis
react.production.js. Le code applicatif (src/) est minuscule à côté du runtime
React. À l'oral, le point qui marque : sur un vrai projet, on découvre souvent
des libs entières embarquées par erreur (moment, lodash en CJS…) — l'analyzer
est là pour les débusquer.
-->
