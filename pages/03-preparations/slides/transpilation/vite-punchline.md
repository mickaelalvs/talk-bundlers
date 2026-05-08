---
layout: basic
---

<div class="vite-punchline">
  <div class="vite-headline">
    Et c'est pourquoi <span class="vite-name">Vite</span><br />
    est rapide en dev.
  </div>

  <div v-click="1" class="vite-flow">
    <div class="vite-node vite-node-vite">
      <img src="/assets/images/logos/vite.svg" class="vite-flow-logo" />
      <div>Vite</div>
    </div>
    <div class="vite-arrow">délègue</div>
    <div class="vite-node vite-node-esbuild">
      <img src="/assets/images/logos/esbuild.svg" class="vite-flow-logo" />
      <div>esbuild</div>
    </div>
  </div>
</div>

<style>
.vite-punchline {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  width: 100%;
  text-align: center;
}
.vite-headline {
  font-family: "Nunito", sans-serif;
  color: var(--theme-color-charcoal);
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 600;
}
.vite-name {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
}
.vite-flow {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.vite-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-size: 1.1rem;
}
.vite-flow-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
}
.vite-arrow {
  font-family: "Nunito", sans-serif;
  color: var(--theme-color-amber);
  font-size: 1.1rem;
  font-weight: 700;
  position: relative;
  padding: 0 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.vite-arrow::before,
.vite-arrow::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 1.5rem;
  height: 2px;
  background: var(--theme-color-amber);
}
.vite-arrow::before {
  left: 0;
}
.vite-arrow::after {
  right: 0;
}
</style>

<!--
La punchline qui connecte tout ce qu'on vient de voir à l'outil que l'audience
utilise au quotidien.

[click] Le schéma : Vite ne fait pas la transpilation lui-même, il délègue à
esbuild. C'est le secret de sa vitesse en dev. Pas de Babel à orchestrer.

→ Transition vers la fin de partie : "voilà ce qu'on a transformé".
-->
