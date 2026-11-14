---
layout: basic-title
---

::title::
En répétition, Vite ne bundle pas

::default::

<div class="vff-wrap">

<div class="vff-intro">
Deux façons de servir le projet en dev.
</div>

<div class="vff-compare">

  <div class="vff-side vff-side-old">
    <div class="vff-tag">
      <img src="/assets/images/logos/webpack.png" class="vff-logo" />
      <span>Webpack et similaires</span>
    </div>
    <div class="vff-pipeline">
      <div class="vff-node">
        <span class="vff-icon"><lucide-files /></span>
        <span class="vff-label">tes fichiers</span>
      </div>
      <lucide-arrow-right class="vff-arrow" />
      <div class="vff-node">
        <span class="vff-icon vff-icon-bundle"><lucide-package /></span>
        <span class="vff-label">bundle dev</span>
      </div>
      <lucide-arrow-right class="vff-arrow" />
      <div class="vff-node">
        <span class="vff-icon"><lucide-globe /></span>
        <span class="vff-label">navigateur</span>
      </div>
    </div>
    <div class="vff-note">Le bundle doit être construit avant le premier affichage.</div>
  </div>

  <div class="vff-side vff-side-new">
    <div class="vff-tag vff-tag-amber">
      <img src="/assets/images/logos/vite.svg" class="vff-logo" />
      <span>Vite</span>
    </div>
    <div class="vff-pipeline">
      <div class="vff-node">
        <span class="vff-icon"><lucide-files /></span>
        <span class="vff-label">tes fichiers</span>
      </div>
      <lucide-arrow-right class="vff-arrow" />
      <div class="vff-node">
        <span class="vff-icon vff-icon-transform"><lucide-zap /></span>
        <span class="vff-label">transform à la demande</span>
      </div>
      <lucide-arrow-right class="vff-arrow" />
      <div class="vff-node">
        <span class="vff-icon"><lucide-globe /></span>
        <span class="vff-label">navigateur</span>
      </div>
    </div>
    <div class="vff-note">
      Le navigateur suit les imports en ESM natif.<br />
      <strong>Pas de bundle à attendre au démarrage.</strong>
    </div>
  </div>

</div>

<div v-click class="vff-prod">
  <span class="note-chip"><lucide-package /></span>
  <span>En prod, il bundle quand même. Des centaines de fichiers ESM feraient trop de requêtes.</span>
</div>

</div>

<style>
.vff-wrap {
  width: 100%;
}
.vff-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.5rem;
}
.vff-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  max-width: 900px;
  margin: 0 auto;
}
.vff-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border: 2px solid var(--theme-color-slate);
}
.vff-side-new {
  border-color: var(--theme-color-amber);
  background: rgba(219, 153, 77, 0.2);
}
.vff-tag {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.vff-tag span {
  font-family: "Paytone One", sans-serif;
}
.vff-tag-amber {
  color: var(--theme-color-charcoal);
}
.vff-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
}
.vff-pipeline {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
}
.vff-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  width: 5.5rem;
}
.vff-icon {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 10px;
  background: rgba(159, 169, 185, 0.22);
  color: var(--theme-color-charcoal);
  font-size: 1.5rem;
}
.vff-icon-bundle {
  background: rgba(196, 81, 92, 0.18);
  color: var(--theme-color-raspberry-dark);
}
.vff-icon-transform {
  background: rgba(138, 154, 75, 0.25);
  color: var(--theme-color-olive-dark);
}
.vff-label {
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  line-height: 1.2;
  text-align: center;
  min-height: 2.4em;
  color: var(--theme-color-charcoal);
}
.vff-arrow {
  flex: none;
  margin-top: 0.85rem;
  font-size: 1.2rem;
  color: var(--theme-color-slate);
}
.vff-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.88rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  text-align: center;
}
.vff-prod {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 1.5rem auto 0;
  padding: 0.7rem 1.25rem;
  background: rgba(219, 153, 77, 0.2);
  border-radius: 12px;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.vff-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-charcoal);
  font-weight: normal;
}
</style>

<!--
Côté répétition : Webpack et les outils du même type bundlent le projet à chaque modif. Vite sert chaque fichier séparément, transformé à la demande, et le navigateur suit les imports lui-même. Le démarrage reste instantané.

Testé avec Vite 8.3 : le serveur de dev sert /src/todo/app.jsx tel quel, fichier par fichier. Seules les dépendances sont pré-bundlées, dans node_modules/.vite/deps. Le mode qui bundle en dev existe mais reste opt-in et expérimental.

[click] Côté service : Vite bundle quand même (Rolldown en Vite 8, Rollup avant). Servir des centaines de modules au navigateur coûterait trop cher en requêtes.

Deux modes très différents dans le même outil.
-->
