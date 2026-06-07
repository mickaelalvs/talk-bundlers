---
layout: basic-title
---

::title::
Et après ?

::default::

<div class="fut-intro">
La course continue : <strong>Rust dévore la toolchain</strong>. Plus rapide, moins de couches.
</div>

<div class="fut-grid">

  <div v-click="1" class="fut-card">
    <img src="/assets/images/logos/oxc.svg" class="fut-logo" />
    <div class="fut-name">OXC</div>
    <div class="fut-meta"><span>Rust</span> · la fondation</div>
  </div>

  <div v-click="2" class="fut-card">
    <img src="/assets/images/logos/rolldown.svg" class="fut-logo" />
    <div class="fut-name">Rolldown</div>
    <div class="fut-meta"><span>Rust</span> · bâti sur Oxc</div>
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

<div v-click="5" class="fut-swap">
  <div class="fut-swap-side fut-swap-js"><span class="fut-swap-tag">briques JS</span> Babel · Terser · PostCSS</div>
  <div class="fut-swap-arrow">→</div>
  <div class="fut-swap-side fut-swap-rust"><span class="fut-swap-tag">briques Rust</span> SWC · Oxc · Lightning&nbsp;CSS</div>
</div>

<div v-click="6" class="fut-date">Vite 8 (stable mars 2026) tourne déjà sur Rolldown — si tu utilises Vite, tu utilises déjà tout ça.</div>

<div v-click="7" class="fut-tagline">
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
.fut-intro strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.fut-swap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  margin-top: 1.6rem;
  flex-wrap: wrap;
}
.fut-swap-side {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.85rem;
  padding: 0.5rem 0.9rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.fut-swap-js {
  background: rgba(159, 169, 185, 0.18);
  color: var(--theme-color-slate);
}
.fut-swap-rust {
  background: rgba(219, 153, 77, 0.15);
  color: var(--theme-color-amber);
}
.fut-swap-tag {
  font-family: "Paytone One", sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.8;
}
.fut-swap-arrow {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--theme-color-amber);
}
.fut-date {
  margin-top: 1rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-charcoal);
  font-style: italic;
}
.fut-tagline {
  margin-top: 1.2rem;
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

[click 2] Rolldown (par VoidZero / l'équipe Vite) :
   Bundler en Rust, compatible API avec Rollup mais ultra-rapide.
   AVEC VITE 8 (sorti) : Rolldown devient le bundler unique de Vite et
   remplace À LA FOIS esbuild (dev) ET Rollup (build de prod). Avant, Vite
   misait sur deux bundlers ; maintenant un seul. ~10-30× plus rapide que
   Rollup. Le plus gros changement d'archi depuis Vite 2.
   Source primaire : annonce officielle Vite 8.0
   (vite.dev/blog/announcing-vite8).

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
