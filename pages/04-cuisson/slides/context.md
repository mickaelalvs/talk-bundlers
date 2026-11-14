---
layout: basic-title
transition: slide-left
---

::title::
La cuisson

::default::

<div class="problem-content">
  <p class="problem-phrase">On a tout mis dans la casserole...</p>
  <div class="problem-list">
    <div v-click="1" class="problem-item">
      <span v-click="4" class="problem-tint"></span>
      <span v-click.hide="4" class="problem-face"><lucide-file-code class="problem-icon" /><span>Tout le code concaténé</span></span>
      <span v-click="4" class="problem-face problem-face-after"><span class="note-chip problem-chip"><lucide-weight /></span><span>Des Mo inutiles</span></span>
    </div>
    <div v-click="2" class="problem-item">
      <span v-click="4" class="problem-tint"></span>
      <span v-click.hide="4" class="problem-face"><lucide-skull class="problem-icon" /><span>Code mort inclus</span></span>
      <span v-click="4" class="problem-face problem-face-after"><span class="note-chip problem-chip"><lucide-weight /></span><span>Des Mo inutiles</span></span>
    </div>
    <div v-click="3" class="problem-item">
      <span v-click="4" class="problem-tint"></span>
      <span v-click.hide="4" class="problem-face"><lucide-package class="problem-icon" /><span>Un seul fichier monolithique</span></span>
      <span v-click="4" class="problem-face problem-face-after"><span class="note-chip problem-chip"><lucide-weight /></span><span>Des Mo inutiles</span></span>
    </div>
  </div>
</div>

<SlideItem src="/assets/images/items/pot.svg" size="200px" bottom="30px" right="60px" rotate="-5deg" />

<style>
.problem-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 1rem;
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
  position: relative;
  display: grid;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  border: 2px solid var(--theme-color-raspberry);
  font-size: 1.3rem;
  color: var(--theme-color-charcoal);
}
.problem-tint {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: rgba(196, 81, 92, 0.1);
}
.problem-face {
  grid-area: 1 / 1;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.problem-face-after {
  justify-content: center;
}
.problem-item:nth-child(2) {
  --d: 0.12s;
}
.problem-item:nth-child(3) {
  --d: 0.24s;
}
.problem-face-after:not(.slidev-vclick-hidden) .problem-chip {
  animation: problem-weight-drop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: var(--d, 0s);
}
.problem-item:has(.problem-tint:not(.slidev-vclick-hidden)) {
  animation: problem-thud 0.4s ease-out both;
  animation-delay: calc(var(--d, 0s) + 0.3s);
}
@keyframes problem-weight-drop {
  0% {
    opacity: 0;
    transform: translateY(-28px) scale(0.6);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes problem-thud {
  0% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(4px) scaleY(0.96);
  }
  100% {
    transform: translateY(0) scaleY(1);
  }
}
.problem-chip {
  --chip: var(--theme-color-raspberry);
  margin-right: -0.2rem;
}
.problem-icon {
  font-size: 1.8rem;
  color: var(--theme-color-raspberry);
}
</style>

<!--
Sans optimisation, le bundler fait la chose la plus simple : il concatène tout.
Tous les fichiers se retrouvent dans un seul bundle.
Y compris le code qu'on n'utilise jamais, les fonctions importées mais jamais appelées, les modules entiers dont on ne prend qu'un bout.
Et tout ça dans un seul fichier monolithique que le navigateur doit télécharger en entier.

[click:4] Les trois cartes se transforment en la même chose : des Mo inutiles. C'est le poids.
Tout le reste en découle, à dire à l'oral :
- du temps : sur une connexion 3G, chaque kilo-octet compte, l'utilisateur voit une page blanche et finit par partir.
- de la data : dans beaucoup de pays, la data mobile est un budget, on gaspille l'argent de nos utilisateurs.
C'est pour ça qu'on a besoin des techniques qu'on va voir maintenant.
-->
