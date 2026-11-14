---
layout: title
---

::number::
<img src="/assets/images/items/cutting_board.svg" class="title-illus" />

::default::

# Transpilation

<!--
Transition vers le sous-bloc transpilation.
On rentre dans le détail d'une des transformations principales : le TypeScript
et le JSX qu'on écrit, comment ils deviennent du JS que le navigateur lit.
-->

---
layout: basic-title
---

::title::
Transpilation, c'est quoi ?

::default::

<div class="def-quote">
<div v-click="1" class="def-quote-main">Le navigateur ne comprend que le <strong>JavaScript</strong>. Il faut traduire ton <strong>TypeScript</strong>, ton <strong>JSX</strong> et tes composants <strong>Vue · Svelte · Astro</strong>.</div>
</div>

<!--
[click] La phrase clé : le navigateur ne comprend QUE le JavaScript. Ni TS,
ni JSX, ni les composants .vue/.svelte/.astro — même le dernier Chrome.

[click] Concrètement, la transpilation retraduit tout ça en JS : TypeScript,
JSX, et les formats de composants (Vue/Svelte/Astro → JS). Raison n°1 aujourd'hui.
Le down-level (réécrire les syntaxes JS récentes pour les vieux navigateurs) est
secondaire et de plus en plus marginal — c'est ce qu'on pilote via le "target"
(slide suivante). Le CSS, lui, est traité à part (SCSS → CSS, slide css-pipeline).
-->
