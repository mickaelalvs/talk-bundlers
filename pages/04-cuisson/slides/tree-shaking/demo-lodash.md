---
layout: basic-title
---

::title::
Lodash : la même fonction, deux mondes

::default::

<div class="demo-intro">
Même import, même résultat à l'exécution.<br />
Mais voilà ce qu'il y a dans ton bundle final :
</div>

<div class="demo-chart">
  <div v-click="1" class="demo-row">
    <div class="demo-label">
      <span class="demo-pkg">lodash</span>
      <span class="demo-tag demo-tag-cjs">CJS</span>
    </div>
    <div class="demo-bar">
      <div class="demo-fill demo-fill-bad" style="width: 100%"></div>
      <span class="demo-time">72 KB</span>
    </div>
  </div>

  <div v-click="2" class="demo-row">
    <div class="demo-label">
      <span class="demo-pkg">lodash-es</span>
      <span class="demo-tag demo-tag-esm">ESM</span>
    </div>
    <div class="demo-bar">
      <div class="demo-fill demo-fill-good" style="width: 4%"></div>
      <span class="demo-time">2.8 KB</span>
    </div>
  </div>
</div>

<div class="demo-note">
  <span class="demo-source">Mesure réelle : <code>import { debounce }</code>, bundle esbuild minifié (×25 plus léger)</span>
</div>

<style>
.demo-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.15rem;
  color: var(--theme-color-charcoal);
  line-height: 1.6;
  margin-bottom: 2rem;
}
.demo-chart {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}
.demo-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  gap: 1.5rem;
}
.demo-label {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "JetBrains Mono", monospace;
  color: var(--theme-color-charcoal);
  font-size: 1rem;
}
.demo-pkg {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-size: 1.1rem;
}
.demo-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
}
.demo-tag-cjs {
  background: rgba(239, 83, 80, 0.18);
  color: #c0392b;
}
.demo-tag-esm {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
}
.demo-bar {
  position: relative;
  height: 38px;
  background: rgba(159, 169, 185, 0.15);
  border-radius: 6px;
  display: flex;
  align-items: center;
}
.demo-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 0.8s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.demo-fill-bad {
  background: #ef5350;
}
.demo-fill-good {
  background: #4caf50;
}
.demo-time {
  position: absolute;
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  white-space: nowrap;
}
.demo-row:nth-child(1) .demo-time {
  right: 0.75rem;
  color: white;
}
.demo-row:nth-child(2) .demo-time {
  left: calc(4% + 0.75rem);
  color: var(--theme-color-charcoal);
}
.demo-note {
  margin-top: 2rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-style: italic;
  line-height: 1.5;
}
.demo-source {
  font-size: 0.78rem;
  opacity: 0.75;
  display: inline-block;
  margin-top: 0.2rem;
}
</style>

<!--
Chiffres réels mesurés via `pnpm phase:tree-shaking` dans demo/ :
  - `import { debounce }` depuis lodash et lodash-es, deux entry points
  - bundle esbuild minifié, format esm, production
  - lodash (CJS) : 72 KB — lodash-es (ESM) : 2.8 KB → ×25

[click 1] La barre rouge énorme : lodash en CJS embarque tout le package
(structure CommonJS non analysable statiquement → pas de tree-shaking).
[click 2] La barre verte minuscule : lodash-es en ESM tree-shake correctement,
seul debounce et ses dépendances réelles survivent.

"Même fonction. Même import. Bundle ×25 plus gros."
-->
