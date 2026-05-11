---
layout: basic-title
---

::title::
En prod, on les sert ou pas ?

::default::

<div class="sp-cards">

  <div class="sp-card sp-card-expose">
    <div class="sp-tag sp-tag-warn">exposées</div>
    <div class="sp-name">source-map</div>
    <div class="sp-desc">
      <code>//# sourceMappingURL=</code> dans le bundle, fichier <code>.map</code>
      servi publiquement.
    </div>
    <div class="sp-pro">✓ Debug facile depuis le DevTools du client</div>
    <div class="sp-con">✗ Ton code source est <strong>public</strong></div>
  </div>

  <div class="sp-card sp-card-hidden">
    <div class="sp-tag sp-tag-ok">cachées</div>
    <div class="sp-name">hidden-source-map</div>
    <div class="sp-desc">
      Pas de <code>sourceMappingURL</code> dans le bundle, mais le fichier
      <code>.map</code> existe (uploadé séparément).
    </div>
    <div class="sp-pro">✓ Code source pas exposé publiquement</div>
    <div class="sp-pro">✓ Toujours utilisable par tes outils (Sentry, etc.)</div>
  </div>

  <div class="sp-card sp-card-none">
    <div class="sp-tag sp-tag-none">pas du tout</div>
    <div class="sp-name">no source-map</div>
    <div class="sp-desc">
      Pas de fichier <code>.map</code> en prod, pour rien ni personne.
    </div>
    <div class="sp-con">✗ Debug en prod : impossible</div>
    <div class="sp-pro">✓ Code source 100% privé</div>
  </div>

</div>

<div class="sp-best">
  💡 <strong>Best practice</strong> : <code>hidden-source-map</code> + upload vers Sentry / Datadog / autre outil de monitoring
</div>

<style>
.sp-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
}
.sp-card {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1rem 1.2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  text-align: left;
}
.sp-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  align-self: flex-start;
}
.sp-tag-warn {
  background: rgba(219, 153, 77, 0.2);
  color: var(--theme-color-amber);
}
.sp-tag-ok {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
}
.sp-tag-none {
  background: rgba(159, 169, 185, 0.2);
  color: var(--theme-color-slate);
}
.sp-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
  color: var(--theme-color-steel);
  font-weight: 700;
}
.sp-desc {
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
}
.sp-desc code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
}
.sp-pro, .sp-con {
  font-family: "Nunito", sans-serif;
  font-size: 0.78rem;
  line-height: 1.45;
}
.sp-pro {
  color: #2e7d32;
}
.sp-con {
  color: #c0392b;
}
.sp-pro strong, .sp-con strong {
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
}
.sp-best {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  padding: 0.75rem 1rem;
  background: rgba(219, 153, 77, 0.1);
  border-radius: 10px;
  border-left: 3px solid var(--theme-color-amber);
  max-width: 720px;
  margin: 0 auto;
}
.sp-best strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.sp-best code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  color: var(--theme-color-steel);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>

<!--
Les 3 stratégies vraiment utilisées en prod :

1. EXPOSÉES (source-map dans Webpack/Vite) :
   Le fichier .map est servi publiquement. N'importe qui peut récupérer
   ton code source en clair via DevTools. Très pratique pour la team mais
   problème de sécurité : on a déjà vu des fuites de code interne (variables
   d'env, secrets, logique métier) à cause de ça.

2. CACHÉES (hidden-source-map) :
   Le fichier .map existe mais la référence (//# sourceMappingURL=) n'est
   pas dans le bundle. Personne ne sait qu'il existe sauf si on lui dit.
   Tu peux l'uploader vers Sentry/Datadog pour qu'ils décodent les stack
   traces des erreurs prod, sans l'exposer au public.

3. PAS DU TOUT :
   Aucun .map généré. Tu sacrifies le debug pour la sécurité absolue.
   Rare en pratique parce que ça empêche tout outil de monitoring de
   fonctionner correctement.

Best practice : hidden-source-map. Tu uploades ta map vers ton outil de
monitoring d'erreurs (Sentry / Datadog / Bugsnag / Rollbar) au moment du
build, et tu déploies juste le bundle sans la map ni la référence. Quand
une erreur arrive en prod, Sentry décode le stack trace avec la map qu'il
a en interne et te montre ton vrai code.

Webpack config exemple : devtool: 'hidden-source-map'
Vite : build.sourcemap: 'hidden'
-->
