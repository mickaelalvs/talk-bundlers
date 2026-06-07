---
layout: recipe
done: 2
current: 1
transition: view-transition
---

On prépare chaque ingrédient 🔪

---
layout: basic-title
---

::title::
Nos ingrédients bruts

::default::

<div class="prep-board-wrap">
  <img src="/assets/images/items/cutting_board.svg" class="prep-board" />
  <div class="prep-ingredients">
    <img v-click src="/assets/images/logos/typescript.svg" class="prep-ingr" style="top: -30px; left: 20px; transform: rotate(-8deg)" />
    <img v-click src="/assets/images/logos/sass.svg" class="prep-ingr" style="top: -20px; right: 30px; transform: rotate(5deg)" />
    <img v-click src="/assets/images/logos/react.svg" class="prep-ingr" style="top: 40px; left: -20px; transform: rotate(-3deg)" />
    <div v-click class="prep-ingr prep-ingr-generic" style="top: 50px; right: -10px; transform: rotate(7deg)">
      <lucide:image class="prep-ingr-icon" />
    </div>
    <div v-click class="prep-ingr prep-ingr-generic" style="top: 100px; left: 60px; transform: rotate(-5deg)">
      <lucide:braces class="prep-ingr-icon" />
    </div>
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
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}
.prep-ingr-generic {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
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
layout: basic-title
---

::title::
Chaque ingrédient, sa préparation

::default::

<div class="prep-transform">
  <div v-click class="prep-row">
    <img src="/assets/images/logos/typescript.svg" class="prep-logo" />
    <div class="prep-action">🔪 épluché</div>
    <div class="prep-arrow">→</div>
    <lucide:file-code class="prep-result-icon" />
    <span class="prep-result-label">JS</span>
  </div>
  <div v-click class="prep-row">
    <img src="/assets/images/logos/sass.svg" class="prep-logo" />
    <div class="prep-action">🔪 émincé</div>
    <div class="prep-arrow">→</div>
    <lucide:file-code class="prep-result-icon" />
    <span class="prep-result-label">CSS</span>
  </div>
  <div v-click class="prep-row">
    <div class="prep-logo-wrap"><lucide:image class="prep-logo-icon" /></div>
    <div class="prep-action">🫙 mariné</div>
    <div class="prep-arrow">→</div>
    <lucide:image class="prep-result-icon" />
    <span class="prep-result-label">optimisé + hashé</span>
  </div>
</div>

<style>
.prep-transform {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
}
.prep-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-amber);
}
.prep-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.prep-logo-wrap {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.prep-logo-icon {
  font-size: 2.2rem;
  color: var(--theme-color-steel);
}
.prep-action {
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  min-width: 100px;
}
.prep-arrow {
  font-size: 1.8rem;
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
}
.prep-result-icon {
  font-size: 1.8rem;
  color: var(--theme-color-steel);
}
.prep-result-label {
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-steel);
}
</style>

<!--
Chaque type d'ingrédient a son poste de travail dédié. Le TypeScript est épluché (transpilé en JS pur), le SCSS est émincé (compilé en CSS), les images sont marinées (optimisées, hashées pour le cache). Chaque poste = un loader ou un plugin dans la config du bundler. On va regarder en détail deux de ces préparations : la transpilation et la résolution de modules.
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
src: ./slides/transpilation/before-after.md
---

---
src: ./slides/module-resolution/intro.md
---

---
src: ./slides/module-resolution/problem.md
---

---
src: ./slides/module-resolution/cjs-vs-esm.md
---

---
src: ./slides/module-resolution/esm-example.md
---

---
src: ./slides/module-resolution/cjs-example.md
---

---
src: ./slides/module-resolution/mix.md
---
