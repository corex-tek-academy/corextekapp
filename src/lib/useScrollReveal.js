/**
 * useScrollReveal — Composable and directive.
 * Guarantees all content elements render immediately with 100% opacity.
 */

export function useScrollReveal() {
  function observe(elements) {
    const els = elements instanceof NodeList || Array.isArray(elements) ? elements : [elements]
    els.forEach(el => el?.classList?.add('revealed'))
  }

  function init(containerRef) {
    const els = containerRef
      ? containerRef.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      : document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    els.forEach(el => el.classList.add('revealed'))
  }

  function cleanup() {}

  return { observe, init, cleanup }
}

export const vScrollReveal = {
  mounted(el) {
    el.classList.add('revealed')
  }
}
