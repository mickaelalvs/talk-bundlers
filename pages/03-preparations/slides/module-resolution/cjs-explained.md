---
layout: basic
---

<div class="explain-layout">
<div class="icon-points">
<div class="icon-point">
<lucide:wrench class="icon-point-icon" />
<span>Helpers de runtime</span>
</div>
<div class="icon-point">
<lucide:package class="icon-point-icon" />
<span>Module enveloppé</span>
</div>
<div class="icon-point">
<lucide:repeat class="icon-point-icon" />
<span>Traducteur CJS → ESM</span>
</div>
</div>
<p class="explain-desc">Le bundler <strong>simule Node.js</strong> dans le navigateur</p>
</div>

<style>
.explain-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;
}
.icon-points {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.icon-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.1rem;
  color: var(--theme-color-slate);
}
.icon-point-icon {
  font-size: 2.5rem;
  color: var(--theme-color-amber);
}
.explain-desc {
  font-size: 1.1rem;
  color: var(--theme-color-slate);
  text-align: center;
}
.explain-desc strong {
  color: var(--theme-color-amber);
}
</style>

<!--
Tout le bloc du haut, ce sont des helpers de runtime : __commonJS, __toESM, __copyProps. Ce sont eux qui simulent le comportement de Node.js dans un environnement où il n'y a pas de Node.

Ensuite, vous voyez require_math : le module CJS d'origine n'est pas inliné comme tout à l'heure, il est enveloppé dans une fonction. Souvenez-vous de ce qu'on a dit juste avant : le bundler ne sait pas, à la compilation, ce que ce module va vraiment exporter, parce qu'en CJS, les exports sont construits à l'exécution. Donc il diffère l'évaluation : il met le code dans une fonction qui sera appelée plus tard, quand on en aura besoin, exactement comme Node l'aurait fait.

Et tout en bas, le __toESM, c'est le traducteur final. Il prend la sortie CJS (un objet JavaScript classique) et l'arrange pour qu'il ait l'apparence d'un namespace ESM, avec un default, des exports nommés, etc. Comme ça, votre import { add } côté ESM trouve ce qu'il cherche.
-->
