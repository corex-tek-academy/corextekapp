/**
 * useScrollReveal — IntersectionObserver powered Vue 3 scroll reveal directive & composable.
 * Provides smooth, high-performance scroll-triggered entrance animations.
 * 
 * Supports:
 * - v-scroll-reveal (fade & slide up)
 * - v-scroll-reveal.left (fade & slide in from left)
 * - v-scroll-reveal.right (fade & slide in from right)
 * - v-scroll-reveal.scale (fade & scale up)
 * - v-scroll-reveal="number" (stagger delay multiplier)
 */

let sharedObserver = null

function getObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }

  return new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          el.classList.add('v-scroll-revealed')
          observer.unobserve(el)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  )
}

export function useScrollReveal() {
  function observe(elements) {
    if (!sharedObserver) sharedObserver = getObserver()
    const els = elements instanceof NodeList || Array.isArray(elements) ? elements : [elements]
    els.forEach((el) => {
      if (el) {
        if (sharedObserver) {
          sharedObserver.observe(el)
        } else {
          el.classList.add('v-scroll-revealed')
        }
      }
    })
  }

  function init(containerRef) {
    const els = containerRef
      ? containerRef.querySelectorAll('.v-scroll-reveal-base')
      : document.querySelectorAll('.v-scroll-reveal-base')
    observe(els)
  }

  function cleanup() {}

  return { observe, init, cleanup }
}

export const vScrollReveal = {
  mounted(el, binding) {
    // Respect reduced motion settings
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('v-scroll-revealed')
      return
    }

    const modifiers = binding.modifiers || {}
    let revealClass = 'v-scroll-reveal-up'

    if (modifiers.left) {
      revealClass = 'v-scroll-reveal-left'
    } else if (modifiers.right) {
      revealClass = 'v-scroll-reveal-right'
    } else if (modifiers.scale) {
      revealClass = 'v-scroll-reveal-scale'
    }

    el.classList.add('v-scroll-reveal-base', revealClass)

    // Stagger delay if numeric value passed (e.g. v-scroll-reveal="i + 1")
    if (typeof binding.value === 'number' && binding.value > 0) {
      const delayMs = Math.min(binding.value * 80, 800)
      el.style.transitionDelay = `${delayMs}ms`
    }

    if (!sharedObserver) {
      sharedObserver = getObserver()
    }

    if (sharedObserver) {
      sharedObserver.observe(el)
    } else {
      el.classList.add('v-scroll-revealed')
    }
  },
  unmounted(el) {
    if (sharedObserver) {
      sharedObserver.unobserve(el)
    }
  }
}
