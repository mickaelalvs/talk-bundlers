---
layout: basic-title
---

::title::
Benchmark : résolution

::default::

<div class="bench-context">
  <span class="note-chip"><lucide-cpu /></span>
  <span><strong>2 302 imports</strong> · Apple M3</span>
</div>

<div class="bench-chart">
  <div v-click="1" class="bench-row transition">
    <div class="bench-label">
      <img src="/assets/images/logos/webpack.png" class="bench-logo" />
      <div>enhanced-resolve<small>webpack · JavaScript</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill bench-fill-js" style="--value: 100%"></div></div>
    <span class="bench-time">113 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-200">
    <div class="bench-label">
      <img src="/assets/images/logos/oxc.svg" class="bench-logo" />
      <div>oxc-resolver<small>Rolldown, Vite 8 · Rust</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 29%"></div></div>
    <span class="bench-time">33 ms</span>
  </div>
</div>

<div v-click="2" class="res-message">
  <span class="note-chip" style="--chip: var(--theme-color-steel)"><lucide-info /></span>
  <span>Le problème vient rarement d'ici ...</span>
</div>

<div class="bench-source">Source : test sur TodoMVC</div>

<style>
.res-message {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.7rem 1.1rem;
  background: rgba(81, 138, 184, 0.1);
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.res-message strong {
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
  color: var(--theme-color-steel);
}
</style>

<!--
Mesuré avec demo/phases/bundler-benchmark.mjs : les 2 302 imports de l'app TodoMVC
dupliquée ×100 (801 modules) + React, react-dom et react-router-dom, résolus un par un
avec les mêmes options (extensions, conditions import/module/browser).
Un processus neuf par run, médiane de 5 runs sur Apple M3.
Versions : enhanced-resolve 5.27, oxc-resolver 11.24.

[click] Les deux barres arrivent l'une après l'autre.
enhanced-resolve : le résolveur de webpack, en JS. 113 ms pour 2 302 imports.
oxc-resolver : en Rust, ~3,4× plus rapide. C'est celui de Rolldown, donc de Vite 8.
Rspack utilise un fork (rspack-resolver).

[click] Mais attention : on parle de dizaines de millisecondes. Sur un vrai projet,
la résolution est rarement ce qui ralentit le build.
-->
