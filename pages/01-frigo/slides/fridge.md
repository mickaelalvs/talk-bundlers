---
layout: basic-title
---

::title::
Ce que vous écrivez

::default::

<div class="fridge-wrap">
  <img src="../assets/fridge.svg" class="fridge-img" />

  <!-- rangée du haut -->
  <img v-click="1" src="/assets/images/logos/typescript.svg" class="fridge-item pop" style="left: 18%; top: 22%; transform: rotate(-8deg)" />
  <img v-click="1" src="/assets/images/logos/react.svg" class="fridge-item pop" style="left: 36%; top: 18%" />
  <img v-click="1" src="/assets/images/logos/sass.svg" class="fridge-item pop" style="left: 54%; top: 22%; transform: rotate(6deg)" />
  <img v-click="1" src="/assets/images/logos/nodejs.svg" class="fridge-item pop" style="left: 70%; top: 18%; transform: rotate(-5deg)" />

  <!-- rangée du bas -->
  <img v-click="2" src="/assets/images/logos/javascript.svg" class="fridge-item pop" style="left: 16%; top: 52%; transform: rotate(10deg)" />
  <div v-click="2" class="fridge-badge pop" style="left: 34%; top: 50%; background:#7cb342">{ }</div>
  <div v-click="2" class="fridge-badge pop" style="left: 52%; top: 52%; background:#9fa9b9; font-size:1rem">Aa</div>
  <div v-click="2" class="fridge-badge pop" style="left: 68%; top: 50%; background:#ef5350; font-size:0.9rem">.env</div>
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
TODO :
- Mettre les items sur des aliments

[click] Rangée du haut : TypeScript, React, Sass, Node — les technos principales.
[click] Rangée du bas : JS vanilla, JSON, fonts, config .env — tout le reste du frigo.
Le navigateur ne comprend rien de tout ça directement.
-->
