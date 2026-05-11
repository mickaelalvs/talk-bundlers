---
layout: basic-title
align: left
---

::title::
CJS vs ESM

::default::

<div class="modules-wrap">
<div class="module-block">
<div class="module-label">CommonJS — l'improvisateur</div>

```js {1-2}
const path = require('path');
const { readFile } = require('fs');

const config = require('./config');

module.exports = { start };
```

<ul class="module-list">
<li><code>require()</code> — une fonction</li>
<li>Synchrone</li>
<li>Résolu <strong>à l'exécution</strong></li>
</ul>
</div>
<div v-click class="module-block">
<div class="module-label">ES Modules — le rigoureux</div>

```js {1-2}
import path from 'path';
import { readFile } from 'fs';

import config from './config.js';

export { start };
```

<ul class="module-list">
<li><code>import</code> — un mot-clé</li>
<li>Asynchrone</li>
<li>Résolu <strong>à la compilation</strong></li>
</ul>
</div>
</div>

<style>
.modules-wrap {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
}
.module-block {
  flex: 1;
}
.module-label {
  font-family: "Paytone One", sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--theme-color-amber);
}
.module-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.module-list li {
  font-size: 0.95rem;
  color: var(--theme-color-slate);
}
.module-list code {
  color: var(--theme-color-amber);
  font-weight: bold;
}
.module-list strong {
  color: var(--theme-color-steel);
}
</style>

<!--
[au chargement] Voilà le code. À gauche, CommonJS — l'improvisateur. require() est une fonction qu'on peut appeler n'importe où, n'importe quand, dans un if, dans une boucle. Résolu à l'exécution : le bundler ne sait pas ce qui va être importé avant que le code tourne.

[click] À droite, ES Modules — le rigoureux. import est un mot-clé du langage, toujours en haut du fichier. Résolu à la compilation : le bundler sait exactement ce dont le fichier a besoin avant même de l'exécuter.

C'est cette différence — exécution vs compilation — qui change tout pour notre bundler. On va voir comment il cuisine avec chacun.
-->
