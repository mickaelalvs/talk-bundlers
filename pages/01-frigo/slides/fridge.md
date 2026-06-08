---
layout: basic-title
---

::title::
Ce que vous écrivez

::default::

<div class="fridge-wrap">
  <img src="../assets/fridge.svg" class="fridge-img" />

  <!-- 3×3, technos & outils mélangés -->
  <img v-click="1" src="/assets/images/logos/react.svg" class="fridge-item pop" style="left: 30%; top: 20.5%; transform: rotate(-8deg)" />
  <img v-click="1" src="/assets/images/logos/typescript.svg" class="fridge-item pop" style="width: 60px; left: 42%; top: 21.5%" />
  <img v-click="1" src="/assets/images/logos/svelte.svg" class="fridge-item pop" style="width: 60px; left: 52%; top: 21.5%; transform: rotate(31deg)" />

  <img v-click="1" src="/assets/images/logos/sass.svg" class="fridge-item pop" style="left: 30%; top: 37%; transform: rotate(12deg)" />
  <img v-click="1" src="/assets/images/logos/astro.svg" class="fridge-item pop" style="left: 40%; top: 36%; transform: rotate(110deg)" />
  <img v-click="1" src="/assets/images/logos/styled-components.svg" class="fridge-item pop" style="width: 60px; left: 52%; top: 35.5%" />

  <img v-click="1" src="/assets/images/logos/css-modules.svg" class="fridge-item pop" style="left: 29%; top: 49.5%" />
  <img v-click="1" src="/assets/images/logos/js-modern.png" class="fridge-item pop" style="width: 60px; left: 41%; top: 49%" />
  <img v-click="1" src="/assets/images/logos/vue.svg" class="fridge-item pop" style="left: 52%; top: 51.5%; transform: rotate(-60deg)" />
</div>

<style>
.fridge-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.fridge-img {
  max-height: 600px;
  margin-top: 2rem;
  object-fit: contain;
  filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.25));
}
.fridge-item {
  position: absolute;
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.fridge-badge {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Paytone One", sans-serif;
  font-size: 1.4rem;
  color: white;
}
</style>

<!--
[click] Tout ce que vous écrivez, en vrac : frameworks (React, Svelte, Vue,
Astro), langage (TypeScript, JS moderne), styles (SCSS, CSS Modules,
styled-components). Volontairement mélangé.
Le navigateur ne comprend rien de tout ça directement.
-->
