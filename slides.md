---
theme: seriph
title: talk-bundlers
fonts:
  sans: Nunito
  serif: Nunito
defaults:
  background: /assets/images/background.svg
  backgroundSize: cover
---

---
layout: main-title
background: none
---


<img src="/assets/images/background.svg" class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" />
<img src="/assets/images/background_main_title.svg" class="absolute inset-0 w-full h-full object-cover pointer-events-none z-1" style="transform: scaleX(-1);" />

<div class="relative z-10 flex items-center h-full px-16">
  <h1 class="relative left-[-80px] top-[-80px] leading-tight max-w-2xl text-5xl">
    <span class="text-[var(--theme-color-amber)] paytone-one-regular">Du frigo à l'assiette :</span><br>
    <span class="text-[var(--theme-color-steel)] paytone-one-regular">ce que mijote vraiment votre bundler JavaScript 🧑🏼‍🍳</span>
  </h1>
</div>

---
layout: title
---

::number::
01

::default::
# Titre de section

---
layout: list
---

::title::
Les ingrédients du bundler

::default::
- Premier point important
  - Sous-point avec <span>highlight amber</span>
- Deuxième point important
- Troisième point important

---
layout: grid-icons
---

::title::
Les outils du chef

::item-1::
🧅 Webpack

::item-2::
⚡ Vite

::item-3::
🔧 Rollup

::item-4::
🦕 esbuild

::item-5::
🌀 Parcel

::item-6::
🏗️ Turbopack

---
layout: basic-title
---

::title::
Layout Basic Title

::subtitle::
Du contenu centré avec un titre en haut à gauche.

::default::
Contenu principal

<SlideItem src="/assets/images/items/pot_holder.svg" size="140px" top="20px" right="60px" rotate="15deg" />

---
layout: single-fact
---

::fact::
98%

::title::
Des projets utilisent un bundler

::description::
Et pourtant, peu comprennent vraiment ce qu'il se passe sous le capot.
