---
layout: title
---

::number::
01

::default::

# On ouvre le frigo

<!--
On commence par poser le problème.
Faire un site, ça semble simple en théorie…
-->

---
layout: basic-title
---

::title::
Ce que comprend le navigateur

::default::

<div class="frigo-plate-wrap">
  <img src="./assets/plate.svg" class="frigo-plate" />
  <div v-click="1" class="frigo-plate-tag">navigateur</div>
  <img v-click="1" src="/assets/images/logos/html5.svg" class="frigo-plate-logo pop" style="left: 20%; top: 35%; transform: rotate(-12deg)" />
  <img v-click="1" src="/assets/images/logos/css3.svg" class="frigo-plate-logo pop" style="left: 35%; top: 30%" />
  <img v-click="1" src="/assets/images/logos/javascript.svg" class="frigo-plate-logo pop" style="left: 53%; top: 35%; transform: rotate(12deg)" />
</div>

<style>
.frigo-plate-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.frigo-plate {
  max-height: 600px;
  object-fit: contain;
  z-index: 2;
  filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.25));
}
.frigo-plate-logo {
  position: absolute;
  width: 200px;
  height: 200px;
  object-fit: contain;
}
.frigo-plate-tag {
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  color: #9FA9B9;
  font-family: "Paytone One", sans-serif;
  font-size: 1.5rem;
  z-index: 10;
  white-space: nowrap;
  text-transform: uppercase;
}
</style>

<!--
[click] Les 3 logos + tag "navigateur" apparaissent ensemble.
HTML, CSS, JavaScript — les seuls ingrédients que le navigateur comprend nativement.
-->

---
layout: basic-title
---

::title::
Ce que vous écrivez

::default::

<div class="fridge-wrap">
  <img src="./assets/fridge.svg" class="fridge-img" />

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

---
layout: basic
---

<div class="frigo-conclusion">
  <div v-click class="frigo-chef-emoji">🧑🏼‍🍳</div>
  <div v-click class="frigo-bundler-name">bundler</div>
</div>

<style>
.frigo-conclusion {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  text-align: center;
}
.frigo-chef-emoji {
  font-size: 7rem;
  line-height: 1;
}
.frigo-bundler-name {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-size: 4rem;
  text-transform: uppercase;
}
</style>

<!--
TODO:
- Mettre Bundler sur le plan de travail avec assets toque de chef

[click] Le chef.
[click] Son nom : le bundler.
→ Partie 2 : par où commence-t-il ? Comment lit-il votre projet ?
-->
