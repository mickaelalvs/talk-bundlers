---
layout: basic-title
---

::title::
Benchmark : TodoMVC React

::default::

<div class="bench-chart">
  <div v-click="1" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/babel.svg" class="bench-logo" />
      <span>Babel</span>
    </div>
    <div class="bench-bar bench-bar-babel">
      <div class="bench-fill" style="width: 100%"></div>
      <span class="bench-time">3.9 s</span>
    </div>
  </div>

  <div v-click="2" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/swc.svg" class="bench-logo" />
      <span>SWC</span>
    </div>
    <div class="bench-bar">
      <div class="bench-fill bench-fill-swc" style="width: 62%"></div>
      <span class="bench-time">2.4 s</span>
    </div>
  </div>

  <div v-click="3" class="bench-row">
    <div class="bench-label">
      <img src="/assets/images/logos/esbuild.svg" class="bench-logo" />
      <span>esbuild</span>
    </div>
    <div class="bench-bar">
      <div class="bench-fill bench-fill-esbuild" style="width: 44%"></div>
      <span class="bench-time">1.7 s</span>
    </div>
  </div>
</div>

<div class="bench-note">3 200 fichiers JSX · médiane de 7 runs · Apple M3</div>

<style>
.bench-chart {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding-top: 1.5rem;
}
.bench-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  align-items: center;
  gap: 1.5rem;
}
.bench-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-size: 1.2rem;
}
.bench-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.bench-bar {
  position: relative;
  height: 38px;
  background: rgba(159, 169, 185, 0.15);
  border-radius: 6px;
  overflow: visible;
  display: flex;
  align-items: center;
}
.bench-fill {
  height: 100%;
  background: var(--theme-color-amber);
  border-radius: 6px;
  transition: width 0.8s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.bench-fill-swc {
  background: var(--theme-color-steel);
}
.bench-fill-esbuild {
  background: #4caf50;
}
.bench-time {
  position: absolute;
  left: calc(100% + 0.75rem);
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  white-space: nowrap;
}
.bench-row:nth-child(1) .bench-time {
  left: auto;
  right: 0.75rem;
  color: white;
}
.bench-note {
  margin-top: 2rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
</style>

<!--
Mesuré sur le projet demo/ : les 8 fichiers JSX/JS dupliqués ×400 (3 200 fichiers,
~13 Mo), transpilés via les CLI officielles (esbuild, @swc/cli, @babel/cli),
médiane de 7 runs à froid sur Apple M3. Reproductible : `pnpm phase:transpile:benchmark`.

[click 1] Babel : la barre prend toute la largeur (~3.9 s). Le repère qui pose le plafond.
[click 2] SWC : ~1.4× plus rapide (~2.4 s). Compilé en Rust, bindings natifs in-process.
[click 3] esbuild : le plus rapide (~1.7 s), ~2.3× Babel. Compilé en Go, parallélisé.

Le visuel doit faire le choc, pas les chiffres précis. Ordres de grandeur :
les compilateurs natifs (Go/Rust) écrasent Babel (JS interprété).
-->

---
layout: basic-title
---

::title::
Pourquoi cette différence ?

::default::

<div class="why-list">
  <div v-click="1" class="why-item">
    <div class="why-tag">①</div>
    <div class="why-text">
      <strong>Langage compilé natif</strong> : Rust et Go vs JS interprété
    </div>
  </div>
  <div v-click="2" class="why-item">
    <div class="why-tag">②</div>
    <div class="why-text">
      <strong>Parallélisation</strong> : esbuild utilise tous les cœurs en natif
    </div>
  </div>
  <div v-click="3" class="why-item">
    <div class="why-tag">③</div>
    <div class="why-text">
      <strong>Moins de plugins externes</strong> : moins d'overhead à orchestrer
    </div>
  </div>
</div>

<style>
.why-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  text-align: left;
}
.why-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-amber);
}
.why-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 2rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
}
.why-text {
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  color: var(--theme-color-charcoal);
  line-height: 1.4;
}
.why-text strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-weight: normal;
}
</style>

<!--
[click 1] Le langage. Babel = JS, donc lent par nature. SWC/esbuild = compilés.
[click 2] Parallélisation. esbuild attaque tous les fichiers en parallèle.
[click 3] Plugins. Babel = écosystème énorme = beaucoup d'orchestration.
SWC/esbuild ont moins de plugins externes, donc moins d'overhead.
-->

---
layout: basic-title
---

::title::
Pour aller plus loin

::default::

<div class="links-list">
  <div v-click="1" class="link-item">
    <img src="/assets/images/logos/esbuild.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">esbuild · FAQ benchmarks</div>
      <div class="link-url">esbuild.github.io/faq/</div>
    </div>
  </div>
  <div v-click="2" class="link-item">
    <img src="/assets/images/logos/swc.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">SWC · Benchmarks</div>
      <div class="link-url">swc.rs/docs/benchmarks</div>
    </div>
  </div>
  <div v-click="3" class="link-item">
    <img src="/assets/images/logos/vite.svg" class="link-logo" />
    <div class="link-text">
      <div class="link-name">Vite · Why Vite</div>
      <div class="link-url">vitejs.dev/guide/why.html</div>
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
-->
