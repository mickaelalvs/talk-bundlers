---
layout: basic-title
transition: view-transition
---

::title::
Le plat est servi

::subtitle::
Un même plat, des ustensiles différents

::default::

<div class="bilan-content">
  <p v-click class="bilan-message">
    Peu importe l'ustensile choisi, les <span class="bilan-highlight">principes</span> restent les mêmes.
  </p>
  <div v-click class="bilan-principles">
    <div class="bilan-principle-item">
      <lucide-file-code class="bilan-icon" />
      <span class="bilan-principle">Transpilation</span>
    </div>
    <div class="bilan-principle-item">
      <lucide-scissors class="bilan-icon" />
      <span class="bilan-principle">Tree-shaking</span>
    </div>
    <div class="bilan-principle-item">
      <lucide-split class="bilan-icon" />
      <span class="bilan-principle">Code splitting</span>
    </div>
    <div class="bilan-principle-item">
      <lucide-minimize-2 class="bilan-icon" />
      <span class="bilan-principle">Minification</span>
    </div>
  </div>
</div>

<SlideItem src="/assets/images/items/pot_holder.svg" size="110px" bottom="20px" left="40px" rotate="-8deg" opacity="0.25" />
<SlideItem src="/assets/images/items/egg.svg" size="70px" top="30px" right="60px" rotate="15deg" opacity="0.2" />

<style>
.bilan-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  gap: 2.5rem;
}
.bilan-message {
  font-size: 1.4rem;
  text-align: center;
  color: var(--theme-color-charcoal);
  max-width: 600px;
}
.bilan-highlight {
  color: var(--theme-color-steel);
  font-weight: 700;
}
.bilan-principles {
  display: flex;
  gap: 2.5rem;
}
.bilan-principle-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.bilan-icon {
  font-size: 2.2rem;
  color: var(--theme-color-amber);
}
.bilan-principle {
  font-family: 'Paytone One', sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-steel);
  background: color-mix(in srgb, var(--theme-color-skyBlue) 20%, white);
  padding: 0.4rem 1rem;
  border-radius: 20px;
}
</style>

<!--
Voilà le message clé de cette section.
Que vous utilisiez Webpack, Vite, esbuild ou le prochain outil à la mode...
Les principes fondamentaux qu'on a vus ensemble — transpilation, résolution de modules, tree-shaking, code splitting, minification — ils restent exactement les mêmes.
Comprendre ces principes, c'est comprendre TOUS les bundlers, passés, présents et futurs.
C'est comme en cuisine : que vous utilisiez un robot ou un couteau, les gestes de base restent les mêmes.
-->
