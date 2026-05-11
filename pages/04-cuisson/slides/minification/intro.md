---
layout: basic
---

<div class="min-subsection">
  <div class="min-icon">🗜️</div>
  <h1 class="min-name">Minification</h1>
</div>

<style>
.min-subsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
}
.min-icon {
  font-size: 7rem;
  line-height: 1;
}
.min-name {
  font-family: "Paytone One", sans-serif !important;
  color: var(--theme-color-steel) !important;
  font-size: 5rem !important;
  margin: 0;
}
</style>

<!--
Transition vers le dernier sous-bloc de la partie cuisson : la minification.
Tout le monde en a une idée vague ("ça enlève les espaces"), peu de gens
savent ce qui se passe vraiment.
-->

---
layout: basic-title
---

::title::
Minification, c'est quoi ?

::default::

<div class="min-def">
  <div v-click="1" class="min-def-role">
    <span class="min-emoji">🥘</span>
    Réduire la sauce.<br />
    Tout est conservé, mais plus concentré, prêt à servir.
  </div>

  <div v-click="2" class="min-def-pipeline">
    <div class="min-pipeline-row">
      <span class="min-step">loaders</span>
      <span class="min-sep">→</span>
      <span class="min-step">graphe</span>
      <span class="min-sep">→</span>
      <span class="min-step">tree-shaking</span>
      <span class="min-sep">→</span>
      <span class="min-step">code splitting</span>
      <span class="min-sep">→</span>
      <span class="min-step min-step-current">minification</span>
      <span class="min-sep">→</span>
      <span class="min-step">output</span>
    </div>
    <div class="min-nuance">
      Sur <strong>Webpack</strong>, elle supprime aussi ce que le tree-shaking
      a marqué. Sur <strong>Rollup</strong> / <strong>esbuild</strong>, le TS l'a déjà fait :
      la minif fait juste la compression.
    </div>
  </div>
</div>

<style>
.min-def {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  text-align: left;
  line-height: 1.5;
}
.min-def-role {
  font-size: 1.5rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.min-emoji {
  font-size: 2.2rem;
  line-height: 1;
  flex-shrink: 0;
}
.min-def-pipeline {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 3.5rem;
}
.min-pipeline-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
}
.min-step {
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: rgba(159, 169, 185, 0.15);
  color: var(--theme-color-slate);
  white-space: nowrap;
}
.min-step-current {
  background: var(--theme-color-amber);
  color: white;
  font-family: "Paytone One", sans-serif;
}
.min-sep {
  color: var(--theme-color-slate);
}
.min-nuance {
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.min-nuance strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
[click 1] La métaphore cuisine : "réduire la sauce". Image directe :
tout est gardé, mais plus concentré, prêt pour le service.

[click 2] La pipeline en visuel avec minification mise en évidence.
Important pour situer où on est. Et la nuance Webpack/Rollup :
- Webpack marque, Terser supprime → la minif fait DEUX choses
- Rollup/esbuild suppriment dès le tree-shaking → la minif fait juste
  la compression cosmétique
-->
