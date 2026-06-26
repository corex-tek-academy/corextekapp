<template>
  <section class="testimonial-section bg-lines divider-line-y" id="testimonials">
    <div class="testimonial container">
   
      <div class="header">
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-chat-heart-fill"></i>
        Success Stories
      </span>
      <h1>Real Stories. <span class="highlight">Real Growth.</span></h1>
      <p class="section-subtitle">
        Hear directly from our students about how Corex Tek-Academy helped them build confidence, master in-demand skills, and launch their tech careers.
      </p>
    </div>

    <div class="testify-wrapper">
      <div class="testify acrylic-card box-3d-extruded" style="--card-accent: var(--primary);">
        <div class="quote-icon">
          <i class="bi bi-quote"></i>
        </div>

        <transition name="slide-fade" mode="out-in">
          <div class="testimonial_inner" :key="currentTestimonial.id" v-if="currentTestimonial">
            <div class="testimonial_img">
              <div class="avatar-ring">
                <img :src="currentTestimonial.image" alt="Corex student portrait" />
              </div>
            </div>

            <div class="testimonial_text">
              <p class="txt">
                "{{ currentTestimonial.text }}"
              </p>

              <div class="profile">
                <h5 class="student-name">{{ currentTestimonial.name }}</h5>
                <p class="student-role">{{ currentTestimonial.role }}</p>
              </div>
            </div>
          </div>
        </transition>

        <div class="nav-controls">
          <button class="nav-btn prev" @click="prevTestimonial" aria-label="Previous testimonial">
            <i class="bi bi-arrow-left"></i>
          </button>
          <div class="slide-indicator">
            <span 
              v-for="(t, idx) in testimonials" 
              :key="t.id" 
              class="dot" 
              :class="{ active: currentIndex === idx }"
              @click="setIndex(idx)"
            ></span>
          </div>
          <button class="nav-btn next" @click="nextTestimonial" aria-label="Next testimonial">
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Img1 from '/src/assets/image/progimg22.png'
import Img2 from '/src/assets/image/progimg1.png'
import Img3 from '/src/assets/image/proimg0.png'

const testimonials = ref([
  {
    id: 1,
    name: 'Patrick Okoli',
    role: 'Full-Stack Developer Alumni',
    text: 'Corex Tek-Academy transformed my confidence as a software engineer. Working on real-world projects with structured mentorship exposed me to professional Git workflows, coding patterns, and team collaboration best practices.',
    image: Img1
  },
  {
    id: 2,
    name: 'Sandra Collins',
    role: 'Frontend Developer Alumni',
    text: 'The hands-on projects and continuous mentor feedback gave me absolute clarity. I moved from struggling with basic JavaScript to confidently building production-ready responsive applications with modern frameworks.',
    image: Img2
  },
  {
    id: 3,
    name: 'Michael Obi',
    role: 'Backend Developer Alumni',
    text: 'Corex provided the exact structure I needed. The learning environment was highly practical, collaborative, and industry-aligned. It fully prepared me to tackle real-world client requests and server deployments.',
    image: Img3
  }
])

const currentIndex = ref(0)
let interval = null

const currentTestimonial = computed(() => testimonials.value[currentIndex.value])

const nextTestimonial = () => {
  stopAutoSlide()
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  startAutoSlide()
}

const prevTestimonial = () => {
  stopAutoSlide()
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  startAutoSlide()
}

const setIndex = (idx) => {
  stopAutoSlide()
  currentIndex.value = idx
  startAutoSlide()
}

// Auto Slide
const startAutoSlide = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }, 7000)
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
.testimonial-section {
  padding: var(--section-padding-y) 0;
}

.testimonial {
  padding: 0;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 48px;
  gap: 16px;
}

.header h1 {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1.2;
  font-weight: 800;
  margin: 0;
}

.highlight {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
}

.section-subtitle {
  font-size: 1.025rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 650px;
  margin: 0;
}

/* Testimonial slider card wrapper */
.testify-wrapper {
  max-width: 960px;
  margin: 0 auto;
  position: relative;
}

/* Dark glassmorphic container */
.testify {
  padding: 60px;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Decorative background glow inside the dark card */
.testify::before {
  content: '';
  position: absolute;
  top: -150px;
  left: -150px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.quote-icon {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 5rem;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  pointer-events: none;
}

.testimonial_inner {
  display: grid;
  grid-template-columns: 1fr 1.8fr;
  gap: 48px;
  align-items: center;
}

.testimonial_img {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Floating avatar with glowing rings */
.avatar-ring {
  position: relative;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  padding: 6px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
}

.avatar-ring img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #090d16;
  display: block;
}

.testimonial_text {
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
}

.txt {
  line-height: 1.6;
  font-weight: 500;
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: #e2e8f0;
  font-family: var(--font-heading);
}

.profile {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.student-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--light);
  margin: 0;
}

.student-role {
  color: var(--primary-text);
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0;
}

/* Nav Controls & dot indicators */
.nav-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 24px;
}

.nav-btn {
  border-radius: 50%;
  height: 44px;
  width: 44px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  color: var(--light);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: var(--light);
  color: var(--bg-dark);
  border-color: var(--light);
  transform: scale(1.05);
}

.slide-indicator {
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: var(--primary);
  width: 20px;
  border-radius: 100px;
}

/* Slide-Fade transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Responsive configurations */
@media (max-width: 768px) {
  .testimonial-section {
    padding: 60px 0;
  }
  
  .testimonial {
    padding: 0;
  }

  .testify {
    padding: 40px 24px;
    border-radius: var(--radius-lg);
  }

  .testimonial_inner {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 28px;
  }

  .testimonial_text {
    text-align: center;
  }

  .avatar-ring {
    width: 140px;
    height: 140px;
  }

  .txt {
    font-size: 1.1rem;
  }

  .quote-icon {
    display: none;
  }
}

@media (max-width: 480px) {
  .testify {
    padding: 30px 16px;
  }
  .nav-controls {
    margin-top: 24px;
    padding-top: 16px;
  }
  .avatar-ring {
    width: 120px;
    height: 120px;
  }
}
</style>
