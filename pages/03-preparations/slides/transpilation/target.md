---
layout: basic-title
---

::title::
Et le JS moderne ? Ça dépend du target

::default::

<div class="target-grid">
  <div v-click="1" class="target-card target-modern">
    <div class="target-stage">Cible moderne</div>
    <div class="target-version">ES2015+</div>
    <div class="target-tools">
      <img src="/assets/images/logos/vite.svg" class="target-logo" />
      <img src="/assets/images/logos/esbuild.svg" class="target-logo" />
    </div>
    <div class="target-note">Code moderne, peu transpilé</div>
  </div>

  <div v-click="2" class="target-card target-legacy">
    <div class="target-stage">Cible conservative</div>
    <div class="target-version">ES5</div>
    <div class="target-tools">
      <img src="/assets/images/logos/babel.svg" class="target-logo" />
    </div>
    <div class="target-note">Souvent par défaut sur Webpack</div>
  </div>
</div>

<div v-click="3" class="target-footer">
  <code>browserslist</code> dans <code>package.json</code> décide qui est ciblé.
</div>

<style>
.target-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding-top: 1rem;
}
.target-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.6);
  border-top: 5px solid;
}
.target-modern {
  border-color: var(--theme-color-amber);
}
.target-legacy {
  border-color: var(--theme-color-slate);
}
.target-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: var(--theme-color-slate);
  text-transform: uppercase;
}
.target-version {
  font-family: "Paytone One", sans-serif;
  font-size: 2.2rem;
  color: var(--theme-color-steel);
  line-height: 1;
}
.target-tools {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 0.5rem 0;
}
.target-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.target-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  font-style: italic;
}
.target-footer {
  margin-top: 2rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
}
.target-footer code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  color: var(--theme-color-steel);
  font-size: 0.95rem;
}
</style>

<!--
[click 1] Cible moderne : Vite, esbuild ciblent ES2015+ par défaut. Le code
sortant est proche de ce que tu écris, peu transpilé.

[click 2] Cible conservative : beaucoup de configs Webpack/Babel ciblent
encore ES5 par défaut, par prudence. Beaucoup d'apps en prod génèrent encore
du code ES5 sans que les devs s'en rendent compte.

[click 3] Le levier : browserslist dans le package.json. C'est là que ça se
décide pour la plupart des outils.
-->
