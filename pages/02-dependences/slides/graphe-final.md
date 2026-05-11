---
layout: basic-title
transition: view-transition
padding: pt-28 px-20 pb-20
---

::title::
Le graphe de dépendances

::subtitle::
La carte complète de notre recette

::default::

<div class="dep-graph">
<div class="dep-graph-svg">
<img src="../assets/graphe-dependence.svg" alt="Graphe de dépendances" />
</div>
<div v-click class="dep-graph-takeaway">
<div class="dep-graph-takeaway-items">
<div class="dep-graph-takeaway-item">
<lucide:check-circle class="dep-graph-check" />
<span>Savoir <strong>quoi inclure</strong> dans le bundle</span>
</div>
<div class="dep-graph-takeaway-item">
<lucide:check-circle class="dep-graph-check" />
<span>Déterminer <strong>l'ordre</strong> de chargement</span>
</div>
<div class="dep-graph-takeaway-item">
<lucide:check-circle class="dep-graph-check" />
<span>Détecter ce qui est <strong>inutilisé</strong></span>
</div>
</div>
</div>
</div>

<SlideItem src="/assets/images/items/pot_2.svg" size="100px" bottom="20px" right="40px" rotate="-8deg" opacity="0.35" />
<SlideItem src="/assets/images/items/pot_holder.svg" size="80px" bottom="30px" left="40px" rotate="10deg" opacity="0.25" />

<style>
.dep-graph {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
}
.dep-graph-svg {
  display: flex;
  justify-content: center;
}
.dep-graph-svg img {
  max-height: 240px;
  width: auto;
}
.dep-graph-takeaway {
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  border-top: 4px solid var(--theme-color-amber);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
.dep-graph-takeaway-items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.dep-graph-takeaway-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
}
.dep-graph-takeaway-item strong {
  color: var(--theme-color-steel);
}
.dep-graph-check {
  font-size: 1.3rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
}
</style>

<!--
Et voilà le résultat : le graphe complet de notre recette. Le bundler a une carte de tout ce qui existe dans notre application.

Avec ça, il sait exactement quoi inclure dans le bundle final, dans quel ordre charger les fichiers, et surtout — ce qu'on verra plus tard — il peut détecter ce qui est inutilisé pour l'éliminer.

C'est la fondation de tout ce qui va suivre. On a tout ce qu'il nous faut, passons à la transformation.
-->
