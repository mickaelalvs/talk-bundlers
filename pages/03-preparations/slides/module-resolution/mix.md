---
layout: basic-title
---

::title::
Vos dépendances ont du CJS

::default::

<div class="mix-layout">
<div class="mix-cards">
<div class="mix-card mix-card--esm">
<lucide:folder-open class="mix-card-icon" />
<div class="mix-card-name">src/</div>
<div class="mix-card-tags">
<span class="mix-tag mix-tag--esm">ESM</span>
<span class="mix-tag mix-tag--esm">ESM</span>
<span class="mix-tag mix-tag--esm">ESM</span>
</div>
<div class="mix-card-desc">Votre code</div>
</div>
<div class="mix-card mix-card--mix">
<lucide:folder class="mix-card-icon" />
<div class="mix-card-name">node_modules/</div>
<div class="mix-card-tags">
<span class="mix-tag mix-tag--cjs">CJS</span>
<span class="mix-tag mix-tag--esm">ESM</span>
<span class="mix-tag mix-tag--cjs">CJS</span>
<span class="mix-tag mix-tag--cjs">CJS</span>
<span class="mix-tag mix-tag--esm">ESM</span>
</div>
<div class="mix-card-desc">Vos dépendances</div>
</div>
</div>
<div class="mix-takeaways">
<div v-click class="mix-takeaway">
<span class="note-chip"><lucide:flame /></span>
<span>Le bundler cuisine sur <strong>les deux feux</strong></span>
</div>
<div v-click class="mix-takeaway">
<span class="note-chip"><lucide:weight /></span>
<span>Chaque traduction CJS → ESM = <strong>du poids en plus</strong></span>
</div>
<div v-click class="mix-takeaway">
<span class="note-chip"><lucide:lightbulb /></span>
<span>Privilégiez les dépendances <strong>ESM</strong> quand c'est possible</span>
</div>
</div>
</div>

<style>
.mix-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding-top: 5rem;
}
.mix-cards {
  display: flex;
  align-items: stretch;
  gap: 2.5rem;
}
.mix-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  min-width: 200px;
  border: 2px solid;
}
.mix-card--esm {
  border-color: var(--theme-color-olive);
}
.mix-card--mix {
  border-color: var(--theme-color-raspberry);
}
.mix-card-icon {
  font-size: 2rem;
  color: var(--theme-color-steel);
}
.mix-card-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  font-weight: bold;
  color: var(--theme-color-charcoal);
}
.mix-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
}
.mix-tag {
  font-size: 0.65rem;
  font-weight: bold;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}
.mix-tag--esm {
  background: rgba(138, 154, 75, 0.15);
  color: var(--theme-color-olive-dark);
}
.mix-tag--cjs {
  background: rgba(196, 81, 92, 0.15);
  color: var(--theme-color-raspberry-dark);
}
.mix-card-desc {
  font-size: 0.8rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
.mix-takeaways {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  max-width: 560px;
}
.mix-takeaway {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.5rem;
  background: rgba(219, 153, 77, 0.12);
  border-radius: 10px;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.mix-takeaway strong {
  color: var(--theme-color-amber);
}
</style>

<!--
[au chargement] À gauche, votre code. Propre, ESM. À droite, vos dépendances. Le bazar — CJS et ESM mélangés. L'ESM est récent, une bonne partie de npm publie encore en CJS.

[click] Le bundler doit gérer les deux dans le même bundle. Il cuisine sur les deux feux.

[click] Et chaque module CJS qu'il wrappe, c'est du runtime supplémentaire dans votre bundle final. lodash (CJS) embarque tout, lodash-es (ESM) ne prend que ce dont vous avez besoin.

[click] Le conseil concret : quand vous avez le choix, privilégiez les versions ESM de vos dépendances. Vérifiez sur bundlephobia ou pkg-size.

Maintenant qu'on a vu comment notre chef prépare les ingrédients, on va voir comment il optimise le plat final…
-->
