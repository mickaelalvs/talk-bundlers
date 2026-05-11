---
layout: basic-title
---

::title::
Tous les bundlers ne tree-shakent pas pareil

::default::

<div class="bun-intro">
Trade-off classique : <strong>vitesse de build</strong> vs <strong>agressivité d'optimisation</strong>.
</div>

<div class="bun-grid">

  <div v-click="1" class="bun-card">
    <img src="/assets/images/logos/esbuild.svg" class="bun-logo" />
    <div class="bun-name">esbuild</div>
    <div class="bun-meters">
      <div class="bun-meter">⚡⚡⚡⚡⚡</div>
      <div class="bun-meter">🌳🌳</div>
    </div>
    <div class="bun-note">Privilégie la vitesse, plus conservateur sur les cas tordus.</div>
  </div>

  <div v-click="2" class="bun-card">
    <div class="bun-logo-badge" style="background:#1C78C0">W</div>
    <div class="bun-name">Webpack</div>
    <div class="bun-meters">
      <div class="bun-meter">⚡⚡⚡</div>
      <div class="bun-meter">🌳🌳🌳</div>
    </div>
    <div class="bun-note">Marque (<code>usedExports</code>), Terser supprime à la minif.</div>
  </div>

  <div v-click="3" class="bun-card">
    <img src="/assets/images/logos/vite.svg" class="bun-logo" />
    <div class="bun-name">Vite</div>
    <div class="bun-meters">
      <div class="bun-meter">⚡⚡⚡</div>
      <div class="bun-meter">🌳🌳🌳🌳</div>
    </div>
    <div class="bun-note">Utilise <strong>Rollup</strong> pour le build de prod.</div>
  </div>

  <div v-click="4" class="bun-card">
    <div class="bun-logo-badge" style="background:#EC4A3F">R</div>
    <div class="bun-name">Rollup</div>
    <div class="bun-meters">
      <div class="bun-meter">⚡⚡</div>
      <div class="bun-meter">🌳🌳🌳🌳🌳</div>
    </div>
    <div class="bun-note">Le standard or. <strong>Scope hoisting</strong> agressif.</div>
  </div>

</div>

<div v-click="5" class="bun-axis">
  <span class="bun-axis-left">Vitesse</span>
  <div class="bun-axis-line"></div>
  <span class="bun-axis-right">Agressivité</span>
</div>

<style>
.bun-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.bun-intro strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.bun-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.bun-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 0.7rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  text-align: center;
}
.bun-logo {
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.bun-logo-badge {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Paytone One", sans-serif;
  font-size: 1.8rem;
  color: white;
}
.bun-name {
  font-family: "Paytone One", sans-serif;
  font-size: 1.2rem;
  color: var(--theme-color-steel);
}
.bun-meters {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  font-size: 0.95rem;
  line-height: 1;
}
.bun-meter {
  font-family: "Nunito", sans-serif;
}
.bun-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.78rem;
  color: var(--theme-color-charcoal);
  line-height: 1.4;
}
.bun-note code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
}
.bun-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.bun-axis {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 900px;
  margin: 1.8rem auto 0;
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.bun-axis-left {
  white-space: nowrap;
}
.bun-axis-right {
  white-space: nowrap;
  color: var(--theme-color-amber);
}
.bun-axis-line {
  flex: 1;
  height: 3px;
  background: linear-gradient(to right, var(--theme-color-slate), var(--theme-color-amber));
  border-radius: 999px;
}
</style>

<!--
La règle générale : plus le bundler est rapide, plus il est conservateur sur
le tree-shaking (il préfère garder du code "au cas où" que faire un truc faux).
Plus il est lent, plus il est agressif (il analyse à fond et supprime beaucoup).

Détails à mentionner à l'oral selon le temps :

[click 1] esbuild : écrit en Go, parallélisé, ultra-rapide. Mais traite moins
de cas tordus (ex: certains side effects, certains exports CJS). Convient
pour le dev (lazy mode), parfois discutable pour la prod selon le projet.

[click 2] Webpack : usedExports marque les exports comme inutilisés, mais ne
les supprime pas. C'est Terser/UglifyJS à la minification qui les vire.
Donc en mode dev (sans minif), tu vois le code mort dans ton bundle.
A besoin de "mode: production" + minif active.

[click 3] Vite : en dev, ne bundle pas (sert directement les modules ESM
au navigateur). En prod, délègue le build à Rollup. Donc Vite hérite de la
qualité de tree-shaking de Rollup pour la prod.

[click 4] Rollup : conçu pour ESM dès le départ (par Rich Harris). Scope
hoisting = il concatène tous les modules en une seule closure, ce qui permet
au minificateur de voir plus loin et de supprimer plus de code.

[click 5] L'axe vitesse vs agressivité. Pas un classement : c'est un
trade-off. Choisir selon le besoin (build rapide en CI vs bundle minimal
en prod).

Logos webpack (W bleu) et rollup (R rouge) : badges colorés en attendant
de récupérer les vrais SVG.
-->
