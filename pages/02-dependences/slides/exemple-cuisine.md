---
layout: basic-title
transition: view-transition
align: left
---

::title::
Le graphe de dépendances

::subtitle::
En partant de la recette

::default::

<div class="dep-ex">
<div class="dep-ex-entry">
<div class="dep-ex-file-header">
<lucide:scroll-text class="dep-ex-file-icon" />
<span>recipe.js</span>
</div>

```js {*|2|3|4}{lines: true}
// recipe.js
import { ingredients } from './ingredients.js'
import { cook } from './cooking.js'
import './plating.css'
```

</div>
<div v-click="2" class="dep-ex-child dep-ex-child--1">
<div class="dep-ex-file-header dep-ex-file-header--sub">
<lucide:file-code class="dep-ex-file-icon" />
<span>ingredients.js</span>
</div>

```js {*|2-3}{lines: true, at: 2}
// ingredients.js
import { makeSauce } from './sauce.js'
import { spices } from './spices.js'
```

</div>
<div v-click="3" class="dep-ex-child dep-ex-child--2">
<div class="dep-ex-file-header dep-ex-file-header--sub">
<lucide:file-code class="dep-ex-file-icon" />
<span>cooking.js</span>
</div>

```js {*}{lines: true}
// cooking.js
import { oven } from './oven.js'

export function cook(items) { /* ... */ }
```

</div>
</div>

<SlideItem src="/assets/images/items/pot.svg" size="80px" bottom="15px" right="40px" rotate="10deg" opacity="0.25" />

<style>
.dep-ex {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.2rem;
  height: 100%;
  align-content: start;
  padding-top: 0.5rem;
}
.dep-ex-entry {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}
.dep-ex-child {
  grid-column: 2 / 3;
}
.dep-ex-child--1 { grid-row: 1; }
.dep-ex-child--2 { grid-row: 2; }
.dep-ex-file-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Paytone One', sans-serif;
  font-size: 1rem;
  color: var(--theme-color-amber);
  margin-bottom: 0.4rem;
}
.dep-ex-file-header--sub {
  color: var(--theme-color-steel);
}
.dep-ex-file-icon {
  font-size: 1.3rem;
}
</style>

<!--
Prenons un exemple concret dans notre cuisine. Le fichier recipe.js — notre entry point — importe des ingrédients, une méthode de cuisson, et du style pour le dressage.

Le bundler parse ce fichier, découvre ingredients.js. Il va le lire et découvre que celui-ci a lui aussi des dépendances : une sauce et des épices.

Pareil pour cooking.js qui importe un four. Chaque fichier est exploré en profondeur, récursivement.
-->
