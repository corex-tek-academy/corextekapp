<script setup>
import { defineAsyncComponent } from 'vue'
import PageLoader from '@/components/PageLoader.vue'

// ── Above the fold (static import for instant render) ──
import Hero from '@/components/Hero.vue'
import Partnership from '@/components/Partnership.vue'

// ── Below the fold (lazy-loaded, split into separate JS chunks) ──
const Stats = defineAsyncComponent(() => import('@/components/Stats.vue'))
const About = defineAsyncComponent(() => import('@/components/About.vue'))
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
  <div class="home-page">
    <header>
      <Hero />
    </header>

    <Partnership />

    <Suspense>
      <template #default>
        <Stats />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <About />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Aboutcorex />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <WhyChoose />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LearningPath />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Internship />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Programs />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <FAQ />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Testimonial />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <CTABanner />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <Contact />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.home-page {
  overflow-x: hidden;
}
</style>
