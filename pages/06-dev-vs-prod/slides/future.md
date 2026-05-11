---
layout: basic-title
---

::title::
Et après ?

::default::

<div class="fut-intro">
La course continue. Plus rapide, moins de couches.
</div>

<div class="fut-grid">

  <div v-click="1" class="fut-card">
    <img src="/assets/images/logos/oxc.svg" class="fut-logo" />
    <div class="fut-name">OXC</div>
    <div class="fut-meta"><span>Rust</span></div>
  </div>

  <div v-click="2" class="fut-card">
    <img src="/assets/images/logos/rolldown.svg" class="fut-logo" />
    <div class="fut-name">Rolldown</div>
    <div class="fut-meta"><span>Rust</span></div>
  </div>

  <div v-click="3" class="fut-card">
    <img src="/assets/images/logos/bun.svg" class="fut-logo" />
    <div class="fut-name">Bun</div>
    <div class="fut-meta"><span>Zig</span></div>
  </div>

  <div v-click="4" class="fut-card">
    <img src="/assets/images/logos/deno.svg" class="fut-logo" />
    <div class="fut-name">Deno</div>
    <div class="fut-meta"><span>Rust</span></div>
  </div>

</div>

<div v-click="5" class="fut-tagline">
  Le bundler devient (presque) un détail d'implémentation.
</div>

<style>
.fut-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.5rem;
}
.fut-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
}
.fut-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  padding: 1.2rem 0.8rem;
  background: white;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}
.fut-logo {
  width: 70px;
  height: 70px;
  object-fit: contain;
}
.fut-name {
  font-family: "Paytone One", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-steel);
}
.fut-meta {
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  font-weight: 600;
}
.fut-meta span {
  color: var(--theme-color-amber);
  font-family: "Paytone One", sans-serif;
}
.fut-tagline {
  margin-top: 2rem;
  text-align: center;
  font-family: "Paytone One", sans-serif;
  font-size: 1.2rem;
  color: var(--theme-color-amber);
}
</style>

<!--
Liste des outils qui montent. Pour chacun, le problème qu'il résout (à
mentionner à l'oral selon le temps) :

[click 1] OXC (par VoidZero, équipe Vite) :
   Toolchain unifié écrit en Rust. Parser, linter, transformer, minifier
   et bundler dans le même projet. Objectif : remplacer SWC + Terser +
   Babel par un seul outil cohérent. Plus rapide, moins de duplications.

[click 2] Rolldown (par l'équipe Vite) :
   Successeur de Rollup, écrit en Rust. Compatible API avec Rollup mais
   ultra-rapide. Va devenir le bundler par défaut de Vite à terme,
   remplaçant l'actuel Rollup en JS.

[click 3] Bun (par Jarred Sumner) :
   Tout-en-un écrit en Zig : runtime (alternative à Node), bundler,
   package manager (alternative à npm/pnpm), test runner. Performance
   énorme. Vise à remplacer toute la stack JS server-side.

[click 4] Deno (par Ryan Dahl, créateur de Node) :
   Runtime + bundler intégré. ESM-first, TypeScript first, secure by
   default. Pas une révolution récente mais montre la direction :
   intégrer le bundler dans le runtime.

[click 5] La tagline finale : avec tous ces outils intégrés, le bundler
devient un détail. Tu ne configures plus, tu utilises le tool intégré.

À l'oral : "Voilà la direction. Plus rapide, plus simple, moins de
plomberie. Reste maintenant à voir si on peut un jour s'en passer
complètement. Spoiler : en dev presque, en prod jamais à cause du réseau."

→ Transition vers la conclusion du talk.
-->
