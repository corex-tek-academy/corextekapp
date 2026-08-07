<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isTouch = ref(false)
const isPointerActive = ref(false)

function onMouseMove(e) {
  isPointerActive.value = true
  document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
}

function onMouseLeave() {
  isPointerActive.value = false
}

onMounted(() => {
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    isTouch.value = true
    return
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true })
  document.body.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.body.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<template>
  <div 
    v-if="!isTouch" 
    class="spotlight-lens" 
    :class="{ active: isPointerActive }"
    aria-hidden="true"
  ></div>
</template>

<style scoped>
.spotlight-lens {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.4s ease;
  /* background: radial-gradient(
    650px circle at var(--cursor-x, -10px) var(--cursor-y, -10px),
    rgba(59, 130, 246, 0.08),
    rgba(139, 92, 246, 0.04) 40%,
    transparent 80%
  ); */
  mix-blend-mode: screen;
}

.spotlight-lens.active {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .spotlight-lens {
    display: none !important;
  }
}
</style>
