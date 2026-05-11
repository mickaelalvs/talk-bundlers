---
theme: seriph
title: "Du frigo à l'assiette : ce que mijote vraiment votre bundler JavaScript"
mdc: true
overviewSnapshots: true
transition: view-transition
fonts:
  sans: Nunito
  serif: Nunito
defaults:
  background: /assets/images/background.svg
  backgroundSize: cover
  transition: slide-left
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
    <span class="text-[var(--theme-color-steel)] paytone-one-regular">ce que mijote vraiment votre bundler JavaScript</span>
  </h1>
</div>

<!--
Présentation du talk et du speaker.
Poser le contexte : tout le monde utilise un bundler, peu savent ce qu'il se passe vraiment.
-->

---
src: ./pages/01-frigo/slides.md
---

---
src: ./pages/02-dependences/slides.md
---

---
src: ./pages/03-preparations/slides.md
---

---
src: ./pages/04-cuisson/slides.md
---

---
src: ./pages/06-dev-vs-prod/slides.md
---