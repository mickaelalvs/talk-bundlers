---
layout: basic-title
---

::title::
Comment le bundler décide ?

::default::

<div class="how-intro">
Souviens-toi du graphe de dépendances (partie 02).<br />
Le tree-shaking, c'est <strong>le même graphe</strong>, appliqué aux exports.
</div>

<div class="how-graph">
  <div class="how-entry">
    <div class="how-entry-name">main.ts</div>
    <div class="how-entry-tag">entry</div>
  </div>

  <div class="how-imports">imports →</div>

  <div class="how-tracks">
    <div class="how-track">
      <div class="how-track-label">ton code</div>
      <div class="how-box how-box-good">utils.ts ✓</div>
      <div class="how-box how-box-good">api.ts ✓</div>
      <div class="how-box how-box-bad">orphan.ts ✗</div>
    </div>
    <div class="how-track">
      <div class="how-track-label">tes libs</div>
      <div class="how-box how-box-good">
        lodash-es ✓
        <span class="how-box-detail">juste debounce</span>
      </div>
      <div class="how-box how-box-bad">moment ✗</div>
    </div>
  </div>
</div>

<div class="how-steps">
  <div v-click="1" class="how-step">
    <div class="how-num">1</div>
    <div>Le bundler part de ton <strong>entry point</strong></div>
  </div>
  <div v-click="2" class="how-step">
    <div class="how-num">2</div>
    <div>Il suit chaque <code>import</code> statique, dans ton code <em>et</em> dans tes libs</div>
  </div>
  <div v-click="3" class="how-step">
    <div class="how-num">3</div>
    <div>Tout ce qui n'a pas été <strong>atteint</strong> disparaît du bundle</div>
  </div>
</div>

<style>
.how-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  margin-bottom: 1.2rem;
}
.how-intro strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.how-graph {
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 720px;
  margin: 0 auto 1.5rem;
}
.how-entry {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(81, 138, 184, 0.15);
  border: 2px solid var(--theme-color-steel);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
}
.how-entry-name {
  font-family: "JetBrains Mono", monospace;
  color: var(--theme-color-steel);
  font-weight: 700;
  font-size: 0.95rem;
}
.how-entry-tag {
  font-size: 0.65rem;
  font-family: "Paytone One", sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.how-imports {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-amber);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.how-tracks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.how-track {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.how-track-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  margin-bottom: 0.15rem;
}
.how-box {
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
.how-box-detail {
  font-size: 0.7rem;
  font-family: "Nunito", sans-serif;
  font-style: italic;
  font-weight: 400;
  opacity: 0.75;
}
.how-box-good {
  background: rgba(76, 175, 80, 0.12);
  color: #2e7d32;
}
.how-box-bad {
  background: rgba(239, 83, 80, 0.12);
  color: #c0392b;
  text-decoration: line-through;
  text-decoration-color: rgba(192, 57, 43, 0.4);
}
.how-steps {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}
.how-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.55rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border-left: 3px solid var(--theme-color-amber);
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  text-align: left;
}
.how-num {
  font-family: "Paytone One", sans-serif;
  font-size: 1.4rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
  width: 1.5rem;
  text-align: center;
}
.how-step strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-weight: normal;
}
.how-step em {
  font-style: italic;
  color: var(--theme-color-amber);
}
.how-step code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  font-size: 0.85em;
}
</style>

<!--
Le mécanisme central : reachability analysis depuis l'entry point.
Cross-référence directe au graphe de dépendances de la partie 02.

Le visuel montre les deux côtés :
  TON CODE              TES LIBS
  ✓ utils.ts            ✓ lodash-es (juste debounce)
  ✓ api.ts              ✗ moment (jamais importée)
  ✗ orphan.ts

Le mécanisme est identique. Pas de différence entre ton code et les libs :
le bundler suit les imports, point.

[click 1] Étape 1 : entry point.
[click 2] Étape 2 : il suit les imports, dans ton code ET dans tes libs.
[click 3] Étape 3 : ce qui n'est pas atteignable disparaît.

→ Slide suivante (Quiz) : on teste la compréhension avec le cas concret.
-->
