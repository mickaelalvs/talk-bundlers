---
layout: basic-title
---

::title::
Avant / après

::default::

<div class="cs-bilan-wrap">
  <div class="cs-bilan-card cs-bilan-before">
    <div class="cs-bilan-stage">avant</div>
    <div class="cs-bilan-bundle">
      <div class="cs-bilan-bundle-name">bundle.js</div>
      <div class="cs-bilan-bundle-size">~320 KB</div>
      <div class="cs-bilan-bundle-note">tout dans une seule assiette</div>
    </div>
  </div>
  <div v-click="1" class="cs-bilan-shake">🍽️</div>
  <div v-click="1" class="cs-bilan-card cs-bilan-after">
    <div class="cs-bilan-stage">après</div>
    <div class="cs-bilan-bundle">
      <div class="cs-bilan-chunks">
        <span class="cs-bilan-chunk">main.js <em>80 KB</em></span>
        <span class="cs-bilan-chunk">vendors.js <em>45 KB</em></span>
        <span class="cs-bilan-chunk">+ chunks à la demande</span>
      </div>
      <div class="cs-bilan-bundle-note">chargement initial : 125 KB</div>
    </div>
  </div>
</div>

<div v-click="2" class="cs-bilan-checklist">
  <div class="cs-bilan-check-title">Ce qu'on gagne :</div>
  <div class="cs-bilan-check-list">
    <span>✓ Chargement initial plus rapide</span>
    <span>✓ Cache granulaire (un seul chunk change → un seul re-téléchargé)</span>
    <span>✓ Navigation fluide avec prefetch</span>
  </div>
</div>

<div v-click="3" class="cs-bilan-thresholds">
  <div class="cs-bilan-threshold-item">
    <span class="cs-bilan-threshold-bad">&lt; 20 KB</span>
    <span>trop petit — l'overhead HTTP dépasse le gain</span>
  </div>
  <div class="cs-bilan-threshold-item">
    <span class="cs-bilan-threshold-good">20 – 150 KB</span>
    <span>sweet spot par chunk</span>
  </div>
  <div class="cs-bilan-threshold-item">
    <span class="cs-bilan-threshold-bad">&gt; 150 KB</span>
    <span>trop gros — à re-découper</span>
  </div>
</div>

<style>
.cs-bilan-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  padding-top: 0.5rem;
}
.cs-bilan-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 260px;
  padding: 1.25rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.cs-bilan-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.cs-bilan-before .cs-bilan-stage {
  color: var(--theme-color-amber);
}
.cs-bilan-after .cs-bilan-stage {
  color: #2e7d32;
}
.cs-bilan-bundle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.cs-bilan-bundle-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  font-weight: 700;
}
.cs-bilan-bundle-size {
  font-family: "Paytone One", sans-serif;
  font-size: 1.6rem;
  color: var(--theme-color-steel);
}
.cs-bilan-bundle-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-style: italic;
  text-align: center;
}
.cs-bilan-chunks {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
}
.cs-bilan-chunk em {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
}
.cs-bilan-shake {
  font-size: 3rem;
  line-height: 1;
}
.cs-bilan-checklist {
  margin-top: 2rem;
  text-align: center;
}
.cs-bilan-check-title {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  margin-bottom: 0.75rem;
}
.cs-bilan-check-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.cs-bilan-thresholds {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
}
.cs-bilan-threshold-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
}
.cs-bilan-threshold-bad {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--theme-color-salmon);
}
.cs-bilan-threshold-good {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: #2e7d32;
}
</style>

<!--
[click 1] Le résumé visuel : on passe d'un seul bundle de 320 KB à un
chargement initial de 125 KB (main + vendors), avec le reste chargé à la
demande. C'est presque 60% de moins sur le premier chargement.

[click 2] Les trois bénéfices concrets :
- Chargement initial plus rapide : moins de JS à parser et exécuter au
  démarrage → meilleur LCP et TTI.
- Cache granulaire : si tu changes une page, seul son chunk est invalidé.
  Les vendors et les autres pages restent en cache.
- Navigation fluide : combiné avec le prefetch, les transitions entre pages
  sont quasi-instantanées.

[click 3] Les seuils de taille — des repères concrets pour l'audience :
- < 20 KB : pas la peine de séparer, le coût d'une requête HTTP supplémentaire
  (headers, scheduling) dépasse le gain du cache séparé. C'est le défaut
  de Webpack (minSize: 20000).
- 20-150 KB : le sweet spot. Assez gros pour justifier une requête, assez
  petit pour un chargement rapide.
- > 150 KB : à re-découper. Un chunk de cette taille bloque le parsing et
  l'exécution, et contient probablement des choses dont on n'a pas besoin
  immédiatement.

→ Transition vers la minification, la dernière étape de la cuisson.
-->
