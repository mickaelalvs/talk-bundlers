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

<div class="ana-treemap">
  <div class="ana-row ana-row-1">
    <div class="ana-cell ana-cell-lodash">
      <div class="ana-name">lodash</div>
      <div class="ana-size">~35%</div>
    </div>
    <div class="ana-col">
      <div class="ana-cell ana-cell-react">
        <div class="ana-name">react</div>
        <div class="ana-size">~18%</div>
      </div>
      <div class="ana-cell ana-cell-react-dom">
        <div class="ana-name">react-dom</div>
        <div class="ana-size">~12%</div>
      </div>
    </div>
  </div>
  <div class="ana-row ana-row-2">
    <div class="ana-cell ana-cell-moment">
      <div class="ana-name">moment</div>
      <div class="ana-size">~10%</div>
    </div>
    <div class="ana-cell ana-cell-utils">
      <div class="ana-name">app/utils</div>
      <div class="ana-size">~8%</div>
    </div>
    <div class="ana-cell ana-cell-rest">
      <div class="ana-name">autres</div>
      <div class="ana-size">~17%</div>
    </div>
  </div>
</div>

<div class="ana-note">
  ⚠ placeholder, à remplacer par une vraie capture (rollup-plugin-visualizer / webpack-bundle-analyzer)
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
.ana-treemap {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 720px;
  height: 240px;
  margin: 0 auto;
  padding: 4px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.ana-row {
  display: flex;
  gap: 4px;
}
.ana-row-1 {
  flex: 1.7;
}
.ana-row-2 {
  flex: 1;
}
.ana-col {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}
.ana-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  border-radius: 4px;
  padding: 0.3rem;
  color: white;
  font-family: "Paytone One", sans-serif;
  text-align: center;
}
.ana-name {
  font-size: 0.85rem;
}
.ana-size {
  font-size: 0.7rem;
  opacity: 0.85;
}
.ana-cell-lodash {
  background: #8E24AA;
  flex: 1.8;
}
.ana-cell-react {
  background: #1976D2;
  flex: 1.2;
}
.ana-cell-react-dom {
  background: #42A5F5;
  flex: 0.8;
}
.ana-cell-moment {
  background: #D84315;
  flex: 1.2;
}
.ana-cell-utils {
  background: #43A047;
  flex: 0.9;
}
.ana-cell-rest {
  background: #9FA9B9;
  flex: 1.8;
}
.ana-note {
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
</style>

<!--
La visualisation qui fait toujours réagir l'audience.
Les outils :
  - rollup-plugin-visualizer (Vite, Rollup)
  - webpack-bundle-analyzer (Webpack)
  - source-map-explorer (universel, depuis source maps)
  - parcel-bundle-analyzer (Parcel)

À l'oral, montrer un treemap d'un vrai projet : les gens voient toujours
des surprises, surtout pour lodash, moment, voire des libs intégrées par
erreur en entier.

TODO : remplacer le placeholder CSS par une vraie capture (ou GIF/screenshot
d'un projet existant, idéalement le repo du talk lui-même).
-->
