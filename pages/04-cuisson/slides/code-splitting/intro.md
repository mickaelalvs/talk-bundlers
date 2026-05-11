---
layout: basic
---

<div class="cs-subsection">
  <div class="cs-icon">🍽️</div>
  <h1 class="cs-name">Code splitting</h1>
</div>

<style>
.cs-subsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
}
.cs-icon {
  font-size: 7rem;
  line-height: 1;
}
.cs-name {
  font-family: "Paytone One", sans-serif !important;
  color: var(--theme-color-steel) !important;
  font-size: 5rem !important;
  margin: 0;
}
</style>

<!--
Transition vers le sous-bloc code splitting. On a nettoyé le code mort avec le
tree-shaking, maintenant on va découper le résultat en morceaux intelligents.
C'est la dernière étape avant la minification.
-->

---
layout: basic-title
---

::title::
Code splitting, c'est quoi ?

::default::

<div class="cs-def">
  <div v-click="1" class="cs-def-role">
    <span class="cs-emoji">🍽️</span>
    Servir en plusieurs services.<br />
    L'entrée arrive d'abord, le plat principal quand tu es prêt,
    le dessert à la fin. Le navigateur ne charge que ce dont il a
    besoin maintenant.
  </div>
  <div v-click="2" class="cs-def-tech">
    Le bundler découpe le code en <strong>chunks</strong> séparés,
    chargés à la demande ou en parallèle.
  </div>
  <div v-click="3" class="cs-def-nuance">
    <lucide-info class="cs-def-nuance-icon" />
    <span><strong>Code splitting</strong> = découper au build · <strong>Lazy loading</strong> = charger au runtime. L'un prépare, l'autre sert.</span>
  </div>
</div>

<style>
.cs-def {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  text-align: left;
  line-height: 1.5;
}
.cs-def-role {
  font-size: 1.5rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.cs-emoji {
  font-size: 2.2rem;
  line-height: 1;
  flex-shrink: 0;
}
.cs-def-tech {
  font-size: 1.15rem;
  color: var(--theme-color-charcoal);
  padding-left: 3.5rem;
}
.cs-def-tech strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.cs-def-nuance {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  padding: 0.6rem 1rem;
  padding-left: 3.5rem;
}
.cs-def-nuance-icon {
  font-size: 1.1rem;
  color: var(--theme-color-steel);
  flex-shrink: 0;
}
.cs-def-nuance strong {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85em;
  color: var(--theme-color-steel);
  font-weight: normal;
}
</style>

<!--
[click 1] La métaphore cuisine : un repas en plusieurs services. Tu ne
sers pas l'entrée, le plat et le dessert en même temps. Le navigateur
fait pareil : il charge d'abord ce qui est nécessaire à l'écran actuel.

[click 2] Le terme technique : le bundler produit plusieurs "chunks" (morceaux)
au lieu d'un seul fichier. Chaque chunk est un fichier JS indépendant, chargé
quand l'utilisateur en a besoin.

[click 3] Distinction importante : le code splitting c'est le TRAVAIL DU CHEF
(il prépare les plats séparément au build). Le lazy loading c'est le TRAVAIL
DU SERVEUR (il apporte chaque plat au bon moment au runtime). Les deux sont
complémentaires mais distincts. On peut code-splitter sans lazy-loader :
le vendor chunk est chargé en parallèle au démarrage, pas "à la demande".
-->
