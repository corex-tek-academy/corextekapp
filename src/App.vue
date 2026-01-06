<script setup>
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import Partnership from './components/Partnership.vue'
  import About from './components/About.vue'
  import Internship from './components/Internship.vue'
  import Programs from './components/Programs.vue'
  import Contact from './components/Contact.vue'
  import Footer from './components/Footer.vue'
  import Testimonial from './components/Testimonial.vue'
import Aboutcorex from './components/aboutcorex.vue'

</script>

<template>
  <nav>
    <Navbar />
  </nav>
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
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
/* header {
  line-height: 1.5;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

@media (min-width: 1024px) {
  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  /* .logo {
    margin: 0 2rem 0 0;
  } */

  /* header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */
}
</style>
