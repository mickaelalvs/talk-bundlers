---
layout: basic-title
---

::title::
Avant / après

::default::

<div class="min-bilan-wrap">
  <div class="min-bilan-card min-bilan-before">
    <div class="min-bilan-stage">avant</div>
    <div class="min-bilan-bundle">
      <div class="min-bilan-bundle-name">bundle.js</div>
      <div class="min-bilan-bundle-size">~50 KB</div>
      <div class="min-bilan-bundle-note">lisible, espacé, commenté</div>
    </div>
  </div>

  <div v-click="1" class="min-bilan-shake">🗜️</div>

  <div v-click="1" class="min-bilan-card min-bilan-after">
    <div class="min-bilan-stage">après</div>
    <div class="min-bilan-bundle">
      <div class="min-bilan-bundle-name">bundle.min.js</div>
      <div class="min-bilan-bundle-size">~12 KB</div>
      <div class="min-bilan-bundle-note">illisible, mais prêt à servir</div>
    </div>
  </div>
</div>

<div v-click="2" class="min-bilan-tools">
  <div class="min-bilan-tools-title">Qui fait le boulot ?</div>
  <div class="min-bilan-tools-list">
    <span class="min-bilan-tool"><strong>Terser</strong> (Webpack, Rollup par défaut)</span>
    <span class="min-bilan-tool"><strong>esbuild --minify</strong> (Vite, esbuild)</span>
    <span class="min-bilan-tool"><strong>swc-minify</strong> (Next.js, swc)</span>
  </div>
</div>

<div v-click="3" class="min-bilan-flags">
  <div class="min-bilan-flags-title">Options pratiques</div>
  <div class="min-bilan-flags-list">
    <div class="min-bilan-flag">
      <code>--drop=console</code>
      <span>retire les <code>console.log</code> et <code>debugger</code> du bundle prod</span>
    </div>
    <div class="min-bilan-flag">
      <code>--keep-names</code>
      <span>préserve <code>Function.name</code> pour des stack traces lisibles</span>
    </div>
  </div>
</div>

<style>
.min-bilan-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  padding-top: 0.5rem;
}
.min-bilan-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 240px;
  padding: 1.25rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.min-bilan-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.min-bilan-before .min-bilan-stage {
  color: var(--theme-color-amber);
}
.min-bilan-after .min-bilan-stage {
  color: #2e7d32;
}
.min-bilan-bundle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.min-bilan-bundle-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  font-weight: 700;
}
.min-bilan-bundle-size {
  font-family: "Paytone One", sans-serif;
  font-size: 1.6rem;
  color: var(--theme-color-steel);
}
.min-bilan-bundle-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-style: italic;
  text-align: center;
}
.min-bilan-shake {
  font-size: 3rem;
  line-height: 1;
}
.min-bilan-tools {
  margin-top: 2rem;
  text-align: center;
}
.min-bilan-tools-title {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  margin-bottom: 0.75rem;
}
.min-bilan-tools-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem 1.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.min-bilan-tool {
  white-space: nowrap;
}
.min-bilan-tool strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.min-bilan-flags {
  margin-top: 1.5rem;
  text-align: center;
}
.min-bilan-flags-title {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  margin-bottom: 0.75rem;
}
.min-bilan-flags-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}
.min-bilan-flag {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
}
.min-bilan-flag code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  color: var(--theme-color-steel);
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  font-size: 0.95em;
  white-space: nowrap;
}
.min-bilan-flag span code {
  background: rgba(0, 0, 0, 0.05);
  color: var(--theme-color-charcoal);
  font-size: 0.85em;
}
</style>

<!--
[click 1] L'avant/après : même app, mais 4× plus léger après minif. Les
chiffres sont placeholder, à mesurer.

[click 2] Les outils. Trois grandes familles aujourd'hui :
  - Terser : le standard historique, écrit en JS. Lent mais très complet.
  - esbuild --minify : ultra-rapide, intégré dans esbuild et Vite.
  - swc-minify : équivalent Rust de Terser, intégré dans SWC, utilisé par
    Next.js depuis quelques versions.

Note Vite : depuis ~2024, Vite utilise esbuild pour la minification par
défaut (plus rapide que Terser pour un résultat très proche).

À mentionner à l'oral : "le code minifié devient illisible. On en reparle
dans la partie 6 avec les sourcemaps, qui font le pont entre dev et prod".
-->
