---
layout: basic-title
align: left
---

::title::
ESM : exemple

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
[click 1, montrer le bundle]
C'est tout. Le bundle, c'est littéralement le code source concaténé, avec quelques renommages mineurs. Aucun helper. Aucun wrapper. Aucun runtime. Pas une ligne en plus.

[click 2, montrer le résumé à droite]
Pourquoi ? Parce qu'ESM est un standard du langage. Le bundler n'a rien à "simuler", la sémantique des modules est gérée nativement, soit par le navigateur, soit par Node.js, soit par le bundler lui-même quand il inline tout. Le bundler peut tranquillement aplatir, supprimer les imports/exports devenus inutiles à l'intérieur du bundle, et ne garder que la logique.

C'est exactement ce que vous voulez d'un chef qui reçoit une livraison de bons ingrédients déjà préparés. Les légumes sont lavés, coupés, étiquetés. Le chef les prend, il les pose dans l'assiette. C'est tout. Pas de travail supplémentaire.

Bon. Voilà le scénario de rêve. Maintenant... le même module, mais en CommonJS. Regardez ce qu'il faut au bundler pour produire l'équivalent.
-->
