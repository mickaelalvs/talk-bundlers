---
layout: basic-title
---

::title::
Pourquoi ESM > CJS ?

::default::

<div class="concept-grid">

<div class="concept-col">

<div class="concept-stage concept-stage-good">ESM · statique ✓</div>

```js
// dans le package
export const debounce = (...) => {...}
export const throttle = (...) => {...}
// ... 200 autres exports nommés
```

<div class="concept-explain concept-explain-good">
Chaque export a un <strong>nom statique</strong>.<br />
Le bundler lit le fichier au build et sait
<strong>exactement</strong> ce qui est exporté.
</div>

</div>

<div class="concept-col">

<div class="concept-stage concept-stage-bad">CJS · dynamique ✗</div>

```js
// dans le package
const fns = { debounce, throttle, ... }
Object.keys(fns).forEach((name) =>
  module.exports[name] = fns[name]
)
```

<div class="concept-explain concept-explain-bad">
Les exports sont créés <strong>à l'exécution</strong>
dans une boucle. Le bundler ne peut pas deviner
quels noms seront exposés.
</div>

</div>

</div>

<style scoped>
.concept-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
  width: 100%;
  align-items: start;
}
.concept-col {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.concept-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  align-self: flex-start;
}
.concept-stage-good {
  background: rgba(76, 175, 80, 0.18);
  color: #2e7d32;
}
.concept-stage-bad {
  background: rgba(239, 83, 80, 0.18);
  color: #c0392b;
}
.concept-col :deep(pre) {
  font-size: 0.78rem;
  text-align: left;
}
.concept-explain {
  font-family: "Nunito", sans-serif;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--theme-color-charcoal);
  text-align: left;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 3px solid;
}
.concept-explain-good {
  background: rgba(76, 175, 80, 0.08);
  border-color: #4caf50;
}
.concept-explain-bad {
  background: rgba(239, 83, 80, 0.08);
  border-color: #ef5350;
}
.concept-explain code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.3rem;
  border-radius: 4px;
  font-size: 0.85em;
}
.concept-explain strong {
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
  font-weight: normal;
}
</style>

<!--
La règle qui sous-tend tout : tree-shaking = analyse statique.

Côté ESM : les exports sont des déclarations top-level avec des noms en
clair. Le bundler les voit toutes au build sans exécuter de code.

Côté CJS : le pattern loop-based est commun (lodash le fait, beaucoup de
libs internes aussi). Les exports n'existent qu'au moment où le code tourne.
Le bundler regarde, voit du code, mais ne peut pas savoir quels noms seront
ajoutés à module.exports tant qu'on ne l'exécute pas.

Pire encore : module.exports[localStorage.getItem(Math.random())] = fn
serait valide en CJS. C'est pour ça que les bundlers abandonnent : ils
gardent tout, par sécurité.
-->
