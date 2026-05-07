<template>
  <img
    src="/assets/images/background.svg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
  />
  <div class="slide-top-title absolute left-22 top-8 text-3xl">
    <slot name="title" />
  </div>
  <div
    class="relative z-1 w-full h-full flex justify-center flex-col gap-4 text-3xl liste font-semibold"
    style="padding: 5rem 5rem 5rem 5rem; padding-top: 7rem"
  >
    <slot />
  </div>
</template>

<style>
.liste ul {
  line-height: 3.5rem;
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.liste ul ul {
  list-style: none;
  padding-left: 1rem;
}

.liste > ul > li {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  color: var(--theme-color-charcoal);
}

.liste > ul > li > ul {
  width: 100%;
  padding-left: 2em;
}

.liste > ul > li::before {
  content: "";
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  flex-shrink: 0;
  background-image: url("/assets/images/items/egg.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.liste ul ul li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--theme-color-slate);
  font-size: 0.85em;
}

.liste ul ul li::before {
  content: "–";
  color: var(--theme-color-amber);
  flex-shrink: 0;
}

.liste li span {
  color: var(--theme-color-amber);
}
</style>
