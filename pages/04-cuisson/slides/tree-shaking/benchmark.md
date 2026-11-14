---
layout: basic-title
---

::title::
Benchmark : tree-shaking

::default::

<div class="bench-context">
  <span class="note-chip"><lucide-cpu /></span>
  <span><strong>801 modules</strong> · tailles brutes · Apple M3</span>
</div>

<div class="bench-chart ts-chart">
  <div class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/rolldown.svg" class="bench-logo" />
      <div>Rolldown<small>Rust<span v-click="3" class="ts-time"> · 60 ms</span></small></div>
    </div>
    <div class="bench-bar">
      <div class="bench-fill ts-raw" style="--value: 70%"></div>
      <div v-click="1" class="bench-fill ts-after" style="--value: 38%"></div>
    </div>
    <div class="ts-values"><span class="ts-before">2 621 KB</span><span v-click="1" class="bench-time">1 417 KB</span><span v-click="1" class="ts-pct">−46 %</span></div>
  </div>

  <div class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/esbuild.svg" class="bench-logo" />
      <div>esbuild<small>Go<span v-click="3" class="ts-time"> · 85 ms</span></small></div>
    </div>
    <div class="bench-bar">
      <div class="bench-fill ts-raw" style="--value: 54%"></div>
      <div v-click="1" class="bench-fill ts-after" style="--value: 44%"></div>
    </div>
    <div class="ts-values"><span class="ts-before">2 013 KB</span><span v-click="1" class="bench-time">1 654 KB</span><span v-click="1" class="ts-pct">−18 %</span></div>
  </div>

  <div class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/rollup.png" class="bench-logo" />
      <div>Rollup<small>JavaScript<span v-click="3" class="ts-time"> · 1,2 s</span></small></div>
    </div>
    <div class="bench-bar">
      <div class="bench-fill ts-raw" style="--value: 57%"></div>
      <div v-click="1" class="bench-fill ts-after bench-fill-js" style="--value: 46%"></div>
    </div>
    <div class="ts-values"><span class="ts-before">2 147 KB</span><span v-click="1" class="bench-time">1 735 KB</span><span v-click="1" class="ts-pct">−19 %</span></div>
  </div>

  <div class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/webpack.png" class="bench-logo" />
      <div>webpack<small>JavaScript<span v-click="3" class="ts-time"> · 1,6 s</span></small></div>
    </div>
    <div class="bench-bar">
      <div class="bench-fill ts-raw" style="--value: 84%"></div>
      <div v-click="1" class="bench-fill ts-after bench-fill-js" style="--value: 55%"></div>
    </div>
    <div class="ts-values"><span class="ts-before">3 161 KB</span><span v-click="1" class="bench-time">2 064 KB</span><span v-click="1" class="ts-pct">−35 %</span></div>
  </div>

  <div class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/rspack.svg" class="bench-logo" />
      <div>Rspack<small>Rust<span v-click="3" class="ts-time"> · 92 ms</span></small></div>
    </div>
    <div class="bench-bar">
      <div class="bench-fill ts-raw" style="--value: 100%"></div>
      <div v-click="1" class="bench-fill ts-after" style="--value: 81%"></div>
    </div>
    <div class="ts-values"><span class="ts-before">3 754 KB</span><span v-click="1" class="bench-time">3 038 KB</span><span v-click="1" class="ts-pct">−19 %</span></div>
  </div>
</div>

<div class="ts-footer">
<div class="bench-note">Gris : sans tree-shaking · plein : avec tree-shaking</div>
<div class="ts-messages">
  <div v-click="2" class="ts-slot">
    <div v-click.hide="3" class="ts-message">
      <span class="note-chip" style="--chip: var(--theme-color-steel)"><lucide-timer /></span>
      <span>Le tree-shaking coûte <strong>moins de 0,2 s</strong> au build</span>
    </div>
  </div>
  <div v-click="3" class="ts-slot">
    <div class="ts-message">
      <span class="note-chip" style="--chip: var(--theme-color-steel)"><lucide-scale /></span>
      <span>Vitesse ou précision : <strong>souvent un compromis</strong>, sauf pour Rolldown</span>
    </div>
  </div>
</div>
</div>

<div class="bench-source">Source : test sur TodoMVC</div>

<style>
.ts-chart {
  gap: 1rem;
}
.ts-chart .bench-row {
  grid-template-columns: 190px 1fr 250px;
}
.ts-chart .bench-bar {
  position: relative;
}
.ts-raw {
  background: rgba(159, 169, 185, 0.45);
}
.ts-after {
  position: absolute;
  top: 0;
  left: 0;
}
.ts-values {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
}
.ts-before {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-slate);
}
.ts-pct {
  font-family: "Paytone One", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-olive-dark);
}
.ts-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ts-messages {
  display: grid;
}
.ts-slot {
  grid-area: 1 / 1;
  display: flex;
  justify-content: center;
}
.ts-time {
  font-family: "Nunito", sans-serif;
  color: var(--theme-color-steel);
  font-weight: 700;
}
.ts-message {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 1.25rem auto 0;
  padding: 0.7rem 1.1rem;
  background: rgba(81, 138, 184, 0.1);
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.ts-message strong {
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
  color: var(--theme-color-steel);
}
</style>

<!--
App TodoMVC copiée 100 fois : 801 fichiers sources, plus React. Build de prod, médiane de 5 runs, Apple M3. Chiffres : `pnpm benchmark:phases`.

[click] Gris : sans tree-shaking. Plein : avec. Compare chaque ligne à elle-même, pas les barres grises entre elles, parce que "sans" ne veut pas dire "même entrée". Chaque outil a son transpileur JSX, Webpack coupe aussi d'autres optimisations dans ce build, et React (en CJS) est géré différemment. Rolldown retire presque la moitié (-46 %), webpack -35 %, les trois autres -18 à -19 %. Webpack et Rspack paraissent gros parce qu'ils marquent le code mort et qu'une étape plus tardive finit le travail (webpack : 651 KB après Terser). Ne pas détailler, la minification vient plus loin.

[click] Le coût : moins de 0,2 s. Le tree-shaking ne ralentit pas un build.

[click] Vitesse ou précision, souvent un compromis. esbuild (85 ms) est prudent sur les cas tordus : il garde un module ré-exporté dont il ne prouve pas la pureté, alors que Rollup (1,2 s), Rolldown et Webpack le retirent. Rolldown (60 ms) fait les deux, c'est l'exception. Rspack n'est pas testé sur ce cas.

Transition : code splitting.
-->
