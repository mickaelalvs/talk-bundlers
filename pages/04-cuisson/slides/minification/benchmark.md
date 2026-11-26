---
layout: basic-title
---

::title::
Benchmark : minification

::default::

<div class="bench-context">
  <span class="note-chip"><lucide-cpu /></span>
  <span><strong>Même bundle de 1,6 Mo</strong> · Apple M3</span>
</div>

<div class="bench-chart">
  <div v-click="1" class="bench-row transition">
    <div class="bench-label">
      <lucide-minimize-2 class="bench-icon" />
      <div>Terser<small>webpack, Rollup · JavaScript</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill bench-fill-js" style="--value: 100%"></div></div>
    <span class="bench-time">1,5 s</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-200">
    <div class="bench-label">
      <img src="/assets/images/logos/swc.svg" class="bench-logo" />
      <div>SWC<small>Rspack, Next.js · Rust</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 9%"></div></div>
    <span class="bench-time">130 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-500">
    <div class="bench-label">
      <img src="/assets/images/logos/esbuild.svg" class="bench-logo" />
      <div>esbuild<small>Vite 6 · Go</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 5%"></div></div>
    <span class="bench-time">77 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-700">
    <div class="bench-label">
      <img src="/assets/images/logos/oxc.svg" class="bench-logo" />
      <div>Oxc<small>Rolldown, Vite 8 · Rust</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 2.5%"></div></div>
    <span class="bench-time">36 ms</span>
  </div>
</div>

<div v-click="2" class="min-same">
  <span class="note-chip" style="--chip: var(--theme-color-olive)"><lucide-check /></span>
  <span>Résultat quasi identique : <strong>105 à 110 KB</strong> en gzip, quel que soit l'outil</span>
</div>

<div class="bench-source">Source : test sur TodoMVC</div>

<style scoped>
.bench-context {
  margin-top: 2rem;
}
.bench-chart {
  padding-top: 2.25rem;
}
.min-same {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.7rem 1.1rem;
  background: rgba(138, 154, 75, 0.1);
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.min-same strong {
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
  color: var(--theme-color-olive-dark);
}
</style>

<!--
Mesuré avec demo/phases/bundler-benchmark.mjs : le même bundle tree-shaké mais non
minifié (1654 KB, produit par esbuild) passé à chaque minifieur appelé depuis Node.
Un processus neuf par run, médiane de 5 runs sur Apple M3. Le temps inclut le chargement
de l'outil. Versions : Terser 5.51, SWC 1.15, esbuild 0.24, Oxc 0.158.

[click] Les quatre barres arrivent l'une après l'autre.
Terser : le standard historique, écrit en JS. 1,5 s.
Les trois autres, en Go ou Rust : 36 à 130 ms. Oxc est ~40× plus rapide que Terser,
esbuild ~20×, SWC ~12×.

[click] Et le résultat est le même : entre 105 KB (SWC) et 110 KB (esbuild) en gzip.
On ne choisit pas un minifieur pour la taille, mais pour le temps de build.

Dans un build webpack ou Rollup, Terser pèse autant que tout le reste du build
(1,9 s sur 3,5 s pour webpack).

Le code minifié devient illisible. On en reparle en partie 06 avec les source maps, qui font le pont entre dev et prod.
-->
