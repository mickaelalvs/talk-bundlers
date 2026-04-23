<script setup>
defineProps({
  src: { type: String, required: true },
  size: { type: String, default: '120px' },
  top: { type: String, default: 'auto' },
  bottom: { type: String, default: 'auto' },
  left: { type: String, default: 'auto' },
  right: { type: String, default: 'auto' },
  rotate: { type: String, default: '0deg' },
  opacity: { type: Number, default: 1 },
  z: { type: Number, default: 10 },
})
</script>

<template>
  <img
    :src="src"
    :style="{
      position: 'absolute',
      top, bottom, left, right,
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
