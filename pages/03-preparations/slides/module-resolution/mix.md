---
layout: basic-title
---

::title::
Vos dépendances ont du CJS

::default::

<div class="mix-layout">
<div class="mix-project">
<div class="mix-row">
<lucide:folder-open class="mix-icon mix-icon--esm" />
<span class="mix-label">src/</span>
<span class="mix-tag mix-tag--esm">ESM</span>
</div>
<div class="mix-row">
<lucide:folder class="mix-icon mix-icon--mix" />
<span class="mix-label">node_modules/</span>
<span class="mix-tag mix-tag--cjs">CJS</span>
<span class="mix-tag mix-tag--esm">ESM</span>
<span class="mix-tag mix-tag--cjs">CJS</span>
</div>
</div>
<p v-click class="mix-conclusion">Le bundler doit cuisiner avec <strong>les deux</strong></p>
</div>

<style>
.mix-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
}
.mix-project {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.mix-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.mix-icon {
  font-size: 1.8rem;
}
.mix-icon--esm {
  color: #22c55e;
}
.mix-icon--mix {
  color: var(--theme-color-steel);
}
.mix-label {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--theme-color-slate);
  min-width: 140px;
}
.mix-tag {
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}
.mix-tag--esm {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
}
.mix-tag--cjs {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}
.mix-conclusion {
  font-size: 1.2rem;
  color: var(--theme-color-slate);
}
.mix-conclusion strong {
  color: var(--theme-color-amber);
}
</style>

<!--
Du coup voilà, on a deux types de JavaScript différents. Et vous vous dites sûrement que vous n'êtes pas dans ce cas-là, car vous avez commencé votre projet en ES Modules.

Eh bien figurez-vous que l'ES Module est plutôt récent en terme de standard, et il y a de très grandes chances que vos dépendances contiennent du CJS. Imaginez que vous avez du lodash, ou je ne sais quoi, vous avez du CJS dans votre projet.

Du coup les bundlers doivent être capables de gérer les deux standards. Et on va voir comment ils s'en sortent.
-->
