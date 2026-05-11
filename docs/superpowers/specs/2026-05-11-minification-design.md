# Spec — Sous-bloc Minification (partie 04)

## Contexte

Troisième sous-bloc de la partie 04 ("La cuisson"), après le sous-bloc
tree-shaking (déjà fait) et le sous-bloc code-splitting (à faire par
quelqu'un d'autre).

## Audience visée

Développeurs mid-level. Connaissent le terme "minification" superficiellement
("ça enlève les espaces"). On veut leur montrer que ça va beaucoup plus loin,
et leur faire comprendre l'ordre de la pipeline.

## Objectif pédagogique

À la fin du sous-bloc, l'audience retient :

1. **La minification fait bien plus que retirer les espaces** : renommage,
   mangling, inlining
2. **Sa place dans la pipeline** : après tree-shaking et code splitting,
   avant l'output
3. **Pour Webpack, elle est aussi le moment où le code marqué par le TS
   est vraiment supprimé** (Rollup/esbuild l'ont déjà fait avant)
4. **Le bundle analyzer permet de voir** ce qui pèse vraiment dans le bundle

## Approche pédagogique

Métaphore cuisine : **"réduire la sauce"**. On garde tous les ingrédients,
mais plus concentrés. Service final.

Structure :

1. Définition + place dans la pipeline
2. Techniques basiques (espaces + renommage)
3. Techniques avancées (mangling + inlining)
4. Bundle analyzer (le wow visuel)
5. Bilan + outils

## Slides détaillées

### 1. Sub-section title
- Layout: `basic` (cohérent avec tree-shaking intro)
- Contenu : 🗜️ Minification

### 2. Définition + ordre dans la pipeline
- Layout: `basic-title`
- Contenu : 2 v-click reveals
  1. Métaphore + rôle : "Réduire la sauce. Tout est conservé, mais plus
     concentré, prêt à servir."
  2. **L'ordre dans la pipeline** + nuance Webpack/Rollup-esbuild :
     - Pipeline : `loaders → graphe → tree-shaking → code splitting →
       minification → output`
     - Sur Webpack, la minif **supprime** ce que le TS avait juste marqué
     - Sur Rollup/esbuild, le TS supprime déjà : la minif fait juste les
       autres choses (compression)

### 3. Techniques basiques
- Layout: `basic-title`
- Contenu : 2 techniques en code avant/après, layout grille
  - **a) Espaces + commentaires** : avant lisible, après "tout collé"
  - **b) Renommage de variables** : `totalScore` → `t`
- Caption : "ce que tu vois quand tu ouvres un bundle minifié"

### 4. Techniques avancées
- Layout: `basic-title`
- Contenu : 2 techniques avancées, layout grille
  - **a) Mangling de propriétés** : `user.authenticationToken` → `user.a`
    (avec note : opt-in chez Terser, peut casser du code)
  - **b) Inlining de fonctions** : petite fonction `double(x)` remplacée
    par son corps inline
- Caption : "les optimisations que tu ne soupçonnais peut-être pas"

### 5. Bundle analyzer (placeholder)
- Layout: `basic-title`
- Contenu : treemap stylisée en CSS, rectangles proportionnels
  - lodash ~35%, react ~18%, moment ~12%, etc. (placeholder)
- Caption : "visualise ce qui pèse vraiment dans ton bundle"
- TODO : remplacer par capture réelle (rollup-plugin-visualizer ou
  webpack-bundle-analyzer sur un vrai projet)

### 6. Bilan + outils
- Layout: `basic-title`
- Contenu : avant/après (style cohérent avec bilan tree-shaking) + liste
  des outils
  - **AVANT** : bundle lisible, ~50 KB
  - **APRÈS** : bundle illisible, ~12 KB
  - **Outils** : Terser · esbuild --minify · swc-minify
- Notes : Vite utilise esbuild pour la minif depuis 2024 (lighter, faster)

## Structure de fichiers

```
pages/04-cuisson/slides/minification/
├── intro.md          (slides 1-2 : titre + définition + ordre)
├── basic.md          (slide 3 : espaces + renommage)
├── advanced.md       (slide 4 : mangling + inlining)
├── analyzer.md       (slide 5 : treemap)
└── bilan.md          (slide 6 : avant/après + outils)
```

Le fichier `pages/04-cuisson/slides.md` doit importer ces 5 fichiers à la
suite du sous-bloc tree-shaking (et plus tard, code-splitting).

## Assets requis

Aucun nouveau logo nécessaire. Tous les outils mentionnés (Terser, esbuild,
swc) sont déjà couverts par les logos existants ou par du texte.

## Décisions

- **Métaphore "réduire la sauce"** : reprise directe du plan d'origine,
  cohérent avec la métaphore globale
- **Deux slides séparées** pour techniques basiques vs avancées (choix
  user pour rythme)
- **Bundle analyzer en placeholder** : treemap CSS approximative, vraie
  capture à substituer plus tard
- **Nommer les outils** : sur la slide bilan, pas dispatchés partout
- **Pas de slide "pipeline visuel"** dédiée : l'ordre est expliqué dans la
  slide 2 (définition + ordre) sans en faire un sujet séparé

## Hors-scope

- Pas de comparaison détaillée Terser vs esbuild vs swc (on les nomme,
  point)
- Pas de plongée technique dans les algos de minification (AST, scope
  analysis, etc.) — trop deep
- Pas de discussion sur les source maps (sujet différent, peut être traité
  dans Build dev vs prod plus tard)
