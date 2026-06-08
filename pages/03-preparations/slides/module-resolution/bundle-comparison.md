---
layout: basic-title
align: left
---

::title::
CJS vs ESM : le bundle

::default::

<div class="bundle-cmp">
<div class="bundle-card">
<div class="bundle-head">
<span class="bundle-badge bundle-badge--esm">ESM</span>
<span class="bundle-tagline">code aplati, zéro surcouche</span>
</div>
<div class="bundle-code">
<div class="file-label"><lucide:file-output class="file-icon" /> bundle.js</div>

```js
var add = (a, b) => a + b;

console.log(add(1, 2));
```

</div>
</div>
<div v-click class="bundle-card">
<div class="bundle-head">
<span class="bundle-badge bundle-badge--cjs">CJS</span>
<span class="bundle-tagline">module enveloppé + runtime</span>
</div>
<div class="bundle-code">
<div class="file-label"><lucide:file-output class="file-icon" /> bundle.js</div>

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

</div>
</div>
</div>

<style>
.bundle-cmp {
  display: flex;
  gap: 2rem;
  align-items: stretch;
  margin-top: -3rem;
}
.bundle-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.4rem 1.6rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.bundle-head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.bundle-badge {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  padding: 0.25rem 0.8rem;
  border-radius: 999px;
  color: white;
}
.bundle-badge--esm {
  background: var(--theme-color-steel);
}
.bundle-badge--cjs {
  background: var(--theme-color-amber);
}
.bundle-tagline {
  font-family: "Nunito", sans-serif;
  font-size: 0.92rem;
  font-style: italic;
  color: var(--theme-color-slate);
}
.bundle-code {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.bundle-code :deep(.slidev-code) {
  font-size: 0.62rem !important;
  line-height: 1.35 !important;
  border-radius: 10px;
  flex: 1;
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
.bundle-takeaway {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 0.7rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  border-left: 4px solid var(--theme-color-amber);
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.bundle-takeaway-icon {
  font-size: 1.4rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
}
.bundle-takeaway strong {
  color: var(--theme-color-amber);
}
</style>

<!--
[au chargement] À gauche, le bundle généré depuis l'ESM. C'est tout. Littéralement le code source concaténé, imports/exports enlevés. sub a disparu parce qu'on ne l'utilise pas (tree-shaking). Aucun helper, aucun wrapper. ESM est un standard du langage : le bundler n'a rien à simuler, il peut aplatir.

[click 1] À droite, le même module en CommonJS. Beaucoup plus de code pour deux fonctions : des helpers de runtime (__commonJS) et le module enveloppé dans une fonction. Pourquoi ? En CJS les exports sont construits à l'exécution, le bundler ne sait pas à la compilation ce qui sera exporté, il diffère l'évaluation.

[click 2] Le bundler simule Node.js dans le navigateur. Chaque module CJS = du runtime en plus dans votre bundle final.

(Note : si on importait ce module CJS depuis de l'ESM, esbuild ajouterait encore un traducteur __toESM — d'où encore plus de runtime quand on mélange les deux.)
-->
