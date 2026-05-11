# Spec — Sous-bloc Tree-shaking (partie 04)

## Contexte

Premier sous-bloc de la partie 04 ("La cuisson") du talk. Précède code-splitting
et minification (sous-blocs séparés, brainstormés plus tard).

## Audience visée

Développeurs mid-level. Connaissent les imports/exports, ont peut-être déjà
entendu parler de tree-shaking sans en saisir les vraies conditions de
fonctionnement.

## Objectif pédagogique

À la fin de cette partie, l'audience retient :

1. **Tree-shaking = supprimer le code non utilisé**, mais ça ne marche pas
   par magie
2. **Ça repose sur l'analyse statique**, donc ESM (statique) > CJS
   (dynamique)
3. **Deux côtés à aligner** : le package qu'on importe doit être bien
   packagé, et notre code ne doit pas le casser

## Approche pédagogique

Métaphore cuisine : "secouer l'arbre pour faire tomber les feuilles
mortes" / "enlever ce qu'on ne mange pas".

Articulation :

1. Concept (statique vs dynamique)
2. Démo concrète (lodash vs lodash-es)
3. Explication par le `package.json` (utiliser lodash pour matérialiser)
4. Côté ton code (les pièges du quotidien)
5. Bilan + checklist

## Slides détaillées

### 1. Sub-section title
- Layout: `basic` avec icône + nom centrés
- Contenu : 🌳 Tree-shaking
- Style identique à la sous-section transpilation pour cohérence

### 2. Définition + origine
- Layout: `basic-title`
- Contenu : 2 v-click reveals
  1. Phrase amicale + origine du nom : "Secouer l'arbre pour faire tomber les
     feuilles mortes." Son rôle : virer du bundle final tout le code qui ne
     sert pas.
  2. Définition tech courte : "Suppression du code non utilisé (dead code
     elimination), à la compilation."

### 3. Le concept : ESM vs CJS (CODE)
- Layout: `basic-title`
- Contenu : grille 2 colonnes côte à côte
  - **ESM** : `import { debounce } from 'lodash-es'` + commentaires explicatifs
    "le bundler voit `debounce` → inclut SEULEMENT `debounce`" ✓
  - **CJS** : `const { debounce } = require('lodash')` + "le bundler ne sait
    pas ce qui sera utilisé à l'exécution → inclut TOUTE la lib" ✗
- Highlights couleur : ESM en vert/bleu, CJS en rouge/amber
- Notes speaker : "C'est l'analyse statique qui rend tout possible. ESM est
  statique par construction, CJS est dynamique par construction."

### 4. Démo lodash (placeholder)
- Layout: `basic-title`
- Contenu : bar chart deux barres
  - lodash (CJS) : ~70 KB (placeholder)
  - lodash-es (ESM) : ~7 KB (placeholder)
- Disclaimer "chiffres à mesurer", framing "import { debounce } depuis chacun"
- Notes speaker : "même fonction, même résultat — mais ×10 sur la taille du
  bundle"
- TODO : remplacer par vraies mesures plus tard

### 5. Côté package : leur `package.json` (lodash vs lodash-es)
- Layout: `basic-title`
- Contenu : 2 `package.json` côte à côte
  - lodash : `"main"` seul, **pas** de `"module"`, **pas** de `"sideEffects"`
  - lodash-es : `"main"` + `"module"` (ou `"exports"`) + `"sideEffects": false`
- Highlights sur les lignes qui font la différence
- Caption : "Même code source. Packaging différent. Voilà le secret."
- Notes speaker : explique chaque champ rapidement (`module`, `exports`,
  `sideEffects`, granularité fichiers)

### 6. Côté ton code : 4 pièges
- Layout: `basic-title`
- Contenu : 4 v-click reveals (un piège par click)
  1. **Side effects involontaires** au top-level d'un module (modifier
     `window`, enregistrer un plugin global)
  2. **Imports trop larges** : `import _ from 'lodash'` (default) défait
     tout l'effort
  3. **Mode `production` absent** : en dev, le code est juste *marqué*, pas
     supprimé
  4. **Babel qui convertit ESM en CJS** au passage (cross-ref partie
     transpilation)
- Format compact : icône + titre + une ligne de contexte
- Notes speaker : pour chaque, donner l'exemple concret

### 7. Bilan + checklist (avant/après)
- Layout: `basic-title`
- Contenu : pattern avant/après comme transpilation
  - **AVANT** : bundle gros, code mort embarqué
  - **APRÈS** : bundle réduit, seulement ce qu'on mange
- En-dessous : checklist des conditions
  - ✓ ESM (import/export)
  - ✓ Mode production
  - ✓ Package bien fait (`exports`, `module`, `sideEffects`)
  - ✓ Imports propres (pas de default sur les libs)
- Notes : transition vers code-splitting (sous-bloc suivant)

## Structure de fichiers

```
pages/04-cuisson/slides/tree-shaking/
├── intro.md          (slides 1-2 : titre + définition)
├── concept.md        (slide 3 : ESM vs CJS code)
├── demo-lodash.md    (slide 4 : bar chart)
├── package-json.md   (slide 5 : diff package.json)
├── pitfalls.md       (slide 6 : 4 pièges côté code)
└── bilan.md          (slide 7 : avant/après + checklist)
```

Le fichier `pages/04-cuisson/slides.md` doit importer ces 6 fichiers.

## Assets requis

- ✅ `lodash` logo si dispo sur svgl.app
- Pas d'autres assets spécifiques requis

## Décisions

- **Code en colonnes** plutôt que magic-move (cohérent avec demos transpilation
  modifiés à la demande utilisateur)
- **Démo placeholder** ; mesures réelles à substituer plus tard
- **Lodash comme fil rouge** : démo (slide 4) puis explication par le
  `package.json` (slide 5) — narration concrète, pas abstraite
- **4 pièges** plutôt qu'un seul : montre la diversité des cas où ça casse
- **Pattern avant/après + checklist** en bilan (signature de fin de partie)

## Hors-scope

- Code splitting (sous-bloc séparé partie 04)
- Minification (sous-bloc séparé partie 04)
- Détails sur `/* #__PURE__ */` annotations (niche, pas pour ce niveau)
- Détails comparatifs entre bundlers (Rollup excellent vs Webpack OK vs
  esbuild basique) — pourrait apparaître plus tard mais hors scope ici
