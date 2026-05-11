---
layout: basic-title
---

::title::
Le chunk commun

::default::

<div class="cs-common">
  <div class="cs-common-routes">
    <div class="cs-common-route">
      <span class="cs-common-route-name">/home</span>
      <span class="cs-common-route-deps">React, lodash, utils</span>
    </div>
    <div class="cs-common-route">
      <span class="cs-common-route-name">/dashboard</span>
      <span class="cs-common-route-deps">React, lodash, chart.js</span>
    </div>
  </div>
  <div v-click="1" class="cs-common-arrows">
    <div class="cs-common-arrow"></div>
    <div class="cs-common-arrow"></div>
  </div>
  <div v-click="1" class="cs-common-vendor">
    <div class="cs-common-vendor-card">
      <span class="cs-common-vendor-name">vendors.js</span>
      <span class="cs-common-vendor-contains">React + lodash</span>
    </div>
    <div class="cs-common-vendor-cache">
      <lucide-hard-drive class="cs-cache-icon" />
      <span>mis en cache une seule fois</span>
    </div>
  </div>
  <div v-click="2" class="cs-common-metaphor">
    <span class="cs-common-emoji">🧂</span>
    Les condiments restent sur la table — pas besoin de les mettre dans chaque assiette.
  </div>
</div>

<style>
.cs-common {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  padding-top: 0.5rem;
}
.cs-common-routes {
  display: flex;
  gap: 2rem;
}
.cs-common-route {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-top: 3px solid var(--theme-color-steel);
}
.cs-common-route-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--theme-color-charcoal);
}
.cs-common-route-deps {
  font-family: "Nunito", sans-serif;
  font-size: 0.75rem;
  color: var(--theme-color-slate);
}
.cs-common-arrows {
  display: flex;
  gap: 6rem;
}
.cs-common-arrow {
  width: 3px;
  height: 30px;
  background: var(--theme-color-amber);
  border-radius: 2px;
}
.cs-common-vendor {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.cs-common-vendor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.75rem 1.5rem;
  background: rgba(218, 165, 32, 0.08);
  border: 2px solid var(--theme-color-amber);
  border-radius: 12px;
}
.cs-common-vendor-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--theme-color-charcoal);
}
.cs-common-vendor-contains {
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
}
.cs-common-vendor-cache {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: #2e7d32;
}
.cs-cache-icon {
  font-size: 1rem;
  color: #2e7d32;
}
.cs-common-metaphor {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.15rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  background: rgba(218, 165, 32, 0.06);
  border-radius: 10px;
  margin-top: 0.5rem;
}
.cs-common-emoji {
  font-size: 1.8rem;
  line-height: 1;
}
</style>

<!--
Un aspect moins connu du code splitting : le chunk commun (aussi appelé
"vendor chunk" ou "shared chunk").

Le bundler est assez malin pour détecter que /home et /dashboard utilisent
tous les deux React et lodash. Au lieu de dupliquer ce code dans chaque chunk…

[click 1] …il l'extrait dans un fichier séparé (vendors.js) qui est mis en
cache par le navigateur. Quand l'utilisateur navigue de /home à /dashboard,
React n'est pas re-téléchargé — il est déjà en cache.

C'est automatique dans Webpack (splitChunks.chunks: 'all'), Vite/Rollup
(manualChunks ou la stratégie par défaut), et esbuild (splitting: true).

[click 2] La métaphore : les condiments (sel, poivre, huile) sont sur la table
une fois pour toutes, pas dans chaque assiette. C'est plus efficace et ça
évite la duplication.

Technique : le seuil par défaut dans Webpack est ~20 KB pour créer un chunk
commun. En dessous, le coût d'une requête HTTP supplémentaire dépasse le gain
du cache.
-->
