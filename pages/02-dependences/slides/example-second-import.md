---
layout: basic-title
transition: slide-left
---

::title::
Le graphe de dépendances

::subtitle::
En profondeur, dans l'ordre de résolution

::default::

<div class="vtree">

<div v-click="1" class="vt-line" style="left: 27rem; top: 6.3rem; width: 2px; height: 1.7rem;"></div>
<div v-click="1" class="vt-line" style="left: 8.5rem; top: 8rem; width: 18.5rem; height: 2px;"></div>
<div v-click="1" class="vt-line" style="left: 8.5rem; top: 8rem; width: 2px; height: 1.5rem;"></div>
<div v-click="2" class="vt-line" style="left: 27rem; top: 8rem; width: 2px; height: 1.5rem;"></div>
<div v-click="4" class="vt-line" style="left: 27rem; top: 8rem; width: 18.5rem; height: 2px;"></div>
<div v-click="4" class="vt-line" style="left: 45.5rem; top: 8rem; width: 2px; height: 1.5rem;"></div>
<div v-click="3" class="vt-line" style="left: 27rem; top: 15.4rem; width: 2px; height: 3.1rem;"></div>

<div class="vt-win" style="left: 18.5rem; top: 0.5rem;">

<MacWindow step="1" title="main.js">

```js {*|1|2|2|3}{lines: true}
import { createApp } from './app.js'
import { router } from './router.js'
import './style.css'
```

</MacWindow>

</div>

<div v-click="1" class="vt-win" style="left: 0rem; top: 9.5rem;">

<MacWindow step="2" title="app.js">

```js
export function createApp() {
  /* ... */
}
```

</MacWindow>

</div>

<div v-click="2" class="vt-win" style="left: 18.5rem; top: 9.5rem;">

<MacWindow step="3" title="router.js">

```js {1}{lines: true}
import { createRoute } from './route.js'

export const router = { /* ... */ }
```

</MacWindow>

</div>

<div v-click="4" class="vt-win" style="left: 37rem; top: 9.5rem;">

<MacWindow step="5" title="style.css">

```css
.app { color: #db994d; }
```

</MacWindow>

</div>

<div v-click="3" class="vt-win" style="left: 18.5rem; top: 18.5rem;">

<MacWindow step="4" title="route.js">

```js
export function createRoute(p, n) {
  return { p, n }
}
```

</MacWindow>

</div>

</div>

<style scoped>
.vtree {
  position: relative;
  width: 54rem;
  height: 24rem;
  margin: 4rem auto 0;
}
.vt-win {
  position: absolute;
  width: 17rem;
  z-index: 1;
}
.vt-line {
  position: absolute;
  background: var(--theme-color-mist);
  z-index: 0;
}
.vt-win :deep(.mac-window) {
  min-width: 0;
  width: 100%;
}
.vt-win :deep(.mac-body) {
  padding: 0.4rem 0.65rem;
}
.vt-win :deep(.slidev-code) {
  font-size: 0.62rem !important;
  line-height: 1.35 !important;
  text-align: left !important;
}
</style>

<!--
Arbre top-down. main.js en racine, ses 3 imports en dessous (app, router, style),
et route.js sous router.js.

Ordre de résolution = PROFONDEUR D'ABORD :
[base] ① main.js
[click] ② app.js (1er import, feuille)
[click] ③ router.js (2e import)…
[click] ④ route.js → on descend dedans AVANT de remonter
[click] ⑤ style.css (dernier import de main, résolu en dernier)

Le point clé : route.js (④) est résolu avant style.css (⑤).
-->
