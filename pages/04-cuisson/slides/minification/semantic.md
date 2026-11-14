---
layout: basic-title
---

::title::
<span class="title-step">1</span>Réécritures sémantiques

::default::

<div class="min-level">Phase · optimisations sémantiques</div>

<div class="sem-intro">
Le minifier connaît la sémantique du JS : il calcule ce qu'il peut et choisit la forme la plus courte.
</div>

<div class="sem-table">
  <div class="sem-row">
    <div class="sem-before">"foo".length</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">3</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">Color.Red <span class="sem-tag">enum</span></div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">0</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">true</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">!0</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">undefined</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">void 0</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">obj["validName"]</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">obj.validName</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">if (false) { ... }</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after"><em>(supprimé)</em></div>
  </div>
</div>

<style scoped>
.min-level {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 2rem;
}
.sem-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.5rem;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}
.sem-table {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
}
.sem-row {
  display: grid;
  grid-template-columns: 1.3fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
}
.sem-before {
  text-align: right;
  color: var(--theme-color-amber);
}
.sem-arrow {
  color: var(--theme-color-slate);
  font-family: "Paytone One", sans-serif;
  font-size: 1.1rem;
}
.sem-after {
  text-align: left;
  color: var(--theme-color-steel);
  font-weight: 700;
}
.sem-after em {
  font-style: italic;
  font-family: "Nunito", sans-serif;
  font-weight: normal;
  color: var(--theme-color-slate);
}
.sem-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.1rem 0.4rem;
  margin-left: 0.3rem;
  background: rgba(81, 138, 184, 0.18);
  color: var(--theme-color-steel);
  border-radius: 999px;
  vertical-align: middle;
}
.sem-note {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.7rem 1.25rem;
  background: rgba(81, 138, 184, 0.1);
  --chip: var(--theme-color-steel);
  border-radius: 12px;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
</style>

<!--
Une seule phase : le minifier calcule ce qu'il peut et réécrit en forme courte.

Testé avec esbuild, Rolldown et terser : "foo".length → 3, Color.Red → 0, true → !0, undefined → void 0, obj["validName"] → obj.validName et if (false) supprimé, partout pareil.

Ça varie selon l'outil : 1 + 2 * 3 → 7 chez Rolldown et terser, mais pas chez esbuild. double(5) n'est devenu 10 chez aucun des trois. !!x ne se simplifie que dans un contexte booléen.

Rappel de la partie transpilation : l'IIFE des enums, le minifier inline les accès.
-->
