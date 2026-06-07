---
layout: basic-title
---

::title::
Et les imports dynamiques ?

::default::

<div class="dyn-intro">
L'ESM peut aussi être dynamique avec <code>import()</code>.<br />
Plus c'est dynamique, moins le bundler peut optimiser.
</div>

<div class="dyn-cases">

  <div v-click="1" class="dyn-case dyn-case-good">
    <div class="dyn-tag dyn-tag-good">statique ✓</div>
    <div class="dyn-code">

<MacWindow title="router.js">

```js
import('./Dashboard')
// React.lazy(() => import('./Comp'))
```

</MacWindow>

</div>
    <div class="dyn-explain">
      Le chemin est connu au build : le bundler crée un <strong>chunk séparé</strong>,
      tree-shaké comme le reste. À l'exécution, il est chargé à la demande.
    </div>
  </div>

  <div v-click="2" class="dyn-case dyn-case-warn">
    <div class="dyn-tag dyn-tag-warn">avec variable ⚠️</div>
    <div class="dyn-code">

<MacWindow title="i18n.js">

```js
import(`./locales/${lang}.js`)
```

</MacWindow>

</div>
    <div class="dyn-explain">
      Le bundler ne sait pas quel <code>lang</code>, alors il <strong>bundle tout
      ce qui matche</strong> le pattern. Plus de tree-shaking sur ce groupe.
    </div>
  </div>

  <div v-click="3" class="dyn-case dyn-case-bad">
    <div class="dyn-tag dyn-tag-bad">opaque ✗</div>
    <div class="dyn-code">

<MacWindow title="loader.js">

```js
const path = getPath()
import(path)
```

</MacWindow>

</div>
    <div class="dyn-explain">
      Le bundler ne peut rien deviner. <strong>Il abandonne</strong> ou prend tout.
      Souvent : warning au build et chargement à l'exécution sans chunk.
    </div>
  </div>

</div>

<style scoped>
.dyn-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  margin-bottom: 1.2rem;
}
.dyn-intro code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  color: var(--theme-color-steel);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
.dyn-cases {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}
.dyn-case {
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-rows: auto auto;
  gap: 0.4rem 1rem;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border-left: 4px solid;
  background: rgba(255, 255, 255, 0.6);
  text-align: left;
}
.dyn-case-good {
  border-color: #4caf50;
}
.dyn-case-warn {
  border-color: var(--theme-color-amber);
}
.dyn-case-bad {
  border-color: #ef5350;
}
.dyn-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-align: center;
  align-self: start;
}
.dyn-tag-good {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
}
.dyn-tag-warn {
  background: rgba(219, 153, 77, 0.2);
  color: #b35900;
}
.dyn-tag-bad {
  background: rgba(239, 83, 80, 0.18);
  color: #c0392b;
}
.dyn-code {
  align-self: start;
}
.dyn-code :deep(.mac-window) {
  min-width: 0;
}
.dyn-code :deep(.mac-body) {
  padding: 0.4rem 0.7rem;
}
.dyn-code :deep(pre) {
  margin: 0;
  padding: 0 !important;
}
.dyn-explain {
  grid-column: 2;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
  line-height: 1.45;
}
.dyn-explain strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.dyn-explain code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
}
</style>

<!--
La règle de base : plus c'est dynamique, moins le bundler peut optimiser.

[click 1] Cas statique : le chemin est une string literal. Le bundler crée
un chunk séparé (code splitting), tree-shaking reste possible. C'est le bon
usage : React.lazy, route-based splitting, etc.

[click 2] Variable dans un template : le bundler matche un pattern et bundle
TOUT ce qui matche. Pas de tree-shaking sur ces fichiers, mais au moins ils
sont dans des chunks séparés.

[click 3] Variable opaque : le bundler ne peut rien faire. Webpack émet un
warning, esbuild plante souvent. Le contenu doit être chargé à l'exécution
sans bundling, ce qui casse le modèle.

Cross-ref code splitting (sous-bloc suivant) : import() est aussi le mécanisme
principal pour faire du code splitting.
-->
