---
layout: basic-title
---

::title::
② Transformations sémantiques

::default::

<div class="min-level">Phase · optimisations sémantiques</div>

<div class="sem-intro">
Le minifier connaît la sémantique du JS et réécrit des bouts en équivalents plus courts.
</div>

<div class="sem-table">
  <div class="sem-row">
    <div class="sem-before">true</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">!0</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">false</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">!1</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">undefined</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">void 0</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">!!x</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">x</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">typeof x === 'undefined'</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">typeof x>'u'</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">Infinity</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">1/0</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">obj["validName"]</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">obj.validName</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">0 || 'foo'</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">'foo'</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">let a=1; let b=2</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after">let a=1,b=2</div>
  </div>
  <div class="sem-row">
    <div class="sem-before">if (false) { ... }</div>
    <div class="sem-arrow">→</div>
    <div class="sem-after"><em>(supprimé)</em></div>
  </div>
</div>

<div class="sem-note">
Toutes ces formes sont <strong>strictement équivalentes</strong> à l'exécution, mais plus courtes en bytes.
</div>

<style scoped>
.min-level {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
  text-align: center;
  margin-bottom: 1rem;
}
.sem-intro {
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 1.05rem;
  color: var(--theme-color-charcoal);
  margin-bottom: 1.5rem;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}
.sem-table {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
}
.sem-row {
  display: grid;
  grid-template-columns: 1.3fr auto 1fr;
  align-items: center;
  gap: 1rem;
  padding: 0.4rem 1rem;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.92rem;
}
.sem-before {
  text-align: right;
  color: var(--theme-color-amber);
}
.sem-arrow {
  color: var(--theme-color-slate);
  font-family: "Paytone One", sans-serif;
  font-size: 1rem;
}
.sem-after {
  text-align: left;
  color: var(--theme-color-steel);
  font-weight: 700;
}
.sem-after em {
  font-style: italic;
  font-family: "Nunito", sans-serif;
  font-weight: normal;
  color: var(--theme-color-slate);
}
.sem-note {
  margin-top: 1.5rem;
  text-align: center;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  font-style: italic;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.sem-note strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
  font-style: normal;
}
</style>

<!--
Ces réécritures font partie de la même phase que l'inlining (optimisations
sémantiques). Le minifier connaît la sémantique du JS et sait que :
  - true vaut 1, !0 aussi → !0 fait 2 caractères au lieu de 4
  - undefined est défini comme void 0 dans le standard JS
  - !!x revient à x s'il est traité comme boolean (cast implicite)
  - Infinity, c'est mathématiquement 1/0
  - typeof retourne toujours une string, donc on peut comparer avec
    un caractère unique 'u' (préfixe de "undefined")
  - obj["validName"] et obj.validName sont équivalents si le nom est un
    identifiant valide → la notation point est plus courte
  - 0 || 'foo' s'évalue toujours à 'foo' (short-circuit)
  - Plusieurs déclarations let/const adjacentes peuvent fusionner
  - if (false) {...} est mort, la branche disparaît entièrement

Le but : économiser des bytes. À l'échelle d'un gros bundle, ces micro-optims
représentent quelques KB de gagnés.

Source : doc Bun bundler/minifier (techniques bien documentées).
-->
