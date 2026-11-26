---
layout: basic-title
transition: slide-left
---

::title::
Le plat est servi

::subtitle::
Benchmark : build de production

::default::

<div class="bench-context">
  <span class="note-chip"><lucide-cpu /></span>
  <span><strong>801 modules</strong> · chaque outil avec sa chaîne habituelle · Apple M3</span>
</div>

<div class="bench-chart bp-chart">
  <div v-click="1" class="bench-row transition">
    <div class="bench-label">
      <img src="/assets/images/logos/webpack.png" class="bench-logo" />
      <div>webpack<small>JS + Babel + Terser</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill bench-fill-js" style="--value: 100%"></div></div>
    <span class="bench-time">3,49 s</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-200">
    <div class="bench-label">
      <img src="/assets/images/logos/rollup.png" class="bench-logo" />
      <div>Rollup<small>JS + Terser</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill bench-fill-js" style="--value: 68%"></div></div>
    <span class="bench-time">2,38 s</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-400">
    <div class="bench-label">
      <img src="/assets/images/logos/vite.svg" class="bench-logo" />
      <div>Vite 6<small>Rollup + esbuild</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill bench-fill-js" style="--value: 28%"></div></div>
    <span class="bench-time">966 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-600">
    <div class="bench-label">
      <img src="/assets/images/logos/rspack.svg" class="bench-logo" />
      <div>Rspack<small>Rust + SWC</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 8%"></div></div>
    <span class="bench-time">270 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-800">
    <div class="bench-label">
      <img src="/assets/images/logos/vite.svg" class="bench-logo" />
      <div>Vite 8<small>Rolldown + Oxc</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 4.5%"></div></div>
    <span class="bench-time">154 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-1000">
    <div class="bench-label">
      <img src="/assets/images/logos/rolldown.svg" class="bench-logo" />
      <div>Rolldown<small>Rust + Oxc</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 3%"></div></div>
    <span class="bench-time">99 ms</span>
  </div>

  <div v-click="1" class="bench-row transition forward:delay-1200">
    <div class="bench-label">
      <img src="/assets/images/logos/esbuild.svg" class="bench-logo" />
      <div>esbuild<small>Go</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 2.5%"></div></div>
    <span class="bench-time">83 ms</span>
  </div>
</div>



<div class="bench-source">Source : test sur TodoMVC · voir aussi github.com/rolldown/benchmarks</div>

<style scoped>
.bench-context {
  margin-top: 3rem;
}
.bp-chart {
  gap: 0.5rem;
  padding-top: 0.75rem;
}
.bp-chart .bench-logo {
  width: 28px;
  height: 28px;
}
.bp-chart .bench-bar {
  height: 26px;
}
</style>

<!--
Mesuré avec demo/phases/bundler-benchmark.mjs : l'app TodoMVC dupliquée ×100 (801 modules)
+ React, build de production complet (bundle + tree-shaking + minification, sans sourcemaps),
un processus neuf par run, médiane de 5 runs sur Apple M3. Reproductible : `pnpm benchmark:phases`.
Versions : webpack 5.107, Rollup 4.61, Vite 6.4, Rspack 2.3, Vite 8.3, Rolldown 1.3, esbuild 0.24.

[click] Les sept barres arrivent l'une après l'autre.
Les deux outils en JS : webpack 3,5 s, Rollup 2,4 s. La minification par Terser
pèse plus de la moitié du build (1,9 s pour webpack, 1,2 s pour Rollup).
Vite 6 : ~1 s. Rollup pour le bundle, esbuild pour la minification.
Les outils en Rust et Go : de 83 ms (esbuild) à 270 ms (Rspack). Vite 8 passe
sur Rolldown + Oxc : 966 ms → 154 ms, soit ~6× plus rapide que Vite 6.

À dire : on compare des chaînes complètes (transpileur, résolveur, minifieur), pas des moteurs de bundling seuls. Vite 8 contient Rolldown : l'écart de 55 ms est le surcoût de Vite lui-même.

À dire : sur un petit projet, tout est rapide et le démarrage de l'outil compte beaucoup,
d'où esbuild devant Rolldown ici. Sur de gros projets (19 000 modules, benchmark de l'équipe
Rolldown) les écarts se creusent : Rollup y met plusieurs minutes. Les durées de chaque
phase (transpilation, résolution, tree-shaking, minification) sont dans les slides de leur partie.

La course continue : de nouveaux outils arrivent chaque année, plus rapides, plus intégrés, avec moins de config.
-->
