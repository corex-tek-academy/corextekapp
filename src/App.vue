<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import SpotlightCursor from './components/SpotlightCursor.vue'
import PageLoader from './components/PageLoader.vue'
import Lenis from 'lenis'

const isInitialLoading = ref(true)
let lenis = null

onMounted(() => {
  // Hide initial pre-loader after a brief delay
  setTimeout(() => {
    isInitialLoading.value = false
  }, 800)

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5
  })

  function raf(time) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  lenis?.destroy()
})
</script>

<template>
  <div class="app-wrapper">
    <!-- Initial pre-loader -->
    <PageLoader v-if="isInitialLoading" />

    <!-- Main app content -->
    <template v-else>
      <SpotlightCursor />
      <Navbar />
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer />
    </template>
  </div>
</template>

<style>
/* Global Lenis Smooth Scroll Styles */
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}

/* Global Page Transition */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Global smooth scrolling fallback */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for WebKit browsers */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-background-soft);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-border-hover);
}

/* Selection styling */
::selection {
  background: var(--primary);
  color: var(--light);
}

::-moz-selection {
  background: var(--primary);
  color: var(--light);
}

/* Focus visible for accessibility */
*:focus-visible {
  outline: 3px solid rgba(59, 130, 246, 0.35);
  outline-offset: 2px;
}

/* Remove default focus outline when using focus-visible */
:focus:not(:focus-visible) {
  outline: none;
}
</style>
