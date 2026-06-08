---
layout: basic-title
---

::title::
④ Mangling des propriétés

::default::

<div class="min-level">Phase · renommage des propriétés (opt-in)</div>

<div class="min-grid">

<div class="min-col">

<div class="min-stage min-stage-before">avant</div>

<MacWindow title="user.js">

```js
const user = {
  authenticationToken: "abc123",
  preferredLanguage: "fr",
  isAdmin: false
}

sendRequest(user.authenticationToken)
```

</MacWindow>

</div>

<div class="min-col">

<div class="min-stage min-stage-after">après</div>

<MacWindow title="user.min.js">

```js
const user = {
  a: "abc123",
  b: "fr",
  c: false
}

sendRequest(user.a)
```

</MacWindow>

</div>

</div>

<div class="min-warn">
⚠ <strong>Opt-in chez la plupart des minifiers</strong> : peut casser du code dès qu'une clé est utilisée dynamiquement
(<code>user[someKey]</code>, sérialisation JSON, accès via une lib externe…).
</div>

<style scoped>
.min-level {
  font-family: "Paytone One", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--theme-color-amber);
  text-align: center;
  margin-bottom: 1.2rem;
}
.min-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.min-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.min-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.min-stage-before {
  background: rgba(219, 153, 77, 0.18);
  color: var(--theme-color-amber);
}
.min-stage-after {
  background: rgba(81, 138, 184, 0.18);
  color: var(--theme-color-steel);
}
.min-col :deep(pre) {
  text-align: left;
  margin: 0;
}
.min-warn {
  margin-top: 1.5rem;
  padding: 0.9rem 1.25rem;
  background: rgba(219, 153, 77, 0.1);
  border-left: 3px solid var(--theme-color-amber);
  border-radius: 8px;
  font-family: "Nunito", sans-serif;
  font-size: 0.92rem;
  color: var(--theme-color-charcoal);
  text-align: left;
  line-height: 1.5;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
.min-warn strong {
  font-family: "Paytone One", sans-serif;
  color: var(--theme-color-amber);
  font-weight: normal;
}
.min-warn code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(0, 0, 0, 0.05);
  padding: 0.05rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>

<!--
Le mangling de propriétés est plus radical que le renommage de variables :
il touche aux clés des objets, pas juste aux noms de variables locaux.

ATTENTION : c'est opt-in chez Terser (option mangle.properties) pour de
bonnes raisons. Ça casse :
  - L'accès dynamique : user[someKey] ne suit pas
  - Les sérialisations : JSON.stringify(user) donne {"a":"abc"} au lieu
    de {"authenticationToken":"abc"} → l'API qui reçoit panique
  - Les libs externes qui s'attendent à voir les vrais noms

En pratique, on whiteliste les patterns à préserver (regex sur les
préfixes, ou liste de noms exacts). React fait ça pour ses APIs internes.
-->
