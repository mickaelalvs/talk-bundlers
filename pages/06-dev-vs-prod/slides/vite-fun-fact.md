---
layout: basic-title
---

::title::
Et au fait, Vite ne bundle pas en dev

::default::

<div class="vff-intro">
Rupture conceptuelle par rapport à Webpack &amp; co.
</div>

<div class="vff-compare">

  <div class="vff-side vff-side-old">
    <div class="vff-tag">Webpack-like</div>
    <div class="vff-pipeline">
      <span class="vff-step">tes fichiers</span>
      <span class="vff-arrow">→</span>
      <span class="vff-step vff-step-bundle">bundle dev</span>
      <span class="vff-arrow">→</span>
      <span class="vff-step">navigateur</span>
    </div>
    <div class="vff-note">Le bundler refait tout le travail à chaque modif.</div>
  </div>

  <div class="vff-side vff-side-new">
    <div class="vff-tag vff-tag-amber">Vite</div>
    <div class="vff-pipeline">
      <span class="vff-step">tes fichiers</span>
      <span class="vff-arrow">→</span>
      <span class="vff-step vff-step-transform">transform <em>à la demande</em></span>
      <span class="vff-arrow">→</span>
      <span class="vff-step">navigateur</span>
    </div>
    <div class="vff-note">
      Pas de bundle. ESM natif, le navigateur résout les imports lui-même.<br />
      <strong>Démarrage instantané même sur gros projet.</strong>
    </div>
  </div>

</div>

<style>
.vff-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.5rem;
}
.vff-compare {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 760px;
  margin: 0 auto;
}
.vff-side {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-slate);
}
.vff-side-new {
  border-color: var(--theme-color-amber);
  background: rgba(219, 153, 77, 0.06);
}
.vff-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.vff-tag-amber {
  color: var(--theme-color-amber);
}
.vff-pipeline {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  flex-wrap: wrap;
}
.vff-step {
  padding: 0.3rem 0.7rem;
  background: rgba(159, 169, 185, 0.18);
  color: var(--theme-color-charcoal);
  border-radius: 6px;
  white-space: nowrap;
}
.vff-step-bundle {
  background: rgba(239, 83, 80, 0.18);
  color: #c0392b;
}
.vff-step-transform {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
}
.vff-step-transform em {
  font-style: italic;
  font-family: "Nunito", sans-serif;
}
.vff-arrow {
  color: var(--theme-color-slate);
  font-weight: 700;
}
.vff-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.88rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  text-align: left;
}
.vff-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
Le fun fact qui surprend tout le monde : Vite ne bundle pas en dev.

Avant Vite (Webpack-like) : le dev server bundle ton projet entier au
démarrage et à chaque modif. Sur un gros projet ça prend des secondes,
voire des dizaines de secondes.

Vite : exploite que les navigateurs modernes supportent l'ESM natif. Il
sert chaque fichier individuellement, transpilé à la demande (sur requête
du navigateur). Le navigateur fait lui-même la traversée des imports.
Résultat : démarrage instantané. Le HMR (hot module replacement) ne
recompile que le fichier modifié.

Pour la prod, Vite bundle quand même (avec Rollup) parce que servir 800
fichiers ESM au navigateur en production serait catastrophique pour la
perf réseau (latence, header overhead, etc.).

Donc Vite a deux modes complètement différents :
  - dev : pas de bundle, ESM natif
  - prod : bundle normal avec Rollup

Cette rupture conceptuelle est ce qui le rend si rapide en dev.
-->
