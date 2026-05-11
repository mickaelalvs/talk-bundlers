---
layout: basic-title
transition: view-transition
---

::title::
Le plat est servi

::subtitle::
Et la brigade continue de s'agrandir...

::default::

<div class="releve-content">
  <div class="releve-message">
    <lucide-trending-up class="releve-trend-icon" />
    <span class="releve-text">De nouveaux ustensiles arrivent chaque année</span>
  </div>
  <div v-click class="releve-hints">
    <div class="releve-hint">
      <lucide-zap class="releve-hint-icon" />
      <span>Plus rapides</span>
    </div>
    <div class="releve-hint">
      <lucide-package class="releve-hint-icon" />
      <span>Plus intégrés</span>
    </div>
    <div class="releve-hint">
      <lucide-settings class="releve-hint-icon" />
      <span>Moins de config</span>
    </div>
  </div>
  <p v-click class="releve-teaser">On en reparle juste après...</p>
</div>

<SlideItem src="/assets/images/items/utensils_1.svg" size="90px" bottom="30px" right="50px" rotate="12deg" opacity="0.25" />

<style>
.releve-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75%;
  gap: 2.5rem;
}
.releve-message {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.releve-trend-icon {
  font-size: 2.5rem;
  color: var(--theme-color-amber);
}
.releve-text {
  font-family: 'Paytone One', sans-serif;
  font-size: 1.5rem;
  color: var(--theme-color-charcoal);
}
.releve-hints {
  display: flex;
  gap: 2rem;
}
.releve-hint {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  font-size: 1rem;
  color: var(--theme-color-charcoal);
  font-weight: 600;
}
.releve-hint-icon {
  font-size: 1.8rem;
  color: var(--theme-color-steel);
}
.releve-teaser {
  font-size: 1.1rem;
  color: var(--theme-color-slate);
  font-style: italic;
}
</style>

<!--
On ne va pas détailler maintenant, mais sachez que la course ne s'arrête pas.
[click] Les tendances : plus rapide (langages compilés), plus intégré (tout-en-un), moins de config.
[click] On en reparle dans quelques minutes — après avoir vu la différence entre dev et prod.
C'est une transition douce vers la section 06 qui détaillera les outils du futur.
-->
