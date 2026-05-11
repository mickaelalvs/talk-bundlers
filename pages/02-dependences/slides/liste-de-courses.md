---
layout: basic-title
transition: view-transition
padding: pt-28 px-20 pb-20
---

::title::
Le graphe de dépendances

::subtitle::
La liste de courses du chef

::default::

<div class="dep-liste">
<div class="dep-liste-row">
<div class="dep-liste-item">
<lucide:scroll-text class="dep-liste-icon dep-liste-icon--recipe" />
<span class="dep-liste-label">recipe.js</span>
</div>
<div class="dep-liste-arrow">
<lucide:arrow-right class="dep-liste-arrow-icon" />
</div>
<div v-click class="dep-liste-question">
<lucide:help-circle class="dep-liste-qmark q1" />
<lucide:help-circle class="dep-liste-qmark q2" />
<lucide:help-circle class="dep-liste-qmark q3" />
<lucide:help-circle class="dep-liste-qmark q4" />
</div>
</div>
<p v-click class="dep-liste-explain">
Le bundler ne reçoit qu'<span class="dep-liste-highlight">un seul fichier</span> en entrée.<br/>
Il doit <span class="dep-liste-highlight--steel">découvrir tous les autres</span> par lui-même.
</p>
</div>

<SlideItem src="/assets/images/items/scale.svg" size="100px" bottom="20px" left="40px" rotate="-5deg" opacity="0.3" />
<SlideItem src="/assets/images/items/utensils_1.svg" size="80px" top="30px" right="50px" rotate="12deg" opacity="0.25" />

<style>
.dep-liste {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
}
.dep-liste-row {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.dep-liste-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.dep-liste-icon {
  font-size: 4rem;
}
.dep-liste-icon--recipe {
  color: var(--theme-color-amber);
}
.dep-liste-label {
  font-size: 1.3rem;
  font-weight: 700;
  font-family: 'Paytone One', sans-serif;
  color: var(--theme-color-amber);
}
.dep-liste-arrow {
  display: flex;
  align-items: center;
}
.dep-liste-arrow-icon {
  font-size: 2.5rem;
  color: var(--theme-color-slate);
}
.dep-liste-question {
  position: relative;
  width: 160px;
  height: 100px;
}
.dep-liste-qmark {
  position: absolute;
  font-size: 2.5rem;
  color: var(--theme-color-slate);
}
.dep-liste-qmark.q1 { top: 0; left: 10px; transform: rotate(-8deg); }
.dep-liste-qmark.q2 { top: 5px; right: 10px; transform: rotate(12deg); }
.dep-liste-qmark.q3 { bottom: 0; left: 20px; transform: rotate(5deg); }
.dep-liste-qmark.q4 { bottom: 5px; right: 20px; transform: rotate(-12deg); }
.dep-liste-explain {
  font-size: 1.4rem;
  text-align: center;
  color: var(--theme-color-charcoal);
  line-height: 2;
  max-width: 600px;
}
.dep-liste-highlight {
  color: var(--theme-color-salmon);
  font-weight: 700;
}
.dep-liste-highlight--steel {
  color: var(--theme-color-steel);
  font-weight: 700;
}
</style>

<!--
Comme un chef qui reçoit une recette et doit en déduire tous les ingrédients nécessaires, le bundler ne reçoit qu'un seul fichier : l'entry point.

À partir de ce fichier unique, il doit découvrir par lui-même tout ce dont l'application a besoin. C'est sa liste de courses qu'il doit construire.
-->
