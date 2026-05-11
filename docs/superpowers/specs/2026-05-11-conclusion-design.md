# Spec — Partie 07 : La note du chef (Conclusion)

## Contexte

Partie finale du talk, après "Build dev vs prod". Clôt l'expérience en
rassemblant les fils tirés tout au long.

## Objectif pédagogique

Laisser à l'audience :
1. **Trois takeaways équilibrés** (démystification + utilité + pragmatisme)
2. Le **récap visuel** du voyage (frigo → assiette)
3. La connaissance des deux speakers pour les contacter
4. Un cheat sheet à emporter (via QR code)

## Structure (5 slides)

### 1. Section title
- Layout: `title`
- Contenu : `07 / La note du chef`

### 2. Récap visuel (le voyage)
- Layout: `basic-title`
- Contenu : ligne d'étapes en emojis + labels, v-click une par une
  - 🥶 Le frigo
  - 📋 La mise en place
  - 🔪 La préparation
  - 🥘 La cuisson
  - 🍽️ Le plat servi
  - 🎭 Répétition vs service
- v-click final : flèche entre toutes ou tagline "Voilà le voyage"

### 3. Les 3 takeaways en triade
- Layout: `basic-title`
- Contenu : 3 cartes côte à côte, v-click une par une
  - **①** *"Pas de magie, une pipeline"* — démystification
  - **②** *"Comprendre ton bundle = comprendre ta perf"* — utilité
  - **③** *"Choisir son bundler = choisir ses compromis"* — pragmatique

### 4. Les deux gourmands
- Layout: `basic-title`
- Contenu : 2 cartes côte à côte avec photos + infos
  - **Mickaël Alves** : mickaelalvs.dev · @mickaelalvs sur Bluesky · avatar
    GitHub `mickaelalvs.png`
  - **Etienne Idoux** : eidoux.dev · @eidoux sur Bluesky · avatar GitHub
    `PopsIDX.png`

### 5. Merci + QR code
- Layout: `basic`
- Contenu :
  - Gros "Merci"
  - QR code placeholder (à remplacer plus tard — destination à décider)
  - Invitation Q&A

## Structure de fichiers

```
pages/07-conclusion/
├── slides.md             (section title)
└── slides/
    ├── recap.md          (slide 2 : récap visuel)
    ├── takeaways.md      (slide 3 : 3 takeaways)
    ├── gourmands.md      (slide 4 : speakers)
    └── merci.md          (slide 5 : merci + QR)
```

## Assets

- ✅ Avatars GitHub à télécharger :
  - `https://github.com/mickaelalvs.png` → `public/assets/images/speakers/mickaelalvs.png`
  - `https://github.com/PopsIDX.png` → `public/assets/images/speakers/PopsIDX.png`
- 🔲 QR code : placeholder stylisé pour l'instant

## Décisions

- **Récap v-click une par une** : rejouer le voyage en live, plus engageant
  qu'un coup d'un seul
- **3 takeaways en triade dans une slide** : densité acceptable + impact
  visuel
- **Speakers avant la fin** : "voilà ce qu'on vous a servi, voilà les chefs"
- **QR placeholder** : destination à décider (probablement repo GitHub du
  talk)

## Hors-scope

- Pas de Q&A "Questions ?" en slide séparée (intégrée au merci)
- Pas de cheat sheet visible à l'écran (juste via QR)
- Pas de credits / outils (déjà couverts à travers le talk)
