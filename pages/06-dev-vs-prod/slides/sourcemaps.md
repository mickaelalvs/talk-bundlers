---
layout: basic-title
---

::title::
Source maps : déboguer ce qui part en prod

::default::

<div class="sm-problem">
  Un stack trace de prod pointe vers <code>main-abc123.js:1:24578</code>.
</div>

<div class="sm-flow">
  <div class="sm-side sm-bundle">
    <div class="sm-label">bundle</div>
    <div class="sm-code">main-abc123.js</div>
    <div class="sm-loc">L1, col 24578</div>
  </div>
  <div v-click="1" class="sm-map">
    <div class="sm-map-label"><lucide-map class="sm-map-icon" /><span>.map</span></div>
    <div class="sm-arrow">→</div>
  </div>
  <div v-click="1" class="sm-side sm-source">
    <div class="sm-label">code source</div>
    <div class="sm-code">UserMenu.tsx</div>
    <div class="sm-loc">L42, col 18</div>
  </div>
</div>

<div v-click="2" class="sm-prod">
  <span class="note-chip"><lucide-lightbulb /></span>
  <span>En prod, la <code>.map</code> n'est pas servie au public. Elle est stockée ailleurs.</span>
</div>

<style>
.sm-problem {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  line-height: 1.6;
  margin-bottom: 2rem;
}
.sm-problem code,
.sm-prod code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(196, 81, 92, 0.12);
  color: var(--theme-color-raspberry-dark);
  padding: 0.1rem 0.5rem;
  border-radius: 6px;
  font-size: 0.9em;
}
.sm-prod code {
  background: rgba(81, 138, 184, 0.1);
  color: var(--theme-color-steel);
}
.sm-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.sm-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 1.5rem;
  background: white;
  border: 2px solid var(--theme-color-slate);
  border-radius: 12px;
  min-width: 200px;
}
.sm-bundle {
  border-color: var(--theme-color-raspberry);
}
.sm-source {
  border-color: var(--theme-color-olive);
}
.sm-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.sm-code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  font-weight: 700;
}
.sm-bundle .sm-code {
  color: var(--theme-color-raspberry-dark);
}
.sm-source .sm-code {
  color: var(--theme-color-olive-dark);
}
.sm-loc {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.78rem;
  color: var(--theme-color-slate);
}
.sm-map {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
}
.sm-map-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-amber);
}
.sm-arrow {
  font-family: "Paytone One", sans-serif;
  font-size: 1.5rem;
  color: var(--theme-color-amber);
}
.sm-prod {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  width: fit-content;
  margin: 0 auto;
  padding: 0.7rem 1.25rem;
  background: rgba(81, 138, 184, 0.1);
  --chip: var(--theme-color-steel);
  border-radius: 12px;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
</style>

<!--
Un stack trace de prod pointe vers un bundle minifié, illisible.

[click] La source map relie une position du bundle à une position du code source. C'est un fichier JSON : fichiers d'origine, noms avant renommage, positions encodées. Chaque outil de la chaîne (Babel ou SWC, bundler, minifier) produit sa map, et elles se composent.

[click] En prod, trois choix : exposée (le code source devient public), cachée (la map existe mais le bundle ne la référence pas), ou aucune. La pratique courante : cachée, envoyée à Sentry ou Datadog.

Testé : webpack avec devtool "hidden-source-map" et Vite avec build.sourcemap "hidden" produisent la .map sans commentaire sourceMappingURL dans le bundle. Avec "source-map" (webpack) ou true (Vite), le commentaire est présent.
-->
