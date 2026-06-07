---
layout: basic-title
---

::title::
Le graphe gère deux pièges

::default::

<div class="cs2-grid">

<div class="cs2-card">
<div class="cs2-tag">Dépendances circulaires</div>
<div class="cs2-diagram">
<span class="dep-chip cs2-file">a.js</span>
<span class="cs2-bi">⇄</span>
<span class="dep-chip cs2-file">b.js</span>
</div>
<div class="cs2-text">Le bundler retient ce qu'il a <strong>déjà visité</strong>, pas de boucle infinie.</div>
</div>

<div v-click class="cs2-card">
<div class="cs2-tag">Fichiers partagés</div>
<div class="cs2-diagram cs2-diagram-col">
<div class="cs2-row"><span class="dep-chip cs2-file">a.js</span><span class="dep-chip cs2-file">b.js</span></div>
<div class="cs2-arrows">↘&nbsp;&nbsp;&nbsp;↙</div>
<span class="dep-chip cs2-file cs2-file-amber">utils.js</span>
</div>
<div class="cs2-text">Il n'est inclus <strong>qu'une seule fois</strong> dans le bundle, pas de doublon.</div>
</div>

</div>

<style scoped>
.cs2-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding-top: 2rem;
}
.cs2-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  border: 2px solid var(--theme-color-steel);
}
.cs2-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-color-steel);
}
.cs2-diagram {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 5.5rem;
}
.cs2-diagram-col {
  flex-direction: column;
  gap: 0.4rem;
}
.cs2-row {
  display: flex;
  gap: 1.5rem;
}
.cs2-file {
  font-size: 1rem;
  color: #b8860b;
}
.cs2-file-amber {
  color: #b8860b;
}
.cs2-bi {
  font-size: 1.8rem;
  color: var(--theme-color-amber);
  font-weight: 700;
}
.cs2-arrows {
  color: var(--theme-color-slate);
  font-size: 1.3rem;
  line-height: 1;
}
.cs2-text {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  line-height: 1.5;
  text-wrap: balance;
}
.cs2-text strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
Deux propriétés essentielles du graphe, souvent oubliées :

[base] Dépendances circulaires : a importe b et b importe a. Naïvement, le
bundler bouclerait à l'infini. En réalité il tient une liste des modules déjà
visités → il ne re-traite pas un module connu. ESM gère même les cycles au
runtime via les "live bindings".

[click] Fichiers partagés : si utils.js est importé par a ET b, il n'apparaît
qu'UNE fois dans le bundle. Le graphe dédoublonne par nature (un nœud = un
module), donc pas de code dupliqué. C'est aussi la base du code splitting :
un module partagé peut être extrait dans un chunk commun.
-->
