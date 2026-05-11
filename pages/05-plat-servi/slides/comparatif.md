---
layout: basic-title
transition: view-transition
---

::title::
Le plat est servi

::subtitle::
Quel ustensile pour quel plat ?

::default::

<div class="choix-content">
  <div v-click class="choix-card">
    <lucide-layout-dashboard class="choix-icon" />
    <div class="choix-text">
      <span class="choix-need">Je crée une app</span>
      <span class="choix-answer">→ Vite</span>
    </div>
    <span class="choix-why">Dev instantané, config minimale, écosystème riche</span>
  </div>
  <div v-click class="choix-card">
    <lucide-package class="choix-icon" />
    <div class="choix-text">
      <span class="choix-need">Je publie une librairie</span>
      <span class="choix-answer">→ Rollup</span>
    </div>
    <span class="choix-why">Output ESM propre, tree-shaking optimal pour les consommateurs</span>
  </div>
  <div v-click class="choix-card">
    <lucide-building class="choix-icon" />
    <div class="choix-text">
      <span class="choix-need">J'ai un gros legacy</span>
      <span class="choix-answer">→ Webpack</span>
    </div>
    <span class="choix-why">Écosystème immense, tout est pluggable, migration risquée</span>
  </div>
  <div v-click class="choix-card">
    <lucide-rocket class="choix-icon" />
    <div class="choix-text">
      <span class="choix-need">Je veux juste prototyper</span>
      <span class="choix-answer">→ Parcel</span>
    </div>
    <span class="choix-why">Zéro config, détection automatique des transforms</span>
  </div>
</div>

<SlideItem src="/assets/images/items/cutting_board.svg" size="100px" bottom="25px" right="50px" rotate="-5deg" opacity="0.2" />

<style>
.choix-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75%;
  gap: 0.8rem;
}
.choix-card {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 1.2rem;
  padding: 0.7rem 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
  width: 520px;
}
.choix-icon {
  font-size: 1.5rem;
  color: var(--theme-color-steel);
  flex-shrink: 0;
}
.choix-text {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}
.choix-need {
  font-size: 1rem;
  color: var(--theme-color-charcoal);
}
.choix-answer {
  font-family: 'Paytone One', sans-serif;
  font-size: 1rem;
  color: var(--theme-color-amber);
}
.choix-why {
  width: 100%;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
  padding-left: 2.7rem;
  font-style: italic;
}
</style>

<!--
On part du besoin, pas de l'outil.
[click] Je crée une app → Vite.
[click] Pourquoi ? Dev instantané grâce aux ES Modules natifs, config minimale, et un écosystème de plugins qui couvre tout.
[click] Je publie une lib → Rollup.
[click] Pourquoi ? Il produit l'output ESM le plus propre, et le tree-shaking est optimal pour ceux qui consomment ta lib.
[click] J'ai un gros legacy → Webpack.
[click] Pourquoi ? L'écosystème de loaders/plugins est immense, tout est déjà là, et migrer un gros projet c'est risqué.
[click] Je veux prototyper → Parcel.
[click] Pourquoi ? Tu mets tes fichiers, il détecte tout seul ce qu'il doit faire. Zéro friction.

Note : esbuild n'apparaît pas ici car c'est rarement un choix direct — c'est un moteur utilisé par d'autres outils (Vite l'utilise en interne pour le dev). Si quelqu'un demande : "esbuild c'est pour les cas où tu veux un build ultra-rapide sans fioritures, souvent pour des outils CLI ou des scripts de build custom."
-->
