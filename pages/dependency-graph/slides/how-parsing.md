---
layout: basic-title
transition: view-transition
padding: pt-28 px-20 pb-20
---

::title::
Le graphe de dépendances

::subtitle::
Comment le bundler découvre les fichiers

::default::

<div class="flex flex-col items-center justify-center gap-8 h-full">

<div class="flex items-center gap-8">
<lucide:file-code class="text-7xl text-[var(--theme-color-amber)]" />
<lucide:arrow-right class="text-4xl text-[var(--theme-color-slate)]" />
<lucide:scan-search class="text-7xl text-[var(--theme-color-steel)]" />
<lucide:arrow-right class="text-4xl text-[var(--theme-color-slate)]" />
<div class="flex flex-col items-center gap-1">
<span class="text-3xl font-mono font-bold text-[var(--theme-color-salmon)]">import</span>
<span class="text-3xl font-mono font-bold text-[var(--theme-color-salmon)]">require</span>
</div>
</div>

<span v-click class="text-xl text-[var(--theme-color-slate)]">Parser le fichier → trouver les imports → recommencer</span>

</div>

<SlideItem src="/assets/images/items/utensils_1.svg" size="80px" top="30px" right="50px" rotate="12deg" opacity="0.3" />

<!--
Comment le bundler fait-il ? Il parse le code source de chaque fichier. Il cherche les mots-clés import et require — ce sont ses seuls indices pour savoir quels fichiers sont nécessaires.

Et à chaque fois qu'il découvre un nouveau fichier, il recommence le même processus. C'est récursif.
-->
