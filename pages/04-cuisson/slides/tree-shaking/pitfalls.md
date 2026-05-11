---
layout: basic-title
---

::title::
5 pièges qui cassent tout

::default::

<div class="pit-list">

  <div v-click="1" class="pit-item">
    <div class="pit-num">①</div>
    <div class="pit-body">
      <div class="pit-title">Side effects involontaires</div>
      <div class="pit-desc">
        Du code qui s'exécute au top-level d'un module
        (<code>window.x = ...</code>, polyfill enregistré, CSS importé).
        Le bundler ne peut pas le supprimer.
      </div>
    </div>
  </div>

  <div v-click="2" class="pit-item">
    <div class="pit-num">②</div>
    <div class="pit-body">
      <div class="pit-title">Imports trop larges</div>
      <div class="pit-desc">
        <code>import _ from 'lodash'</code> importe l'API entière. Préférer
        <code>import &#123; debounce &#125; from 'lodash-es'</code>.
      </div>
    </div>
  </div>

  <div v-click="3" class="pit-item">
    <div class="pit-num">③</div>
    <div class="pit-body">
      <div class="pit-title">Mode <code>production</code> absent (sur Webpack)</div>
      <div class="pit-desc">
        Webpack <em>marque</em> mais ne supprime pas tant que Terser ne tourne
        pas. Rollup et esbuild suppriment direct pendant le bundling.
      </div>
    </div>
  </div>

  <div v-click="4" class="pit-item">
    <div class="pit-num">④</div>
    <div class="pit-body">
      <div class="pit-title">Un loader qui convertit ESM en CJS</div>
      <div class="pit-desc">
        Babel mal configuré peut aplatir ton ESM en CJS pendant la phase
        loader, avant le tree-shaking. Le bundler voit du CJS, abandonne.
        <em>(cf. partie 3 sur les loaders)</em>
      </div>
    </div>
  </div>

  <div v-click="5" class="pit-item">
    <div class="pit-num">⑤</div>
    <div class="pit-body">
      <div class="pit-title">Une dep CJS dans tes <code>node_modules</code></div>
      <div class="pit-desc">
        Ton code peut être 100% ESM nickel, une seule lib CJS transitive
        suffit à pourrir l'optimisation. Audit avec
        <a href="https://github.com/mgechev/is-esm" target="_blank"><code>is-esm</code></a>.
      </div>
    </div>
  </div>

</div>

<style>
.pit-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}
.pit-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.6rem 1.1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-amber);
}
.pit-num {
  font-family: "Paytone One", sans-serif;
  font-size: 1.7rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
  line-height: 1;
}
.pit-body {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.pit-title {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-size: 1.05rem;
}
.pit-title code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.9em;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
}
.pit-desc {
  font-family: "Nunito", sans-serif;
  font-size: 0.88rem;
  color: var(--theme-color-charcoal);
  line-height: 1.45;
}
.pit-desc a {
  color: var(--theme-color-amber);
  text-decoration: underline;
}
.pit-desc em {
  color: var(--theme-color-amber);
  font-style: italic;
}
.pit-desc code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.88em;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
}
.pit-desc em {
  color: var(--theme-color-amber);
  font-style: italic;
}
</style>

<!--
[click 1] Side effects : le piège classique. Un module qui modifie window,
qui register un plugin, qui importe du CSS. Le bundler doit garder le module
même si tu n'utilises rien de son export.

[click 2] Imports larges : import _ from 'lodash' importe le default qui
contient toute l'API. Faire des imports nommés depuis lodash-es.

[click 3] Mode production (cas Webpack) : Webpack marque les exports comme
inutilisés mais ne les supprime PAS tant que Terser ne tourne pas (en mode
production). En dev, le code mort reste dans le bundle.

Nuance importante : Rollup et esbuild, eux, suppriment directement pendant
le bundling, même sans minification. C'est pour ça que Vite (qui utilise
Rollup en prod) ne souffre pas de ce problème.

[click 4] Loader qui produit du CJS : Babel mal configuré (modules: 'commonjs'
ou 'auto') aplatit l'ESM dans la phase loader.

Pipeline réelle :
  1. Entry point
  2. BOUCLE : loaders + parse + découverte d'imports (le graphe se construit
     incrémentalement, pas comme une étape séparée après les loaders)
  3. Tree-shaking sur le graphe complet
  4. Code splitting
  5. Minification
  6. Émission du bundle

Donc si à l'étape 2.a (loader) Babel produit du CJS, à l'étape 2.b (parse)
le bundler voit du require() au lieu d'import. Le graphe se construit avec
du CJS, et l'étape 3 (tree-shaking) abandonne.

Les loaders font partie du bundler, mais tournent dans la première phase.
Cross-ref direct avec la partie 3 (transpilation, loaders).

[click 5] Dep CJS transitive : ton code peut être ESM impeccable, mais si
une lib que tu importes (ou une de ses sous-deps) est en CJS, le bundler
inclut TOUT cette lib sans pouvoir tree-shaker. Outil pour auditer : is-esm
(github.com/mgechev/is-esm).
-->
