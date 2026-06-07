---
layout: basic-title
transition: view-transition
align: left
---

::title::
Le graphe de dépendances

::subtitle::
En partant de l'entrypoint

::default::

<div class="relative h-full w-full">

<div class="absolute left-4 top-4 graph-window">

<MacWindow title="main.js">

```js {*|3|3|3}{lines: true}
// main.js
import { createApp } from './app.js'
import { router } from './router.js'
import './style.css'

const app = createApp()
app.use(router)
app.mount('#root')
```

</MacWindow>

</div>

<div v-click="2" class="absolute left-56 top-16 graph-window">

<MacWindow title="router.js">

```js {*|2|2}{lines: true, at: 3}
// router.js
import { createRoute } from './route.js'

export const router = {
  routes: [
    createRoute('/', 'Home'),
    createRoute('/about', 'About'),
  ]
}
```

</MacWindow>

</div>

<div v-click="4" class="absolute left-108 top-44 graph-window">

<MacWindow title="route.js">

```js {*}{lines: true}
// route.js
export function createRoute(path, name) {
  return { path, name, component: null }
}
```

</MacWindow>

</div>

</div>

<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xl">
  <span class="dep-chip font-bold text-[var(--theme-color-steel)]">main.js</span>
  <span v-click="2" class="text-[var(--theme-color-slate)]">→</span>
  <span v-click="2" class="dep-chip font-bold text-[var(--theme-color-amber)]">router.js</span>
  <span v-click="4" class="text-[var(--theme-color-slate)]">→</span>
  <span v-click="4" class="dep-chip font-bold text-[var(--theme-color-slate)]">route.js</span>
</div>

<style scoped>
.graph-window {
  width: 380px;
}
.graph-window :deep(.mac-window) {
  min-width: 0;
  width: 100%;
}
.graph-window :deep(.mac-body) {
  padding: 0.5rem 0.75rem;
}
</style>

<!--
Et du coup dans ce nouveau fichier, le bundler va refaire exactement la même chose : sans lire les instructions, on va vérifier les imports.

Et là, router.js importe aussi quelque chose ! Donc on continue en profondeur, jusqu'à arriver à un fichier sans import.
-->
