---
layout: basic-title
---

::title::
Vous en utilisez déjà un

::default::

<div class="cast-rows">
<div class="cast-row">
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/webpack.png" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">webpack</span><img v-click="2" src="/assets/images/logos/javascript.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/vite.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Vite</span><img v-click="2" src="/assets/images/logos/javascript.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/rollup.png" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Rollup</span><img v-click="2" src="/assets/images/logos/javascript.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/esbuild.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">esbuild</span><img v-click="2" src="/assets/images/logos/lang/go.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/parcel.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Parcel</span><img v-click="2" src="/assets/images/logos/lang/rust.svg" class="cast-lang" /></div></div>
</div>
<div class="cast-row">
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/rspack.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Rspack</span><img v-click="2" src="/assets/images/logos/lang/rust.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/turbopack.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Turbopack</span><img v-click="2" src="/assets/images/logos/lang/rust.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/rolldown.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Rolldown</span><img v-click="2" src="/assets/images/logos/lang/rust.svg" class="cast-lang" /></div></div>
<div v-click="1" class="cast-item pop"><img src="/assets/images/logos/bun.svg" class="cast-logo pop" /><div class="cast-namerow"><span class="cast-name">Bun</span><img v-click="2" src="/assets/images/logos/lang/zig.svg" class="cast-lang" /></div></div>
</div>
</div>

<div v-click="3" class="cast-note">Et comme des <strong>briques</strong> <img src="/assets/images/logos/lego.png" class="lego-logo" alt="Lego" />, certains s'assemblent, voire s'empruntent des morceaux entre eux.</div>

<style scoped>
.cast-rows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  width: 100%;
  padding-top: 3rem;
}
.cast-row {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5rem;
  flex-wrap: wrap;
}
.cast-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.cast-logo {
  width: 64px;
  height: 64px;
  object-fit: contain;
}
.cast-namerow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.cast-name {
  font-family: "Paytone One", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-amber);
}
.cast-lang {
  width: 22px;
  height: 22px;
  object-fit: contain;
}
.cast-note {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-slate);
  font-style: italic;
  margin-top: 4rem;
}
.cast-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
  font-style: normal;
}
</style>

<!--
[click 1] Le casting : tous ces outils du quotidien sont des bundlers.
L'audience se reconnaît dans au moins un.

[click 2] Les langages (logo à droite du nom) : ils ne sont même pas écrits
dans le même langage. JS (webpack, Vite, Rollup), Go (esbuild), Rust (Parcel,
Rspack, Turbopack, Rolldown), Zig (Bun). Tendance : les nouveaux passent en
langage compilé pour la vitesse.

[click 3] Transition : comme des Lego, ils s'assemblent et s'empruntent des
briques. Exemple parfait : Vite. (→ slide Vite 7 → 8)
-->
