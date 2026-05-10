---
layout: basic-title
---

::title::
Préparation des fichiers javascript

::default::

<div class="scene">
<div class="chef">👨‍🍳</div>
<div class="fridge-wrap">
<img src="../../01-frigo/assets/fridge.svg" class="fridge-img" />
<img src="/assets/images/logos/javascript.svg" class="fridge-js" />
</div>
</div>

<style>
.scene {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  height: 100%;
}
.chef {
  font-size: 8rem;
}
.fridge-wrap {
  position: relative;
}
.fridge-img {
  max-height: 600px;
  margin-top: 15rem;
  object-fit: contain;
  filter: drop-shadow(0 12px 32px rgba(0, 0, 0, 0.25));
}
.fridge-js {
  position: absolute;
  width: 80px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

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

---
layout: basic-title
---

::title::
Vos dépendances ont du CJS

::default::

<div class="mix-layout">
<div class="mix-project">
<div class="mix-row">
<lucide:folder-open class="mix-icon mix-icon--esm" />
<span class="mix-label">src/</span>
<span class="mix-tag mix-tag--esm">ESM</span>
</div>
<div class="mix-row">
<lucide:folder class="mix-icon mix-icon--mix" />
<span class="mix-label">node_modules/</span>
<span class="mix-tag mix-tag--cjs">CJS</span>
<span class="mix-tag mix-tag--esm">ESM</span>
<span class="mix-tag mix-tag--cjs">CJS</span>
</div>
</div>
<p v-click class="mix-conclusion">Le bundler doit cuisiner avec <strong>les deux</strong></p>
</div>

<style>
.mix-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
}
.mix-project {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.mix-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.mix-icon {
  font-size: 1.8rem;
}
.mix-icon--esm {
  color: #22c55e;
}
.mix-icon--mix {
  color: var(--theme-color-steel);
}
.mix-label {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--theme-color-slate);
  min-width: 140px;
}
.mix-tag {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
.mix-tag--esm {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}
.mix-tag--cjs {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}
.mix-conclusion {
  font-size: 1.2rem;
  color: var(--theme-color-slate);
}
.mix-conclusion strong {
  color: var(--theme-color-amber);
}
</style>

<!--
Du coup voilà, on a deux types de JavaScript différents. Et vous vous dites sûrement que vous n'êtes pas dans ce cas-là, car vous avez commencé votre projet en ES Modules.

Eh bien figurez-vous que l'ES Module est plutôt récent en terme de standard, et il y a de très grandes chances que vos dépendances contiennent du CJS. Imaginez que vous avez du lodash, ou je ne sais quoi — vous avez du CJS dans votre projet.

Du coup les bundlers doivent être capables de gérer les deux standards. Et on va voir comment ils s'en sortent.
-->

---
layout: basic-title
align: left
---

::title::
ESM — Exemple

::default::

<div class="esm-layout">
<div class="esm-left">
<div class="esm-file" style="top: 0; left: 0">
<div class="file-label">math.js</div>

```js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

</div>
<div class="esm-file" style="top: 100px; left: 20px">
<div class="file-label">main.js</div>

```js
import { add } from './math.js';

console.log(add(1, 2));
```

</div>
<div v-click class="esm-file esm-output" style="top: 240px; left: 0">
<div class="file-label file-label--output">bundle.js</div>

```js
var add = (a, b) => a + b;
var sub = (a, b) => a - b;

console.log(add(1, 2));
```

</div>
</div>
<div v-click="2" class="esm-right">
<div class="icon-points">
<div class="icon-point">
<lucide:badge-check class="icon-point-icon" />
<span>Standard</span>
</div>
<div class="icon-point">
<lucide:layers class="icon-point-icon" />
<span>Pas de surcouche</span>
</div>
<div class="icon-point">
<lucide:minimize-2 class="icon-point-icon" />
<span>Aplatir le code</span>
</div>
</div>
<p class="subtle-note">Le bundler pourra aussi optimiser le code, qu'on verra plus tard 🤫</p>
</div>
</div>

<style>
.esm-layout {
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;
}
.esm-left {
  flex: 0 0 25%;
  position: relative;
  height: 100%;
}
.esm-file {
  position: absolute;
}
.esm-output {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1rem;
}
.esm-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.file-label {
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--theme-color-steel);
  margin-bottom: 0.25rem;
}
.file-label--output {
  color: var(--theme-color-amber);
}
.icon-points {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.icon-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.1rem;
  color: var(--theme-color-slate);
}
.icon-point-icon {
  font-size: 2.5rem;
  color: var(--theme-color-amber);
}
.subtle-note {
  text-align: center;
  font-size: 0.95rem;
  font-style: italic;
  color: var(--theme-color-slate);
  opacity: 0.7;
}
</style>

<!--
[click 1 — montrer le bundle]
C'est tout. Le bundle, c'est littéralement le code source concaténé, avec quelques renommages mineurs. Aucun helper. Aucun wrapper. Aucun runtime. Pas une ligne en plus.

[click 2 — montrer le résumé à droite]
Pourquoi ? Parce qu'ESM est un standard du langage. Le bundler n'a rien à "simuler" — la sémantique des modules est gérée nativement, soit par le navigateur, soit par Node.js, soit par le bundler lui-même quand il inline tout. Le bundler peut tranquillement aplatir, supprimer les imports/exports devenus inutiles à l'intérieur du bundle, et ne garder que la logique.

C'est exactement ce que vous voulez d'un chef qui reçoit une livraison de bons ingrédients déjà préparés. Les légumes sont lavés, coupés, étiquetés. Le chef les prend, il les pose dans l'assiette. C'est tout. Pas de travail supplémentaire.

Bon. Voilà le scénario de rêve. Maintenant... le même module, mais en CommonJS. Regardez ce qu'il faut au bundler pour produire l'équivalent.
-->

---
layout: basic-title
align: left
padding: pt-16 px-12 pb-8
---

::title::
CJS — Exemple

::default::

<div class="cjs-layout">
<div class="cjs-left">
<div class="cjs-file" style="top: 0; left: 0">
<div class="file-label">math.cjs</div>

```js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

</div>
<div class="cjs-file" style="top: 100px; left: 20px">
<div class="file-label">main.js</div>

```js
const { add } = require('./math.cjs');

console.log(add(1, 2));
```

</div>
</div>
<div v-click class="cjs-right">
<div class="file-label file-label--output">bundle.js</div>

```js
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __commonJS = (cb, mod) => function __require() { ... };

var __copyProps = (to, from, except, desc) => { ... };

var __toESM = (mod, isNodeMode, target) => (
  target = mod != null
    ? Object.create(Object.getPrototypeOf(mod)) : {},
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default",
          { value: mod, enumerable: true })
      : target,
    mod
  )
);

// math.cjs — emballé
var require_math = __commonJS({
  "math.cjs"(exports) {
    exports.add = (a, b) => a + b;
    exports.sub = (a, b) => a - b;
  }
});

// main.js
var import_math = __toESM(require_math());
console.log(import_math.add(1, 2));
```

</div>
</div>

<style>
.cjs-layout {
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;
}
.cjs-left {
  flex: 0 0 25%;
  position: relative;
  height: 100%;
}
.cjs-file {
  position: absolute;
}
.cjs-left :deep(.slidev-code) {
  font-size: 0.6rem !important;
  line-height: 1.3 !important;
}
.cjs-right {
  flex: 1;
}
.cjs-right :deep(.slidev-code) {
  font-size: 0.5rem !important;
  line-height: 1.2 !important;
}
.file-label {
  font-size: 0.85rem;
  font-weight: bold;
  color: var(--theme-color-steel);
  margin-bottom: 0.25rem;
}
.file-label--output {
  color: var(--theme-color-amber);
}
</style>

<!--
Même exemple : deux fichiers, add et sub. Sauf qu'ici c'est du CommonJS. Regardez la taille du bundle généré. Tout ce code en plus, c'est le runtime que le bundler doit injecter pour simuler le comportement de require/module.exports dans le navigateur.

Le chef reçoit un ingrédient brut, pas lavé, pas coupé. Il doit sortir la planche, le couteau, l'épluche-légumes... tout un attirail juste pour préparer un seul ingrédient.
-->

---
layout: basic
---

<div class="explain-layout">
<div class="icon-points">
<div class="icon-point">
<lucide:wrench class="icon-point-icon" />
<span>Helpers de runtime</span>
</div>
<div class="icon-point">
<lucide:package class="icon-point-icon" />
<span>Module enveloppé</span>
</div>
<div class="icon-point">
<lucide:repeat class="icon-point-icon" />
<span>Traducteur CJS → ESM</span>
</div>
</div>
<p class="explain-desc">Le bundler <strong>simule Node.js</strong> dans le navigateur</p>
</div>

<style>
.explain-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;
}
.icon-points {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.icon-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.1rem;
  color: var(--theme-color-slate);
}
.icon-point-icon {
  font-size: 2.5rem;
  color: var(--theme-color-amber);
}
.explain-desc {
  font-size: 1.1rem;
  color: var(--theme-color-slate);
  text-align: center;
}
.explain-desc strong {
  color: var(--theme-color-amber);
}
</style>

<!--
Tout le bloc du haut, ce sont des helpers de runtime : __commonJS, __toESM, __copyProps. Ce sont eux qui simulent le comportement de Node.js dans un environnement où il n'y a pas de Node.

Ensuite, vous voyez require_math : le module CJS d'origine n'est pas inliné comme tout à l'heure, il est enveloppé dans une fonction. Souvenez-vous de ce qu'on a dit juste avant : le bundler ne sait pas, à la compilation, ce que ce module va vraiment exporter — parce qu'en CJS, les exports sont construits à l'exécution. Donc il diffère l'évaluation : il met le code dans une fonction qui sera appelée plus tard, quand on en aura besoin, exactement comme Node l'aurait fait.

Et tout en bas, le __toESM, c'est le traducteur final. Il prend la sortie CJS — un objet JavaScript classique — et l'arrange pour qu'il ait l'apparence d'un namespace ESM, avec un default, des exports nommés, etc. Comme ça, votre import { add } côté ESM trouve ce qu'il cherche.
-->

---
layout: basic
---

<div class="takeaway-layout">
<p class="takeaway-line">CJS ≠ ESM — pas juste la syntaxe, <strong>la philosophie</strong></p>
<p v-click class="takeaway-line">Le chef cuisine sur <strong>les deux feux</strong></p>
<p v-click class="takeaway-line">Chaque traduction laisse une <strong>trace dans l'assiette</strong></p>
</div>

<style>
.takeaway-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2.5rem;
}
.takeaway-line {
  font-size: 1.4rem;
  color: var(--theme-color-slate);
  text-align: center;
}
.takeaway-line strong {
  color: var(--theme-color-amber);
}
</style>

<!--
Donc retenez ça : la différence entre CommonJS et ES Modules, ce n'est pas un débat de puristes. C'est une réalité technique qui se traduit directement dans le poids de votre bundle.

Votre chef — qu'il s'appelle Vite, Webpack, Rollup ou Parcel — passe une part énorme de son temps à faire travailler ces deux mondes ensemble. Sans que vous le voyiez.

Maintenant qu'on a vu comment notre chef prépare les ingrédients JavaScript, on va voir comment il optimise le plat final...
-->
