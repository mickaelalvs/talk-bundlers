---
layout: recipe
done: 3
current: 1
transition: slide-left
---

On prépare chaque ingrédient

<!--
POPS
-->

---
layout: basic-title
---

::title::
Nos ingrédients bruts

::default::

<div class="prep-board-wrap">
  <img src="/assets/images/items/cutting_board.svg" class="prep-board" />
  <div class="prep-ingredients">
    <div v-click class="prep-ingr prep-ingr-generic" style="top: -50px; left: 20px; transform: rotate(-8deg)"><img src="/assets/images/logos/typescript.svg" class="prep-ingr-img" /></div>
    <div v-click class="prep-ingr prep-ingr-generic" style="top: -20px; right: 130px; transform: rotate(5deg)"><img src="/assets/images/logos/sass.svg" class="prep-ingr-img" /></div>
    <div v-click class="prep-ingr prep-ingr-generic" style="top: 230px; left: 180px; transform: rotate(-3deg)"><img src="/assets/images/logos/react.svg" class="prep-ingr-img" /></div>
    <div v-click class="prep-ingr prep-ingr-generic" style="top: 55px; right: 42px; transform: rotate(7deg)"><lucide:image class="prep-ingr-icon" /></div>
    <div v-click class="prep-ingr prep-ingr-generic" style="top: 100px; left: 80px; transform: rotate(-5deg)"><lucide:braces class="prep-ingr-icon" /></div>
  </div>
</div>

<style>
.prep-board-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.prep-board {
  width: 400px;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.15));
}
.prep-ingredients {
  position: absolute;
  width: 360px;
  height: 200px;
}
.prep-ingr {
  position: absolute;
  width: 56px;
  height: 56px;
}
.prep-ingr-img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.prep-ingr-generic {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.prep-ingr-icon {
  font-size: 2rem;
  color: var(--theme-color-steel);
}
</style>

<!--
On a ouvert le frigo, on a trouvé notre graphe de dépendances. Voilà ce qu'on a sur la planche : du TypeScript, du SCSS, du JSX, des images, du JSON… des ingrédients bruts, pas encore prêts à servir au navigateur.
-->

---
src: ./slides/transpilation/intro.md
---

---
src: ./slides/transpilation/target.md
---

---
src: ./slides/transpilation/demos.md
---

---
src: ./slides/transpilation/css-pipeline.md
---

---
src: ./slides/transpilation/tools.md
---

---
src: ./slides/transpilation/benchmark.md
---

---
src: ./slides/module-resolution/intro.md
---

---
src: ./slides/module-resolution/cjs-vs-esm.md
---

---
src: ./slides/module-resolution/bundle-comparison.md
---

---
src: ./slides/module-resolution/mix.md
---

---
src: ./slides/module-resolution/benchmark.md
---
