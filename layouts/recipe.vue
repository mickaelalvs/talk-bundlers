<script setup>
defineProps({
  // done    = nombre d'étapes terminées (☑ barré, gris)
  // current = nombre d'étapes en cours juste après (orange, soulignées)
  // le reste = à venir (☐)
  done: { type: Number, default: 0 },
  current: { type: Number, default: 1 },
})

// La recette du bundler — éditable ici, à un seul endroit.
const STEPS = [
  { cuisine: 'Trouver les ingrédients', tech: 'résolution' },
  { cuisine: 'La mise en place', tech: 'graphe' },
  { cuisine: 'Les préparations', tech: 'transform' },
  { cuisine: 'Le tri', tech: 'tree-shaking' },
  { cuisine: 'Le découpage', tech: 'split' },
  { cuisine: 'La réduction', tech: 'minif' },
  { cuisine: 'Le dressage', tech: 'output' },
]
</script>

<template>
  <img
    src="/assets/images/background.svg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
  />

  <div class="recipe-stage">
    <div class="recipe-paper">
      <div class="recipe-tape"></div>
      <div class="recipe-head">La recette</div>
      <ul class="recipe-list">
        <li
          v-for="(s, i) in STEPS"
          :key="i"
          class="recipe-row"
          :class="{
            'is-done': i + 1 <= done,
            'is-current': i + 1 > done && i + 1 <= done + current,
          }"
        >
          <span class="recipe-check">{{ i + 1 <= done ? '☑' : '☐' }}</span>
          <span class="recipe-names">
            <span
              v-if="i + 1 > done && i + 1 <= done + current"
              v-mark="{ at: 1, type: 'underline', color: '#db994d' }"
              class="recipe-cuisine"
            >{{ s.cuisine }}</span>
            <span v-else class="recipe-cuisine">{{ s.cuisine }}</span>
            <span class="recipe-tech">({{ s.tech }})</span>
          </span>
        </li>
      </ul>
    </div>

    <div v-if="$slots.default" class="recipe-postit">
      <div class="recipe-postit-tape"></div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.recipe-stage {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.recipe-paper {
  position: relative;
  background: #fffdf5;
  border-radius: 4px;
  padding: 2.5rem 3rem 2.25rem;
  min-width: 30rem;
  box-shadow: 0 14px 36px rgba(67, 67, 67, 0.22);
  transform: rotate(-1.2deg);
  border: 1px solid #ece7d6;
}
.recipe-tape {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%) rotate(2deg);
  width: 120px;
  height: 34px;
  background: rgba(219, 153, 77, 0.35);
  border: 1px solid rgba(219, 153, 77, 0.25);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}
.recipe-head {
  font-family: "Paytone One", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  margin-bottom: 1.25rem;
  letter-spacing: 0.03em;
}
.recipe-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.recipe-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  font-size: 1.35rem;
  color: var(--theme-color-charcoal);
}
.recipe-check {
  font-size: 1.2rem;
  line-height: 1;
  color: var(--theme-color-slate);
}
.recipe-names {
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.recipe-cuisine {
  font-family: "Paytone One", sans-serif;
}
.recipe-tech {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
}
/* Étape faite : barrée + grisée */
.recipe-row.is-done {
  color: var(--theme-color-mist);
}
.recipe-row.is-done .recipe-check {
  color: var(--theme-color-amber);
}
.recipe-row.is-done .recipe-cuisine {
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  color: var(--theme-color-mist);
}
.recipe-row.is-done .recipe-tech {
  text-decoration: line-through;
  opacity: 0.6;
}
/* Étape en cours : orange */
.recipe-row.is-current .recipe-cuisine {
  color: var(--theme-color-amber);
}
.recipe-row.is-current .recipe-check {
  color: var(--theme-color-amber);
}
/* Mini post-it (slot) en bas à droite */
.recipe-postit {
  position: absolute;
  z-index: 3;
  bottom: 2rem;
  right: 2.5rem;
  width: 19rem;
  min-height: 12rem;
  padding: 1.6rem 1.5rem;
  background: #fff0c2;
  box-shadow: 0 10px 26px rgba(67, 67, 67, 0.24);
  transform: rotate(2.5deg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.45;
  color: var(--theme-color-charcoal);
}
.recipe-postit :deep(p) {
  margin: 0;
}
.recipe-postit-tape {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(-3deg);
  width: 80px;
  height: 26px;
  background: rgba(219, 153, 77, 0.3);
  border: 1px solid rgba(219, 153, 77, 0.22);
}
</style>
