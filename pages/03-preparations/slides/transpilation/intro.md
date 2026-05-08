---
layout: basic
---

<div class="transp-subsection">
  <div class="transp-icon">🔪</div>
  <h1 class="transp-name">Transpilation</h1>
</div>

<style>
.transp-subsection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
}
.transp-icon {
  font-size: 7rem;
  line-height: 1;
}
.transp-name {
  font-family: "Paytone One", sans-serif !important;
  color: var(--theme-color-steel) !important;
  font-size: 5rem !important;
  margin: 0;
}
</style>

<!--
Transition vers le sous-bloc transpilation.
On rentre dans le détail d'une des transformations principales : le TypeScript
et le JSX qu'on écrit, comment ils deviennent du JS que le navigateur lit.
-->

---
layout: basic-title
---

::title::
Transpilation, c'est quoi ?

::default::

<div class="transp-def">
  <div v-click="1" class="transp-def-role">
    <span class="transp-emoji">⚙️</span>
    Son rôle, c'est que ton code tourne partout.<br />
    Du dernier Chrome au navigateur de mamie qui n'a jamais été mis à jour.
  </div>

  <div v-click="2" class="transp-def-tech">
    Concrètement : transformer ton <strong>TypeScript</strong>, ton <strong>JSX</strong>
    et certaines syntaxes JS en code que le navigateur peut exécuter.
  </div>
</div>

<style>
.transp-def {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  font-family: "Nunito", sans-serif;
  text-align: left;
  line-height: 1.5;
}
.transp-def-role {
  font-size: 1.5rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.transp-emoji {
  font-size: 2.2rem;
  line-height: 1;
  flex-shrink: 0;
}
.transp-def-tech {
  font-size: 1.15rem;
  color: var(--theme-color-charcoal);
  padding-left: 3.5rem;
}
.transp-def-tech strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
</style>

<!--
[click 1] La phrase clé : son rôle c'est de garantir que ton code tourne
partout, du Chrome récent au navigateur d'une vieille machine.

[click 2] Concrètement : ce qu'on transpile aujourd'hui c'est surtout
TypeScript, JSX, et certaines syntaxes JS pas encore supportées partout.
-->
