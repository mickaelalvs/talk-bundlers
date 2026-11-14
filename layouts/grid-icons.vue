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
    <div v-if="$slots['item-1']" class="grid-item" v-click="1"><slot name="item-1" /></div>
    <div v-if="$slots['item-2']" class="grid-item" v-click="2"><slot name="item-2" /></div>
    <div v-if="$slots['item-3']" class="grid-item" v-click="3"><slot name="item-3" /></div>
    <div v-if="$slots['item-4']" class="grid-item" v-click="4"><slot name="item-4" /></div>
    <div v-if="$slots['item-5']" class="grid-item" v-click="5"><slot name="item-5" /></div>
    <div v-if="$slots['item-6']" class="grid-item" v-click="6"><slot name="item-6" /></div>
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
