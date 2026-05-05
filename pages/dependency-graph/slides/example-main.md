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

```js {*|2|2|2|2}{lines: true}
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
  <lucide:file-code class="text-2xl" /> app.js
</div>

```js {*|2|2}{lines: true, at: 3}
// app.js
import logo from './logo.png'

export function createApp() {
  return {
    logo,
    plugins: [],
    use(plugin) { this.plugins.push(plugin) },
    mount(selector) { /* ... */ }
  }
}
```

</div>

<div v-click="4" class="absolute left-135 top-60 flex flex-col items-center gap-3">
<span class="text-lg font-bold text-[var(--theme-color-amber)]">logo.png</span>
<lucide:file-image class="text-5xl text-[var(--theme-color-salmon)]" />
</div>

</div>

<div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xl">
  <span class="font-bold text-[var(--theme-color-steel)]">main.js</span>
  <span v-click="2" class="text-[var(--theme-color-slate)]">→</span>
  <span v-click="2" class="font-bold text-[var(--theme-color-amber)]">app.js</span>
  <span v-click="4" class="text-[var(--theme-color-slate)]">→</span>
  <span v-click="4" class="font-bold text-[var(--theme-color-slate)]">logo.png</span>
</div>

<!--
Imaginons par exemple ce fichier main.js. Il a des imports au début.

Le bundler va d'abord regarder le premier import. Il va aller chercher ce fichier app.js et voir ce qu'il contient. On voit qu'il importe une image. En le parcourant, il le mappe dans son graphe de dépendances.
-->
