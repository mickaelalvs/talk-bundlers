---
layout: basic
---

<div class="thx-wrap">
  <div class="thx-title">Merci !</div>
  <div class="thx-sub">Questions, retours, suggestions de recettes…</div>

  <div class="thx-qr">
    <img src="/assets/images/qr/qrcode_openfeedback.png" class="thx-qr-img" />
    <div class="thx-qr-label">Donnez votre avis sur OpenFeedback</div>
  </div>
</div>

<style>
.thx-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  text-align: center;
}
.thx-title {
  font-family: "Paytone One", sans-serif;
  font-size: 6rem;
  color: var(--theme-color-amber);
  line-height: 1;
}
.thx-sub {
  font-family: "Nunito", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-charcoal);
}
.thx-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0;
}
.thx-qr-img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 12px;
}
.thx-qr-label {
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-steel);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>

<!--
Slide finale du talk.

Le QR code mène à la fiche OpenFeedback du talk (DevFest Paris 2026).

À l'oral : ouvrir le Q&A, inviter à laisser un retour, remercier l'audience.

→ Fin du talk.
-->
