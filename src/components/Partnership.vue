<script setup>
import { onMounted } from 'vue'
import logoblue from '/src/assets/image/logoblue.png'

const logos = [
  '/logoblue.png',
  '/logoblue.png',
  '/logoblue.png',
  '/logoblue.png',
]

onMounted(() => {
  // Enable smooth scroll behavior for the page
  document.documentElement.style.scrollBehavior = 'smooth'

  // Reveal the section when it enters the viewport
  const el = document.querySelector('.sponsor-section')
  if (!el) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
      }
    })
  }, { threshold: 0.15 })
  io.observe(el)
})
</script>

<template>
  <div class="sponsor-section container">
    <div class="sponsor-logos" aria-hidden="false">
      <h2>Our Sponsors</h2>

      <div class="logo-track" role="presentation">
        <div class="logo-set">
          <img v-for="(logo, i) in logos" :key="`a-${i}`" :src="logoblue" :alt="`Sponsor ${i+1}`" />
        </div>
        <!-- duplicate set for seamless infinite scroll -->
        <div class="logo-set" aria-hidden="true">
          <img v-for="(logo, i) in logos" :key="`b-${i}`" :src="logoblue" :alt="''" />
        </div>
        <div class="logo-set" aria-hidden="true">
          <img v-for="(logo, i) in logos" :key="`b-${i}`" :src="logoblue" :alt="''" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Modern, responsive Partnership section with smooth animations */
.sponsor-section{
  padding: 0 16px;
  /* text-align: center; */
  overflow: hidden;
  transform: translateY(8px);
  opacity: 0;
  transition: opacity 480ms ease, transform 480ms ease;
  background-color: linear-gradient(180deg, rgba(2,87,255,0.3), rgba(2,87,255,0.5));
}
.sponsor-section.in-view{
  transform: translateY(0);
  opacity: 1;
}

.sponsor-section h2{
  font-size: 1rem;
  margin-bottom: 8px;
  color: var(--accent-green);
  padding: 8px 10px;
  font-weight: 600;
  letter-spacing: -0.4px;
  transition: transform 450ms ease, opacity 450ms ease;
  width: 130px;
  background-color: var(--light);
  border-radius: 8px;
  background-color: var(--accent-green-50);
}


.sponsor-logos{
  width: 100%;
  overflow: hidden;
  /* background-color: var(--light); */
  padding: 16px 24px ;
  border-radius: 14px;
  border: 1px solid #0257FF23;
}

/* The track is 200% width and contains two identical sets for seamless looping */
.logo-track{
  display: flex;
  width: 200%;
  align-items: center;
  gap: 40px;
  animation: scroll-left 20s linear infinite paused;

}
.logo-set{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  flex: 0 0 50%;
}

.logo-track img{
  max-width: 150px;
  height: auto;
  filter: grayscale(100%) contrast(90%) brightness(95%);
  opacity: 0.75;
  transition: transform 350ms cubic-bezier(.2,.9,.2,1), filter 300ms ease, opacity 300ms ease, box-shadow 300ms ease;
  will-change: transform, opacity;
  border-radius: 8px;
}

.logo-track img:hover{
  transform: translateY(-8px) scale(1.06);
  filter: none;
  opacity: 1;
  box-shadow: 0 8px 24px rgba(12,18,30,0.12);
}

/* Start animation only when section is in view */
.sponsor-section.in-view .logo-track{
  animation-play-state: running;
}

@keyframes scroll-left{
  from{ transform: translateX(0); }
  to{ transform: translateX(-50%); }
}



/* Accessibility: prefer reduced motion */
@media (prefers-reduced-motion: reduce){
  .logo-track{ animation: none !important; }
  .sponsor-section{ transition: none; }
  .logo-track img{ transition: none; }
}

/* Responsive tweaks */
@media (max-width: 768px){
  .logo-track img{ max-width: 120px; }
  .logo-set{ gap: 28px; }
}

</style>