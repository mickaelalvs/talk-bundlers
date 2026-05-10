---
layout: basic-title
transition: view-transition
---

::title::
La cuisson

::default::

<div class="impact-content">
  <p class="impact-phrase">Ce que ça coûte</p>
  <div class="impact-grid">
    <div v-click class="impact-card">
      <lucide-weight class="impact-icon" />
      <span class="impact-value">Poids excessif</span>
      <span class="impact-desc">Des Mo de code inutile téléchargés</span>
    </div>
    <div v-click class="impact-card">
      <lucide-clock class="impact-icon" />
      <span class="impact-value">Chargement lent</span>
      <span class="impact-desc">L'utilisateur attend... et part</span>
    </div>
    <div v-click class="impact-card">
      <lucide-wifi-off class="impact-icon" />
      <span class="impact-value">Data gaspillée</span>
      <span class="impact-desc">Réseau mobile, pays émergents</span>
    </div>
  </div>
</div>

<style>
.impact-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65%;
  gap: 2rem;
}
.impact-phrase {
  font-size: 1.8rem;
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
}
.impact-grid {
  display: flex;
  gap: 2.5rem;
}
.impact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 14px;
  background: white;
  border-top: 5px solid var(--theme-color-salmon);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}
.impact-icon {
  font-size: 2.5rem;
  color: var(--theme-color-amber);
}
.impact-value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--theme-color-steel);
}
.impact-desc {
  font-size: 0.85rem;
  color: var(--theme-color-slate);
  text-align: center;
}
</style>

<!--
Concrètement, qu'est-ce que ça coûte de ne pas optimiser ?
Du poids : on envoie des mégaoctets de code que personne n'utilise.
Du temps : sur une connexion 3G, chaque kilo-octet compte. L'utilisateur voit une page blanche.
De la data : dans beaucoup de pays, la data mobile est un budget. On gaspille l'argent de nos utilisateurs.
C'est pour ça qu'on a besoin des techniques qu'on va voir maintenant.
-->
