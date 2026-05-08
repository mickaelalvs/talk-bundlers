---
layout: basic-title
---

::title::
TypeScript → JavaScript

::default::

<div class="demo-grid">

<div class="demo-col">

<div class="demo-stage demo-stage-before">avant</div>

```ts
interface User {
  id: string
  name: string
}

function findUser<T extends User>(
  id: string
): T | null {
  return users.find(
    (u): u is T => u.id === id
  ) ?? null
}
```

</div>

<div class="demo-col">

<div class="demo-stage demo-stage-after">après</div>

```js
function findUser(id) {
  return users.find(
    (u) => u.id === id
  ) ?? null
}
```

</div>

</div>

<style scoped>
.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.demo-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.demo-stage-before {
  background: rgba(219, 153, 77, 0.15);
  color: var(--theme-color-amber);
}
.demo-stage-after {
  background: rgba(81, 138, 184, 0.15);
  color: var(--theme-color-steel);
}
.demo-col :deep(pre) {
  font-size: 0.85rem;
  text-align: left;
}
</style>

<!--
TypeScript épluché : interface, generic, type guard, tout disparaît. Il ne
reste que la logique pure. À l'exécution, TypeScript n'existe plus.
-->

---
layout: basic-title
---

::title::
JSX → JavaScript

::default::

<div class="demo-grid">

<div class="demo-col">

<div class="demo-stage demo-stage-before">avant</div>

```tsx
function Button({ label, onClick }) {
  return (
    <button
      className="btn"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
```

</div>

<div class="demo-col">

<div class="demo-stage demo-stage-after">après</div>

```js
function Button({ label, onClick }) {
  return React.createElement(
    "button",
    {
      className: "btn",
      onClick: onClick
    },
    label
  )
}
```

</div>

</div>

<style scoped>
.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.demo-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.demo-stage-before {
  background: rgba(219, 153, 77, 0.15);
  color: var(--theme-color-amber);
}
.demo-stage-after {
  background: rgba(81, 138, 184, 0.15);
  color: var(--theme-color-steel);
}
.demo-col :deep(pre) {
  font-size: 0.85rem;
  text-align: left;
}
</style>

<!--
JSX = sucre syntaxique. Sous le capot, des appels React.createElement qui
construisent un arbre de Virtual DOM.
-->

---
layout: basic-title
---

::title::
TypeScript enum → JavaScript

::default::

<div class="demo-grid">

<div class="demo-col">

<div class="demo-stage demo-stage-before">avant</div>

```ts
enum Color {
  Red,
  Green,
  Blue
}
```

</div>

<div class="demo-col">

<div class="demo-stage demo-stage-after">après</div>

```js
var Color;
(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
```

</div>

</div>

<style scoped>
.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  align-items: start;
}
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.demo-stage {
  font-family: "Paytone One", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.2rem 0.7rem;
  border-radius: 999px;
  align-self: flex-start;
}
.demo-stage-before {
  background: rgba(219, 153, 77, 0.15);
  color: var(--theme-color-amber);
}
.demo-stage-after {
  background: rgba(81, 138, 184, 0.15);
  color: var(--theme-color-steel);
}
.demo-col :deep(pre) {
  font-size: 0.85rem;
  text-align: left;
}
</style>

<!--
La surprise : TypeScript GÉNÈRE du code à l'exécution ici (pas comme les types).
Le mapping est bidirectionnel : Color.Red = 0 ET Color[0] = "Red".
"Tu pensais que c'était une simple constante ? Voilà ce qui finit dans ton bundle."
-->
