---
layout: basic-title
---

::title::
Le voyage

::default::

<div class="recap-trip">
  <div v-click="1" class="recap-step">
    <div class="recap-emoji">🥶</div>
    <div class="recap-label">Sources</div>
    <div class="recap-meta">(le frigo)</div>
  </div>

  <div v-click="2" class="recap-arrow">→</div>
  <div v-click="2" class="recap-step">
    <div class="recap-emoji">📋</div>
    <div class="recap-label">Graphe de dépendances</div>
    <div class="recap-meta">(la mise en place)</div>
  </div>

  <div v-click="3" class="recap-arrow">→</div>
  <div v-click="3" class="recap-step">
    <div class="recap-emoji">🔪</div>
    <div class="recap-label">Loaders & transformations</div>
    <div class="recap-meta">(la préparation)</div>
  </div>

  <div v-click="4" class="recap-arrow">→</div>
  <div v-click="4" class="recap-step">
    <div class="recap-emoji">🌳</div>
    <div class="recap-label">Tree-shaking</div>
    <div class="recap-meta">(la cuisson)</div>
  </div>

  <div v-click="4" class="recap-arrow">→</div>
  <div v-click="4" class="recap-step">
    <div class="recap-emoji">✂️</div>
    <div class="recap-label">Code splitting</div>
    <div class="recap-meta">(la cuisson)</div>
  </div>

  <div v-click="4" class="recap-arrow">→</div>
  <div v-click="4" class="recap-step">
    <div class="recap-emoji">🗜️</div>
    <div class="recap-label">Minification</div>
    <div class="recap-meta">(la cuisson)</div>
  </div>

  <div v-click="5" class="recap-arrow">→</div>
  <div v-click="5" class="recap-step">
    <div class="recap-emoji">🍽️</div>
    <div class="recap-label">Bundle final</div>
    <div class="recap-meta">(le plat servi)</div>
  </div>

  <div v-click="6" class="recap-arrow">→</div>
  <div v-click="6" class="recap-step">
    <div class="recap-emoji">🎭</div>
    <div class="recap-label">Dev vs prod</div>
    <div class="recap-meta">(répétition · service)</div>
  </div>
</div>

<div v-click="7" class="recap-tagline">
  Voilà tout ce que <strong>mijote</strong> votre bundler.
</div>

<style>
.recap-trip {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.6rem 0.4rem;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding-top: 0.5rem;
}
.recap-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-width: 92px;
  max-width: 110px;
}
.recap-emoji {
  font-size: 2.1rem;
  line-height: 1;
}
.recap-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.78rem;
  color: var(--theme-color-steel);
  text-align: center;
  line-height: 1.2;
}
.recap-meta {
  font-family: "Nunito", sans-serif;
  font-size: 0.65rem;
  color: var(--theme-color-amber);
  text-align: center;
  font-style: italic;
}
.recap-arrow {
  font-family: "Paytone One", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-amber);
  align-self: center;
  margin-top: 0.7rem;
}
.recap-tagline {
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.4rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
}
.recap-tagline strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
On rejoue le voyage en live, étape par étape, avec les noms techniques et
le rappel storytelling en amber entre parenthèses.

Les 3 optimisations (tree-shaking, code splitting, minification) sont
détaillées séparément mais apparaissent ensemble (même v-click) pour
souligner qu'elles sont 3 facettes de la "cuisson".

[click 1] Sources (le frigo) : les fichiers TS/JSX/SCSS/PNG/etc.
[click 2] Graphe de dépendances (la mise en place) : entry point + traversée
des imports.
[click 3] Loaders & transformations (la préparation) : transpilation TS→JS,
résolution CJS/ESM, traitement par type de fichier.
[click 4] LES TROIS OPTIMISATIONS ENSEMBLE (la cuisson) :
  - Tree-shaking : supprimer le code mort
  - Code splitting : découper en chunks
  - Minification : réduire le poids
[click 5] Bundle final (le plat servi) : les fichiers prêts à servir.
[click 6] Dev vs prod (répétition · service) : pipeline différente selon
la cible, sourcemaps comme pont entre les deux.

[click 7] Tagline qui boucle sur le titre du talk.
-->
