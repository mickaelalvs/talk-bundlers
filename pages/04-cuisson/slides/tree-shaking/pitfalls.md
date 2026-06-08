---
layout: basic-title
---

::title::
5 pièges qui cassent tout

::default::

<div class="pit-list">
  <div v-click="1" class="pit-item">
    <lucide-zap class="pit-icon" />
    <div class="pit-title">Side effects involontaires</div>
  </div>
  <div v-click="2" class="pit-item">
    <lucide-package-open class="pit-icon" />
    <div class="pit-title">Imports trop larges</div>
  </div>
  <div v-click="3" class="pit-item">
    <lucide-flask-conical class="pit-icon" />
    <div class="pit-title">Mode <code>production</code> absent (Webpack)</div>
  </div>
  <div v-click="4" class="pit-item">
    <lucide-repeat class="pit-icon" />
    <div class="pit-title">Un loader qui reconvertit en CJS</div>
  </div>
  <div v-click="5" class="pit-item">
    <lucide-package-x class="pit-icon" />
    <div class="pit-title">Une dep CJS transitive</div>
  </div>
</div>

<style>
.pit-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 720px;
  margin: 3rem auto 0;
  text-align: left;
}
.pit-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.9rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-amber);
}
.pit-icon {
  font-size: 2rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
}
.pit-title {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  color: var(--theme-color-steel);
  font-size: 1.4rem;
}
.pit-title code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85em;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
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
