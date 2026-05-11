---
layout: basic
---

<div class="ts-subsection">
  <div class="ts-icon">🌳</div>
  <h1 class="ts-name">Tree-shaking</h1>
</div>

<style>
.ts-subsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
}
.ts-icon {
  font-size: 7rem;
  line-height: 1;
}
.ts-name {
  font-family: "Paytone One", sans-serif !important;
  color: var(--theme-color-steel) !important;
  font-size: 5rem !important;
  margin: 0;
}
</style>

<!--
Transition vers le sous-bloc tree-shaking. C'est probablement le plus subtil
de la partie cuisson : tout le monde en a entendu parler, peu de gens savent
ce qui le rend possible et ce qui peut le casser.
-->

---
layout: basic-title
---

::title::
Tree-shaking, c'est quoi ?

::default::

<div class="ts-def">
  <div v-click="1" class="ts-def-role">
    <span class="ts-emoji">🍽️</span>
    Tu ne sers dans l'assiette que ce que tu as cuisiné.<br />
    Le bundler fait pareil : tout ce que ton code n'utilise pas,
    il le vire du bundle final.
  </div>

  <div v-click="2" class="ts-def-tech">
    Aussi appelé <strong>dead code elimination</strong>. Décidé à la
    compilation, pas à l'exécution.
  </div>
</div>

<style>
.ts-def {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  text-align: left;
  line-height: 1.5;
}
.ts-def-role {
  font-size: 1.5rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.ts-emoji {
  font-size: 2.2rem;
  line-height: 1;
  flex-shrink: 0;
}
.ts-def-tech {
  font-size: 1.15rem;
  color: var(--theme-color-charcoal);
  padding-left: 3.5rem;
}
.ts-def-tech strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
[click 1] La métaphore cuisine : tu ne sers que ce que tu as préparé.
Le bundler vire ce qui ne finit jamais dans l'assiette finale.
(Le nom "tree-shaking" vient de "to shake the tree" : on secoue l'arbre,
les feuilles mortes tombent. Anglicisme, mais peu importe l'image que tu
préfères, le principe est le même.)

[click 2] Le terme technique officiel : dead code elimination. Important :
c'est décidé à la COMPILATION (= au build), pas à l'exécution. C'est ce qui
permet à un bundler de regarder ton code une fois et de prendre des décisions.
-->
