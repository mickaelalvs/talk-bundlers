# Spec — Sous-bloc Transpilation (partie 03)

## Contexte

Sous-bloc de la partie 03 ("La préparation des ingrédients") du talk
*Du frigo à l'assiette : ce que mijote vraiment votre bundler JavaScript*.

Suit le sous-bloc d'intro de la partie 03 (loaders & transformations généraux,
pas dans ce spec). Précède le sous-bloc Module resolution CJS/ESM (séparé,
brainstormé plus tard).

## Audience visée

Développeurs mid-level. Connaissent TypeScript, ont peut-être entendu parler
de SWC/esbuild sans connaître les détails. Curieux de comprendre ce qui se
passe sous le capot d'un bundler.

## Objectif pédagogique

À la fin de cette partie, l'audience retient :

1. **La transpilation transforme TS/JSX en JS** — moment "ah ouais c'est juste ça"
   en voyant le code généré
2. **Babel, SWC, esbuild ne font pas le même boulot à la même vitesse** — la
   différence est en orders of magnitude
3. **C'est pour ça que Vite est rapide en dev** — connexion concrète à l'outil
   que l'audience utilise

## Découpage 50/50

- **Acte 1** : ce que ça produit (3 démos magic-move)
- **Acte 2** : qui le fait (3 outils + benchmark + Vite)

## Métaphore cuisine

- Transpilation = épluchage / émincage des ingrédients bruts
- 3 chefs (Babel, SWC, esbuild) = 3 cuisiniers avec des couteaux différents
- Avant/après = ingrédient cru vs ingrédient préparé

## Slides détaillées

### 1. Sub-section title
- Layout: `title`
- Contenu: "🔪 Transpilation"
- Notes speaker: courte transition vers le sujet, contexte de la partie 03

### 2. Définition + scope
- Layout: `basic-title`
- Contenu: 3 v-click reveals
  1. **Définition** : "Transformer du code source en code que le navigateur
     peut exécuter"
  2. **Scope** : "Aujourd'hui : surtout TypeScript et JSX"
  3. **Nuance** : "Le JS moderne ? Rarement transpilé — sauf cas spécifiques
     (decorators stage-2, top-level await…)"
- Notes speaker: cadre le scope avant les exemples, fait pont avec partie 01

### 3. TS types → JS (magic-move)
- Layout: `basic-title` ou `default`
- Source : TypeScript avec types, generics, interface
  ```ts
  interface User { id: string; name: string }

  function findUser<T extends User>(id: string): T | null {
    return users.find((u): u is T => u.id === id) ?? null
  }
  ```
- Output : JS sans aucun type
  ```js
  function findUser(id) {
    return users.find((u) => u.id === id) ?? null
  }
  ```
- Punchline notes: "à l'exécution, c'est juste du JS"

### 4. JSX → React.createElement (magic-move)
- Layout: `basic-title` ou `default`
- Source : composant JSX simple
  ```tsx
  function Button({ label, onClick }) {
    return (
      <button className="btn" onClick={onClick}>
        {label}
      </button>
    )
  }
  ```
- Output : appels React.createElement
  ```js
  function Button({ label, onClick }) {
    return React.createElement(
      "button",
      { className: "btn", onClick: onClick },
      label
    )
  }
  ```
- Punchline notes: "JSX = sucre syntaxique"

### 5. TS enum → JS (magic-move)
- Layout: `basic-title` ou `default`
- Source :
  ```ts
  enum Color {
    Red,
    Green,
    Blue
  }
  ```
- Output : IIFE avec mapping bidirectionnel
  ```js
  var Color;
  (function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
  })(Color || (Color = {}));
  ```
- Punchline notes: "TypeScript génère parfois du code à l'exécution — surprise"

### 6. Les trois chefs
- Layout: grid 3 cellules (réutiliser `grid-icons` ou custom)
- Contenu pour chaque cellule : logo + nom + langage + année
  - **Babel** (2014, JavaScript)
  - **SWC** (2019, Rust)
  - **esbuild** (2020, Go)
- Apparition v-click : un par un
- Notes speaker: 3 cuisiniers, 3 couteaux différents

### 7. Benchmark
- Layout: `basic-title`
- Contenu: bar chart animé (CSS, barres qui poussent au v-click)
- **Données placeholder** (à remplacer plus tard par mesure réelle) :
  - Babel : 12.4 s
  - SWC : 0.6 s
  - esbuild : 0.15 s
- Framing: "résultats sur le projet **XXX**" (placeholder à substituer)
- Notes speaker: ordres de grandeur, pas chiffres exacts ; mesures à refaire

### 8. Pourquoi cette différence
- Layout: `basic-title`
- Contenu: 3 points v-click
  1. Langage compilé natif (Rust, Go) vs JS interprété
  2. Parallélisation native (esbuild)
  3. Moins de plugins externes / moins d'overhead
- Notes speaker: explique les chiffres précédents

### 9. Pour aller plus loin
- Layout: `basic-title`
- Contenu: 3 liens vers les benchmarks officiels
  - esbuild : <https://esbuild.github.io/faq/>
  - SWC : <https://swc.rs/docs/benchmarks>
  - Vite : <https://vitejs.dev/guide/why.html>
- Disclaimer: "leurs propres mesures, à vérifier"
- Notes speaker: pour creuser, pas dwell sur cette slide

### 10. Punchline Vite
- Layout: `basic`
- Contenu: "Et c'est pourquoi Vite est rapide en dev"
- Schéma simple : Vite → délègue → esbuild
- Notes speaker: connecter à l'outil que l'audience utilise au quotidien

### 11. Bilan avant/après
- Layout: `basic-title` ou `basic`
- Contenu: deux côtés
  - **AVANT** : un fichier `.tsx` (ingrédient cru)
  - **APRÈS** : un fichier `.js` (ingrédient préparé)
- Visuel optionnel : couteau / passage entre les deux
- Notes speaker: signature visuelle de fin de partie. À étendre aux autres
  sections plus tard si le pattern fonctionne.

## Structure de fichiers

```
pages/03-preparations/slides/transpilation/
├── intro.md          (slides 1-2 : titre + définition)
├── demos.md          (slides 3-5 : 3 magic-moves)
├── tools.md          (slide 6 : les 3 outils)
├── benchmark.md      (slides 7-9 : benchmark + pourquoi + liens)
├── vite-punchline.md (slide 10)
└── before-after.md   (slide 11)
```

Le fichier `pages/03-preparations/slides.md` doit importer ces 6 fichiers via
des `src:` (pattern de `dependency-graph`).

## Assets requis

- ✅ `esbuild.svg` (déjà téléchargé)
- ✅ `vite.svg` (déjà téléchargé)
- ❌ `babel.svg` à télécharger depuis svgl.app
- ❌ `swc.svg` à télécharger depuis svgl.app
- ✅ Items cuisine réutilisables (`/public/assets/images/items/`) si besoin
  pour le bilan avant/après

## Décisions

- **Magic-move** (natif Slidev) pour les transformations — format le plus
  impactant pour le "before/after" reveal
- **TS enum** retenu en 3e démo plutôt que `async/await → ES5` parce que les
  navigateurs evergreens supportent ES6+ aujourd'hui (la transpilation pour
  vieux navigateurs n'est plus le cas commun)
- **Benchmark avec placeholder** ; une mesure réelle sur un repo identifié
  sera substituée plus tard
- **Pattern avant/après** mis en place uniquement sur cette partie pour
  l'instant — généralisation future si validé
- **6 fichiers** au lieu de 11 (un par slide) — regroupement logique
  (demos ensemble, benchmark ensemble) pour limiter la fragmentation

## Hors-scope

- Pas de couverture du concept général de loaders/plugins (= partie 03 intro,
  brainstormée séparément)
- Pas de module resolution CJS/ESM (= sous-bloc séparé, à brainstormer ensuite)
- Pas d'exhaustivité sur tous les cas de transpilation (decorators, JSX
  runtimes nouveaux/anciens, target ES5 spécifique…) — focus sur les exemples
  les plus impactants pédagogiquement
