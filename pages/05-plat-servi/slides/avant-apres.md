---
layout: basic-title
transition: view-transition
---

::title::
Le plat est servi

::subtitle::
Ce qui entre vs ce qui sort

::default::

<div class="ba-content">
  <div class="ba-side">
    <div class="ba-folder ba-folder--src">
      <div class="ba-folder-header">
        <lucide-folder-open class="ba-folder-icon ba-icon--src" />
        <span class="ba-folder-name">src/</span>
      </div>
      <div class="ba-files">
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>app.tsx</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>router.ts</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>styles.scss</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>utils.ts</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>config.json</span></div>
        <div class="ba-file"><lucide-image class="ba-file-icon" /><span>logo.svg</span></div>
      </div>
      <span class="ba-more">+ 194 fichiers</span>
    </div>
  </div>
  <div class="ba-arrow">
    <lucide-arrow-right class="ba-arrow-icon" />
  </div>
  <div v-click class="ba-side">
    <div class="ba-folder ba-folder--dist">
      <div class="ba-folder-header">
        <lucide-folder-open class="ba-folder-icon ba-icon--dist" />
        <span class="ba-folder-name">dist/</span>
      </div>
      <div class="ba-files">
        <div class="ba-file"><lucide-file class="ba-file-icon" /><span>index.html</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>app.3f2a1b.js</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>vendor.8c4d2e.js</span></div>
        <div class="ba-file"><lucide-file-code class="ba-file-icon" /><span>style.a1b2c3.css</span></div>
        <div class="ba-file"><lucide-image class="ba-file-icon" /><span>logo.7d3e.webp</span></div>
      </div>
    </div>
  </div>
</div>

<SlideItem src="/assets/images/items/pot_holder_2.svg" size="90px" bottom="20px" left="40px" rotate="5deg" opacity="0.25" />

<style>
.ba-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  gap: 1.5rem;
}
.ba-side {
  flex: 1;
  display: flex;
  justify-content: center;
}
.ba-arrow {
  display: flex;
  align-items: center;
}
.ba-arrow-icon {
  font-size: 2rem;
  color: var(--theme-color-slate);
}
.ba-folder {
  background: white;
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  min-width: 200px;
  max-width: 260px;
}
.ba-folder--src {
  border-left: 4px solid var(--theme-color-salmon);
}
.ba-folder--dist {
  border-left: 4px solid var(--theme-color-steel);
}
.ba-folder-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}
.ba-folder-icon {
  font-size: 1.3rem;
}
.ba-icon--src { color: var(--theme-color-salmon); }
.ba-icon--dist { color: var(--theme-color-steel); }
.ba-folder-name {
  font-family: 'Paytone One', sans-serif;
  font-size: 1.1rem;
  color: var(--theme-color-charcoal);
}
.ba-files {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.ba-file {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--theme-color-slate);
}
.ba-file-icon {
  font-size: 0.95rem;
  color: var(--theme-color-slate);
}
.ba-more {
  display: block;
  margin-top: 0.5rem;
  font-family: 'Paytone One', sans-serif;
  font-size: 0.85rem;
  color: var(--theme-color-salmon);
  text-align: center;
}
</style>

<!--
Voici le résultat concret du travail du bundler.
À gauche, notre dossier src/ : 200 fichiers en tout genre — TypeScript, SCSS, JSX, configs, images...
[click] À droite, ce qui arrive dans le navigateur : un dossier dist/ avec 5 fichiers propres, hashés, optimisés.
C'est la transformation que fait le bundler : du chaos à l'ordre, du brut au raffiné.
-->
