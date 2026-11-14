---
layout: basic-title
---

::title::
Comment le bundler décide ?

::default::

<div class="how-intro">
Le tree-shaking <strong>parcourt</strong> le graphe de dépendances (partie 02),<br />
construit grâce à la résolution (partie 03).
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

<div v-click class="how-step">
  Tout ce qui n'a pas été <strong>atteint</strong> disparaît du bundle
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
  background: rgba(138, 154, 75, 0.12);
  color: var(--theme-color-olive-dark);
}
.how-box-bad {
  background: rgba(196, 81, 92, 0.12);
  color: var(--theme-color-raspberry-dark);
  text-decoration: line-through;
  text-decoration-color: rgba(192, 57, 43, 0.4);
}
.how-step {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0.7rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border: 2px solid var(--theme-color-amber);
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  text-align: center;
}
.how-step strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-steel);
  font-weight: normal;
}
</style>

<!--
Le bundler part de l'entry point et suit les imports, dans ton code comme dans tes libs. C'est le graphe de la partie 02, bâti grâce à la résolution de la partie 03.

[click] Ce qu'il n'atteint pas disparaît. Ça marche parce qu'en ESM les exports ont des noms statiques. En CJS rien n'est prouvable, il garde tout (cf. bundle-comparison, partie 03).

Transition : lodash-es est déjà dans le graphe, "juste debounce". Vérifions avec une vraie lib.
-->
