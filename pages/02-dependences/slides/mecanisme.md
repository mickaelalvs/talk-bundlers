---
layout: basic-title
transition: slide-left
padding: pt-28 pb-20
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
<span class="dep-meca-step-label"><span class="dep-meca-step-text">Parser le fichier</span><span class="dep-meca-ast">AST</span></span>
</div>
<div class="dep-meca-connector">
<lucide:chevron-right class="dep-meca-chevron" />
</div>
<div class="dep-meca-step">
<div class="dep-meca-step-icon">
<lucide:list-tree class="dep-meca-icon dep-meca-icon--amber" />
</div>
<span class="dep-meca-step-text">Trouver les <code>import</code></span>
</div>
<div class="dep-meca-connector">
<lucide:chevron-right class="dep-meca-chevron" />
</div>
<div class="dep-meca-step">
<div class="dep-meca-step-icon">
<lucide:repeat class="dep-meca-icon dep-meca-icon--steel" />
</div>
<span class="dep-meca-step-text">Recommencer</span>
</div>
</div>
</div>

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
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
}
@keyframes meca-in {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}
.dep-meca-steps > * {
  animation: meca-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.dep-meca-steps > *:nth-child(1) { animation-delay: 0.1s; }
.dep-meca-steps > *:nth-child(2) { animation-delay: 0.3s; }
.dep-meca-steps > *:nth-child(3) { animation-delay: 0.5s; }
.dep-meca-steps > *:nth-child(4) { animation-delay: 0.7s; }
.dep-meca-steps > *:nth-child(5) { animation-delay: 0.9s; }
.dep-meca-step {
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.2rem 1rem;
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
  font-size: 7rem;
}
.dep-meca-icon--steel { color: var(--theme-color-steel); }
.dep-meca-icon--amber { color: var(--theme-color-amber); }
.dep-meca-step-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--theme-color-charcoal);
  text-align: center;
  white-space: nowrap;
}
.dep-meca-step-text code {
  background: rgba(219, 153, 77, 0.15);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  color: var(--theme-color-amber);
}
.dep-meca-step-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
}
.dep-meca-ast {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  color: var(--theme-color-amber);
  background: rgba(219, 153, 77, 0.15);
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
}
.dep-meca-connector {
  display: flex;
  flex: 0 0 auto;
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
