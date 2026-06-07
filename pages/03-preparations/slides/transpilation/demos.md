---
layout: basic-title
---

::title::
TypeScript → JavaScript

::default::

<div class="demo-grid">

<div class="demo-col">

<div class="demo-stage demo-stage-before">avant</div>

<MacWindow title="user.ts">

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

</MacWindow>

</div>

<div class="demo-col">

<div class="demo-stage demo-stage-after">après</div>

<MacWindow title="user.js">

```js
function findUser(id) {
  return users.find(
    (u) => u.id === id
  ) ?? null;
}
```

</MacWindow>

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

<MacWindow title="Button.tsx">

```jsx
// demo/src/todo/components/header.jsx
export function Header({ dispatch }) {
  const addItem = useCallback(/* … */);
  return (
    <header className="header">
      <h1>todos</h1>
      <Input onSubmit={addItem} />
    </header>
  )
}
```

</MacWindow>

</div>

<div class="demo-col">

<div class="demo-stage demo-stage-after">après</div>

<MacWindow title="Button.js">

```js
import { jsx, jsxs } from "react/jsx-runtime";

export function Header({ dispatch }) {
  const addItem = useCallback(/* … */);

  return /* @__PURE__ */ jsxs("header", {
    className: "header",
    children: [
      /* @__PURE__ */ jsx("h1", { children: "todos" }),
      /* @__PURE__ */ jsx(Input, { onSubmit: addItem })
    ]
  });
}
```

</MacWindow>

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
  text-align: left;
}
</style>

<!--
Vrai composant du demo : src/todo/components/header.jsx, transpilé par esbuild
(runtime « automatic », React 17+). Plus de React.createElement : un import de
jsx()/jsxs() depuis react/jsx-runtime. jsxs = plusieurs enfants, jsx = un seul.
Le /* @__PURE__ */ aide le tree-shaking. (useCallback et props raccourcis ici
avec … pour tenir sur le slide ; sinon c'est la sortie exacte.)
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

<MacWindow title="color.ts">

```ts
enum Color {
  Red,
  Green,
  Blue
}
```

</MacWindow>

</div>

<div class="demo-col">

<div class="demo-stage demo-stage-after">après</div>

<MacWindow title="color.js">

```js
var Color = /* @__PURE__ */ ((Color2) => {
  Color2[Color2["Red"] = 0] = "Red";
  Color2[Color2["Green"] = 1] = "Green";
  Color2[Color2["Blue"] = 2] = "Blue";
  return Color2;
})(Color || {});
```

</MacWindow>

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
  text-align: left;
}
</style>

<!--
La surprise : TypeScript GÉNÈRE du code à l'exécution ici (pas comme les types).
Le mapping est bidirectionnel : Color.Red = 0 ET Color[0] = "Red".
"Tu pensais que c'était une simple constante ? Voilà ce qui finit dans ton bundle."
-->
