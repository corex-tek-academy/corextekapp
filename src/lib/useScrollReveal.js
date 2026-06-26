/**
 * useScrollReveal — Vue 3 composable for scroll-triggered reveal animations.
 * Uses Intersection Observer to add 'revealed' class when elements enter viewport.
 * Works with CSS classes: .reveal, .reveal-left, .reveal-right, .reveal-scale
 * 
 * Usage:
 *   import { useScrollReveal } from '@/lib/useScrollReveal'
 *   const { observe } = useScrollReveal()
 *   // In onMounted: observe(document.querySelectorAll('.reveal'))
 * 
 * Or use the directive version:
 *   <div v-scroll-reveal>...</div>
 */

import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -60px 0px',
  } = options

  let observer = null

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  function createObserver() {
    if (prefersReducedMotion) return null

    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer?.unobserve(entry.target)
        }
      })
    }, {
      threshold,
      rootMargin,
    })
  }

  function observe(elements) {
    if (!observer) return
    
    if (elements instanceof NodeList || Array.isArray(elements)) {
      elements.forEach(el => observer.observe(el))
    } else if (elements instanceof Element) {
      observer.observe(elements)
    }
  }

  function init(containerRef) {
    if (prefersReducedMotion) {
      // Immediately show everything if reduced motion is preferred
      const els = containerRef
        ? containerRef.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
        : document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      els.forEach(el => el.classList.add('revealed'))
      return
    }

    observer = createObserver()
    const els = containerRef
      ? containerRef.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      : document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    observe(els)
  }

  function cleanup() {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  return {
    observe,
    init,
    cleanup,
  }
}

/**
 * Vue directive for scroll reveal.
 * Usage: <div v-scroll-reveal>...</div>
 * Modifiers: v-scroll-reveal.left, v-scroll-reveal.right, v-scroll-reveal.scale
 */
export const vScrollReveal = {
  mounted(el, binding) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Determine animation class
    if (binding.modifiers.left) {
      el.classList.add('reveal-left')
    } else if (binding.modifiers.right) {
      el.classList.add('reveal-right')
    } else if (binding.modifiers.scale) {
      el.classList.add('reveal-scale')
    } else {
      el.classList.add('reveal')
    }

    // Add stagger delay if value is provided
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value * 0.1}s`
    }

    if (prefersReducedMotion) {
      el.classList.add('revealed')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    })

    observer.observe(el)
    el._scrollRevealObserver = observer
  },

  unmounted(el) {
    if (el._scrollRevealObserver) {
      el._scrollRevealObserver.disconnect()
      delete el._scrollRevealObserver
    }
  }
}
