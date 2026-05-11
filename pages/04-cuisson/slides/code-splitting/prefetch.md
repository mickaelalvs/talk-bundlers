---
layout: basic-title
---

::title::
Anticiper les prochains plats

::default::

<div class="cs-prefetch">
  <div class="cs-prefetch-concept">
    <div class="cs-prefetch-card">
      <lucide-zap class="cs-prefetch-icon" />
      <div class="cs-prefetch-text">
        <strong>Prefetch</strong> : télécharger un chunk <em>avant</em> que l'utilisateur en ait besoin
      </div>
    </div>
    <div class="cs-prefetch-metaphor">
      Le serveur prépare déjà le plat suivant pendant que tu manges l'entrée.
    </div>
  </div>
  <div v-click="1" class="cs-prefetch-examples">
    <div class="cs-prefetch-example">
      <span class="cs-prefetch-label">Webpack</span>
      <code>import(/* webpackPrefetch: true */ './Dashboard')</code>
    </div>
    <div class="cs-prefetch-example">
      <span class="cs-prefetch-label">Vite</span>
      <span class="cs-prefetch-desc">Prefetch automatique des route chunks</span>
    </div>
    <div class="cs-prefetch-example">
      <span class="cs-prefetch-label">HTML</span>
      <code>&lt;link rel="prefetch" href="/dashboard.js"&gt;</code>
    </div>
  </div>
  <div v-click="2" class="cs-prefetch-nuance">
    <lucide-alert-circle class="cs-nuance-icon" />
    <span><strong>prefetch</strong> = priorité basse (idle time) · <strong>preload</strong> = priorité haute (immédiat)</span>
  </div>
</div>

<style>
.cs-prefetch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding-top: 0.25rem;
}
.cs-prefetch-concept {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.cs-prefetch-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-left: 4px solid var(--theme-color-amber);
}
.cs-prefetch-icon {
  font-size: 1.5rem;
  color: var(--theme-color-amber);
}
.cs-prefetch-text {
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
}
.cs-prefetch-text strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-weight: normal;
}
.cs-prefetch-metaphor {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
.cs-prefetch-examples {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 620px;
}
.cs-prefetch-example {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(159, 169, 185, 0.06);
  border-radius: 8px;
}
.cs-prefetch-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
  min-width: 70px;
}
.cs-prefetch-example code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  color: var(--theme-color-charcoal);
}
.cs-prefetch-desc {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
}
.cs-prefetch-nuance {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
  padding: 0.6rem 1rem;
  background: rgba(232, 119, 96, 0.06);
  border-radius: 10px;
  border-left: 3px solid var(--theme-color-salmon);
}
.cs-nuance-icon {
  font-size: 1.1rem;
  color: var(--theme-color-salmon);
  flex-shrink: 0;
}
.cs-prefetch-nuance strong {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85em;
  color: var(--theme-color-steel);
  font-weight: normal;
}
</style>

<!--
Le code splitting c'est bien, mais on peut aller plus loin : anticiper.

Le prefetch permet de télécharger un chunk pendant que le navigateur est idle
(= ne fait rien). L'utilisateur ne le sent pas, et quand il navigue, le chunk
est déjà là → navigation instantanée.

[click 1] Les trois manières de le faire :
- Webpack : un magic comment dans l'import(). Le bundler génère automatiquement
  un <link rel="prefetch"> dans le HTML.
- Vite : c'est automatique pour les route chunks ! Vite injecte des prefetch
  pour toutes les routes liées à la page courante.
- En HTML brut : on peut aussi le faire manuellement avec un <link>.

[click 2] La nuance importante :
- prefetch = basse priorité, téléchargé quand le navigateur n'a rien à faire.
  Idéal pour les "prochaines pages probables".
- preload = haute priorité, téléchargé immédiatement. Pour les ressources
  critiques de la page courante (pas pour le splitting en général).

Ne pas confondre les deux, sinon on surcharge le réseau au mauvais moment.
-->
