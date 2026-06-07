---
layout: basic-title
transition: view-transition
---

::title::
Le graphe de dépendances

::default::

<div class="dg-grid">
<div v-click="1" class="dg-item"><img src="/assets/images/items/egg.svg" class="dg-icon" /><span class="dep-chip dg-text">Qu'est ce que l'on inclut ?</span></div>
<div v-click="2" class="dg-item"><img src="/assets/images/items/egg.svg" class="dg-icon" /><span class="dep-chip dg-text">Dans quel ordre de chargement ?</span></div>
<div v-click="3" class="dg-item"><img src="/assets/images/items/egg.svg" class="dg-icon" /><span class="dep-chip dg-text">Et est-ce qu'on l'utilise ?</span></div>
</div>

<style scoped>
.dg-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100%;
  height: 100%;
}
.dg-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 14rem;
  text-align: center;
}
.dg-icon {
  width: 96px;
  height: 96px;
  object-fit: contain;
}
.dg-text {
  font-size: 1rem;
  font-weight: 700;
  color: var(--theme-color-amber);
}
</style>

<!--
Voilà pourquoi le graphe de dépendances est la fondation de tout bundler :
- Quoi inclure dans le bundle final ?
- Dans quel ordre charger les fichiers ?
- Qu'est-ce qui est réellement utilisé (pour éliminer le reste) ?

(Icônes œuf en placeholder, à remplacer.)
-->
