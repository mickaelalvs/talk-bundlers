---
layout: basic-title
align: left
---

::title::
CJS vs ESM

::default::

<div class="modules-wrap">
<div class="module-block">
<div class="module-label">CommonJS</div>

```js {1-2}
const path = require('path');
const { readFile } = require('fs');

const config = require('./config');

module.exports = { start };
```

<div class="module-subtitle">🧑🏻‍🍳 Cuisine à l'improviste</div>
<ul class="module-list">
<li>Function <code>require()</code></li>
<li>Synchrone</li>
<li>Résolu à l'exécution</li>
</ul>
</div>
<div class="module-block">
<div class="module-label">ES Modules</div>

```js {none|1-2}
import path from 'path';
import { readFile } from 'fs';

import config from './config.js';

export { start };
```

<div class="module-subtitle">🧑🏻‍🍳 Cuisine rigoureuse</div>
<ul class="module-list">
<li>Mot-clé <code>import</code></li>
<li>Asynchrone</li>
<li>Résolu à la compilation</li>
</ul>
</div>
</div>

<style>
.modules-wrap {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}
.module-block {
  flex: 1;
}
.module-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--theme-color-amber);
}
.module-subtitle {
  font-size: 1rem;
  font-weight: bold;
  color: var(--theme-color-amber);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.module-list {
  list-style: none;
  padding: 0;
  margin: 0;
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
</style>

<!--
À gauche, require est une fonction qu'on peut appeler n'importe où, n'importe quand. À droite, import est un mot-clé du langage, toujours en haut du fichier. Ça paraît anodin, mais c'est cette différence qui change absolument tout pour notre bundler.
Mais du coup, comment ça se cuisine ?
-->
