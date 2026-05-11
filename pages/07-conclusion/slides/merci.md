---
layout: basic
---

<div class="thx-wrap">
  <div class="thx-title">Merci !</div>
  <div class="thx-sub">Questions, retours, suggestions de recettes…</div>

  <div class="thx-qr">
    <div class="thx-qr-placeholder">QR</div>
    <div class="thx-qr-label">Cheat sheet à emporter</div>
  </div>

  <div class="thx-note">⚠ QR code placeholder, destination à décider</div>
</div>

<style>
.thx-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
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
  gap: 0.75rem;
  margin-top: 1rem;
}
.thx-qr-placeholder {
  width: 180px;
  height: 180px;
  background: repeating-linear-gradient(
    45deg,
    var(--theme-color-charcoal),
    var(--theme-color-charcoal) 14px,
    white 14px,
    white 28px
  );
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Paytone One", sans-serif;
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
}
.thx-qr-label {
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
  color: var(--theme-color-steel);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.thx-note {
  font-family: "Nunito", sans-serif;
  font-size: 0.78rem;
  color: var(--theme-color-slate);
  font-style: italic;
  margin-top: 1rem;
}
</style>

<!--
Slide finale du talk.

Le QR code est un placeholder stylisé (juste un pattern de damier pour faire
"QR code"). À remplacer par un vrai QR généré à partir de l'URL finale du
cheat sheet (probablement le repo GitHub du talk ou une page dédiée).

À l'oral : ouvrir le Q&A, inviter au contact, remercier l'audience.

→ Fin du talk.
-->
