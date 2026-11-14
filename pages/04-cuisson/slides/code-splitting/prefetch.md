---
layout: basic-title
---

::title::
Anticiper les prochains plats

::default::

<div class="cs-prefetch">
<div v-click="1" class="cs-vs">
<div class="cs-vs-card cs-vs-prefetch">
<div class="cs-vs-head"><lucide-hourglass class="cs-vs-icon" /><code>prefetch</code><span class="cs-vs-for">page suivante, priorité basse</span></div>
<div class="cs-vs-row"><span class="cs-vs-label">Idée</span><span>télécharger avant d'en avoir besoin</span></div>
<div class="cs-vs-row"><span class="cs-vs-label">Exemple</span><span>le chunk du dashboard</span></div>
<div class="cs-vs-row"><span class="cs-vs-label">Risque</span><span>data gaspillée si on n'y va pas</span></div>
</div>
<div class="cs-vs-badge">VS</div>
<div class="cs-vs-card cs-vs-preload">
<div class="cs-vs-head"><lucide-rocket class="cs-vs-icon" /><code>preload</code><span class="cs-vs-for">page en cours, priorité haute</span></div>
<div class="cs-vs-row"><span class="cs-vs-label">Idée</span><span>télécharger tout de suite</span></div>
<div class="cs-vs-row"><span class="cs-vs-label">Exemple</span><span>la police du titre</span></div>
<div class="cs-vs-row"><span class="cs-vs-label">Risque</span><span>ralentit la page si pas critique</span></div>
</div>
</div>
<div v-click="2" class="cs-prefetch-when">
<div class="cs-prefetch-when-title">Quand lancer le prefetch</div>
<div class="cs-prefetch-cases">
<div class="cs-case" style="--i: 0">
<span class="cs-case-chip"><lucide-file-code /></span>
<span class="cs-case-when">Au chargement de la page</span>
</div>
<div class="cs-case" style="--i: 1">
<span class="cs-case-chip"><lucide-eye /></span>
<span class="cs-case-when">Quand le lien est visible</span>
</div>
<div class="cs-case" style="--i: 2">
<span class="cs-case-chip"><lucide-mouse-pointer-2 /></span>
<span class="cs-case-when">Au survol du lien</span>
</div>
<div class="cs-case" style="--i: 3">
<span class="cs-case-chip"><lucide-crosshair /></span>
<span class="cs-case-when">Quand la souris s'en approche</span>
</div>
</div>
</div>
</div>

<style>
.cs-prefetch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding-top: 0.5rem;
}
.cs-prefetch-cases {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  width: 100%;
  max-width: 820px;
}
.cs-case {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem 0.8rem;
  background: white;
  border: 2px solid var(--theme-color-steel);
  border-radius: 14px;
  text-align: center;
}
.cs-prefetch-when:not(.slidev-vclick-hidden) .cs-case {
  animation: cs-case-in 0.45s ease-out both;
  animation-delay: calc(var(--i) * 0.35s);
}
@keyframes cs-case-in {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.cs-case-chip {
  display: grid;
  place-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 12px;
  background: rgba(219, 153, 77, 0.15);
  color: var(--theme-color-amber);
  font-size: 1.5rem;
}
.cs-case-when {
  font-family: "Paytone One", sans-serif;
  font-size: 0.95rem;
  line-height: 1.3;
  text-wrap: balance;
  color: var(--theme-color-charcoal);
}
.cs-vs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 1rem;
  width: 100%;
  max-width: 860px;
}
.cs-vs-badge {
  align-self: center;
  display: grid;
  place-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--theme-color-mist);
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-slate);
}
.cs-prefetch-when {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 820px;
}
.cs-prefetch-when-title {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  text-align: left;
}
.cs-vs-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem 1.1rem;
  background: white;
  border-radius: 14px;
  text-align: left;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
}
.cs-vs-preload {
  border: 2px solid var(--theme-color-amber);
  --vs-color: var(--theme-color-amber);
}
.cs-vs-prefetch {
  border: 2px solid var(--theme-color-steel);
  --vs-color: var(--theme-color-steel);
}
.cs-vs-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.2rem;
}
.cs-vs-icon {
  font-size: 1.3rem;
  color: var(--vs-color);
}
.cs-vs-head code {
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vs-color);
}
.cs-vs-for {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--theme-color-slate);
}
.cs-vs-row {
  display: grid;
  grid-template-columns: 4.2rem 1fr;
  align-items: baseline;
}
.cs-vs-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
</style>

<!--
Le code splitting c'est bien, mais on peut aller plus loin : anticiper.

[click] Deux balises HTML du navigateur, pas propres au code splitting.
prefetch : une ressource pour la prochaine navigation, priorité basse, au
repos (le chunk du dashboard). Risque : de la data gaspillée si l'utilisateur
n'y va pas, mais il ne gêne pas la page en cours. preload : une ressource dont
la page en cours a besoin tout de suite, priorité haute (la police du titre).
Risque : s'il n'est pas vraiment critique, il prend la bande passante du reste
et ralentit la page. Pour du code splitting, on utilise prefetch.

[click] Reste à choisir quand lancer le prefetch, du plus tôt au plus précis.
Les quatre cas arrivent l'un après l'autre.

Au chargement de la page. Webpack : le commentaire /* webpackPrefetch: true */
dans l'import(). Testé : Webpack ajoute au runtime un <link rel="prefetch">
dans le head (pas dans le HTML). Testé avec Vite : rien de tel, pas de
prefetch automatique des routes. À la main : un <link>.

Quand le lien est visible. React Router (prefetch="viewport") et Astro
(data-astro-prefetch="viewport"). On charge tout ce qui est à l'écran, même ce
que personne ne clique. Utile sur mobile, où le survol n'existe pas.

Au survol. React Router prefetch="intent" (survol ou focus clavier), Astro
stratégie hover (par défaut, avec 80 ms de délai). On ne charge que ce que
l'utilisateur regarde vraiment.

Quand la souris s'en approche. ForesightJS extrapole la trajectoire du curseur
et lance le prefetch avant que la souris arrive. Il gagne les 100 à 200 ms
entre le début du mouvement et le survol. Il suit aussi Tab et le sens du
scroll. Rien de testé sur la démo pour ces trois derniers cas, c'est la doc.
-->
