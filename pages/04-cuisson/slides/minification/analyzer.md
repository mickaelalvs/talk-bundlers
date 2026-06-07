---
layout: basic-title
---

::title::
Bundle analyzer : voir ce qui pèse vraiment

::default::

<div class="ana-intro">
Une fois la minification faite, comment savoir ce qui occupe encore de la place ?
Un <strong>visualiseur de bundle</strong> dessine une <strong>treemap</strong>
où la surface = le poids dans le bundle final.
</div>

<div class="ana-frame">
  <iframe src="/assets/captures/bundle-treemap.html" title="Treemap du bundle TodoMVC (esbuild-visualizer)" loading="lazy"></iframe>
</div>

<style>
.ana-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  margin-bottom: 1.2rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.ana-intro strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.ana-frame {
  width: 100%;
  height: 350px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
}
.ana-frame iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.ana-legend {
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
.ana-legend strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.ana-legend code {
  font-family: "Fira Code", monospace;
  font-size: 0.78rem;
  background: rgba(0, 0, 0, 0.06);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
}
</style>

<!--
La visualisation qui fait toujours réagir l'audience.
Les outils :
  - esbuild-visualizer / esbuild.github.io/analyze (esbuild, via metafile)
  - rollup-plugin-visualizer (Vite, Rollup)
  - webpack-bundle-analyzer (Webpack)
  - source-map-explorer (universel, depuis source maps)

La treemap embarquée (<iframe>) est la sortie BRUTE d'esbuild-visualizer
(nourri par le metafile esbuild) du demo TodoMVC, embarquée telle quelle.
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
