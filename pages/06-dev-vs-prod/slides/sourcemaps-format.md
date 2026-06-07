---
layout: basic-title
---

::title::
Sourcemaps : comment c'est fait ?

::default::

<div class="smf-grid">

<div class="smf-col">

<div class="smf-stage">le fichier .map</div>

<MacWindow title="main.js.map">

```json
{
  "version": 3,
  "sources": ["UserMenu.tsx"],
  "sourcesContent": ["..."],
  "names": ["handleClick", "user"],
  "mappings": "AAAA,SAAS,WAAW,GAAG,CAAC,CAAC..."
}
```

</MacWindow>

<div class="smf-comment-block">
À la fin du bundle :
<code>//# sourceMappingURL=main.js.map</code>
</div>

</div>

<div class="smf-col">

<div class="smf-stage">les champs</div>

<div class="smf-fields">
  <div class="smf-field">
    <span class="smf-key">sources</span>
    <span class="smf-val">les fichiers d'origine</span>
  </div>
  <div class="smf-field">
    <span class="smf-key">names</span>
    <span class="smf-val">les noms avant renommage</span>
  </div>
  <div class="smf-field">
    <span class="smf-key">mappings</span>
    <span class="smf-val">positions encodées en <strong>VLQ base64</strong></span>
  </div>
  <div class="smf-field">
    <span class="smf-key">sourcesContent</span>
    <span class="smf-val">le code source embarqué (optionnel)</span>
  </div>
</div>

<div class="smf-pipeline">
  Chaque outil de la pipeline génère sa propre map et elles se composent :
  <div class="smf-chain">
    <span>Babel/SWC</span> + <span>bundler</span> + <span>minifier</span> = <strong>map finale</strong>
  </div>
</div>

</div>

</div>

<style scoped>
.smf-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.smf-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.smf-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
  text-align: left;
}
.smf-col :deep(pre) {
  text-align: left;
  margin: 0;
}
.smf-comment-block {
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
  background: rgba(255, 255, 255, 0.6);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 3px solid var(--theme-color-amber);
  text-align: left;
}
.smf-comment-block code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  color: var(--theme-color-steel);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
  display: inline-block;
  margin-top: 0.3rem;
}
.smf-fields {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  text-align: left;
}
.smf-field {
  display: flex;
  align-items: baseline;
  gap: 0.7rem;
  padding: 0.4rem 0.7rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 6px;
}
.smf-key {
  font-family: "JetBrains Mono", monospace;
  font-weight: 700;
  color: var(--theme-color-steel);
  min-width: 130px;
  font-size: 0.85rem;
}
.smf-val {
  color: var(--theme-color-charcoal);
}
.smf-val strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.smf-pipeline {
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(219, 153, 77, 0.1);
  border-left: 3px solid var(--theme-color-amber);
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 0.88rem;
  color: var(--theme-color-charcoal);
  line-height: 1.55;
  text-align: left;
}
.smf-chain {
  margin-top: 0.5rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.82rem;
}
.smf-chain span {
  background: rgba(81, 138, 184, 0.15);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  margin: 0 0.15rem;
  color: var(--theme-color-steel);
}
.smf-chain strong {
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
}
</style>

<!--
Le format simplifié à gauche, l'explication des champs à droite.

Détails sur les champs :
  - version : actuellement 3 (le standard depuis 2010 environ)
  - sources : un array des fichiers d'origine (avant transformation)
  - sourcesContent : le contenu des sources en clair (optionnel, mais
    souvent inclus pour faciliter le debug)
  - names : les identifiants originaux (avant minification)
  - mappings : la sauce secrète, en VLQ (Variable-Length Quantity) base64

Détail sur le VLQ : c'est un encodage compact où chaque segment représente
[colonne_dans_bundle, index_dans_sources, ligne_source, colonne_source,
index_dans_names]. Le ';' sépare les lignes, ',' sépare les segments dans
une ligne.

Exemple de mapping : "AAAA,SAAS,..."
  - AAAA = position 0 dans la ligne, fichier 0, ligne 0, colonne 0
  - SAAS = +9 colonnes, même fichier, même ligne, +9 colonnes source

C'est totalement illisible pour un humain, mais ultra compact et rapide
à parser pour les DevTools.

La composition : chaque étape de la pipeline génère sa map. Babel produit
une map A→B. Le bundler produit une map B→C. Terser produit C→D. Au final,
ces maps doivent être composées pour obtenir A→D. C'est le bundler qui
orchestre ça.

À l'oral : si on a le temps, expliquer VLQ. Sinon, juste mentionner que
c'est un encodage compact.
-->
