---
layout: basic
---

<div class="mr-subsection">
  <div class="mr-icon">🧠</div>
  <h1 class="mr-name">Module resolution</h1>
</div>

<style>
.mr-subsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
}
.mr-icon {
  font-size: 7rem;
  line-height: 1;
}
.mr-name {
  font-family: "Paytone One", sans-serif !important;
  color: var(--theme-color-steel) !important;
  font-size: 5rem !important;
  margin: 0;
}
</style>

<!--
Transition vers le dernier sous-bloc de la partie 03 : la résolution des
modules. On a vu comment chaque ingrédient (TypeScript, JSX…) est transformé.
Maintenant : comment le bundler fait coopérer les deux systèmes de modules
incompatibles (CJS et ESM) qui coexistent dans le même projet.
-->
