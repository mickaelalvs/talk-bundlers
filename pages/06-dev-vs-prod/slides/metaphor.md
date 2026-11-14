---
layout: basic
---

<div class="meta-wrap">
  <div class="meta-card meta-rehearsal">
    <div class="meta-stage">Répétition</div>
    <div class="meta-scene">
      <img src="/assets/images/items/kitchen_hat.svg" class="meta-item meta-item-1" />
      <img src="/assets/images/items/utensils.svg" class="meta-item meta-item-2" />
      <img src="/assets/images/items/mixer.svg" class="meta-item meta-item-3" />
      <img src="/assets/images/items/pot.svg" class="meta-item meta-item-4" />
      <img src="/assets/images/items/cutting_board.svg" class="meta-item meta-item-5" />
    </div>
    <div class="meta-caption">On goûte, on ajuste, on refait.<br />Le retour doit être rapide.</div>
  </div>

  <div class="meta-vs">vs</div>

  <div class="meta-card meta-service">
    <div class="meta-stage">Service</div>
    <div class="meta-scene meta-scene-clean">
      <img src="../../01-frigo/assets/plate.svg" class="meta-plate" />
    </div>
    <div class="meta-caption">L'assiette finale.<br />L'utilisateur ne voit que ça.</div>
  </div>
</div>

<style>
.meta-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
}
.meta-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1;
  max-width: 380px;
  padding: 1.5rem;
  background: white;
  border-radius: 18px;
  border: 2px solid var(--theme-color-slate);
}
.meta-rehearsal {
  border-color: var(--theme-color-amber);
}
.meta-service {
  border-color: var(--theme-color-steel);
}
.meta-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-steel);
}
.meta-rehearsal .meta-stage {
  color: var(--theme-color-amber);
}
.meta-scene {
  position: relative;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.meta-item {
  position: absolute;
  width: 70px;
  height: 70px;
  object-fit: contain;
}
.meta-item-1 { top: 8%; left: 28%; transform: rotate(-12deg); }
.meta-item-2 { top: 50%; left: 8%; transform: rotate(18deg); width: 80px; height: 80px; }
.meta-item-3 { top: 18%; right: 12%; transform: rotate(8deg); }
.meta-item-4 { bottom: 8%; right: 22%; transform: rotate(-8deg); }
.meta-item-5 { bottom: 12%; left: 30%; transform: rotate(14deg); width: 90px; height: 90px; }
.meta-scene-clean {
  height: 200px;
}
.meta-plate {
  max-height: 200px;
  object-fit: contain;
  filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.18));
}
.meta-caption {
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  text-align: center;
  line-height: 1.5;
}
.meta-vs {
  font-family: "Paytone One", sans-serif;
  font-size: 1.5rem;
  color: var(--theme-color-slate);
}
</style>

<!--
Le fil rouge de la partie : le même projet passe par deux cuisines.

À gauche, la répétition (le dev). On goûte, on ajuste, on refait : ce qui compte, c'est la vitesse du retour.

À droite, le service (la prod). C'est l'assiette de la partie 01, servie au client : il ne voit que le résultat.

Les outils se comportent différemment dans chacune. On le voit en trois temps : comment le dev reste rapide, ce que reçoit le navigateur, comment déboguer ce qui part en prod.
-->
