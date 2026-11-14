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
```

</MacWindow>

</div>
    <div class="dyn-explain">
      Le chemin est connu au build. Le bundler <strong>suit l'import</strong>
      et tree-shake le module comme les autres.
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
      Le bundler ignore la valeur de <code>lang</code>. Il <strong>bundle tout
      ce qui matche</strong> le pattern, sans tree-shaking.
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
      Le bundler ne peut rien deviner. <strong>Il abandonne</strong>.
      Aucun fichier n'est embarqué pour cet import.
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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
  align-items: stretch;
}
.dyn-case {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.9rem 1rem;
  border-radius: 10px;
  border: 2px solid;
  background: rgba(255, 255, 255, 0.6);
  text-align: left;
}
.dyn-case-good {
  border-color: var(--theme-color-olive);
}
.dyn-case-warn {
  border-color: var(--theme-color-amber);
}
.dyn-case-bad {
  border-color: var(--theme-color-raspberry);
}
.dyn-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-align: center;
  align-self: flex-start;
}
.dyn-tag-good {
  background: rgba(138, 154, 75, 0.18);
  color: var(--theme-color-olive-dark);
}
.dyn-tag-warn {
  background: rgba(219, 153, 77, 0.2);
  color: var(--theme-color-charcoal);
}
.dyn-tag-bad {
  background: rgba(196, 81, 92, 0.18);
  color: var(--theme-color-raspberry-dark);
}
.dyn-code {
  align-self: stretch;
}
.dyn-code :deep(.mac-window) {
  min-width: 0;
  width: 100%;
}
.dyn-code :deep(.mac-body) {
  padding: 0.4rem 0.7rem;
}
.dyn-code :deep(pre) {
  margin: 0;
  padding: 0 !important;
}
.dyn-explain {
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
Plus c'est dynamique, moins le bundler peut optimiser, même en ESM.

[click] Chemin littéral : le bundler sait quel module est visé, le tree-shaking reste possible. C'est le bon usage (React.lazy, routes).

[click] Variable dans un template : il bundle tout ce qui matche le pattern, sans tree-shaking. Testé : esbuild et Webpack le font, Rollup et Rolldown nus non (il faut un plugin).

[click] Variable opaque : il abandonne, rien n'est embarqué. Webpack émet un warning et ça plante à l'exécution, les autres laissent `import(path)` tel quel.

Ne pas parler de chunks ici, la notion arrive en code splitting.
-->
