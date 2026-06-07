---
layout: basic
transition: view-transition
---

<div class="vite-state">
<div class="vite-era" style="view-transition-name: viteEra">Vite 7</div>
<div class="vite-h" style="view-transition-name: viteHeadline">Vite délègue : <strong>un spécialiste par moment</strong></div>
<div class="vite-row">
<div class="vite-node" style="view-transition-name: viteNode"><img src="/assets/images/logos/vite.svg" class="vite-logo" /><span class="vite-nm">Vite</span></div>
<div class="vite-arrow" style="view-transition-name: viteArrow">délègue</div>
<div class="vite-target" style="view-transition-name: viteTarget">
<div class="vite-node vite-node-sm"><img src="/assets/images/logos/esbuild.svg" class="vite-logo-sm" /><span class="vite-nm-sm">esbuild <em>dev</em></span></div>
<div class="vite-node vite-node-sm"><img src="/assets/images/logos/rollup.png" class="vite-logo-sm" /><span class="vite-nm-sm">Rollup <em>prod</em></span></div>
</div>
</div>
<div class="vite-take" style="view-transition-name: viteTake">Deux bundlers, un par besoin.</div>
</div>

<!--
ÉTAT 1 — Vite 7 : Vite délègue à esbuild (dev) + Rollup (prod). Deux bundlers.
On avance (espace) → view transition vers Vite 8 : logo Vite + flèche restent,
la cible (esbuild+Rollup) se MORPHE en Rolldown. Pas de saut, un morph.
-->

---
layout: basic
transition: view-transition
---

<div class="vite-state">
<div class="vite-era vite-era-8" style="view-transition-name: viteEra">Vite 8</div>
<div class="vite-h" style="view-transition-name: viteHeadline">Les deux n'en font plus qu'<strong>un</strong></div>
<div class="vite-row">
<div class="vite-node" style="view-transition-name: viteNode"><img src="/assets/images/logos/vite.svg" class="vite-logo" /><span class="vite-nm">Vite</span></div>
<div class="vite-arrow" style="view-transition-name: viteArrow">utilise</div>
<div class="vite-node vite-node-big vite-target" style="view-transition-name: viteTarget"><img src="/assets/images/logos/rolldown.svg" class="vite-logo-big" /><span class="vite-nm-big">Rolldown <em>dev + prod</em></span></div>
</div>
<div class="vite-take vite-take-8" style="view-transition-name: viteTake">One bundler to replace two.</div>
</div>

<!--
ÉTAT 2 — Vite 8 : Rolldown (Rust, bâti sur Oxc), un seul moteur dev + prod.
"One bundler to replace two." Plus de mismatch dev/prod, ~10-30× plus rapide
que Rollup. Vite 8 stable depuis mars 2026.

Les view-transition-name partagés (viteEra, viteHeadline, viteNode, viteArrow,
viteTarget, viteTake) font morpher les éléments communs au lieu de tout
redessiner. Styles dans style.css (globaux, donc présents sur les 2 slides).

À partir d'ici : Vite = Vite 8 / Rolldown. Transition → la cuisine commence.
-->
