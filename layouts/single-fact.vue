<template>
  <img src="/assets/images/background.svg" alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0" />
  <div
    class="relative z-1 p-20 w-full h-full flex flex-col gap-4 items-center justify-center text-center leading-tight">
    <h1 class="text-9xl">
      <slot name="fact" />
    </h1>
    <div class="font-medium text-4xl text-[var(--theme-color-charcoal)]">
      <slot name="title" />
    </div>
    <div class="font-normal text-2xl pt-4 slide-description">
      <slot name="description" />
    </div>
  </div>
</template>

<style scoped>
h1 :deep(p) {
  font-family: "Paytone One", sans-serif;
  font-weight: 500;
  color: var(--theme-color-steel);
  margin: 0;
}
</style>
