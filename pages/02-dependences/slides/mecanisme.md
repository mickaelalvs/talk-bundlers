---
layout: basic-title
transition: view-transition
padding: pt-28 px-20 pb-20
---

::title::
Le graphe de dépendances

::subtitle::
Comment il fait ses courses

::default::

<div class="dep-meca">
<div class="dep-meca-steps">
<div class="dep-meca-step">
<div class="dep-meca-step-icon">
<lucide:scan-search class="dep-meca-icon dep-meca-icon--steel" />
</div>
<span class="dep-meca-step-text">Parser le fichier</span>
</div>
<div v-click class="dep-meca-connector">
<lucide:chevron-right class="dep-meca-chevron" />
</div>
<div v-click class="dep-meca-step">
<div class="dep-meca-step-icon">
<lucide:list-tree class="dep-meca-icon dep-meca-icon--amber" />
</div>
<span class="dep-meca-step-text">Trouver les <code>import</code></span>
</div>
<div v-click class="dep-meca-connector">
<lucide:chevron-right class="dep-meca-chevron" />
</div>
<div v-click class="dep-meca-step">
<div class="dep-meca-step-icon">
<lucide:repeat class="dep-meca-icon dep-meca-icon--salmon" />
</div>
<span class="dep-meca-step-text">Recommencer</span>
</div>
</div>
<p v-click class="dep-meca-detail">
Le bundler lit le code (<span class="dep-meca-hl">AST</span>), repère chaque <code>import</code> / <code>require</code>,
puis fait la même chose sur chaque nouveau fichier découvert. <span class="dep-meca-hl--steel">C'est récursif.</span>
</p>
</div>

<SlideItem src="/assets/images/items/cutting_board.svg" size="90px" bottom="20px" right="50px" rotate="-8deg" opacity="0.3" />

<style>
.dep-meca {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
}
.dep-meca-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.dep-meca-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.2rem 1.5rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}
.dep-meca-step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dep-meca-icon {
  font-size: 3rem;
}
.dep-meca-icon--steel { color: var(--theme-color-steel); }
.dep-meca-icon--amber { color: var(--theme-color-amber); }
.dep-meca-icon--salmon { color: var(--theme-color-salmon); }
.dep-meca-step-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--theme-color-charcoal);
  text-align: center;
}
.dep-meca-step-text code {
  background: rgba(219, 153, 77, 0.15);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  color: var(--theme-color-amber);
}
.dep-meca-connector {
  display: flex;
  align-items: center;
}
.dep-meca-chevron {
  font-size: 2rem;
  color: var(--theme-color-mist);
}
.dep-meca-detail {
  font-size: 1.2rem;
  text-align: center;
  color: var(--theme-color-slate);
  line-height: 1.8;
  max-width: 650px;
}
.dep-meca-detail code {
  background: rgba(219, 153, 77, 0.15);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  color: var(--theme-color-amber);
}
.dep-meca-hl {
  color: var(--theme-color-amber);
  font-weight: 700;
}
.dep-meca-hl--steel {
  color: var(--theme-color-steel);
  font-weight: 700;
}
</style>

<!--
Comment fait-il ? Il parse le code source — il construit un AST, un arbre syntaxique — et cherche les mots-clés import et require.

Ce sont ses seuls indices. Et à chaque fois qu'il découvre un nouveau fichier, il recommence le même processus. C'est récursif : on descend en profondeur jusqu'à ne plus trouver d'imports.
-->
