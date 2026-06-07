---
layout: basic-title
---

::title::
③ Renommage des variables

::default::

<div class="min-level">Phase · renommage local</div>

<div class="min-grid">

<div class="min-col">

<div class="min-stage min-stage-before">avant</div>

```js
function calculateUserScore(user, items) {
  let totalScore = 0

  for (const currentItem of items) {
    totalScore += currentItem.points
      * user.bonusMultiplier
  }

  return totalScore
}
```

</div>

<div class="min-col">

<div class="min-stage min-stage-after">après</div>

```js
function c(t, o) {
  let e = 0

  for (const r of o) {
    e += r.points
      * t.bonusMultiplier
  }

  return e
}
```

</div>

</div>

<div class="min-note">
Les noms locaux deviennent des lettres uniques.<br />
<code>userAuthToken</code>, <code>currentItem</code>, <code>totalScore</code>… tout devient <code>a</code>, <code>b</code>, <code>c</code>.
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
  font-size: 0.85rem;
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
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.min-note code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
  color: var(--theme-color-steel);
}
</style>

<!--
Le minifieur fait une analyse de scope. Il sait quelle variable est utilisée
où, et peut renommer en gardant la sémantique intacte. Les noms à 1 caractère
sont préférés (a, b, c...) parce que c'est le minimum.

Sortie réelle d'esbuild --minify-identifiers sur cette fonction quand elle
est locale (appelée uniquement dans le module) : function c(t, o) { let e = 0;
... }. La fonction elle-même devient `c` parce qu'elle est locale.

Note : seuls les noms LOCAUX sont renommés. Les exports d'API publique, ou
ce qui est accédé via global ne peut pas être renommé (sauf si tu actives
le mangling de propriétés - slide suivante). Si on exportait
calculateUserScore, son nom serait préservé (seuls les params/vars internes
seraient renommés).
-->
