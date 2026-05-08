---
layout: basic-title
---

::title::
Trois chefs, trois couteaux

::default::

<div class="tools-grid">
  <div v-click="1" class="tool-card">
    <img src="/assets/images/logos/babel.svg" class="tool-logo" />
    <div class="tool-name">Babel</div>
    <div class="tool-meta"><span>JavaScript</span> · 2014</div>
  </div>
  <div v-click="2" class="tool-card">
    <img src="/assets/images/logos/swc.svg" class="tool-logo" />
    <div class="tool-name">SWC</div>
    <div class="tool-meta"><span>Rust</span> · 2019</div>
  </div>
  <div v-click="3" class="tool-card">
    <img src="/assets/images/logos/esbuild.svg" class="tool-logo" />
    <div class="tool-name">esbuild</div>
    <div class="tool-meta"><span>Go</span> · 2020</div>
  </div>
</div>

<div v-click="4" class="tools-others">
  Et il y en a d'autres…
  <span class="tools-others-list">
    <img src="/assets/images/logos/bun.svg" class="tools-others-logo" /> Bun
    <span class="tools-others-sep">·</span>
    <img src="/assets/images/logos/oxc.svg" class="tools-others-logo" /> Oxc
    <span class="tools-others-sep">·</span>
    Sucrase
    <span class="tools-others-sep">·</span>
    tsc
  </span>
</div>

<style>
.tools-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: center;
  justify-items: center;
  width: 100%;
  padding-top: 1rem;
}
.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.tool-logo {
  width: 110px;
  height: 110px;
  object-fit: contain;
}
.tool-name {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-size: 1.8rem;
}
.tool-meta {
  font-family: "Nunito", sans-serif;
  color: var(--theme-color-slate);
  font-size: 1rem;
  font-weight: 600;
}
.tool-meta span {
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
}
.tools-others {
  margin-top: 2.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-slate);
}
.tools-others-list {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 0.5rem;
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-charcoal);
}
.tools-others-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
  vertical-align: middle;
}
.tools-others-sep {
  color: var(--theme-color-slate);
}
</style>

<!--
[click 1] Babel : le pionnier, écrit en JS, plein de plugins. Lent.
[click 2] SWC : la nouvelle génération en Rust, ~20× plus rapide.
[click 3] esbuild : encore plus rapide, écrit en Go, parallélisation native.
[click 4] Et d'autres : Bun (Zig, runtime + bundler), Oxc (Rust ultra-rapide,
nouveau venu), Sucrase (fork de Babel pour la vitesse), tsc (le compilateur
TypeScript officiel, plus lent mais référence).

Métaphore : plusieurs cuisiniers, plusieurs couteaux. Pas le même outil, pas
la même vitesse de découpe.
-->
