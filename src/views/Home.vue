<script setup>
import { defineAsyncComponent } from 'vue'

// ── Above the fold (static import for instant render) ──
import Hero from '@/components/Hero.vue'
import Partnership from '@/components/Partnership.vue'
import Stats from '@/components/Stats.vue'
import About from '@/components/About.vue'

// ── Below the fold (lazy-loaded, split into separate JS chunks) ──
const Aboutcorex = defineAsyncComponent(() => import('@/components/Aboutcorex.vue'))
const WhyChoose = defineAsyncComponent(() => import('@/components/WhyChoose.vue'))
const LearningPath = defineAsyncComponent(() => import('@/components/LearningPath.vue'))
const Internship = defineAsyncComponent(() => import('@/components/Internship.vue'))
const Programs = defineAsyncComponent(() => import('@/components/Programs.vue'))
const FAQ = defineAsyncComponent(() => import('@/components/FAQ.vue'))
const Testimonial = defineAsyncComponent(() => import('@/components/Testimonial.vue'))
const CTABanner = defineAsyncComponent(() => import('@/components/CTABanner.vue'))
const Contact = defineAsyncComponent(() => import('@/components/Contact.vue'))
</script>

<template>
  <header>
    <Hero />
  </header>
  
  <Partnership />
  
  <Stats />
  
  <About />
  
  <Aboutcorex />
  
  <WhyChoose />
  
  <LearningPath />
  
  <Internship />
  
  <Programs />
  
  <FAQ />
  
  <Testimonial />
  
  <CTABanner />
  
  <Contact />
</template>