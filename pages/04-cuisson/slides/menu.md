---
layout: grid-icons
---

::title::
Au menu

::item-1::
<div class="menu-item"><lucide-scissors class="menu-icon" /><span class="menu-label">Tree-shaking</span><span class="menu-desc">Éliminer le superflu</span></div>

::item-2::
<div class="menu-item"><lucide-split class="menu-icon" /><span class="menu-label">Code splitting</span><span class="menu-desc">Diviser pour mieux servir</span></div>

::item-3::
<div class="menu-item"><lucide-minimize-2 class="menu-icon" /><span class="menu-label">Minification</span><span class="menu-desc">Réduire le code</span></div>

<style>
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.menu-icon {
  font-size: 8rem;
  color: var(--theme-color-amber);
}
.menu-label {
  font-size: 2rem;
  font-weight: 900;
  color: var(--theme-color-steel);
}
.menu-desc {
  font-size: 1.2rem;
  opacity: 0.7;
}
</style>

<!--
Voici les 3 techniques d'optimisation qu'on va détailler.
Chacune a son rôle : réduire la taille, enlever le code mort, et découper intelligemment.
On va les voir une par une dans les prochaines slides.
-->
