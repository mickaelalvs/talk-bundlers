---
layout: recipe
done: 5
current: 1
transition: slide-left
---

Le découpage : on répartit en portions 🍱

---
layout: basic-title
---

::title::
Code splitting, c'est quoi ?

::default::

<div class="def-quote">
<div v-click="1" class="def-quote-main">Servir le repas <strong>en plusieurs services</strong> : l'entrée d'abord, le plat quand tu es prêt, le dessert à la fin.</div>
<div v-click="2" class="def-quote-tech">Le bundler découpe le code en <strong>chunks</strong> séparés, chargés à la demande ou en parallèle.</div>
<div v-click="3" class="def-quote-note"><lucide-info class="def-quote-note-icon" /><span><strong>Code splitting</strong> = découper au build · <strong>Lazy loading</strong> = charger au runtime</span></div>
</div>

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
