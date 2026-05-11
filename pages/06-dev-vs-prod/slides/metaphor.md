---
layout: basic
---

<div class="meta-wrap">
  <div class="meta-card meta-rehearsal">
    <div class="meta-stage">🎭 Répétition</div>
    <div class="meta-scene">
      <img src="/assets/images/items/kitchen_hat.svg" class="meta-item meta-item-1" />
      <img src="/assets/images/items/utensils.svg" class="meta-item meta-item-2" />
      <img src="/assets/images/items/mixer.svg" class="meta-item meta-item-3" />
      <img src="/assets/images/items/pot.svg" class="meta-item meta-item-4" />
      <img src="/assets/images/items/cutting_board.svg" class="meta-item meta-item-5" />
    </div>
    <div class="meta-caption">Vitesse &gt; esthétique<br />On goûte, on ajuste, on refait.</div>
  </div>

  <div class="meta-vs">vs</div>

  <div class="meta-card meta-service">
    <div class="meta-stage">🍽️ Service</div>
    <div class="meta-scene meta-scene-clean">
      <img src="../../01-frigo/assets/plate.svg" class="meta-plate" />
    </div>
    <div class="meta-caption">L'assiette finale.<br />Le client ne voit que ça.</div>
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
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
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
La métaphore visuelle qui porte tout le message de la partie 6.

À gauche : la répétition. Une cuisine en mouvement, des ustensiles
éparpillés, le chaos productif. Ce qui compte : la vitesse de feedback,
pas l'esthétique.

À droite : le service. L'assiette qu'on a déjà vue dans la partie 01 (où
elle représentait ce que le navigateur comprend). Elle revient ici comme
le résultat final, présenté au client. Callback narratif fort.

À l'oral : "Vous vous souvenez de cette assiette ? C'était au tout début,
on parlait de ce que le navigateur comprend. Eh bien c'est la même
assiette qui est servie au client à la fin."
-->
