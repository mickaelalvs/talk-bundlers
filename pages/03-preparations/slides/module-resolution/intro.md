---
layout: basic
---

<div class="mr-subsection">
  <div class="mr-icon">🧠</div>
  <h1 class="mr-name">Module Resolution</h1>
</div>

<style>
.mr-subsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
}
.mr-icon {
  font-size: 7rem;
  line-height: 1;
}
.mr-name {
  font-family: "Paytone One", sans-serif !important;
  color: var(--theme-color-steel) !important;
  font-size: 5rem !important;
  margin: 0;
}
</style>

<!--
On a vu comment chaque ingrédient (TypeScript, JSX, SCSS) est transformé individuellement. Maintenant on va parler d'un problème plus subtil : comment le bundler fait coopérer deux systèmes de modules JavaScript incompatibles — CommonJS et ES Modules — qui coexistent dans le même projet. C'est comme avoir deux cuisiniers avec des méthodes de travail radicalement opposées dans la même cuisine.
-->
