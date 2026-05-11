---
layout: basic-title
---

::title::
Autres façons de découper

::default::

<div class="cs-others">
  <div class="cs-other-item">
    <div class="cs-other-header">
      <lucide-door-open class="cs-other-icon" />
      <span class="cs-other-title">Entry points multiples</span>
    </div>
    <span class="cs-other-desc">Plusieurs fichiers d'entrée = un chunk par page</span>
    <code class="cs-other-code">entry: { home: './src/home.js', admin: './src/admin.js' }</code>
  </div>
  <div v-click="1" class="cs-other-item">
    <div class="cs-other-header">
      <lucide-settings class="cs-other-icon" />
      <span class="cs-other-title">Config bundler</span>
    </div>
    <span class="cs-other-desc">Le bundler découpe automatiquement selon des règles de taille et de partage</span>
    <code class="cs-other-code">splitChunks (Webpack) · manualChunks (Vite/Rollup)</code>
  </div>
  <div v-click="2" class="cs-other-item">
    <div class="cs-other-header">
      <lucide-folder-tree class="cs-other-icon" />
      <span class="cs-other-title">Route-based (frameworks)</span>
    </div>
    <span class="cs-other-desc">Next.js, Nuxt, Remix découpent automatiquement par fichier dans <code>pages/</code></span>
    <code class="cs-other-code">pages/index.tsx → chunk home · pages/admin.tsx → chunk admin</code>
  </div>
</div>

<style>
.cs-others {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding-top: 0.25rem;
}
.cs-other-item {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.9rem 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  border-left: 4px solid var(--theme-color-amber);
}
.cs-other-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.cs-other-icon {
  font-size: 1.3rem;
  color: var(--theme-color-amber);
}
.cs-other-title {
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-steel);
}
.cs-other-desc {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
}
.cs-other-desc code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  color: var(--theme-color-steel);
  font-size: 0.85em;
}
.cs-other-code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: var(--theme-color-slate);
  background: rgba(159, 169, 185, 0.08);
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  margin-top: 0.2rem;
}
</style>

<!--
L'import() dynamique n'est pas le seul moyen de faire du code splitting.

Entry points multiples : dans la config du bundler, on peut définir plusieurs
fichiers d'entrée. Chacun produit son propre chunk. C'est le pattern classique
des "multi-page apps" (MPA) — chaque page HTML a son propre JS.

[click 1] La config bundler : splitChunks dans Webpack, manualChunks dans
Vite/Rollup. Le bundler applique des règles automatiques : si un module dépasse
une certaine taille ou est partagé entre plusieurs entry points, il est extrait
dans un chunk séparé. C'est ce qui crée les vendor chunks automatiquement.

[click 2] Le route-based splitting des frameworks : Next.js, Nuxt, Remix
exploitent le filesystem. Chaque fichier dans pages/ ou app/ devient
automatiquement un chunk séparé. Pas besoin d'écrire import() manuellement —
le framework le fait pour toi sous le capot.

En résumé : import() est le mécanisme le plus explicite et universel, mais
les bundlers et frameworks offrent aussi des stratégies automatiques.
-->
