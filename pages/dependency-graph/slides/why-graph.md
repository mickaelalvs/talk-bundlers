---
layout: basic-title
transition: view-transition
padding: pt-28 px-20 pb-20
---

::title::
Le graphe de dépendances

::subtitle::
Pourquoi en a-t-on besoin ?

::default::

<div class="flex flex-col justify-center gap-12 h-full pl-16">

<div class="flex items-center gap-8">
<div class="w-40 flex justify-center">
<div class="flex flex-col items-center gap-2">
<lucide:file-code class="text-5xl text-[var(--theme-color-amber)]" />
<span class="text-xl font-bold">main.js</span>
</div>
</div>
<div class="text-2xl text-[var(--theme-color-slate)] max-w-md leading-relaxed">
Le bundler ne reçoit <span class="text-[var(--theme-color-salmon)] font-bold">qu'un seul fichier</span> en entrée
</div>
</div>

<div v-click class="flex items-center gap-8">
<div class="relative w-40 h-28">
<lucide:file-question class="text-4xl text-[var(--theme-color-slate)] absolute top-0 left-0 rotate-[-8deg]" />
<lucide:file-question class="text-4xl text-[var(--theme-color-slate)] absolute top-0 right-2 rotate-[12deg]" />
<lucide:file-question class="text-4xl text-[var(--theme-color-slate)] absolute bottom-0 left-0 rotate-[5deg]" />
<lucide:file-question class="text-4xl text-[var(--theme-color-slate)] absolute bottom-0 right-0 rotate-[-12deg]" />
<lucide:file-question class="text-4xl text-[var(--theme-color-slate)] absolute top-3 left-16 rotate-[18deg]" />
</div>
<div class="text-2xl text-[var(--theme-color-slate)] max-w-md leading-relaxed">
Il doit <span class="text-[var(--theme-color-steel)] font-bold">découvrir tout le reste</span> par lui-même
</div>
</div>

</div>

<SlideItem src="/assets/images/items/scale.svg" size="90px" bottom="20px" left="40px" rotate="-5deg" opacity="0.3" />

<!--
Le bundler reçoit un seul fichier — l'entry point. Votre projet peut avoir des centaines de fichiers, mais lui il n'en connaît qu'un seul au départ.

Son premier travail, c'est de partir de ce fichier unique et de découvrir tout ce dont l'application a besoin pour fonctionner.
-->
