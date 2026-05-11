---
layout: basic-title
---

::title::
Comment le bundler découpe

::default::

<div class="cs-how">
  <div class="cs-how-scene">
    <div class="cs-how-kitchen">
      <lucide-chef-hat class="cs-how-chef-icon" />
      <span class="cs-how-role">Le chef</span>
      <span class="cs-how-desc">prépare tous les plats en cuisine</span>
    </div>
    <div v-click="1" class="cs-how-separator">
      <div class="cs-how-arrow"></div>
      <span class="cs-how-door-label">import()</span>
    </div>
    <div v-click="1" class="cs-how-salle">
      <lucide-concierge-bell class="cs-how-server-icon" />
      <span class="cs-how-role">Le serveur</span>
      <span class="cs-how-desc">apporte chaque plat au bon moment</span>
    </div>
  </div>
  <div v-click="2" class="cs-how-summary">Le bundler prépare les chunks au build, le navigateur les sert à la demande.</div>
</div>

<SlideItem src="/assets/images/items/kitchen_hat.svg" size="130px" bottom="25px" right="50px" rotate="12deg" opacity="0.35" />

<style>
.cs-how {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding-top: 1.5rem;
}
.cs-how-scene {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.cs-how-kitchen,
.cs-how-salle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 1.25rem 1.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  min-width: 180px;
}
.cs-how-kitchen {
  border-top: 4px solid var(--theme-color-amber);
}
.cs-how-salle {
  border-top: 4px solid var(--theme-color-steel);
}
.cs-how-chef-icon {
  font-size: 2.2rem;
  color: var(--theme-color-amber);
}
.cs-how-server-icon {
  font-size: 2.2rem;
  color: var(--theme-color-steel);
}
.cs-how-role {
  font-family: "Paytone One", sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
}
.cs-how-desc {
  font-family: "Nunito", sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  text-align: center;
}
.cs-how-separator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}
.cs-how-arrow {
  width: 60px;
  height: 3px;
  background: var(--theme-color-charcoal);
  border-radius: 2px;
  position: relative;
}
.cs-how-arrow::after {
  content: "";
  position: absolute;
  right: -2px;
  top: -5px;
  border: 6px solid transparent;
  border-left-color: var(--theme-color-charcoal);
}
.cs-how-door-label {
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: #2e7d32;
  background: rgba(46, 125, 50, 0.08);
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}
.cs-how-summary {
  font-family: "Nunito", sans-serif;
  font-size: 1.15rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
  text-align: center;
  max-width: 550px;
}
</style>

<!--
L'analogie pour comprendre le mécanisme :

En cuisine, le chef prépare tous les plats. Mais il ne les envoie pas tous
en même temps dans la salle — c'est le serveur qui apporte chaque plat quand
le client est prêt.

[click 1] La flèche représente le passage de la cuisine à la salle — le point
de découpe. Dans le code, c'est l'import() dynamique qui dit au bundler :
"ici, tu coupes — ce qui est derrière sera servi plus tard".

[click 2] La synthèse en une phrase : le bundler (chef) prépare les chunks au
build, le navigateur (serveur) les charge à la demande au runtime.

C'est pour ça que c'est aussi simple à utiliser : tu places un import() et
le bundler fait le reste automatiquement.
-->
