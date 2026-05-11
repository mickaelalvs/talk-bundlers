---
layout: basic-title
align: left
---

::title::
ESM : exemple

::default::

<div class="esm-layout">
<div class="esm-left">
<div class="esm-file">
<div class="file-label">math.js</div>

```js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

</div>
<div class="esm-file">
<div class="file-label">main.js</div>

```js
import { add } from './math.js';

console.log(add(1, 2));
```

</div>
<div v-click class="esm-file">
<div class="file-label file-label--output">bundle.js</div>

```js
var add = (a, b) => a + b;

console.log(add(1, 2));
```

</div>
</div>
<div v-click="2" class="esm-right">
<div class="esm-points">
<div class="esm-point">
<lucide:badge-check class="esm-point-icon" />
<span>Standard du langage</span>
</div>
<div class="esm-point">
<lucide:layers class="esm-point-icon" />
<span>Aucune surcouche</span>
</div>
<div class="esm-point">
<lucide:minimize-2 class="esm-point-icon" />
<span>Code aplati</span>
</div>
</div>
<p class="esm-note">Le bundler pourra aussi optimiser le code, qu'on verra plus tard 🤫</p>
</div>
</div>

<style>
.esm-layout {
  display: flex;
  gap: 3rem;
  height: 100%;
  align-items: center;
}
.esm-left {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.esm-file :deep(.slidev-code) {
  font-size: 0.7rem !important;
  line-height: 1.4 !important;
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
.esm-points {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
}
.esm-point {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.esm-point-icon {
  font-size: 2rem;
  color: var(--theme-color-amber);
}
.esm-note {
  text-align: center;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--theme-color-slate);
  opacity: 0.7;
}
</style>

<!--
[au chargement] Deux fichiers simples. math.js exporte add et sub. main.js importe uniquement add.

[click 1] Le bundle : c'est tout. Littéralement le code source concaténé, avec les imports/exports enlevés. sub a même disparu parce qu'on ne l'utilise pas (on verra ça dans le tree-shaking). Aucun helper. Aucun wrapper. Pas une ligne en plus.

[click 2] Pourquoi ? Parce qu'ESM est un standard du langage. Le bundler n'a rien à "simuler". Il peut tranquillement aplatir le code, supprimer ce qui est inutile, et ne garder que la logique.

C'est le cuisinier rigoureux qui reçoit des ingrédients déjà lavés, coupés, étiquetés. Il les pose dans l'assiette. C'est tout.

Maintenant... le même module, mais en CommonJS.
-->
