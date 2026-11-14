---
layout: basic-title
---

::title::
Ce qu'il faut retenir

::default::

<div class="tk-grid">

  <div v-click="1" class="tk-card">
    <div class="tk-num">1</div>
    <div class="tk-title">Pas de magie</div>
    <div class="tk-desc">
      C'est une <strong>pipeline de transformations</strong>. Chaque étape a un rôle clair.
    </div>
  </div>

  <div v-click="2" class="tk-card">
    <div class="tk-num">2</div>
    <div class="tk-title">Bundle = perf</div>
    <div class="tk-desc">
      Comprendre ce qui se passe dans ton bundle, c'est <strong>comprendre pourquoi ton app est lente</strong>. Ou pas.
    </div>
  </div>

  <div v-click="3" class="tk-card">
    <div class="tk-num">3</div>
    <div class="tk-title">Choisir = compromis</div>
    <div class="tk-desc">
      Aucun bundler ne gagne partout. Il faut arbitrer entre <strong>config, perf et écosystème</strong>.
    </div>
  </div>

</div>
<div v-click="4" class="tk-qr">
  <img src="/assets/images/qr/qrcode_recette.svg?v=amber" class="tk-qr-img" />
  <div class="tk-qr-text">
    <strong>La fiche recette du talk</strong>
    <span>Scannez pour retrouver les notes.</span>
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
  text-align: left;
  border: 2px solid var(--theme-color-amber);
}
.tk-num {
  display: grid;
  place-items: center;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 8px;
  background: var(--theme-color-amber);
  color: #fff;
  font-family: "Paytone One", sans-serif;
  font-size: 1.2rem;
  line-height: 1;
}
.tk-qr {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.5rem;
}
.tk-qr-img {
  width: 170px;
  height: 170px;
  background: white;
  border: 2px solid var(--theme-color-mist);
  border-radius: 10px;
}
.tk-qr-text {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  text-align: left;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.tk-qr-text strong {
  font-family: "Paytone One", sans-serif;
  font-size: 1.15rem;
  font-weight: normal;
  color: var(--theme-color-steel);
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

[click] PAS DE MAGIE.
Le message le plus important. Tout ce qu'on a vu (tree-shaking,
mangling, source maps), c'est de la mécanique. Comprendre cette mécanique
te rend moins impuissant face à ton outillage.

[click] BUNDLE = PERF.
Le bundle est ce qui finit en prod chez ton user. S'il est mal foutu (lodash
entier embarqué, code mort présent, mauvais chunks), c'est ton user qui
ramera. Savoir lire un bundle analyzer est une compétence pratique.

[click] CHOISIR = COMPROMIS.
Pas de "meilleur bundler". Vite est top pour la DX mais reste assez jeune sur
certains use cases. Webpack a l'écosystème mais est lent. esbuild est rapide
mais limité en plugins. Rollup brille pour les libs. Etc. Choisir, c'est
arbitrer.

[click] Le QR code mène à la fiche recette : tout le talk en une page, avec les chiffres.
-->
