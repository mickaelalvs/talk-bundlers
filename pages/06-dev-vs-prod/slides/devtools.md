---
layout: basic-title
---

::title::
Ouvrez les DevTools

::default::

<div class="dt-wrap">
  <div class="dt-card">
    <div class="dt-stage dt-stage-dev">en dev</div>
    <div class="dt-network">
      <div class="dt-file">App.tsx</div>
      <div class="dt-file">Header.vue</div>
      <div class="dt-file">router.ts</div>
      <div class="dt-file">utils.ts</div>
      <div class="dt-file">api.ts</div>
      <div class="dt-file">styles.scss</div>
      <div class="dt-file">logo.png</div>
      <div class="dt-file dt-more">+ 142 autres</div>
    </div>
    <div class="dt-caption">Centaines de fichiers, lisibles, leurs vrais noms.</div>
  </div>

  <div class="dt-card">
    <div class="dt-stage dt-stage-prod">en prod</div>
    <div class="dt-network">
      <div class="dt-file dt-prod">main-abc123.js</div>
      <div class="dt-file dt-prod">vendor-def456.js</div>
      <div class="dt-file dt-prod">styles-789ghi.css</div>
      <div class="dt-file dt-prod">runtime-jkl012.js</div>
    </div>
    <div class="dt-caption">Quelques chunks minifiés, hashés, méconnaissables.</div>
  </div>
</div>

<div class="dt-also">
  <div class="dt-also-tag">Pareil pour les classes CSS</div>
  <div class="dt-also-row">
    <div class="dt-also-side">
      <span class="dt-also-label">en dev</span>
      <code class="dt-also-code dt-also-code-dev">.Button_primary__abc123</code>
    </div>
    <span class="dt-also-arrow">→</span>
    <div class="dt-also-side">
      <span class="dt-also-label">en prod</span>
      <code class="dt-also-code dt-also-code-prod">._a3x</code>
    </div>
  </div>
  <div class="dt-also-note">
    Le hashing des classes CSS modules est fait par un <strong>loader</strong> ou un <strong>plugin</strong> (cf. partie 3).
  </div>
</div>

<div class="dt-todo">📷 placeholder, à remplacer par une vraie capture DevTools</div>

<style>
.dt-wrap {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
}
.dt-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  max-width: 360px;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
}
.dt-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.dt-stage-dev {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
}
.dt-stage-prod {
  background: rgba(81, 138, 184, 0.18);
  color: var(--theme-color-steel);
}
.dt-network {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  min-height: 180px;
}
.dt-file {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.82rem;
  color: #b8c5d6;
  padding: 0.15rem 0;
}
.dt-prod {
  color: #f5a352;
}
.dt-more {
  color: #757575;
  font-style: italic;
}
.dt-caption {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  font-style: italic;
}
.dt-also {
  margin-top: 1.5rem;
  padding: 0.9rem 1.25rem;
  background: rgba(219, 153, 77, 0.08);
  border-left: 3px solid var(--theme-color-amber);
  border-radius: 8px;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.dt-also-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
}
.dt-also-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.dt-also-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.dt-also-label {
  font-family: "Nunito", sans-serif;
  font-size: 0.75rem;
  color: var(--theme-color-slate);
  font-weight: 600;
}
.dt-also-code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}
.dt-also-code-dev {
  background: rgba(76, 175, 80, 0.15);
  color: #2e7d32;
}
.dt-also-code-prod {
  background: rgba(81, 138, 184, 0.15);
  color: var(--theme-color-steel);
}
.dt-also-arrow {
  font-family: "Paytone One", sans-serif;
  font-size: 1.2rem;
  color: var(--theme-color-slate);
}
.dt-also-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.82rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  font-style: italic;
}
.dt-also-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
  font-style: normal;
}
.dt-todo {
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
</style>

<!--
La différence concrète qui frappe l'audience : ils ont tous déjà vu ça
sans y faire attention.

À gauche : dev. Vite/Webpack sert les fichiers tels qu'ils sont écrits
(ou presque). On voit ses propres noms de composants, ses fichiers de
style, les imports. Si quelque chose plante, on sait où aller.

À droite : prod. Quelques chunks hashés. Difficile de débugger sans
sourcemaps (transition vers les slides suivantes).

À l'oral : "Ouvrez vos DevTools en dev, vous voyez votre code. En prod,
vous voyez du charabia. Pourquoi ? Et comment on s'en sort ?"

Le rappel CSS modules en bas : c'est aussi un loader/plugin qui hash les
classes (cf. partie 3 sur les loaders). Le bundler core lui-même ne fait
pas ça, il délègue. Même pattern que pour Babel, les images, le SCSS, etc.

TODO : remplacer le placeholder stylisé par une vraie capture côte à côte
des deux DevTools.
-->
