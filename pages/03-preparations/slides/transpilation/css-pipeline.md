---
layout: basic-title
---

::title::
Et le CSS ? Même logique

::default::

<div class="cssp-grid">

<div class="cssp-col">

<div class="cssp-stage cssp-stage-before">avant</div>

<MacWindow title="styles.scss">

```scss
$brand: #db994d;

.btn {
  color: $brand;
  &:hover {
    color: darken($brand, 10%);
  }
}
```

</MacWindow>

</div>

<div class="cssp-col">

<div class="cssp-stage cssp-stage-after">après</div>

<MacWindow title="index.css">

```css
.btn { color: #db994d; }
.btn:hover { color: #c17d2a; }
```

</MacWindow>

</div>

</div>

<div class="cssp-bricks">
<span class="cssp-brick">Sass</span> compile variables &amp; nesting
<span class="cssp-arrow">→</span>
<span class="cssp-brick">Lightning&nbsp;CSS</span> / <span class="cssp-brick">PostCSS</span> préfixent &amp; minifient
</div>

<style scoped>
.cssp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.cssp-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.cssp-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.cssp-stage-before {
  background: rgba(219, 153, 77, 0.15);
  color: var(--theme-color-amber);
}
.cssp-stage-after {
  background: rgba(81, 138, 184, 0.15);
  color: var(--theme-color-steel);
}
.cssp-col :deep(pre) {
  text-align: left;
}
.cssp-bricks {
  margin-top: 1.8rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
}
.cssp-brick {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  color: var(--theme-color-amber);
  background: rgba(219, 153, 77, 0.15);
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
}
.cssp-arrow {
  color: var(--theme-color-slate);
  font-weight: 700;
  margin: 0 0.6rem;
}
</style>

<!--
Le pendant CSS de la transpilation JS. Même schéma : un fichier source dans un
langage enrichi (SCSS) → transformé en CSS standard que le navigateur comprend.

Les briques en jeu :
- Sass : compile les variables, le nesting, les mixins → CSS plat.
- Lightning CSS (Rust) ou PostCSS + Autoprefixer (JS) : ajoutent les préfixes
  navigateurs et minifient.

Même mouvement que côté JS : les briques JS (PostCSS) sont concurrencées par
des équivalents Rust (Lightning CSS), plus rapides. Vite utilise Lightning CSS
par défaut pour ça.

Transition : on a vu transformer JS et CSS. Place à la résolution des modules.
-->
