---
layout: basic-title
---

::title::
Ce que comprend le navigateur

::default::

<div class="frigo-plate-wrap">
  <img src="../assets/plate.svg" class="frigo-plate" />
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
