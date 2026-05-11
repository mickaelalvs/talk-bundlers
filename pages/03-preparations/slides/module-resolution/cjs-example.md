---
layout: basic-title
align: left
padding: pt-16 px-12 pb-8
---

::title::
CJS : exemple

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

// math.cjs, emballé
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
