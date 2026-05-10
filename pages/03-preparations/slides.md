---
layout: title
---

::number::
03

::default::

# Préparations des ingrédients

<!--
Transition : on a vu comment le bundler lit notre projet, maintenant on passe à la préparation.
-->

---
layout: basic-title
---

::title::
Nos ingrédients bruts

::default::

<div class="prep-board-wrap">
  <img src="/assets/images/items/cutting_board.svg" class="prep-board" />
</div>

<style>
.prep-board-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>

<!--
TODO: Montrer les ingrédients qu'on a trouvé depuis le entrypoints
-->

---
layout: basic-title
---

::title::
Chaque ingrédient, sa préparation

::default::

<div class="prep-transform">
  <div class="prep-row">
    <img src="/assets/images/logos/typescript.svg" class="prep-logo" />
    <div class="prep-arrow">→</div>
    <div class="prep-result"><lucide-file-code class="prep-result-icon" /></div>
  </div>
</div>

<style>
.prep-transform {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding-top: 2rem;
}
.prep-row {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.prep-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
.prep-arrow {
  font-size: 2.5rem;
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
}
.prep-result {
  display: flex;
  align-items: center;
  justify-content: center;
}
.prep-result-icon {
  font-size: 3rem;
  color: #9FA9B9;
}
</style>

<!--
TODO: Montrer que chaque ingrédient a sa recette et qu'on va détailler certaines
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
src: ./slides/transpilation/tools.md
---

---
src: ./slides/transpilation/benchmark.md
---

---
src: ./slides/transpilation/vite-punchline.md
---

---
src: ./slides/transpilation/before-after.md
---

---
src: ./slides/module-resolution.md
---
