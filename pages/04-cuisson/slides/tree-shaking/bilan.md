---
layout: basic-title
---

::title::
Avant / après

::default::

<div class="bilan-wrap">
  <div class="bilan-card bilan-before">
    <div class="bilan-stage">avant</div>
    <div class="bilan-bundle">
      <div class="bilan-bundle-name">bundle.js</div>
      <div class="bilan-bundle-size">~70 KB</div>
      <div class="bilan-bundle-note">code mort embarqué</div>
    </div>
  </div>

  <div v-click="1" class="bilan-shake">🌳</div>

  <div v-click="1" class="bilan-card bilan-after">
    <div class="bilan-stage">après</div>
    <div class="bilan-bundle">
      <div class="bilan-bundle-name">bundle.js</div>
      <div class="bilan-bundle-size">~7 KB</div>
      <div class="bilan-bundle-note">seulement ce qu'on utilise</div>
    </div>
  </div>
</div>

<div v-click="2" class="bilan-checklist">
  <div class="bilan-check-title">Pour que ça marche :</div>
  <div class="bilan-check-list">
    <span>✓ ESM (<code>import</code>/<code>export</code>)</span>
    <span>✓ Mode <code>production</code></span>
    <span>✓ Package bien fait (<code>module</code>, <code>sideEffects</code>)</span>
    <span>✓ Imports propres (pas de <code>default</code> sur les libs)</span>
  </div>
  <div class="bilan-tip">
    💡 Audite tes deps avec <a href="https://github.com/mgechev/is-esm" target="_blank"><code>is-esm</code></a>
  </div>
</div>

<style>
.bilan-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  padding-top: 0.5rem;
}
.bilan-card {
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
.bilan-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.bilan-before .bilan-stage {
  color: var(--theme-color-amber);
}
.bilan-after .bilan-stage {
  color: #2e7d32;
}
.bilan-bundle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.bilan-bundle-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  font-weight: 700;
}
.bilan-bundle-size {
  font-family: "Paytone One", sans-serif;
  font-size: 1.6rem;
  color: var(--theme-color-steel);
}
.bilan-bundle-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-style: italic;
  text-align: center;
}
.bilan-shake {
  font-size: 3rem;
  line-height: 1;
}
.bilan-checklist {
  margin-top: 2rem;
  text-align: center;
}
.bilan-check-title {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  margin-bottom: 0.75rem;
}
.bilan-check-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem 1.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.bilan-check-list span {
  white-space: nowrap;
}
.bilan-check-list code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  color: var(--theme-color-steel);
  font-size: 0.85em;
}
.bilan-tip {
  margin-top: 1rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
}
.bilan-tip a {
  color: var(--theme-color-amber);
  text-decoration: underline;
}
.bilan-tip code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>

<!--
[click 1] L'arbre apparaît, et avec lui le bundle après tree-shaking.
La même app, mais ×10 plus léger.

[click 2] La checklist des conditions pour que ça marche vraiment :
ESM, mode prod, package bien fait, imports propres.

→ Transition vers le sous-bloc suivant : Code splitting.
-->
