---
layout: basic-title
transition: view-transition
---

::title::
La cuisson

::default::

<div class="problem-content">
  <p class="problem-phrase">On a tout mis dans la casserole...</p>
  <div class="problem-list">
    <div v-click class="problem-item"><lucide-file-code class="problem-icon" /><span>Tout le code concaténé</span></div>
    <div v-click class="problem-item"><lucide-skull class="problem-icon" /><span>Code mort inclus</span></div>
    <div v-click class="problem-item"><lucide-package class="problem-icon" /><span>Un seul fichier monolithique</span></div>
  </div>
</div>

<SlideItem src="/assets/images/items/pot.svg" size="200px" bottom="30px" right="60px" rotate="-5deg" opacity="0.5" />

<style>
.problem-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  gap: 2rem;
}
.problem-phrase {
  font-size: 2rem;
  text-align: center;
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
}
.problem-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.problem-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  border-left: 4px solid var(--theme-color-salmon);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  font-size: 1.3rem;
  color: var(--theme-color-charcoal);
}
.problem-icon {
  font-size: 1.8rem;
  color: var(--theme-color-salmon);
}
</style>

<!--
Sans optimisation, le bundler fait la chose la plus simple : il concatène tout.
Tous les fichiers se retrouvent dans un seul bundle.
Y compris le code qu'on n'utilise jamais — les fonctions importées mais jamais appelées, les modules entiers dont on ne prend qu'un bout.
Et tout ça dans un seul fichier monolithique que le navigateur doit télécharger en entier.
-->
