<script setup>
defineProps({
  padding: {
    type: String,
    default: "p-20",
  },
  background: {
    type: Boolean,
    default: true,
  },
  align: {
      type: String,
      default: 'center'
    }
  });
</script>

<template>
  <img
    v-if="background"
    src="/assets/images/background.svg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
  />
  <div class="slide-top-title absolute left-22 top-8 text-3xl">
    <slot name="title" />
  </div>
  <div class="slide-subtitle absolute left-22 top-18 text-xl">
    <slot name="subtitle" />
  </div>
  <div
   v-if="align === 'center'" class="relative z-1 w-full h-full flex flex-wrap items-center justify-evenly text-center leading-tight text-5xl" :class="padding"><slot />
  </div>
  <div v-else class="relative z-1 w-full h-full flex flex-col leading-tight" :class="padding" style="padding-top: 8rem;">
    <slot />
  </div>
</template>
