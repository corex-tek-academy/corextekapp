<script setup>
/**
 * OptimizedImage — renders a <picture> element with WebP + AVIF sources
 * and a PNG/JPG fallback, plus lazy loading, intrinsic dimensions, and
 * responsive max-width to prevent layout shift (CLS).
 *
 * Props:
 *   src    - Imported original image (PNG, JPG)
 *   webp   - Imported WebP version (optional, falls back to src)
 *   avif   - Imported AVIF version (optional)
 *   alt    - Alt text (required for accessibility)
 *   width  - Intrinsic width (helps prevent CLS)
 *   height - Intrinsic height
 *   class  - Additional CSS classes
 *   loading  - Loading strategy: 'lazy' (default) | 'eager'
 *   sizes    - Responsive sizes attribute (e.g. '(max-width: 768px) 100vw, 50vw')
 */
defineProps({
  src: { type: String, required: true },
  webp: { type: String, default: '' },
  avif: { type: String, default: '' },
  alt: { type: String, default: '' },
  width: { type: [Number, String], default: null },
  height: { type: [Number, String], default: null },
  class: { type: [String, Array, Object], default: '' },
  loading: { type: String, default: 'lazy' },
  sizes: { type: String, default: '' },
})
</script>

<template>
  <picture>
    <!-- AVIF source (modern browsers) -->
    <source v-if="avif" :srcset="avif" type="image/avif" />
    <!-- WebP source (wide support) -->
    <source v-if="webp" :srcset="webp" type="image/webp" />
    <!-- Fallback original (PNG/JPG) with intrinsic dimensions to prevent CLS -->
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="class"
      :loading="loading"
      :sizes="sizes || undefined"
      decoding="async"
      
    />
  </picture>
</template>
