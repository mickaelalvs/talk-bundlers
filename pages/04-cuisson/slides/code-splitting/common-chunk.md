---
layout: basic-title
---

::title::
Ce dont on a toujours besoin

::default::

<div class="cs-common">
<div class="cs-condiments">
<svg class="cs-shaker" viewBox="0 0 60 90" aria-hidden="true"><path class="cs-shaker-cap cs-salt-cap" d="M14 26 Q14 6 30 6 Q46 6 46 26 Z" /><circle class="cs-shaker-hole" cx="24" cy="17" r="1.8" /><circle class="cs-shaker-hole" cx="30" cy="13" r="1.8" /><circle class="cs-shaker-hole" cx="36" cy="17" r="1.8" /><rect class="cs-shaker-cap cs-salt-cap" x="11" y="26" width="38" height="7" rx="3" /><path class="cs-shaker-body cs-salt-body" d="M13 33 H47 L52 78 Q52 86 44 86 H16 Q8 86 8 78 Z" /><path class="cs-shaker-shine" d="M18 42 L20 76" /></svg>
<svg class="cs-shaker" viewBox="0 0 60 90" aria-hidden="true"><path class="cs-shaker-cap cs-pepper-cap" d="M14 26 Q14 6 30 6 Q46 6 46 26 Z" /><circle class="cs-shaker-hole" cx="24" cy="17" r="1.8" /><circle class="cs-shaker-hole" cx="30" cy="13" r="1.8" /><circle class="cs-shaker-hole" cx="36" cy="17" r="1.8" /><rect class="cs-shaker-cap cs-pepper-cap" x="11" y="26" width="38" height="7" rx="3" /><path class="cs-shaker-body cs-pepper-body" d="M13 33 H47 L52 78 Q52 86 44 86 H16 Q8 86 8 78 Z" /><path class="cs-shaker-shine" d="M18 42 L20 76" /></svg>
<div class="cs-condiments-text">Sur la table, pas avec chaque assiette</div>
</div>
<div class="cs-common-graph">
<div v-click="1" class="cs-common-route">
<span class="cs-common-file"><lucide-file-code class="cs-common-icon" />/home</span>
<span class="cs-common-route-deps">React, lodash, utils</span>
</div>
<div v-click="1" class="cs-common-route">
<span class="cs-common-file"><lucide-file-code class="cs-common-icon" />/dashboard</span>
<span class="cs-common-route-deps">React, lodash, chart.js</span>
</div>
<div v-click="2" class="cs-common-arrow cs-common-arrow-left"><lucide-arrow-down /></div>
<div v-click="2" class="cs-common-arrow cs-common-arrow-right"><lucide-arrow-down /></div>
<div v-click="2" class="cs-common-vendor">
<div class="cs-common-vendor-card">
<span class="cs-common-file"><lucide-file-code class="cs-common-icon cs-common-icon-vendor" />vendors.js</span>
<span class="cs-common-route-deps">React + lodash</span>
</div>
<div class="cs-common-vendor-cache"><lucide-hard-drive class="cs-cache-icon" /><span>mis en cache une seule fois</span></div>
</div>
</div>
</div>

<style>
.cs-common {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding-top: 0.5rem;
}
.cs-condiments {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.cs-shaker {
  height: 5rem;
  width: auto;
}
.cs-shaker-cap {
  stroke: var(--theme-color-charcoal);
  stroke-width: 2;
  stroke-linejoin: round;
}
.cs-salt-cap {
  fill: var(--theme-color-steel);
}
.cs-pepper-cap {
  fill: var(--theme-color-amber);
}
.cs-shaker-body {
  stroke: var(--theme-color-charcoal);
  stroke-width: 2;
  stroke-linejoin: round;
}
.cs-salt-body {
  fill: var(--theme-color-white);
}
.cs-pepper-body {
  fill: var(--theme-color-charcoal);
}
.cs-shaker-hole {
  fill: var(--theme-color-white);
  opacity: 0.8;
}
.cs-shaker-shine {
  fill: none;
  stroke: var(--theme-color-mist);
  stroke-width: 3;
  stroke-linecap: round;
  opacity: 0.8;
}
.cs-condiments-text {
  margin-left: 0.8rem;
  font-family: "Nunito", sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--theme-color-charcoal);
}
.cs-common-graph {
  display: grid;
  grid-template-columns: repeat(2, 14rem);
  justify-content: center;
  justify-items: center;
  column-gap: 2rem;
  row-gap: 0.6rem;
}
.cs-common-route {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  padding: 0.7rem 1rem;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--theme-color-steel);
}
.cs-common-file {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--theme-color-charcoal);
}
.cs-common-icon {
  font-size: 1.2rem;
  color: var(--theme-color-steel);
}
.cs-common-icon-vendor {
  color: var(--theme-color-amber);
}
.cs-common-route-deps {
  font-family: "Nunito", sans-serif;
  font-size: 0.78rem;
  color: var(--theme-color-slate);
}
.cs-common-arrow {
  font-size: 1.8rem;
  line-height: 1;
  color: var(--theme-color-amber);
}
.cs-common-arrow-left {
  transform: translateX(3rem) rotate(-40deg);
}
.cs-common-arrow-right {
  transform: translateX(-3rem) rotate(40deg);
}
.cs-common-vendor {
  grid-column: 1 / 3;
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
  padding: 0.7rem 1.5rem;
  background: rgba(219, 153, 77, 0.1);
  border: 2px solid var(--theme-color-amber);
  border-radius: 12px;
}
.cs-common-vendor-cache {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-olive-dark);
}
.cs-cache-icon {
  font-size: 1.1rem;
  color: var(--theme-color-olive-dark);
}
</style>

<!--
Les condiments restent sur la table, pas besoin de les mettre dans chaque
assiette. Le code qu'on utilise partout, c'est pareil : on le sert une fois.

[click] Deux pages, /home et /dashboard. Elles utilisent toutes les deux React
et lodash. Au lieu de dupliquer ce code dans chaque chunk...

[click] ...le bundler l'extrait dans un fichier séparé (vendors.js), mis en
cache par le navigateur. Quand l'utilisateur navigue de /home à /dashboard,
React n'est pas re-téléchargé, il est déjà en cache.

C'est automatique dans Webpack (splitChunks.chunks: 'all'), Vite/Rollup
(manualChunks ou la stratégie par défaut) et esbuild (splitting: true).

Le seuil par défaut dans Webpack est ~20 KB pour créer un chunk commun. En
dessous, le coût d'une requête HTTP supplémentaire dépasse le gain du cache.
-->
