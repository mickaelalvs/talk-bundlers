---
layout: basic
---

<div class="grm-grid">

  <div class="grm-speaker">
    <div class="grm-avatar-wrap">
      <img src="/assets/images/speakers/mickaelalvs.png" class="grm-avatar" />
      <img src="/assets/images/logos/zenika.jpg" class="grm-company" />
    </div>
    <div class="grm-name">Mickaël Alves</div>
    <div class="grm-links">
      <a href="https://mickaelalvs.dev" target="_blank" class="grm-link">
        <ph-globe class="grm-icon" />
        <span>mickaelalvs.dev</span>
      </a>
      <a href="https://bsky.app/profile/mickaelalvs.bsky.social" target="_blank" class="grm-link">
        <img src="/assets/images/logos/bluesky.svg" class="grm-icon grm-icon-bsky" />
        <span>@mickaelalvs</span>
      </a>
    </div>
    <div class="grm-qr">
      <div class="grm-qr-placeholder">QR</div>
    </div>
  </div>

  <div class="grm-speaker">
    <div class="grm-avatar-wrap">
      <img src="/assets/images/speakers/PopsIDX.png" class="grm-avatar" />
      <img src="/assets/images/logos/zenika.jpg" class="grm-company" />
    </div>
    <div class="grm-name">Etienne Idoux</div>
    <div class="grm-links">
      <a href="https://eidoux.dev" target="_blank" class="grm-link">
        <ph-globe class="grm-icon" />
        <span>eidoux.dev</span>
      </a>
      <a href="https://bsky.app/profile/eidoux.bsky.social" target="_blank" class="grm-link">
        <img src="/assets/images/logos/bluesky.svg" class="grm-icon grm-icon-bsky" />
        <span>@eidoux</span>
      </a>
    </div>
    <div class="grm-qr">
      <div class="grm-qr-placeholder">QR</div>
    </div>
  </div>

</div>


<style>
.grm-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
  max-width: 760px;
  margin: -2.5rem auto;
}
.grm-speaker {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.grm-avatar-wrap {
  position: relative;
  width: 200px;
  height: 200px;
}
.grm-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--theme-color-amber);
  display: block;
}
.grm-company {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: white;
  border: 3px solid white;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.grm-name {
  font-family: "Paytone One", sans-serif;
  font-size: 1.3rem;
  color: var(--theme-color-steel);
}
.grm-links {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: flex-start;
}
.grm-link {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-charcoal);
  text-decoration: none;
}
.grm-link:hover {
  color: var(--theme-color-amber);
}
.grm-icon {
  font-size: 1.3rem;
  color: var(--theme-color-amber);
  flex-shrink: 0;
}
.grm-icon-bsky {
  width: 1.3rem;
  height: 1.3rem;
  object-fit: contain;
}
.grm-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.2rem;
}
.grm-qr-placeholder {
  width: 140px;
  height: 140px;
  background: repeating-linear-gradient(
    45deg,
    var(--theme-color-charcoal),
    var(--theme-color-charcoal) 12px,
    white 12px,
    white 24px
  );
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Paytone One", sans-serif;
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}

</style>

<!--
Les deux speakers, photos GitHub avec le logo Zenika en badge bas-gauche.

QR codes placeholder sous chaque speaker, pointant vers leur site perso
respectif. À remplacer par les vrais QR générés depuis mickaelalvs.dev et
eidoux.dev.

À l'oral : qui fait quoi dans la vraie vie, contexte du projet.
-->
