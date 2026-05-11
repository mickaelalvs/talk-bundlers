---
layout: basic-title
---

::title::
Sourcemaps : à quoi ça sert ?

::default::

<div class="sm-problem">
  Ton stack trace pointe vers <code>main-abc123.js:1:24578</code>.<br />
  Bon courage pour débugger.
</div>

<div class="sm-flow">
  <div class="sm-side sm-bundle">
    <div class="sm-label">bundle</div>
    <div class="sm-code">main-abc123.js</div>
    <div class="sm-loc">L1, col 24578</div>
  </div>
  <div class="sm-map">
    <div class="sm-map-label">📍 .map</div>
    <div class="sm-arrow">→</div>
  </div>
  <div class="sm-side sm-source">
    <div class="sm-label">code source</div>
    <div class="sm-code">UserMenu.tsx</div>
    <div class="sm-loc">L42, col 18</div>
  </div>
</div>

<div class="sm-result">
  ✓ Breakpoints sur la source &nbsp; · &nbsp; ✓ Stack traces lisibles &nbsp; · &nbsp; ✓ Console errors pointant vers le vrai code
</div>

<style>
.sm-problem {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  line-height: 1.6;
  margin-bottom: 2rem;
}
.sm-problem code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(239, 83, 80, 0.12);
  color: #c0392b;
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  font-size: 0.9em;
}
.sm-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.sm-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  min-width: 200px;
}
.sm-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.sm-code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  font-weight: 700;
}
.sm-bundle .sm-code {
  color: #c0392b;
}
.sm-source .sm-code {
  color: #2e7d32;
}
.sm-loc {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  color: var(--theme-color-slate);
}
.sm-map {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.sm-map-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-amber);
}
.sm-arrow {
  font-family: "Paytone One", sans-serif;
  font-size: 1.5rem;
  color: var(--theme-color-amber);
}
.sm-result {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  max-width: 720px;
  margin: 0 auto;
}
</style>

<!--
On pose le problème en une phrase : un stack trace en prod, sans sourcemap,
c'est une coordonnée dans un fichier illisible.

Le schéma au milieu : la sourcemap fait le lien entre la position dans le
bundle et la position dans le code source d'origine. Un mapping ligne→ligne
(et même colonne→colonne).

En bas : ce que ça permet concrètement dans DevTools :
  - Mettre des breakpoints directement sur le code source
  - Lire les stack traces en termes de tes fichiers
  - Cliquer sur une console error et atterrir au bon endroit
-->
