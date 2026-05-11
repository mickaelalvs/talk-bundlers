---
layout: basic-title
---

::title::
Module Resolution

::default::

<div class="problem-layout">
<p class="problem-headline">Il existe <strong>deux façons</strong> d'écrire des modules en JavaScript</p>
<div v-click class="problem-chefs">
<div class="problem-chef">
<div class="problem-emoji">🧑🏻‍🍳</div>
<div class="problem-name">CommonJS</div>
<div class="problem-style">L'improvisateur</div>
<div class="problem-desc">Va chercher ses ingrédients<br/>quand il en a besoin</div>
</div>
<div class="problem-vs">vs</div>
<div class="problem-chef">
<div class="problem-emoji">🧑🏻‍🍳</div>
<div class="problem-name">ES Modules</div>
<div class="problem-style">Le rigoureux</div>
<div class="problem-desc">Liste tout ce dont il a besoin<br/>avant de commencer</div>
</div>
</div>
<p v-click="2" class="problem-conclusion">Le bundler doit les faire travailler <strong>ensemble</strong></p>
</div>

<style>
.problem-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 2rem;
}
.problem-headline {
  font-size: 1.4rem;
  color: var(--theme-color-charcoal);
  text-align: center;
}
.problem-headline strong {
  color: var(--theme-color-amber);
}
.problem-chefs {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}
.problem-chef {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 14px;
  min-width: 200px;
}
.problem-emoji {
  font-size: 3.5rem;
  line-height: 1;
}
.problem-style {
  font-family: "Paytone One", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-steel);
}
.problem-name {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-amber);
  letter-spacing: 0.05em;
}
.problem-desc {
  font-size: 0.9rem;
  color: var(--theme-color-slate);
  text-align: center;
  line-height: 1.4;
}
.problem-vs {
  font-family: "Paytone One", sans-serif;
  font-size: 1.5rem;
  color: var(--theme-color-amber);
}
.problem-conclusion {
  font-size: 1.2rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.problem-conclusion strong {
  color: var(--theme-color-amber);
}
</style>

<!--
[au chargement] En JavaScript, il y a deux systèmes de modules qui coexistent. Deux philosophies radicalement différentes.

[click 1] L'improvisateur — CommonJS — va chercher ses ingrédients à la demande, on ne sait pas à l'avance ce qu'il va utiliser. Le rigoureux — ES Modules — déclare sa mise en place complète dès le départ.

[click 2] Et votre bundler, lui, doit faire travailler ces deux cuisiniers dans la même cuisine. On va voir ce que ça implique concrètement.
-->
