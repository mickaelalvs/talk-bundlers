---
layout: basic-title
---

::title::
Pourquoi cette différence ? Leur package.json

::default::

<div class="pj-intro">
Même code source. Packaging différent. Voilà le secret :
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
Pas de <code>module</code>, pas de <code>exports</code>,<br />
pas de <code>sideEffects</code>.<br />
→ Le bundler tombe sur du CJS. <strong>Game over</strong>.
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
<code>module</code> pointe vers la version ESM,<br />
<code>sideEffects: false</code> promet "rien d'autre".<br />
→ Le bundler peut analyser et secouer.
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
  align-items: start;
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
  background: rgba(239, 83, 80, 0.18);
  color: #c0392b;
}
.pj-stage-good {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
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
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 3px solid;
}
.pj-explain-bad {
  background: rgba(239, 83, 80, 0.08);
  border-color: #ef5350;
}
.pj-explain-good {
  background: rgba(76, 175, 80, 0.08);
  border-color: #4caf50;
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
Les deux package.json côte à côte. C'est ÇA la différence entre lodash et
lodash-es. Pas leur code, leur packaging.

Champs clés à expliquer :
- "main" : entry point CJS (par défaut)
- "module" : entry point ESM (vieille convention, encore très utilisée)
- "exports" : convention moderne (Node 12+), permet d'avoir import/require
  séparés
- "sideEffects": false : promesse au bundler "tu peux supprimer mes modules
  inutilisés sans risque"

Punchline : "Quand tu choisis une lib, regarde son package.json. C'est là
que se joue la moitié de ton bundle."
-->
