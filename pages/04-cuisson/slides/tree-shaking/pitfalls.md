---
layout: basic-title
---

::title::
3 pièges qui cassent tout

::default::

<div class="pit-list">
  <div v-click="1" class="pit-item">
    <lucide-zap class="pit-icon" />
    <div class="pit-text">
      <div class="pit-title">Side effects</div>
      <div class="pit-sub">Barrel files, <code>sideEffects: false</code> mal posé</div>
    </div>
  </div>
  <div v-click="2" class="pit-item">
    <lucide-package-open class="pit-icon" />
    <div class="pit-text">
      <div class="pit-title">Des exports trop gros</div>
      <div class="pit-sub">Objet par défaut, classe : tout ou rien</div>
    </div>
  </div>
  <div v-click="3" class="pit-item">
    <lucide-package-x class="pit-icon" />
    <div class="pit-text">
      <div class="pit-title">Du CJS dans le graphe</div>
      <div class="pit-sub">Config Babel ou <code>tsconfig</code>, dépendance transitive</div>
    </div>
  </div>
</div>

<div v-click="3" class="pit-tip">
  <span class="note-chip"><lucide-search /></span>
  <span>Audite tes dépendances avec <a href="https://github.com/mgechev/is-esm" target="_blank"><code>is-esm</code></a></span>
</div>

<style>
.pit-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 980px;
  margin: 2rem auto 0;
  text-align: left;
}
.pit-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.5rem 1.4rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border: 2px solid var(--theme-color-amber);
}
.pit-icon {
  font-size: 2.4rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
}
.pit-tip {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.7rem 1.1rem;
  background: rgba(81, 138, 184, 0.1);
  --chip: var(--theme-color-steel);
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.pit-tip code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85em;
  color: var(--theme-color-steel);
}
.pit-text {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.pit-title {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  color: var(--theme-color-steel);
  font-size: 1.15rem;
  white-space: nowrap;
}
.pit-sub {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--theme-color-slate);
}
.pit-sub code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85em;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
}
</style>

<!--
[click] Side effects. Le bundler ne retire un module que s'il sait qu'importer ne fait rien. Deux erreurs possibles.
Il ne sait pas, alors il garde : les barrel files (un index.ts qui ré-exporte tout). Testé avec un appel au top-level dans un module : esbuild le garde, Rollup, Rolldown et Webpack le retirent.
Tu lui mens : "sideEffects": false sur un package qui a un polyfill ou du CSS global, et ils disparaissent du bundle (testé avec esbuild et Webpack). Ne mets le flag que s'il est vrai, ou liste les fichiers concernés.

[click] Des exports trop gros. Le tree-shaking retire des exports, pas des méthodes ni des membres d'objet. Une classe de 3 méthodes dont on en appelle une : esbuild, Rollup et Webpack gardent tout. Idem pour `import _ from 'lodash-es'`, 93 KB contre 2,9 KB en import nommé. Règle : exports et imports nommés.

[click] Du CJS dans le graphe, deux causes pour le même effet. Ta config (Babel `modules: 'commonjs'`, tsconfig `"module": "commonjs"`) transforme l'ESM en CJS avant que le bundler le lise. Ou une dépendance en CJS, même transitive : toute la lib est embarquée. is-esm pour auditer.
-->
