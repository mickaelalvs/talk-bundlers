---
layout: basic-title
---

::title::
Ce qu'il faut retenir

::default::

<div class="tk-grid">

  <div v-click="1" class="tk-card">
    <div class="tk-num">①</div>
    <div class="tk-title">Pas de magie</div>
    <div class="tk-desc">
      C'est une <strong>pipeline de transformations</strong>. Chaque étape a un rôle clair.
    </div>
  </div>

  <div v-click="2" class="tk-card">
    <div class="tk-num">②</div>
    <div class="tk-title">Bundle = perf</div>
    <div class="tk-desc">
      Comprendre ce qui se passe dans ton bundle, c'est <strong>comprendre pourquoi ton app est lente</strong>. Ou pas.
    </div>
  </div>

  <div v-click="3" class="tk-card">
    <div class="tk-num">③</div>
    <div class="tk-title">Choisir = compromis</div>
    <div class="tk-desc">
      Choisir son bundler, c'est arbitrer entre <strong>config, perf et écosystème</strong>. Pas de solution magique.
    </div>
  </div>

</div>

<style>
.tk-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
}
.tk-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.3rem 1.2rem;
  background: white;
  border-radius: 14px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  text-align: left;
  border-top: 5px solid var(--theme-color-amber);
}
.tk-num {
  font-family: "Paytone One", sans-serif;
  font-size: 2rem;
  color: var(--theme-color-amber);
  line-height: 1;
}
.tk-title {
  font-family: "Paytone One", sans-serif;
  font-size: 1.4rem;
  color: var(--theme-color-steel);
  line-height: 1.2;
}
.tk-desc {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
}
.tk-desc strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
Les 3 takeaways en triade.

[click 1] PAS DE MAGIE.
Le message le plus important. Tout ce qu'on a vu (inlining, tree-shaking,
mangling, sourcemaps), c'est de la mécanique. Comprendre cette mécanique
te rend moins impuissant face à ton outillage.

[click 2] BUNDLE = PERF.
Le bundle est ce qui finit en prod chez ton user. S'il est mal foutu (lodash
entier embarqué, code mort présent, mauvais chunks), c'est ton user qui
ramera. Savoir lire un bundle analyzer est une compétence pratique.

[click 3] CHOISIR = COMPROMIS.
Pas de "meilleur bundler". Vite est top pour la DX mais reste assez jeune sur
certains use cases. Webpack a l'écosystème mais est lent. esbuild est rapide
mais limité en plugins. Rollup brille pour les libs. Etc. Choisir, c'est
arbitrer.
-->
