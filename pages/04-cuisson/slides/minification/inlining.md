---
layout: basic-title
---

::title::
① Inlining et constant folding

::default::

<div class="min-level">Phase · optimisations sémantiques</div>

<div class="sem-intro">
Le minifier connaît les valeurs constantes et calcule à la compilation.
</div>

<div class="sem-table">
  <div class="sem-row">
    <div class="sem-before">double(5)</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">10</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">1 + 2 * 3</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">7</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">"foo".length</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">3</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">"foo"[2]</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">"o"</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">[1, ...[2,3], 4]</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">[1,2,3,4]</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">`a${1}b`</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">"a1b"</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">Color.Red <span class="sem-tag">enum</span></div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">0</div>
  </div>
</div>

<div class="sem-note">
Inlining de fonctions, constant folding, spread, template literal,
inlining d'enum TypeScript… toutes ces optimisations font partie de la
<strong>même phase</strong>.
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
}
.sem-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.2rem;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}
.sem-table {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.sem-row {
  display: grid;
  grid-template-columns: 1.3fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.6);
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
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.92rem;
  color: var(--theme-color-charcoal);
  font-style: italic;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}
.sem-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
  font-style: normal;
}
</style>

<!--
Toutes les optimisations sémantiques en une table. Le format est
volontairement identique à la slide suivante (transformations sémantiques)
pour montrer que c'est la même phase qui fait tout ça.

Catégories montrées :
  - Inlining de fonction : double(5) → 10 (après que la fonction soit inlinée et le résultat calculé)
  - Folding arithmétique : 1 + 2 * 3 → 7
  - Folding de méthodes : "foo".length → 3
  - Folding d'indexation : "foo"[2] → "o"
  - Spread inlining : [1, ...[2,3], 4] → [1,2,3,4]
  - Template literal folding : `a${1}b` → "a1b"
  - Enum inlining (callback partie 3) : Color.Red → 0

À l'oral : "vous vous souvenez du IIFE bizarre généré pour les enums dans
la partie transpilation ? Le minifier peut le ré-aplatir derrière."

Source : doc Bun bundler/minifier.
-->
