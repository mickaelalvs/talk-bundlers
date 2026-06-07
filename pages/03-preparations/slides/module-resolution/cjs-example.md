---
layout: basic-title
align: left
---

::title::
CJS : exemple

::default::

<div class="cjs-layout">
<div class="cjs-left">
<div class="cjs-file">
<div class="file-label">math.cjs</div>

```js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

</div>
<div class="cjs-file">
<div class="file-label">main.js</div>

```js
const { add } = require('./math.cjs');

console.log(add(1, 2));
```

</div>
<div v-click class="cjs-file">
<div class="file-label file-label--output">bundle.js</div>

```js
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])(
    (mod = { exports: {} }).exports, mod
  ), mod.exports;
};

var require_math = __commonJS({
  "math.cjs"(exports) {
    exports.add = (a, b) => a + b;
    exports.sub = (a, b) => a - b;
  }
});

var { add } = require_math();
console.log(add(1, 2));
```

<div class="cjs-line-count">module enveloppé + helpers de runtime</div>
</div>
</div>
<div v-click="2" class="cjs-right">
<div class="cjs-points">
<div class="cjs-point">
<lucide:wrench class="cjs-point-icon" />
<span>Helpers de runtime injectés</span>
</div>
<div class="cjs-point">
<lucide:package class="cjs-point-icon" />
<span>Module enveloppé dans une fonction</span>
</div>
<div class="cjs-point">
<lucide:clock class="cjs-point-icon" />
<span>Exports évalués à l'exécution</span>
</div>
</div>
<p class="cjs-note">Le bundler <strong>simule Node.js</strong> dans le navigateur</p>
</div>
</div>

<style>
.cjs-layout {
  display: flex;
  gap: 3rem;
  height: 100%;
  align-items: center;
}
.cjs-left {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.cjs-file :deep(.slidev-code) {
  font-size: 0.7rem !important;
  line-height: 1.4 !important;
}
.cjs-right {
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
.cjs-line-count {
  font-size: 0.8rem;
  font-weight: 700;
  color: #ef4444;
  margin-top: 0.3rem;
}
.cjs-points {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
}
.cjs-point {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.cjs-point-icon {
  font-size: 2rem;
  color: var(--theme-color-amber);
}
.cjs-note {
  text-align: center;
  font-size: 1rem;
  color: var(--theme-color-slate);
}
.cjs-note strong {
  color: var(--theme-color-amber);
}
</style>

<!--
[au chargement] Même point de départ. Deux fichiers, add et sub. Sauf que cette fois c'est du CommonJS (math.cjs avec exports.add, main.js avec require).

[click 1] Le bundle. Regardez : il y a beaucoup plus de code que côté ESM. Pour deux fonctions, le bundler génère des helpers de runtime et enveloppe le module. Tout ça c'est le coût du CommonJS.

[click 2] Deux choses à noter :
1. Des helpers de runtime (__commonJS) — l'outillage injecté.
2. Le module d'origine est enveloppé dans une fonction. Pourquoi ? Parce qu'en CJS, les exports sont construits à l'exécution. Le bundler ne sait pas à la compilation ce qui sera exporté, il diffère l'évaluation : la fonction n'est exécutée qu'au premier require_math().

Le bundler simule Node.js dans le navigateur. Le cuisinier improvisateur livre un ingrédient brut, pas lavé, pas coupé. Le chef doit sortir tout l'attirail juste pour un seul ingrédient.

(Note : si main.js avait fait un `import` ESM depuis ce module CJS, esbuild ajouterait en plus un traducteur __toESM pour fabriquer un namespace ESM — d'où encore plus de runtime quand on mélange ESM et CJS.)
-->
