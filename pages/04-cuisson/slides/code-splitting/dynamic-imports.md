---
layout: basic-title
align: left
---

::title::
Comment on découpe

::default::

<div class="cs-imports">
<div class="cs-import-cols">
<div class="cs-import-block">
<div class="cs-import-label">Import statique</div>
<div class="cs-import-where">dans le bundle principal</div>

<MacWindow title="App.jsx">

```js
import { Home } from './Home'
```

</MacWindow>

</div>
<div v-click="1" class="cs-import-block cs-import-dynamic">
<div class="cs-import-label cs-import-label-dynamic">Import dynamique</div>
<div class="cs-import-where">dans un chunk séparé</div>

<MacWindow title="App.jsx">

```js
const Dashboard = () => import('./Dashboard')
```

</MacWindow>

</div>
</div>
<div v-click="2" class="cs-others">
<div class="cs-import-label">Autres façons de découper</div>
<div class="cs-others-row">
<div class="cs-other"><span class="cs-other-head"><lucide-door-open class="cs-other-icon" />Plusieurs entrées</span><code>entry: { home, admin }</code></div>
<div class="cs-other"><span class="cs-other-head"><lucide-settings class="cs-other-icon" />Config du bundler</span><code>splitChunks · manualChunks</code></div>
<div class="cs-other"><span class="cs-other-head"><lucide-folder-tree class="cs-other-icon" />Frameworks</span><code>pages/admin.tsx</code></div>
</div>
</div>
</div>

<style>
.cs-imports {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  padding-top: 1.5rem;
}
.cs-import-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}
.cs-import-block {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.cs-import-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
}
.cs-import-label-dynamic {
  color: var(--theme-color-olive-dark);
}
.cs-import-where {
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-slate);
  margin-bottom: 0.7rem;
}
.cs-imports .mac-window {
  min-width: 0;
  width: 100%;
}
.cs-import-dynamic .mac-window {
  border-color: var(--theme-color-olive-dark) !important;
}
.cs-others {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.cs-others-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
}
.cs-other {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.9rem 1.1rem;
  background: white;
  border: 2px solid var(--theme-color-mist);
  border-radius: 14px;
}
.cs-other-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Paytone One", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.cs-other-icon {
  font-size: 1.2rem;
  color: var(--theme-color-amber);
}
.cs-other code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  color: var(--theme-color-steel);
  background: none;
  padding: 0;
}
</style>

<!--
Voici la seule chose que tu as à changer dans ton code pour activer le
code splitting : remplacer un import statique par un import() dynamique.

L'import statique (à gauche) : le bundler inclut Home.js dans le chunk principal.
C'est synchrone, c'est toujours là.

[click] L'import dynamique : la syntaxe import() avec des parenthèses.
Ça ressemble à un appel de fonction, mais c'est un mot-clé du langage (ES2020).
Il retourne une Promise : quand le chunk est téléchargé, elle se résout avec
le module. Le bundler le repère et crée un chunk séparé, sans config en plus.

Piège : import(`./pages/${variable}`) avec une variable totalement dynamique,
le bundler ne sait pas quel fichier couper et inclut tout le dossier dans un
chunk. Préfère des chemins explicites.

[click] import() n'est pas le seul moyen de découper.
Plusieurs entrées : un fichier d'entrée par page, un chunk chacun (le pattern
des multi-page apps).
Config du bundler : splitChunks (Webpack), manualChunks (Rollup/Vite). Règles
de taille et de partage, c'est ce qui crée les vendor chunks (on y revient).
Frameworks : Next.js, Nuxt, Remix découpent par fichier dans pages/ ou app/,
sans écrire d'import() à la main.
-->
