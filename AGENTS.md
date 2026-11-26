# Instructions pour la génération des slides

Ce projet utilise [Slidev](https://sli.dev) pour générer des présentations au format web.

> **IMPORTANT — Mise à jour continue** : Ce fichier doit être mis à jour par l'agent à chaque session si de nouvelles préférences, corrections ou principes émergent de la discussion avec l'utilisateur. En particulier la section "Principes fondamentaux" doit évoluer pour refléter les retours et les demandes récurrentes.
>
> **Quand mettre à jour** : Après chaque tâche complétée, l'agent vérifie si l'utilisateur a exprimé une préférence, une correction ou un principe non encore documenté ici. Si oui, il met à jour ce fichier avant de passer à autre chose. Ne jamais supprimer de principes existants sans demande explicite.

## Principes fondamentaux

1. **Minimalisme avant tout** : Les slides sont un support visuel pour l'oral. On ne met JAMAIS de longs paragraphes. On préfère des titres courts, des mots-clés et des illustrations.
2. **Illustrations > Texte** : Privilégier les images (`/assets/images/items/`) et les icônes (Iconify) pour transmettre les idées visuellement. Préférer une illustration + un titre à un paragraphe explicatif.
3. **Toujours utiliser les layouts custom** : Ne jamais créer de mise en page ad-hoc. Utiliser exclusivement les layouts de `@layouts/`.
4. **Révélation progressive** : Utiliser `v-click` pour révéler le contenu progressivement (déjà intégré dans `grid-icons`).
5. **Animations avec view-transitions** : Privilégier les view-transitions pour des animations fluides et élégantes entre les slides.
6. **Organisation multi-pages** : Les slides sont séparées dans `pages/*.md` et importées via `src: ./pages/fichier.md`.
7. **Code aligné à gauche** : Ne jamais centrer les blocs de code. Utiliser `align: left` sur le layout `basic-title` pour les slides avec du code.
8. **Toutes les slides ont un titre** : Même si le titre est identique entre plusieurs slides consécutives, chaque slide doit avoir un titre visible.
9. **Icônes génériques** : Utiliser des icônes génériques (`lucide:file-code`) plutôt que des icônes de langage spécifiques (`vscode-icons:file-type-js`).
10. **Révélation en deux temps** : D'abord montrer/highlight ce qu'on regarde (click), puis montrer le résultat/conséquence au click suivant. Ne jamais tout révéler d'un coup.
11. **Icônes Iconify dans des divs** : Ne pas laisser de lignes vides entre éléments HTML dans un `<div>`, sinon le parser markdown casse les composants Vue (ils s'affichent en texte brut).
12. **CSS pur, pas de Tailwind** : Utiliser des blocs `<style>` avec du CSS classique pour le styling des slides. Ne pas utiliser de classes utilitaires Tailwind.
13. **Texte unslop** : Appliquer le skill `unslop` au texte visible des slides. Pas de tiret cadratin (`—`) ni demi-cadratin, des virgules ou des points. Pas d'emoji décoratif dans les titres ni dans les phrases (les `✓ ✗ ⚠` fonctionnels et les illustrations restent). Pas de "Game over", "Voilà le secret", d'adjectifs promotionnels ni de listes forcées à trois éléments. Titres en casse de phrase. Les notes orateur (`<!-- -->`) ne sont pas concernées sauf demande.
14. **Pas de bordure d'accent** : Jamais de `border-left` ou `border-top` épais coloré sur un bloc (typique IA). Les cartes (conteneurs autonomes) prennent un contour complet `border: 2px solid <couleur>` sans `box-shadow`. Les encarts et notes (message, avertissement, bon/mauvais) prennent un fond teinté plus une pastille d'icône : `<span class="note-chip"><lucide-info /></span>` (classe dans `style.css`, couleur via `--chip`) dans un conteneur `display: flex`.
15. **Slides de benchmark** : Les graphiques à barres partagent les classes `.bench-*` de `style.css` (`bench-chart`, `bench-row`, `bench-label`, `bench-bar`, `bench-fill`, `bench-time`, `bench-note`). Le contexte de la mesure (nombre de fichiers, machine) va dans un chip violet `.bench-context` en haut du slide, sans mention de médiane (elle reste dans les notes orateur). Barre ambre (`bench-fill-js`) pour les outils JS, barre bleue pour les outils compilés (Rust, Go). Les chiffres viennent de `demo/phases/bundler-benchmark.mjs` (`pnpm benchmark:phases`), jamais écrits de mémoire. Un slide de benchmark clôt chaque phase : transpilation, résolution, tree-shaking, minification, plus le build complet dans la partie 05.
16. **Palette stricte** : Toutes les couleurs viennent des variables `--theme-color-*` de `style.css`. Pas de hex ni de `rgba` rouge ou vert écrits en dur. Rouge (mauvais, danger) : `--theme-color-raspberry` (`#c4515c`), et `--theme-color-raspberry-dark` pour du petit texte. Vert (bon) : `--theme-color-olive` (`#8a9a4b`), et `--theme-color-olive-dark` pour du petit texte. Pour une teinte de fond, utiliser le même rgb avec une opacité (`rgba(196, 81, 92, 0.1)` / `rgba(138, 154, 75, 0.12)`). Le `salmon` a été retiré du thème.

17. **Pas de redite entre parties** : avant d'écrire un slide, vérifier ce qui a déjà été dit plus tôt (graphe en partie 02, CJS contre ESM en partie 03). Renvoyer en une phrase plutôt que remontrer le même exemple ou le même code.
18. **Pas de notion avant sa définition** : ne pas employer un terme que le public n'a pas encore vu (ex. « chunk » avant la partie code splitting) ni un jeu de mots opaque (« secouer » pour tree-shaking). Vérifier l'ordre des slides avant de choisir le vocabulaire.
19. **Affirmations techniques testées** : tester avec les bundlers de `demo/` (esbuild, Rollup, Rolldown, Webpack) avant d'écrire un comportement sur un slide ou dans les notes. Ne pas écrire de mémoire. Noter « Testé » et le résultat par bundler dans les notes orateur quand ils diffèrent.
20. **Un slide, une idée** : fusionner les sujets qui racontent la même histoire (ex. barrel files et `sideEffects` sont un seul piège). Préférer peu d'éléments, mais clairs, à une liste exhaustive. Supprimer un point trop spécifique ou que le public ne peut pas suivre.
21. **Textes courts sur une ligne** : un encart de conclusion tient sur une seule ligne, sans paraphraser ce que le code ou le visuel montre déjà. Aligner les blocs côte à côte (même hauteur).

22. **Notes orateur courtes** : seulement l'essentiel, sous forme de notes en phrases courtes (un paragraphe par `[click]`), pas de pavé ni de longue liste à puces. Garder les faits testés qui comptent (par bundler quand ils diffèrent), couper les détails de méthode, les versions et les rappels secondaires. **Marqueurs de clic** : écrire `[click]` en début de ligne (un par `v-click`, dans l'ordre), ou `[click:N]` pour sauter jusqu'au clic N. Jamais `[click 1]`, qui n'est pas reconnu : Slidev ne surligne alors pas la note au bon clic.
23. **Numérotation en pastille** : jamais de chiffres Unicode `①②③` dans le texte. Dans une fenêtre, utiliser `<MacWindow step="1" title="main.js">`. Dans un titre de slide, utiliser `<span class="title-step">1</span>Titre` (classe dans `style.css`, même pastille ambre).
24. **Fiche recette** : `public/recette/index.html` est la fiche récap du talk (servie sur `/recette/`, page statique copiée telle quelle dans `dist/`). Le QR code du slide `takeaways` pointe dessus : `pnpm qr <url>` régénère `public/assets/images/qr/qrcode_recette.svg`. Quand un chiffre ou un slide change, mettre la fiche à jour avec les mêmes valeurs (jamais de chiffre écrit de mémoire).
25. **Transitions de parties et de sous-parties** : une partie (01 à 05) s'ouvre avec le layout `recipe` (la partie 05 s'ouvre sur la fiche recette dont l'étape en cours est « Le service », suivie des slides dev et prod importés depuis `pages/06-dev-vs-prod/slides/`, puis d'un slide `title` « Les assiettes sont à table » qui ouvre avant/après, analyzer et benchmark) (fiche recette), sans emoji dans le post-it, avec `done` et `current` qui couvrent toutes les étapes de la partie. Une sous-partie (transpilation, résolution, tree-shaking, code splitting, minification) s'ouvre avec le layout `title` : gros titre, slot `number` occupé par une illustration `<img src="/assets/images/items/xxx.svg" class="title-illus" />`, jamais un chiffre ni un emoji. `titleSize: 5rem` en frontmatter si le titre passe sur deux lignes.
26. **Illustrations en stickers** : les illustrations décoratives posées avec `<SlideItem>` sont opaques, avec un contour blanc épais et une ombre douce (géré par le composant). Ne pas passer `opacity` pour les rendre « discrètes » : ça fait terne.

## Layouts disponibles

| Layout | Usage | Slots |
|--------|-------|-------|
| `main-title` | Slide de couverture / titre principal | `default` |
| `title` | Titre de section avec numéro | `number`, `default` |
| `basic` | Contenu centré simple | `default` |
| `basic-title` | Contenu avec titre en haut à gauche | `title`, `subtitle`, `default` |
| `grid-icons` | Grille 3x3 d'icônes/items (avec v-click) | `title`, `item-1` à `item-6` |
| `list` | Liste à puces stylisée | `title`, `default` |
| `single-fact` | Chiffre/fait marquant | `fact`, `title`, `description` |

### Exemples d'utilisation

```md
---
layout: title
---

::number::
01

::default::
# Titre de section
```

```md
---
layout: grid-icons
---

::title::
Les outils du chef

::item-1::
<img src="/assets/images/items/mixer.svg" class="w-24" />
Webpack

::item-2::
<img src="/assets/images/items/oven.svg" class="w-24" />
Vite
```

```md
---
layout: single-fact
---

::fact::
98%

::title::
Des projets utilisent un bundler

::description::
Un fait marquant en une phrase courte.
```

```md
---
layout: list
---

::title::
Titre de la slide

::default::
- Point concis
  - Sous-point avec <span>mot en surbrillance</span>
- Autre point concis
```

```md
---
layout: basic-title
align: left
---

::title::
Titre

::subtitle::
Sous-titre optionnel

::default::
Du code aligné à gauche ici
```

Props du layout `basic-title` :
- `align` : `'center'` (défaut) ou `'left'` pour du contenu non centré (code)
- `padding` : classes Tailwind personnalisables (défaut `p-20`, ex: `pt-28 px-20 pb-20`)

## Assets disponibles

### Images décoratives (`/assets/images/items/`)

Illustrations SVG de cuisine utilisables pour décorer les slides :

- `cutting_board.svg`, `egg.svg`, `kitchen_hat.svg`, `mixer.svg`
- `oven.svg`, `pot.svg`, `pot_2.svg`, `pot_holder.svg`, `pot_holder_2.svg`
- `scale.svg`, `utensils.svg`, `utensils_1.svg`, `utensils_2.svg`

Utiliser le composant `<SlideItem>` pour placer ces illustrations en position absolue :

```html
<SlideItem src="/assets/images/items/pot_holder.svg" size="140px" top="20px" right="60px" rotate="15deg" />
```

Props de `SlideItem` : `src`, `size`, `top`, `bottom`, `left`, `right`, `rotate`, `opacity`, `z`.

### Assets par section

Chaque section peut avoir ses propres assets dans un dossier `assets/` :

```
pages/section-name/
├── assets/          # SVG et images spécifiques à la section
├── slides.md        # Fichier principal avec les imports src:
└── slides/
    ├── slide-1.md
    └── slide-2.md
```

Référencer avec un chemin relatif : `<img src="../assets/mon-image.svg" />`

### Icônes Iconify

Utiliser les icônes Iconify directement dans les slides :

```html
<mdi-webpack class="text-6xl text-blue-500" />
<logos-vitejs class="text-6xl" />
```
