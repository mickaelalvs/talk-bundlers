# Spec — Partie 06 : Build dev vs prod

## Contexte

Sixième partie du talk, après "Le plat est servi" (panorama des bundlers,
par un autre auteur). Précède la conclusion.

## Audience visée

Développeurs mid-level. Ouvrent leurs DevTools tous les jours sans
forcément avoir réfléchi à la différence entre ce qu'ils voient en dev et
en prod. Curieux du futur du bundling.

## Objectif pédagogique

À la fin de la partie, l'audience retient :

1. **Dev et prod n'ont pas le même but** : feedback rapide vs présentation
   optimale → c'est ça qui justifie tout le boulot du bundler
2. **Sourcemaps font le pont** entre le code écrit et le code en prod, avec
   leurs propres compromis et bonnes pratiques
3. **L'avenir bouge** : Vite a déjà cassé le paradigme en dev, et la suite
   arrive (OXC, Rolldown, Bun…)

## Métaphore

**Répétition vs service en restaurant** :
- Dev = répétition : cuisine en chaos visible, on goûte, on ajuste,
  vitesse de feedback > esthétique
- Prod = service : tout est dressé, présenté, le client ne voit que
  l'assiette finale

## Structure des slides (8 slides)

### Acte 1 — La métaphore et le contraste (3 slides)

#### 1. Section title
- Layout: `title`
- Contenu : `06 / La répétition vs le service`

#### 2. La métaphore (visuel à fond)
- Layout: `basic-title`
- Contenu : deux cartes côte à côte
  - **Gauche — Répétition** : chef + ustensiles éparpillés (utiliser
    `kitchen_hat.svg`, `utensils.svg`, `mixer.svg`, `pot.svg`) +
    caption "Vitesse > esthétique"
  - **Droite — Service** : assiette dressée (utiliser `plate.svg` de la
    partie 01 → callback visuel fort !) + caption "L'assiette finale"

#### 3. DevTools comparison (placeholder)
- Layout: `basic-title`
- Contenu : screenshot DevTools côte à côte
  - **Dev** : Network avec `App.tsx`, `Header.vue`, `utils.ts`… plein de
    fichiers lisibles
  - **Prod** : Network avec `main-abc123.js`, `vendor-def456.js`… quelques
    chunks hashés
- Placeholder pour l'instant, vraie capture plus tard

### Acte 2 — Sourcemaps en profondeur (3 slides)

#### 4. Sourcemaps : à quoi ça sert
- Layout: `basic-title`
- Contenu : poser le problème + la solution
  - Le problème : prod code est minifié + manglé → comment débugger ?
  - La solution : un fichier `.map` qui reconnecte chaque ligne du bundle
    à sa ligne d'origine
  - Le résultat : breakpoints, stack traces, console errors qui pointent
    vers le code source original dans DevTools

#### 5. Sourcemaps : comment c'est créé
- Layout: `basic-title`
- Contenu : le format `.map` simplifié
  - Format : JSON avec `version`, `sources`, `names`, `mappings`,
    `sourcesContent`
  - `mappings` : encodage VLQ base64 (compact mais illisible pour humains)
  - `//# sourceMappingURL=app.js.map` à la fin du bundle
  - Chaque outil de la pipeline génère sa map (loaders, bundler,
    minification) → elles se composent
- Speaker notes : détailler VLQ si timing le permet

#### 6. Sourcemaps : en prod, on les sert ou pas ?
- Layout: `basic-title`
- Contenu : 3 stratégies en cartes
  - **Exposées** : faciles à debug, mais code source public
  - **Cachées** (`hidden-source-map`) : pas de `sourceMappingURL` dans le
    bundle, accessibles uniquement si on connaît l'URL
  - **Pas du tout en prod** : uploadées séparément vers un service de
    monitoring (Sentry, Datadog…)
- Best practice : hidden + upload Sentry

### Acte 3 — Fun fact + évolution (2 slides)

#### 7. Le fun fact Vite
- Layout: `basic-title`
- Contenu : la rupture conceptuelle
  - "En dev, Vite ne bundle pas. Il sert l'ESM natif directement au
    navigateur."
  - Schéma simple : Webpack dev (bundle) vs Vite dev (no bundle, ESM
    direct)
  - Conséquence : démarrage instantané en dev, même sur gros projet

#### 8. Et après ? Le futur
- Layout: `basic-title`
- Contenu : liste des outils émergents (logos + nom + langage)
  - **OXC** (Rust) - le futur unifié toolchain
  - **Rolldown** (Rust) - le futur Rollup
  - **Bun** (Zig) - bundler + runtime + package manager
  - **Deno** (Rust) - alternative à Node avec bundler intégré
- Speaker notes : pour chaque, le problème qu'il résout (speed, intégration,
  ESM-first, etc.)

## Structure de fichiers

```
pages/06-dev-vs-prod/
├── slides.md                  (section title)
└── slides/
    ├── metaphor.md            (slide 2)
    ├── devtools.md            (slide 3, placeholder)
    ├── sourcemaps-intro.md    (slide 4)
    ├── sourcemaps-format.md   (slide 5)
    ├── sourcemaps-prod.md     (slide 6)
    ├── vite-fun-fact.md       (slide 7)
    └── future.md              (slide 8)
```

Le main `slides.md` à la racine doit importer `pages/06-dev-vs-prod/slides.md`.

## Assets requis

- ✅ `plate.svg` (partie 01) - réutilisé pour la slide métaphore (callback)
- ✅ Items cuisine (`kitchen_hat`, `utensils`, `mixer`, `pot`…) - existants
- ✅ `vite.svg` - existe
- ❌ `oxc.svg` - à vérifier sur svgl.app
- ❌ `bun.svg` - existe déjà
- ❌ `rolldown.svg` - à chercher
- ❌ `deno.svg` - à chercher

DevTools screenshot pour slide 3 = placeholder, vraie capture plus tard.

## Décisions

- **Métaphore visuelle à fond** : utiliser les assets cuisine existants,
  réutiliser `plate.svg` (callback à la partie 01 = continuité narrative)
- **DevTools placeholder** : on assume une vraie capture plus tard
- **Sourcemaps en profondeur** : 3 slides dédiées (à quoi ça sert / comment
  créé / best practice prod)
- **Fun fact Vite vers la fin** : c'est une révélation, pas le cœur du
  message
- **Slide future** : juste des outils + langage en visible, problèmes
  résolus en speaker notes

## Hors-scope

- Pas de plongée extrême dans le format VLQ (gardé en speaker notes au cas
  où le timing permet)
- Pas de comparaison performance dev server entre les bundlers (déjà fait
  partie 3 transpilation)
- Pas de tutoriel sur la config Sentry/Datadog (juste mention)
