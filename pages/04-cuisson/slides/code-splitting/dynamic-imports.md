---
layout: basic-title
align: left
---

::title::
Dynamic imports

::default::

<div class="cs-imports">
  <div class="cs-import-block">
    <div class="cs-import-label">Import statique — dans le bundle principal</div>

```js
import { Home } from './Home'
```

  </div>

  <div v-click="1" class="cs-import-block cs-import-dynamic">
    <div class="cs-import-label cs-import-label-dynamic">Import dynamique — chunk séparé</div>

```js
const Dashboard = () => import('./Dashboard')
```

  </div>

  <div v-click="2" class="cs-import-note">
    <lucide-info class="cs-info-icon" />
    <span>Le <code>import()</code> retourne une <strong>Promise</strong>. Le bundler le détecte au build et crée un fichier séparé automatiquement.</span>
  </div>
</div>

<style>
.cs-imports {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 700px;
}
.cs-import-block {
  position: relative;
}
.cs-import-label {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--theme-color-slate);
  margin-bottom: 0.5rem;
}
.cs-import-label-dynamic {
  color: #2e7d32;
}
.cs-import-dynamic :deep(pre) {
  border-left: 4px solid #2e7d32 !important;
}
.cs-import-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  padding: 0.75rem 1rem;
  background: rgba(81, 138, 184, 0.06);
  border-radius: 10px;
}
.cs-info-icon {
  font-size: 1.3rem;
  color: var(--theme-color-steel);
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.cs-import-note code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  color: var(--theme-color-steel);
  font-size: 0.9em;
}
.cs-import-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
Voici la seule chose que tu as à changer dans ton code pour activer le
code splitting : remplacer un import statique par un import() dynamique.

L'import statique (en haut) : le bundler inclut Home.js dans le chunk principal.
C'est synchrone, c'est toujours là.

[click 1] L'import dynamique : la syntaxe import() avec des parenthèses.
Ça ressemble à un appel de fonction, mais c'est un mot-clé du langage (ES2020).
Le bundler le repère et crée automatiquement un chunk séparé.

[click 2] Le détail technique : import() retourne une Promise. Quand le chunk
est téléchargé, la promise se résout avec le module. Tout ça sans aucune config
bundler supplémentaire — c'est le comportement par défaut.

Piège à mentionner : si tu fais import(`./pages/${variable}`) avec une variable
totalement dynamique, le bundler ne peut pas savoir à l'avance quel fichier
couper → il inclut tout le dossier dans un chunk. Préfère des chemins explicites.
-->
