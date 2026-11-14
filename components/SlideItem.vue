<script setup>
defineProps({
  src: { type: String, required: true },
  size: { type: String, default: "120px" },
  top: { type: String, default: "auto" },
  bottom: { type: String, default: "auto" },
  left: { type: String, default: "auto" },
  right: { type: String, default: "auto" },
  rotate: { type: String, default: "0deg" },
  opacity: { type: Number, default: 1 },
  z: { type: Number, default: 10 },
});
</script>

<template>
  <img
    class="slide-item"
    :src="src"
    :style="{
      position: 'absolute',
      top,
      bottom,
      left,
      right,
      width: size,
      height: size,
      transform: `rotate(${rotate})`,
      opacity,
      zIndex: z,
      objectFit: 'contain',
      pointerEvents: 'none',
    }"
  />
</template>

<style scoped>
.slide-item {
  --sticker: 5px;
  filter: drop-shadow(var(--sticker) 0 0 var(--theme-color-white))
    drop-shadow(calc(var(--sticker) * -1) 0 0 var(--theme-color-white))
    drop-shadow(0 var(--sticker) 0 var(--theme-color-white))
    drop-shadow(0 calc(var(--sticker) * -1) 0 var(--theme-color-white))
    drop-shadow(0 3px 5px rgba(67, 67, 67, 0.25));
}
</style>
