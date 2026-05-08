---
layout: basic-title
---

::title::
Avant / après

::default::

<div class="ba-wrap">
  <div class="ba-card ba-before">
    <div class="ba-stage">AVANT</div>
    <div class="ba-file">
      <div class="ba-file-name">app.tsx</div>
      <div class="ba-tags">
        <span class="ba-tag ba-tag-ts">TypeScript</span>
        <span class="ba-tag ba-tag-jsx">JSX</span>
      </div>
    </div>
    <div class="ba-caption">ingrédient cru</div>
  </div>

  <div v-click="1" class="ba-knife">🔪</div>

  <div v-click="1" class="ba-card ba-after">
    <div class="ba-stage">APRÈS</div>
    <div class="ba-file">
      <div class="ba-file-name">app.js</div>
      <div class="ba-tags">
        <span class="ba-tag ba-tag-js">JavaScript pur</span>
      </div>
    </div>
    <div class="ba-caption">prêt pour le navigateur</div>
  </div>
</div>

<style>
.ba-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  padding-top: 1rem;
}
.ba-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 280px;
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.ba-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  color: var(--theme-color-slate);
}
.ba-before .ba-stage {
  color: var(--theme-color-amber);
}
.ba-after .ba-stage {
  color: var(--theme-color-steel);
}
.ba-file {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}
.ba-file-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 1.4rem;
  color: var(--theme-color-charcoal);
  font-weight: 700;
}
.ba-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.ba-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  padding: 0.25rem 0.7rem;
  border-radius: 999px;
  color: white;
}
.ba-tag-ts {
  background: #3178c6;
}
.ba-tag-jsx {
  background: #61dafb;
  color: #1a3a5c;
}
.ba-tag-js {
  background: #f7df1e;
  color: #1a1a1a;
}
.ba-caption {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
.ba-knife {
  font-size: 3.5rem;
  line-height: 1;
}
</style>

<!--
TODO :
- Faire un layout de slide qui montre un peu un avant après de chaque étape ?

La signature visuelle de fin de partie : ce qu'on avait → ce qu'on a maintenant.

[click] Le couteau apparaît, et avec lui le résultat : app.tsx devient app.js,
TypeScript et JSX sont passés par la lame, il ne reste que du JS pur lisible
par le navigateur.

→ Transition vers le sous-bloc suivant : Module resolution CJS/ESM.
-->
