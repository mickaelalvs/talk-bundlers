---
layout: basic-title
align: left
---

::title::
En pratique

::default::

<div class="cs-fw">
  <div class="cs-fw-col">
    <div class="cs-fw-header">
      <lucide-file-code class="cs-fw-icon" />
      <span>React</span>
    </div>

```jsx
const Dashboard = React.lazy(
  () => import('./Dashboard')
)

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard />
    </Suspense>
  )
}
```

  </div>

  <div v-click="1" class="cs-fw-col">
    <div class="cs-fw-header">
      <lucide-file-code class="cs-fw-icon" />
      <span>Vue</span>
    </div>

```js
// Route-level splitting (Vue Router)
const routes = [
  {
    path: '/dashboard',
    component: () => import('./Dashboard.vue')
  }
]
```

  </div>
</div>

<div v-click="2" class="cs-fw-note">
  <lucide-info class="cs-fw-note-icon" />
  <span>Dans les deux cas, c'est le <code>import()</code> qui déclenche le split. Les frameworks ne font que wrapper.</span>
</div>

<style>
.cs-fw {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
}
.cs-fw-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.cs-fw-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Paytone One", sans-serif;
  font-size: 0.9rem;
  color: var(--theme-color-steel);
}
.cs-fw-icon {
  font-size: 1.1rem;
  color: var(--theme-color-amber);
}
.cs-fw-note {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  color: var(--theme-color-charcoal);
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  background: rgba(81, 138, 184, 0.06);
  border-radius: 10px;
}
.cs-fw-note-icon {
  font-size: 1.1rem;
  color: var(--theme-color-steel);
  flex-shrink: 0;
  margin-top: 0.15rem;
}
.cs-fw-note code {
  font-family: "JetBrains Mono", monospace;
  background: rgba(81, 138, 184, 0.1);
  padding: 0.05rem 0.35rem;
  border-radius: 4px;
  color: var(--theme-color-steel);
  font-size: 0.9em;
}
</style>

<!--
Comment on utilise le code splitting en pratique dans les deux écosystèmes
les plus populaires.

React : React.lazy() prend une fonction qui retourne un import(). Le composant
est wrappé dans un <Suspense> qui affiche un fallback pendant le chargement.
Depuis React 18, c'est la méthode officielle.

[click 1] Vue : c'est encore plus simple au niveau du router. On remplace
`component: Dashboard` par `component: () => import('./Dashboard.vue')`.
Vue Router gère le lazy loading nativement. Pas besoin de Suspense (le router
s'en occupe).

On peut aussi utiliser defineAsyncComponent() pour du component-level splitting
en dehors du router.

[click 2] Le point clé : dans les deux cas, c'est la syntaxe import() qui fait
le travail. React.lazy et le router Vue ne sont que des wrappers ergonomiques.
Le bundler (Webpack, Vite, esbuild) fait le split de la même manière.
-->
