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

<div class="absolute left-4 top-4 flex flex-col items-center gap-2">
<div class="flex items-center gap-2 text-lg font-bold text-[var(--theme-color-amber)]">
  <lucide:file-code class="text-2xl" /> main.js
</div>

```js {*|3|3|3}{lines: true, class: '!children:text-xs'}
// main.js
import { createApp } from './app.js'
import { router } from './router.js'
import './style.css'

const app = createApp()
app.use(router)
app.mount('#root')
```

</div>

<div v-click="2" class="absolute left-56 top-16 flex flex-col items-center gap-2">
<div class="flex items-center gap-2 text-lg font-bold text-[var(--theme-color-amber)]">
  <lucide:file-code class="text-2xl" /> router.js
</div>

```js {*|2|2}{lines: true, class: '!children:text-xs', at: 3}
// router.js
import { createRoute } from './route.js'

export const router = {
  routes: [
    createRoute('/', 'Home'),
    createRoute('/about', 'About'),
  ]
}
```

</div>

<div v-click="4" class="absolute left-108 top-44 flex flex-col items-center gap-2">
<div class="flex items-center gap-2 text-lg font-bold text-[var(--theme-color-amber)]">
  <lucide:file-code class="text-2xl" /> route.js
</div>

```js {*}{lines: true, class: '!children:text-xs'}
// route.js
export function createRoute(path, name) {
  return { path, name, component: null }
}
```

</div>

</div>

<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xl">
  <span class="font-bold text-[var(--theme-color-steel)]">main.js</span>
  <span v-click="2" class="text-[var(--theme-color-slate)]">→</span>
  <span v-click="2" class="font-bold text-[var(--theme-color-amber)]">router.js</span>
  <span v-click="4" class="text-[var(--theme-color-slate)]">→</span>
  <span v-click="4" class="font-bold text-[var(--theme-color-slate)]">route.js</span>
</div>

<!--
Et du coup dans ce nouveau fichier, le bundler va refaire exactement la même chose : sans lire les instructions, on va vérifier les imports.

Et là, router.js importe aussi quelque chose ! Donc on continue en profondeur, jusqu'à arriver à un fichier sans import.
-->
