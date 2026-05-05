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
