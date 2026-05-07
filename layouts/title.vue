<template>
  <img
    src="/assets/images/background.svg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
  />
  <img
    src="/assets/images/background_title.svg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none z-1"
  />
  <div
    class="relative z-2 w-full h-full flex flex-col items-center justify-center text-center px-16 gap-2"
  >
    <div class="section-number">
      <slot name="number" />
    </div>
    <h1 class="text-8xl leading-tight pt-10">
      <slot />
    </h1>
  </div>
</template>

<style>
.section-number {
  position: absolute;
  top: 80px;
  font-size: 8rem;
  line-height: 1;
  color: var(--theme-color-amber);

  p {
    font-family: "Paytone One", sans-serif;
  }
}
</style>
