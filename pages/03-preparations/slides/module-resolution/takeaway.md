---
layout: basic
---

<div class="takeaway-layout">
<p class="takeaway-line">CJS ≠ ESM, pas juste la syntaxe, <strong>la philosophie</strong></p>
<p v-click class="takeaway-line">Le chef cuisine sur <strong>les deux feux</strong></p>
<p v-click class="takeaway-line">Chaque traduction laisse une <strong>trace dans l'assiette</strong></p>
</div>

<style>
.takeaway-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;
}
.takeaway-line {
  font-size: 1.4rem;
  color: var(--theme-color-slate);
  text-align: center;
}
.takeaway-line strong {
  color: var(--theme-color-amber);
}
</style>

<!--
Donc retenez ça : la différence entre CommonJS et ES Modules, ce n'est pas un débat de puristes. C'est une réalité technique qui se traduit directement dans le poids de votre bundle.

Votre chef, qu'il s'appelle Vite, Webpack, Rollup ou Parcel, passe une part énorme de son temps à faire travailler ces deux mondes ensemble. Sans que vous le voyiez.

Maintenant qu'on a vu comment notre chef prépare les ingrédients JavaScript, on va voir comment il optimise le plat final...
-->
