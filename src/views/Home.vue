<script setup>
  import Hero from '@/components/Hero.vue'
  import Partnership from '@/components/Partnership.vue'
  import About from '@/components/About.vue'
  import Internship from '@/components/Internship.vue'
  import Programs from '@/components/Programs.vue'
  import Contact from '@/components/Contact.vue'
  import Testimonial from '@/components/Testimonial.vue'
  import Aboutcorex from '@/components/Aboutcorex.vue'

</script>

<template>
  <!-- <nav>
    <Navbar />
  </nav> -->
  <header>
    <Hero />
  </header>
  <section>
    <Partnership />
  </section>
  <section>
    <About />
  </section>
  <section>
    <Aboutcorex/>
  </section>
  <section>
    <Internship />
  </section>
  <section>
    <Programs />
  </section>
  <section>
    <Contact />
  </section>
  <section>
    <Testimonial />
  </section>
  <!-- <footer>
    <Footer />
  </footer> -->
</template>