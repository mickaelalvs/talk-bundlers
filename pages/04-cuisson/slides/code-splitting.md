---
layout: basic-title
---

::title::
Le bundle en chunks

::default::

<div class="cs-split">
<div class="cs-bar">
<div class="cs-seg cs-seg-main" style="flex: 25">main.js</div>
<div class="cs-seg cs-seg-lazy" style="flex: 35">dashboard.js</div>
<div class="cs-seg cs-seg-lazy" style="flex: 25">settings.js</div>
<div class="cs-seg cs-seg-lazy" style="flex: 15">admin.js</div>
<div v-click="1" class="cs-cut" style="left: 25%"><lucide-scissors /><code>import()</code></div>
<div v-click="1" class="cs-cut" style="left: 60%"><lucide-scissors /><code>import()</code></div>
<div v-click="1" class="cs-cut" style="left: 85%"><lucide-scissors /><code>import()</code></div>
</div>
<div v-click="2" class="cs-marks">
<div class="cs-mark cs-mark-main" style="flex: 25"><lucide-zap />80 KB</div>
<div class="cs-mark cs-mark-lazy" style="flex: 75"><lucide-clock />240 KB à la demande</div>
</div>
<div v-click="3" class="cs-roles">
<div class="cs-role cs-role-chef"><lucide-chef-hat class="cs-role-icon" /><span class="cs-role-name">Le chef</span><span class="cs-role-desc"><strong>code splitting</strong>, au build</span></div>
<div class="cs-role cs-role-server"><lucide-concierge-bell class="cs-role-icon" /><span class="cs-role-name">Le serveur</span><span class="cs-role-desc"><strong>lazy loading</strong>, au runtime</span></div>
</div>
</div>

<SlideItem src="/assets/images/items/cutting_board.svg" size="100px" bottom="10px" right="40px" rotate="-10deg" />

<style scoped>
.cs-split {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding-top: 2.5rem;
  gap: 1.2rem;
}
.cs-bar {
  position: relative;
  display: flex;
  gap: 6px;
}
.cs-seg {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 0;
  height: 4.6rem;
  border-radius: 10px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1rem;
  white-space: nowrap;
}
.cs-seg-main {
  background: rgba(81, 138, 184, 0.14);
  color: var(--theme-color-steel);
  border: 1px solid var(--theme-color-steel);
}
.cs-seg-lazy {
  background: rgba(138, 154, 75, 0.12);
  color: var(--theme-color-olive-dark);
  border: 1px solid rgba(138, 154, 75, 0.45);
}
.cs-cut {
  position: absolute;
  bottom: calc(100% + 0.7rem);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  font-size: 1.2rem;
  color: var(--theme-color-slate);
}
.cs-cut code {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.72rem;
  color: var(--theme-color-steel);
  background: none;
  padding: 0;
}
.cs-marks {
  display: flex;
  gap: 6px;
}
.cs-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  min-width: 0;
  padding: 0.35rem 0;
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  white-space: nowrap;
}
.cs-mark-main {
  background: rgba(81, 138, 184, 0.12);
  color: var(--theme-color-steel);
}
.cs-mark-lazy {
  background: rgba(138, 154, 75, 0.12);
  color: var(--theme-color-olive-dark);
}
.cs-roles {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.8rem;
}
.cs-role {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: 0.9rem;
  align-items: center;
  min-width: 15rem;
  padding: 0.9rem 1.3rem;
  background: white;
  border-radius: 16px;
}
.cs-role-chef {
  border: 2px solid var(--theme-color-amber);
}
.cs-role-server {
  border: 2px solid var(--theme-color-steel);
}
.cs-role-icon {
  grid-row: 1 / 3;
  font-size: 2.2rem;
}
.cs-role-chef .cs-role-icon {
  color: var(--theme-color-amber);
}
.cs-role-server .cs-role-icon {
  color: var(--theme-color-steel);
}
.cs-role-name {
  justify-self: start;
  font-family: "Paytone One", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
}
.cs-role-desc {
  justify-self: start;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-slate);
}
.cs-role-desc strong {
  color: var(--theme-color-charcoal);
}
</style>

<!--
Même bundle que juste avant, mais découpé : main.js part au démarrage,
le reste est mis de côté.

[click] Chaque ciseau est un import() dynamique. C'est lui qui dit au
bundler où couper (souvent une route, via React.lazy par exemple, on y revient).

[click] Au démarrage, seul main.js part : 80 KB au lieu de 320. Les 240 KB
restants arrivent à la demande.

[click] Deux termes à ne pas confondre. Code splitting : le travail du chef,
au build. Lazy loading : le travail du serveur, au runtime. Les deux sont
complémentaires mais distincts. On peut code-splitter sans lazy-loader : le
vendor chunk est chargé en parallèle au démarrage, pas à la demande.
-->
