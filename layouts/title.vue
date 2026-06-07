<script setup>
defineProps({
  // Taille du titre, surchargeable depuis le frontmatter de la slide
  // (ex: `titleSize: 5rem`). Par défaut équivalent à text-8xl.
  titleSize: { type: String, default: '6rem' },
  // Padding au-dessus du titre (ex: `titlePaddingTop: 4rem`).
  // Par défaut équivalent à pt-10.
  titlePaddingTop: { type: String, default: '2.5rem' },
})
</script>

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
    <h1
      class="leading-tight"
      :style="{ fontSize: titleSize, paddingTop: titlePaddingTop }"
    >
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
