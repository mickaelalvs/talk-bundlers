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
    class="relative z-1 p-20 w-full h-full grid grid-cols-3 gap-12 text-center leading-tight items-center justify-items-center pt-30"
  >
    <div class="grid-item" v-click><slot name="item-1" /></div>
    <div class="grid-item" v-click><slot name="item-2" /></div>
    <div class="grid-item" v-click><slot name="item-3" /></div>
    <div class="grid-item" v-click><slot name="item-4" /></div>
    <div class="grid-item" v-click><slot name="item-5" /></div>
    <div class="grid-item" v-click><slot name="item-6" /></div>
  </div>
</template>

<style>
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: var(--theme-color-charcoal);
  font-size: 1.2rem;
  text-wrap: balance;
  font-weight: bold;
}

.grid-item img {
  width: min(100%, 150px);
}
</style>
