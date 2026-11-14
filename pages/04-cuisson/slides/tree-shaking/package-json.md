---
layout: basic-title
---

::title::
Pourquoi cette différence ? Leur package.json

::default::

<div class="pj-intro">
Même code source, packaging différent.
</div>

<div class="pj-grid">

<div class="pj-col">

<div class="pj-stage pj-stage-bad">lodash</div>

<MacWindow title="package.json">

```json
{
  "name": "lodash",
  "main": "lodash.js"
}
```

</MacWindow>

<div class="pj-explain pj-explain-bad">
<span class="note-chip"><lucide-x /></span>
<span>→ Le bundler tombe sur du CJS et ne retire rien.</span>
</div>

</div>

<div class="pj-col">

<div class="pj-stage pj-stage-good">lodash-es</div>

<MacWindow title="package.json">

```json
{
  "name": "lodash-es",
  "main": "lodash.js",
  "module": "lodash.js",
  "sideEffects": false
}
```

</MacWindow>

<div class="pj-explain pj-explain-good">
<span class="note-chip"><lucide-check /></span>
<span>→ Le bundler lit de l'ESM et retire l'inutile.</span>
</div>

</div>

</div>

<style scoped>
.pj-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}
.pj-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
  width: 100%;
  align-items: stretch;
}
.pj-col :deep(.mac-window) {
  flex: 1;
  width: 100%;
}
.pj-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.pj-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  align-self: flex-start;
}
.pj-stage-bad {
  background: rgba(196, 81, 92, 0.18);
  color: var(--theme-color-raspberry-dark);
}
.pj-stage-good {
  background: rgba(138, 154, 75, 0.18);
  color: var(--theme-color-olive-dark);
}
.pj-col :deep(pre) {
  text-align: left;
}
.pj-explain {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  line-height: 1.55;
  color: var(--theme-color-charcoal);
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.75rem 1rem;
  min-height: 4.5rem;
  border-radius: 8px;
}
.pj-explain-bad {
  background: rgba(196, 81, 92, 0.08);
  --chip: var(--theme-color-raspberry);
}
.pj-explain-good {
  background: rgba(138, 154, 75, 0.08);
  --chip: var(--theme-color-olive);
}
.pj-explain code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
}
.pj-explain strong {
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
}
</style>

<!--
La différence n'est pas dans le code, c'est dans le packaging. lodash n'a ni "module", ni "exports", ni "sideEffects" : le bundler tombe sur du CJS et ne retire rien. lodash-es déclare "module" (l'entrée ESM, l'ancienne convention, "exports" étant la moderne) et "sideEffects": false.

"sideEffects": false est une promesse : "tu peux supprimer mes modules inutilisés sans risque". Elle peut être fausse, on y revient dans les pièges.

À retenir : quand tu choisis une lib, regarde son package.json.

Transition : un package bien fait, c'est la moitié du chemin. Reste ce qui échappe à l'analyse statique, les imports dynamiques.
-->
