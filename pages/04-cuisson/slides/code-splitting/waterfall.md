---
layout: basic-title
---

::title::
Ce que voit le navigateur

::default::

<div class="cs-waterfall">
  <div class="cs-wf-header">
    <span class="cs-wf-col-name">Fichier</span>
    <span class="cs-wf-col-bar">Temps</span>
    <span class="cs-wf-col-size">Taille</span>
  </div>
  <div class="cs-wf-row">
    <span class="cs-wf-name">main.js</span>
    <div class="cs-wf-bar-wrap">
      <div class="cs-wf-bar cs-wf-bar-main" style="width: 50%; left: 0;"></div>
    </div>
    <span class="cs-wf-size">80 KB</span>
  </div>
  <div class="cs-wf-row">
    <span class="cs-wf-name">vendors.js</span>
    <div class="cs-wf-bar-wrap">
      <div class="cs-wf-bar cs-wf-bar-vendor" style="width: 40%; left: 5%;"></div>
    </div>
    <span class="cs-wf-size">45 KB</span>
  </div>
  <div v-click="1" class="cs-wf-row">
    <span class="cs-wf-name">dashboard.js</span>
    <div class="cs-wf-bar-wrap">
      <div class="cs-wf-bar cs-wf-bar-lazy" style="width: 25%; left: 55%;"></div>
    </div>
    <span class="cs-wf-size">30 KB</span>
  </div>
  <div v-click="2" class="cs-wf-row">
    <span class="cs-wf-name">admin.js</span>
    <div class="cs-wf-bar-wrap">
      <div class="cs-wf-bar cs-wf-bar-lazy" style="width: 18%; left: 70%;"></div>
    </div>
    <span class="cs-wf-size">20 KB</span>
  </div>
  <div v-click="1" class="cs-wf-legend">
    <span class="cs-wf-legend-item"><span class="cs-wf-dot cs-wf-dot-main"></span>Chargement initial</span>
    <span class="cs-wf-legend-item"><span class="cs-wf-dot cs-wf-dot-lazy"></span>À la navigation</span>
  </div>
</div>

<SlideItem src="/assets/images/items/utensils_2.svg" size="120px" bottom="30px" right="50px" rotate="-8deg" opacity="0.35" />

<style>
.cs-waterfall {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding-top: 0.5rem;
}
.cs-wf-header {
  display: grid;
  grid-template-columns: 120px 1fr 60px;
  gap: 1rem;
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(159, 169, 185, 0.2);
}
.cs-wf-row {
  display: grid;
  grid-template-columns: 120px 1fr 60px;
  gap: 1rem;
  align-items: center;
  padding: 0.4rem 0;
}
.cs-wf-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
}
.cs-wf-bar-wrap {
  position: relative;
  height: 22px;
  background: rgba(159, 169, 185, 0.08);
  border-radius: 6px;
  overflow: hidden;
}
.cs-wf-bar {
  position: absolute;
  top: 3px;
  height: 16px;
  border-radius: 4px;
}
.cs-wf-bar-main {
  background: var(--theme-color-steel);
}
.cs-wf-bar-vendor {
  background: var(--theme-color-amber);
}
.cs-wf-bar-lazy {
  background: #2e7d32;
}
.cs-wf-size {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
  text-align: right;
}
.cs-wf-legend {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
}
.cs-wf-legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.cs-wf-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.cs-wf-dot-main {
  background: var(--theme-color-steel);
}
.cs-wf-dot-lazy {
  background: #2e7d32;
}
</style>

<!--
Voici ce que ça donne dans l'onglet Network du navigateur.

Au chargement initial : main.js (le code de l'app) et vendors.js (les libs
partagées) arrivent en parallèle. C'est tout ce qu'on télécharge pour afficher
la page d'accueil. Total : ~125 KB au lieu de 320 KB.

[click 1] Quand l'utilisateur navigue vers /dashboard, le chunk dashboard.js
est téléchargé à ce moment-là. C'est le lazy loading en action. La légende
apparaît pour distinguer les deux phases.

[click 2] Et si l'utilisateur va sur /admin, pareil : chunk chargé à la demande.
S'il n'y va jamais, le code n'est jamais téléchargé.

L'effet sur les Core Web Vitals est énorme : le LCP s'améliore parce qu'on
parse et exécute moins de JS au démarrage. Le TTI (Time to Interactive) aussi.

Note HTTP/2 : grâce au multiplexage, avoir plusieurs petits fichiers n'est plus
un problème de performance réseau (contrairement à HTTP/1.1 où chaque requête
coûtait cher).
-->
