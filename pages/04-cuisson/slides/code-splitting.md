---
layout: basic-title
---

::title::
Code splitting

::default::

<div class="cs-intro">Plutôt qu'un seul gros fichier, on découpe en <strong>morceaux chargés à la demande</strong>.</div>

<div class="cs-flow">
<div class="cs-mono">
<div class="cs-block cs-block-mono">bundle.js<br /><span class="cs-size">1.2 Mo</span></div>
<div class="cs-mono-label">tout en un</div>
</div>
<div v-click="1" class="cs-arrow">→</div>
<div v-click="1" class="cs-chunks">
<div class="cs-chunk cs-chunk-eager">main.js<br /><span class="cs-size">180 Ko</span><span class="cs-tag">au démarrage</span></div>
<div class="cs-chunk">dashboard.js<br /><span class="cs-size">…</span><span class="cs-tag cs-tag-lazy">à la demande</span></div>
<div class="cs-chunk">settings.js<br /><span class="cs-size">…</span><span class="cs-tag cs-tag-lazy">à la demande</span></div>
</div>
</div>

<div v-click="2" class="cs-trigger">Le point de découpe = <code>import()</code> dynamique — routes, <code>React.lazy()</code>…</div>

<div v-click="3" class="cs-benefit">L'utilisateur ne télécharge que le strict nécessaire au démarrage. Le reste arrive quand il en a besoin.</div>

<style scoped>
.cs-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 2rem;
}
.cs-intro strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.cs-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.cs-mono {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.cs-block {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  text-align: center;
  line-height: 1.5;
  border-radius: 10px;
  padding: 1.2rem 1.5rem;
}
.cs-block-mono {
  background: rgba(239, 83, 80, 0.12);
  color: #c0392b;
  border: 1px solid rgba(239, 83, 80, 0.3);
}
.cs-mono-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.cs-arrow {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--theme-color-amber);
}
.cs-chunks {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.cs-chunk {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  line-height: 1.45;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--theme-color-mist);
  border-radius: 8px;
  padding: 0.5rem 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.cs-chunk-eager {
  border-color: var(--theme-color-steel);
  background: rgba(81, 138, 184, 0.08);
}
.cs-size {
  color: var(--theme-color-slate);
  font-size: 0.72rem;
}
.cs-tag {
  margin-top: 0.2rem;
  font-family: "Paytone One", sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-color-steel);
}
.cs-tag-lazy {
  color: var(--theme-color-amber);
}
.cs-trigger {
  margin-top: 2rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.cs-trigger code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.12);
  color: var(--theme-color-steel);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.88em;
}
.cs-benefit {
  margin-top: 1rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  font-style: italic;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<!--
La 3e technique annoncée dans "Au menu" : le code splitting.

L'idée : au lieu d'un seul gros bundle que l'utilisateur télécharge en entier
au chargement, on découpe en chunks. Seul l'essentiel (main) part au démarrage ;
le reste (pages, features) est chargé à la demande.

[click 1] Le découpage : un gros bundle → plusieurs chunks. main.js eager,
le reste lazy.

[click 2] Le déclencheur : c'est l'import() dynamique qui crée un point de
découpe. Routes, React.lazy(), etc. (cf. la slide imports dynamiques du
tree-shaking).

[click 3] Le bénéfice : temps de chargement initial réduit. C'est le cœur du
bundler qui fait ça (étape 5), pas une brique externe.
-->
