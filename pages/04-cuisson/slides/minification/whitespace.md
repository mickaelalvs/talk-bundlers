---
layout: basic-title
---

::title::
⑤ Espaces et commentaires

::default::

<div class="min-level">Phase · compression du texte</div>

<div class="min-grid">

<div class="min-col">

<div class="min-stage min-stage-before">avant</div>

<MacWindow title="score.js">

```js
// Calcule le score d'un user
function calculateScore(user, items) {
  let total = 0

  for (const item of items) {
    // Applique le bonus
    total += item.points * user.bonus
  }

  return total
}
```

</MacWindow>

</div>

<div class="min-col">

<div class="min-stage min-stage-after">après</div>

<MacWindow title="score.min.js">

```js
function calculateScore(user,items){let total=0;for(const item of items){total+=item.points*user.bonus;}return total;}
```

</MacWindow>

</div>

</div>

<div class="min-note">
Dernière étape, juste avant l'output : indentation, retours à la ligne, commentaires.
Aucun impact à l'exécution, juste des bytes en moins sur le réseau.
</div>

<style scoped>
.min-level {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
  text-align: center;
  margin-bottom: 1.2rem;
}
.min-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.min-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.min-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.min-stage-before {
  background: rgba(219, 153, 77, 0.18);
  color: var(--theme-color-amber);
}
.min-stage-after {
  background: rgba(81, 138, 184, 0.18);
  color: var(--theme-color-steel);
}
.min-col :deep(pre) {
  text-align: left;
  margin: 0;
}
.min-note {
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  line-height: 1.5;
  font-style: italic;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
</style>

<!--
La technique la plus évidente : retirer tout ce qui n'a pas d'impact à
l'exécution. Indentations, retours à la ligne, commentaires.

Petit détail : les commentaires JSDoc (/** */) peuvent être préservés par
config si on veut garder les annotations de type pour les consommateurs
de la lib.
-->
