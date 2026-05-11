---
layout: basic-title
transition: view-transition
---

::title::
Le plat est servi

::subtitle::
Le panorama des ustensiles

::default::

<div class="panorama-content">
  <div class="panorama-items">
    <div v-click="1" class="panorama-item">
      <span class="panorama-year">2011</span>
      <div class="panorama-dot"></div>
      <lucide-coffee class="panorama-icon icon--browserify" />
      <span class="panorama-name">Browserify</span>
      <span class="panorama-meta">Le moulin à café</span>
    </div>
    <div v-click="2" class="panorama-item">
      <span class="panorama-year">2014</span>
      <div class="panorama-dot"></div>
      <img src="/assets/images/items/mixer.svg" class="panorama-img" />
      <span class="panorama-name">Webpack</span>
      <span class="panorama-meta">Le robot mixeur</span>
    </div>
    <div v-click="3" class="panorama-item">
      <span class="panorama-year">2015</span>
      <div class="panorama-dot"></div>
      <lucide-slice class="panorama-icon icon--rollup" />
      <span class="panorama-name">Rollup</span>
      <span class="panorama-meta">Le couteau du chef</span>
    </div>
    <div v-click="3" class="panorama-item">
      <span class="panorama-year">2017</span>
      <div class="panorama-dot"></div>
      <img src="/assets/images/items/oven.svg" class="panorama-img" />
      <span class="panorama-name">Parcel</span>
      <span class="panorama-meta">Le four automatique</span>
    </div>
    <div v-click="3" class="panorama-item">
      <span class="panorama-year">2020</span>
      <div class="panorama-dot dot--new"></div>
      <lucide-swords class="panorama-icon icon--esbuild" />
      <span class="panorama-name">esbuild</span>
      <span class="panorama-meta">Le couteau japonais</span>
    </div>
    <div v-click="3" class="panorama-item">
      <span class="panorama-year">2021</span>
      <div class="panorama-dot dot--new"></div>
      <lucide-flame class="panorama-icon icon--vite" />
      <span class="panorama-name">Vite</span>
      <span class="panorama-meta">La plancha express</span>
    </div>
  </div>
</div>

<SlideItem src="/assets/images/items/kitchen_hat.svg" size="90px" top="30px" right="50px" rotate="8deg" opacity="0.25" />

<style>
.panorama-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  position: relative;
}
.panorama-items {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 95%;
  position: relative;
}
.panorama-items::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: calc(0.75rem + 0.3rem + 6px);
  height: 3px;
  background: linear-gradient(to right, var(--theme-color-mist), var(--theme-color-steel));
  border-radius: 2px;
}
.panorama-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  width: 100px;
  position: relative;
}
.panorama-year {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--theme-color-slate);
}
.panorama-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--theme-color-amber);
  border: 2px solid white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.4rem;
  position: relative;
  z-index: 1;
}
.panorama-dot.dot--new {
  background: var(--theme-color-steel);
}
.panorama-icon {
  font-size: 1.8rem;
}
.panorama-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.icon--browserify { color: var(--theme-color-slate); }
.icon--rollup { color: var(--theme-color-salmon); }
.icon--esbuild { color: var(--theme-color-amber); }
.icon--vite { color: var(--theme-color-steel); }
.panorama-name {
  font-family: 'Paytone One', sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
}
.panorama-meta {
  font-size: 0.7rem;
  color: var(--theme-color-slate);
  font-style: italic;
  text-align: center;
}
</style>

<!--
L'histoire des bundlers en accéléré, chacun avec sa spécialité.
[click] 2011 — Browserify : le moulin à café. Le premier à amener les modules Node dans le navigateur. Manuel, lent, mais pionnier.
[click] 2014 — Webpack : le robot mixeur tout-en-un. Il fait tout, il a mille accessoires (plugins), mais faut lire le mode d'emploi.
[click] 2015 — Rollup : le couteau du chef. Précis, élégant, inventeur du tree-shaking. Parfait pour les librairies.
[click] 2017 — Parcel : le four automatique. Tu mets tes ingrédients dedans, il gère tout seul. Zéro config.
[click] 2020 — esbuild : le couteau japonais. Écrit en Go, 100x plus rapide que tout le monde. Minimaliste mais redoutable.
[click] 2021 — Vite : la plancha express. Chauffe en un instant, cuisson flash grâce aux ES Modules natifs.
En 10 ans, on est passé du moulin manuel à la cuisine professionnelle.
-->
