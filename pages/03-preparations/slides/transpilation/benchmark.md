---
layout: basic-title
---

::title::
Benchmark : transpilation

::default::

<div class="bench-context">
  <span class="note-chip"><lucide-cpu /></span>
  <span><strong>801 fichiers JSX</strong> · Apple M3</span>
</div>

<div class="bench-chart">
  <div v-click="1" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/babel.svg" class="bench-logo" />
      <div>Babel<small>JavaScript</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill bench-fill-js" style="--value: 100%"></div></div>
    <span class="bench-time">731 ms</span>
  </div>

  <div v-click="2" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/esbuild.svg" class="bench-logo" />
      <div>esbuild<small>Go</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 15%"></div></div>
    <span class="bench-time">113 ms</span>
  </div>

  <div v-click="3" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/swc.svg" class="bench-logo" />
      <div>SWC<small>Rust</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 5%"></div></div>
    <span class="bench-time">39 ms</span>
  </div>

  <div v-click="4" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/oxc.svg" class="bench-logo" />
      <div>Oxc<small>Rust</small></div>
    </div>
    <div class="bench-bar"><div class="bench-fill" style="--value: 4%"></div></div>
    <span class="bench-time">30 ms</span>
  </div>
</div>

<div v-click="5" class="bench-why">
<span class="bench-why-label">Pourquoi ?</span>
<span class="bench-why-item"><strong>Langage compilé</strong> (Rust · Go vs JS)</span>
<span class="bench-why-sep">·</span>
<span class="bench-why-item"><strong>Parallélisation</strong></span>
<span class="bench-why-sep">·</span>
<span class="bench-why-item">moins de <strong>plugins</strong></span>
</div>

<div class="bench-source">Source : test sur TodoMVC</div>

<style>
.bench-why {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.9rem;
  margin-top: 1.2rem;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.bench-why-label {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
}
.bench-why-item strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-weight: normal;
}
.bench-why-sep {
  color: var(--theme-color-mist);
}
</style>

<!--
Mesuré avec demo/phases/bundler-benchmark.mjs : l'app TodoMVC React dupliquée ×100
(801 modules), chaque transpileur appelé depuis Node (@babel/core, @swc/core,
esbuild, oxc-transform), un processus neuf par run, médiane de 5 runs sur Apple M3.
Le temps inclut le chargement de l'outil. Reproductible : `pnpm benchmark:phases`.
Versions : Babel 7.29, SWC 1.15, esbuild 0.24, Oxc 0.158.

[click] Babel : la barre prend toute la largeur (731 ms). Le repère qui pose le plafond.
[click] esbuild : ~6× plus rapide (113 ms). Go, parallélisé. Attention : appelé fichier
par fichier depuis Node, il paie l'échange avec son processus Go. En ligne de commande
sur un dossier entier, il passe devant SWC.
[click] SWC : ~19× plus rapide (39 ms). Rust, binding natif dans le processus Node.
[click] Oxc : ~24× plus rapide (30 ms). Rust aussi. C'est lui qui est derrière Rolldown
et Vite 8.
[click] Pourquoi : langage compilé, parallélisation, moins de plugins.

Le visuel doit faire le choc, pas les chiffres précis. Ordres de grandeur :
les compilateurs natifs (Go/Rust) écrasent Babel (JS interprété).
-->

---
layout: basic-title
---

::title::
Pour aller plus loin

::default::

<div class="links-list">
  <div v-click="1" class="link-item transition">
    <img src="/assets/images/logos/esbuild.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">esbuild · FAQ benchmarks</div>
      <div class="link-url">esbuild.github.io/faq/</div>
    </div>
  </div>
  <div v-click="1" class="link-item transition forward:delay-200">
    <img src="/assets/images/logos/swc.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">SWC · Benchmarks</div>
      <div class="link-url">swc.rs/docs/benchmarks</div>
    </div>
  </div>
  <div v-click="1" class="link-item transition forward:delay-500">
    <img src="/assets/images/logos/vite.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">Vite · Why Vite</div>
      <div class="link-url">vitejs.dev/guide/why.html</div>
    </div>
  </div>
  <div v-click="1" class="link-item transition forward:delay-700">
    <img src="/assets/images/logos/rolldown.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">Rolldown · Benchmarks</div>
      <div class="link-url">github.com/rolldown/benchmarks</div>
    </div>
  </div>
</div>

<div class="links-disclaimer">⚠ leurs propres mesures, à recouper</div>

<style>
.links-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding-top: 3rem;
}
.link-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.9rem 1.25rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}
.link-logo {
  width: 42px;
  height: 42px;
  object-fit: contain;
  flex-shrink: 0;
}
.link-text {
  text-align: left;
}
.link-name {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-size: 1.1rem;
}
.link-url {
  font-family: "JetBrains Mono", monospace;
  color: var(--theme-color-amber);
  font-size: 0.95rem;
}
.links-disclaimer {
  margin-top: 1.8rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
</style>

<!--
Slide rapide. Pour ceux qui veulent creuser. Les liens sont dans les notes.
Disclaimer : ce sont leurs propres mesures, donc à prendre avec un grain de sel.

→ Transition vers le sous-bloc suivant : Module resolution CJS/ESM.
-->
