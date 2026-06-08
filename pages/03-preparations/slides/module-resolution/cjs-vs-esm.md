---
layout: basic-title
align: left
---

::title::
Module Resolution

::default::

<div class="modules-wrap">
<div class="module-card">
<div class="module-head">
<span class="module-badge module-badge--esm">ES Modules</span>
<span class="module-tagline">le rigoureux</span>
</div>
<div class="module-file">
<div class="file-label"><lucide:file-code class="file-icon" /> math.js</div>

```js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

</div>
<div class="module-file">
<div class="file-label"><lucide:file-code class="file-icon" /> main.js</div>

```js
import { add } from './math.js';

console.log(add(1, 2));
```

</div>
<ul class="module-list">
<li><lucide:key-round class="li-icon" /> <code>import</code> — un mot-clé</li>
<li><lucide:check-check class="li-icon" /> Résolu <strong>à la compilation</strong></li>
</ul>
</div>
<div class="module-card">
<div class="module-head">
<span class="module-badge module-badge--cjs">CommonJS</span>
<span class="module-tagline">l'improvisateur</span>
</div>
<div class="module-file">
<div class="file-label"><lucide:file-code class="file-icon" /> math.cjs</div>

```js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

</div>
<div class="module-file">
<div class="file-label"><lucide:file-code class="file-icon" /> main.js</div>

```js
const { add } = require('./math.cjs');

console.log(add(1, 2));
```

</div>
<ul class="module-list">
<li><lucide:function-square class="li-icon" /> <code>require()</code> — une fonction</li>
<li><lucide:clock class="li-icon" /> Résolu <strong>à l'exécution</strong></li>
</ul>
</div>
</div>

<p v-click class="modules-conclusion">Le bundler doit les faire travailler <strong>ensemble</strong></p>

<style>
.modules-wrap {
  display: flex;
  gap: 2rem;
  align-items: stretch;
  margin-top: -3rem;
}
.modules-conclusion {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.modules-conclusion strong {
  color: var(--theme-color-amber);
}
.module-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.4rem 1.6rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.module-head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.module-badge {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  color: white;
}
.module-badge--cjs {
  background: var(--theme-color-amber);
}
.module-badge--esm {
  background: var(--theme-color-steel);
}
.module-tagline {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  font-style: italic;
  color: var(--theme-color-slate);
}
.module-file :deep(.slidev-code) {
  font-size: 0.7rem !important;
  line-height: 1.4 !important;
  border-radius: 10px;
}
.file-label {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--theme-color-charcoal);
  margin-bottom: 0.3rem;
}
.file-icon {
  font-size: 0.9rem;
  color: var(--theme-color-steel);
}
.module-list {
  list-style: none;
  padding: 0;
  margin: auto 0 0;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.module-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.92rem;
  color: var(--theme-color-slate);
}
.li-icon {
  font-size: 1.1rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
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
Voilà le code. À gauche, ES Modules — le rigoureux. math.js exporte add et sub via export. main.js importe add avec import. export et import sont des mots-clés du langage, toujours en haut du fichier. Résolu à la compilation : le bundler sait exactement ce dont le fichier a besoin avant même de l'exécuter.

À droite, le même module en CommonJS — l'improvisateur. require() est une fonction qu'on peut appeler n'importe où, n'importe quand. Résolu à l'exécution : le bundler ne sait pas ce qui va être importé avant que le code tourne.

C'est cette différence — exécution vs compilation — qui change tout pour notre bundler.

[click] Et votre bundler, lui, doit faire travailler ces deux cuisiniers dans la même cuisine. On va voir ce que ça donne une fois bundlé.
-->
