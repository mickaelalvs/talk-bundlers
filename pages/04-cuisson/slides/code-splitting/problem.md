---
layout: basic-title
---

::title::
Un seul plat pour tout le repas

::default::

<div class="cs-problem">
  <div class="cs-bundle-mono">
    <div class="cs-bundle-header">
      <lucide-file-code class="cs-bundle-icon" />
      <span class="cs-bundle-name">bundle.js</span>
      <span class="cs-bundle-size">320 KB</span>
    </div>
    <div class="cs-bundle-routes">
      <span class="cs-route">/home</span>
      <span class="cs-route">/dashboard</span>
      <span class="cs-route">/settings</span>
      <span class="cs-route">/admin</span>
    </div>
  </div>
  <div v-click="1" class="cs-problem-highlight">
    <lucide-alert-triangle class="cs-alert-icon" />
    <span>L'utilisateur est sur <code>/home</code>… pourquoi charger <code>/admin</code> ?</span>
  </div>
</div>

<SlideItem src="/assets/images/items/pot_2.svg" size="160px" bottom="30px" right="50px" rotate="10deg" opacity="0.4" />

<style>
.cs-problem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 1rem;
}
.cs-bundle-mono {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2.5rem;
  background: white;
  border-radius: 16px;
  border-top: 4px solid var(--theme-color-salmon);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.cs-bundle-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.cs-bundle-icon {
  font-size: 1.5rem;
  color: var(--theme-color-salmon);
}
.cs-bundle-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--theme-color-charcoal);
}
.cs-bundle-size {
  font-family: "Paytone One", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-salmon);
}
.cs-bundle-routes {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.cs-route {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  padding: 0.3rem 0.7rem;
  background: rgba(159, 169, 185, 0.15);
  border-radius: 6px;
  color: var(--theme-color-slate);
}
.cs-problem-highlight {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  color: var(--theme-color-charcoal);
  padding: 0.75rem 1.5rem;
  background: rgba(232, 119, 96, 0.08);
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-salmon);
}
.cs-alert-icon {
  font-size: 1.5rem;
  color: var(--theme-color-salmon);
  flex-shrink: 0;
}
.cs-problem-highlight code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  color: var(--theme-color-steel);
  font-size: 0.9em;
}
</style>

<!--
Voici le problème concret : sans code splitting, tout le code de l'application
finit dans un seul fichier. L'utilisateur qui arrive sur la page d'accueil
télécharge aussi le code du dashboard, des settings, de l'admin… du code qu'il
ne verra peut-être jamais.

[click 1] La question rhétorique : pourquoi forcer le téléchargement de code
inutile ? C'est comme servir tout le repas d'un coup sur une seule assiette —
c'est lourd et peu appétissant.

320 KB c'est un chiffre réaliste pour une SPA moyenne avec ses deps.
-->
