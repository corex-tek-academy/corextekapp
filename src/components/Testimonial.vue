<template>
  <div class="testimonial container">
   
    <div class="header">
      <p class="section-tag">TESTIMONIALS</p>
      <h1>
      Real Stories. <span class="highlight">Real Growth.</span>
      </h1>
      <p class="section-subtitle">
      Hear directly from our students about how Corex Tek-Academy helped them build confidence, master in-demand skills, and launch their tech careers.
      </p>
    </div>

    <div class="testify">
      <div class="testimonial_inner" v-if="currentTestimonial">
        <div class="testimonial_img">
          <img :src="currentTestimonial.image" alt="student image" />
        </div>

        <div class="testimonial_text">
          <p class="txt">
            {{ currentTestimonial.text }}
          </p>

          <div class="profile">
            <h5><strong>{{ currentTestimonial.name }}</strong></h5>
            <p><strong>{{ currentTestimonial.role }}</strong></p>
          </div>
        </div>
      </div>

      <div class="cta">
        <button class="prev" @click="prevTestimonial"><i class="bi bi-arrow-left-short"></i></button>
        <button class="next" @click="nextTestimonial"><i class="bi bi-arrow-right-short"></i></button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import Img1 from '/src/assets/image/progimg22.png'
  import Img2 from '/src/assets/image/progimg1.png'
  import Img3 from '/src/assets/image/proimg0.png'

  // Testimonial Data (Scalable & Clean)
  const testimonials = ref([
    {
      id: 1,
      name: 'Patrick Okoli',
      role: 'Fullstack Developer',
      text: 'Corex Tek-Academy transformed my confidence as a backend engineer. Working on real-world projects with structured mentorship exposed me to professional workflows and industry best practices.',
      image: Img1
    },
    {
      id: 2,
      name: 'Sandra Collins',
      role: 'Frontend Developer',
      text: 'The hands-on projects and mentor feedback gave me clarity and confidence. I moved from beginner level to building production-ready applications.',
      image: Img2
    },
    {
      id: 3,
      name: 'Michael Obi',
      role: 'Backend Developer',
      text: 'Corex provided real structure. The learning environment was practical, collaborative, and industry-aligned. It prepared me for real client work.',
      image: Img3
    }
  ])

  const currentIndex = ref(0)
  let interval = null

  const currentTestimonial = computed(() => testimonials.value[currentIndex.value])

  const nextTestimonial = () => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }

  const prevTestimonial = () => {
    currentIndex.value =
      (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  }

  // Auto Slide (Professional Touch)
  const startAutoSlide = () => {
    interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
  }

  const stopAutoSlide = () => {
    if (interval) clearInterval(interval)
  }

  onMounted(() => {
    startAutoSlide()
  })

  onUnmounted(() => {
    stopAutoSlide()
  })
</script>

<style scoped>
  .testimonial {
    padding: 32px 16px 0 16px;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 40px auto;
    max-width: 750px;
  }


  .section-tag {
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 12px;
  }


  .header h1 {
    font-size: 38px;
    line-height: 1.2;
    font-weight: 800;
    margin: 0 0 16px 0;
  }


  .highlight {
    background: linear-gradient(90deg, var(--primary), #019c9a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }


  .section-subtitle {
    font-size: 16px;
    line-height: 1.7;
    margin: 0;
  }

  .testify {
    background-image: url(/src/assets/image/bg2.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    background-color: #111111f0;
    padding: 28px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(16,24,40,0.01);
    transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease;
    position: relative;
    overflow: hidden;
    place-content: center;
  }

  .testimonial_inner {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 28px;
    
  }
  @media (max-width:600px) {
    .testimonial_inner {
      display: block;
      text-align: center;
    }
    .testimonial_img img {
      display: none !important;
    }
    .header{
      margin: 20px auto;
    }
  }
  .testimonial_img img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 14px;
    object-fit: cover;
  }

  .profile h5 {
    margin: 0;
    color: #fff;
  }

  .profile p {
    color: #fff999;
    margin: 0;
  }

  .testimonial_text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }

  .txt {
    line-height: 1.6;
    font-weight: 500;
    margin: 0;
    font-size: 20px;
    color: #cdcaca;
  }

  .cta {
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    border-radius: 200px;
    padding: 10px;
    height: 40px;
    width: 40px;
    border: none;
    cursor: pointer;
  }
  button:hover{
    border: 1px solid var(--primary);
    background-color: var(--light);
    color: var(--primary);
  }
</style>
