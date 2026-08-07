<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const heroRef = ref(null)
const sceneRef = ref(null)
const trailCanvasRef = ref(null)
const isTouchDevice = ref(false)

// Cursor trail state
let trailParticles = []
let trailAnimFrame = null
let trailLastSpawn = 0
const trailColors = ['#7c6bff', '#2ee6ff', '#ff3ec8']

// Animated Trust Statistics
const stats = ref([
  { value: 0, target: 800, suffix: '+', label: 'Students Trained', icon: 'bi-people-fill' },
  { value: 0, target: 95, suffix: '%', label: 'Employment Support', icon: 'bi-briefcase-fill' },
  { value: 0, target: 20, suffix: '+', label: 'Industry Projects', icon: 'bi-code-square' },
  { value: 0, target: 15, suffix: '+', label: 'Professional Courses', icon: 'bi-mortarboard-fill' },
])

const hasAnimatedStats = ref(false)

// Hardware 3D Perspective Tilt Physics
function onMouseMove(e) {
  if (isTouchDevice.value || !sceneRef.value) return
  const rect = sceneRef.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  const mouseX = e.clientX - centerX
  const mouseY = e.clientY - centerY
  
  // Constrain max rotation between -4deg and +4deg for elegant Apple-like depth
  const rotateX = (-mouseY / (rect.height / 2)) * 4
  const rotateY = (mouseX / (rect.width / 2)) * 4
  
  gsap.to('.scene-3d-inner', {
    rotateX: rotateX,
    rotateY: rotateY,
    duration: 0.6,
    ease: 'power2.out'
  })

  // Multi-plane parallax offset for internal floating panels
  gsap.to('.panel-code', { x: mouseX * 0.02, y: mouseY * 0.02, duration: 0.8, ease: 'power2.out' })
  gsap.to('.panel-ai', { x: -mouseX * 0.03, y: -mouseY * 0.03, duration: 0.8, ease: 'power2.out' })
  gsap.to('.panel-analytics', { x: mouseX * 0.04, y: -mouseY * 0.03, duration: 0.8, ease: 'power2.out' })
  gsap.to('.card-left', { x: -mouseX * 0.025, y: -mouseY * 0.02, duration: 0.8, ease: 'power2.out' })
  gsap.to('.card-right', { x: mouseX * 0.025, y: mouseY * 0.02, duration: 0.8, ease: 'power2.out' })
}

function onMouseLeave() {
  if (isTouchDevice.value) return
  gsap.to('.scene-3d-inner', { rotateX: 0, rotateY: 0, duration: 1, ease: 'power3.out' })
  gsap.to('.panel-code, .panel-ai, .panel-analytics, .card-left, .card-right', { x: 0, y: 0, duration: 1, ease: 'power3.out' })
}

// Magnetic Button Physics
function onMagneticMove(e) {
  if (isTouchDevice.value) return
  const btn = e.currentTarget
  const rect = btn.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  gsap.to(btn, { x: x * 0.25, y: y * 0.25, duration: 0.4, ease: 'power2.out' })
}

function onMagneticLeave(e) {
  if (isTouchDevice.value) return
  gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
}

// Animated Odometer Count-up
function animateStats() {
  if (hasAnimatedStats.value) return
  hasAnimatedStats.value = true

  stats.value.forEach((stat, index) => {
    const duration = 2200
    const startTime = performance.now() + index * 120
    function count(currentTime) {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(count)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      stat.value = Math.round(eased * stat.target)
      if (progress < 1) requestAnimationFrame(count)
    }
    requestAnimationFrame(count)
  })
}

// Cursor trail — mouse handler (scoped to hero section)
function onTrailMouseMove(e) {
  const now = performance.now()
  if (now - trailLastSpawn < 18) return
  trailLastSpawn = now

  // Get position relative to the hero section (canvas fills the section)
  const heroEl = heroRef.value
  if (!heroEl) return
  const rect = heroEl.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  trailParticles.push({
    x,
    y,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    r: 2 + Math.random() * 2.5,
    life: 1,
    color: trailColors[Math.floor(Math.random() * trailColors.length)]
  })

  if (trailParticles.length > 60) trailParticles.shift()
}

function initTrailCanvas() {
  const canvas = trailCanvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const dpr = window.devicePixelRatio || 1

  function resizeCanvas() {
    const heroEl = heroRef.value
    if (!heroEl) return
    const w = heroEl.offsetWidth
    const h = heroEl.offsetHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(dpr, dpr)
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas, { passive: true })

  function draw() {
    const heroEl = heroRef.value
    if (!heroEl) { trailAnimFrame = requestAnimationFrame(draw); return }
    ctx.clearRect(0, 0, heroEl.offsetWidth, heroEl.offsetHeight)

    trailParticles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      p.life -= 0.02

      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * Math.max(p.life, 0), 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.globalAlpha = Math.max(p.life, 0) * 0.7
      ctx.shadowBlur = 12
      ctx.shadowColor = p.color
      ctx.fill()
    })

    ctx.globalAlpha = 1
    trailParticles = trailParticles.filter(p => p.life > 0)
    trailAnimFrame = requestAnimationFrame(draw)
  }
  trailAnimFrame = requestAnimationFrame(draw)
}

onMounted(() => {
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    isTouchDevice.value = true
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isFinePointer = window.matchMedia('(pointer: fine)').matches

  // Initialize cursor trail for desktop users who don't mind motion
  if (!prefersReduced && isFinePointer) {
    initTrailCanvas()
  }

  if (!prefersReduced) {
    // 1. Initial Master Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
    tl.from('.hero-badge-container', { y: 24, opacity: 0, delay: 0.1 })
      .from('.editorial-title .title-line-1', { y: 35, opacity: 0 }, '-=0.6')
      .from('.editorial-title .title-line-2', { y: 35, opacity: 0 }, '-=0.7')
      .from('.editorial-lead', { y: 20, opacity: 0 }, '-=0.6')
      .from('.editorial-actions', { y: 20, opacity: 0 }, '-=0.6')
      .from('.scene-3d-wrapper', { scale: 0.92, opacity: 0, y: 40 }, '-=0.7')
      .from('.hero-stats-bar', { y: 20, opacity: 0 }, '-=0.4')

    // 2. GSAP ScrollTrigger Cinematic Transition into Next Section
    gsap.to('.hero-content-wrapper', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      },
      y: -60,
      scale: 0.97,
      opacity: 0.2,
      ease: 'none'
    })

    gsap.to('.scene-3d-wrapper', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      },
      y: -120,
      rotateX: 8,
      ease: 'none'
    })
  }

  // 3. Stats Viewport Observer
  const statsEl = document.querySelector('.hero-stats-bar')
  if (statsEl) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateStats()
        observer.disconnect()
      }
    }, { threshold: 0.2 })
    observer.observe(statsEl)
  }
})

onUnmounted(() => {
  if (trailAnimFrame) cancelAnimationFrame(trailAnimFrame)
})
</script>

<template>
  <section ref="heroRef" class="hero-section" aria-labelledby="hero-main-heading" @mousemove="onTrailMouseMove">
    <!-- Ambient Floating Bubbles Background -->
    <div class="hero-bubbles" aria-hidden="true">
      <div class="hero-bubble hero-bubble-1"></div>
      <div class="hero-bubble hero-bubble-2"></div>
      <div class="hero-bubble hero-bubble-3"></div>
      <div class="hero-bubble hero-bubble-4"></div>
    </div>

    <!-- Cursor Trail Canvas -->
    <canvas ref="trailCanvasRef" class="hero-trail-canvas" aria-hidden="true"></canvas>

    <!-- Ambient Environmental Background -->
    <div class="ambient-environment" aria-hidden="true">
      <div class="mesh-gradient-aurora"></div>
      <div class="glow-orb orb-primary"></div>
      <div class="glow-orb orb-secondary"></div>
      <div class="perspective-grid-pattern"></div>
      <div class="ambient-light-beam"></div>
    </div>

    <div class="container hero-container">
      <!-- Upper Editorial Content -->
      <div class="hero-content-wrapper">
        <!-- Left Floating Feature Card (Desktop) -->
        <div class="hero-side-card card-left glass-panel-dark animate-float" aria-hidden="true">
          <div class="side-card-icon icon-blue-glow">
            <i class="bi bi-code-slash"></i>
          </div>
          <div class="side-card-info">
            <span class="side-card-title">Full-Stack Engineering</span>
            <span class="side-card-sub">Vue 3 • Node • Postgres</span>
            <span class="side-card-tag tag-blue">Live Mentorship</span>
          </div>
        </div>

        <!-- Right Floating Feature Card (Desktop) -->
        <div class="hero-side-card card-right glass-panel-dark animate-float-delayed" aria-hidden="true">
          <div class="side-card-icon icon-orange-glow">
            <i class="bi bi-cpu-fill"></i>
          </div>
          <div class="side-card-info">
            <span class="side-card-title">AI & Cloud Architecture</span>
            <span class="side-card-sub">Python • AWS • Neural Nets</span>
            <span class="side-card-tag tag-orange">Capstone Ready</span>
          </div>
        </div>

        <!-- Live Enrollment Badge with Orange Pulse Accent -->
        <div class="hero-badge-container">
          <span class="editorial-badge">
            <span class="pulse-ring pulse-orange"></span>
            <span class="badge-text">Cohort 1 Enrolling • <span class="accent-orange-tag">Feb 2026 Batch</span></span>
            <i class="bi bi-arrow-right-short badge-arrow"></i>
          </span>
        </div>

        <!-- Short, Punchy Editorial Headline -->
        <h1 id="hero-main-heading" class="editorial-title">
          <span class="title-line-1">Build the Future.</span>
          <span class="title-line-2 text-orange-highlight">Master Technology That Matters.</span>
        </h1>

        <!-- Crisp, Impactful Narrative Lead -->
        <p class="editorial-lead">
          Mentor-led, project-first training engineered to transform aspiring developers into job-ready tech leaders.
        </p>

        <!-- Magnetic Call-to-Action Group -->
        <div class="editorial-actions">
          <router-link 
            to="/enrollment" 
            class="cta-magnetic cta-primary"
            @mousemove="onMagneticMove"
            @mouseleave="onMagneticLeave"
          >
            <span class="cta-shimmer"></span>
            <span class="cta-label">Join Cohort 1</span>
            <i class="bi bi-arrow-right cta-arrow" aria-hidden="true"></i>
          </router-link>

          <router-link 
            to="/enrollment" 
            class="cta-magnetic cta-secondary cta-secondary-orange"
            @mousemove="onMagneticMove"
            @mouseleave="onMagneticLeave"
          >
            <span class="cta-label">Explore Programs</span>
            <i class="bi bi-chevron-right cta-arrow" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>

      <!-- Interactive 3D Technology Visual Scene -->
      <div 
        ref="sceneRef" 
        class="scene-3d-wrapper"
        @mousemove="onMouseMove"
        @mouseleave="onMouseLeave"
      >
        <div class="scene-3d-inner">
          <!-- Code Editor Window (Layer 3) -->
          <div class="floating-panel panel-code glass-panel-dark">
            <div class="code-header">
              <div class="window-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="code-filename">CohortEngine.vue</span>
            </div>
            <div class="code-body">
              <pre><code><span class="kwd">import</span> { <span class="vrb">useEngineer</span> } <span class="kwd">from</span> <span class="str">'@corex/tek'</span>

              <span class="kwd">const</span> { <span class="vrb">skills</span>, <span class="vrb">deploy</span> } = <span class="fnc">useEngineer</span>({
                <span class="prop">track</span>: <span class="str">'Full-Stack Architecture'</span>,
                <span class="prop">mentorship</span>: <span class="kwd">true</span>,
                <span class="prop">status</span>: <span class="str">'Ready to Hire 🚀'</span>
              })</code></pre>
            </div>
          </div>

          <!-- AI Assistant Floating Pill (Layer 4) -->
          <div class="floating-panel panel-ai glass-panel-dark">
            <div class="ai-icon-wrap icon-orange-glow">
              <i class="bi bi-cpu-fill"></i>
            </div>
            <div class="ai-info">
              <span class="ai-title">Corex AI Assistant</span>
              <span class="ai-status">Connected • 99.4% Precision</span>
            </div>
          </div>

          <!-- Analytics Dashboard Card with Touch of Orange (Layer 5) -->
          <div class="floating-panel panel-analytics glass-panel-dark">
            <div class="analytics-header">
              <span class="analytics-title">Graduate Placement</span>
              <span class="analytics-badge badge-orange">+95% Placed</span>
            </div>
            <div class="analytics-graph">
              <div class="bar bar-1" style="height: 45%;"></div>
              <div class="bar bar-2" style="height: 65%;"></div>
              <div class="bar bar-3" style="height: 85%;"></div>
              <div class="bar bar-4 bar-orange" style="height: 100%;"></div>
            </div>
          </div>

          <!-- Central Hardware Specular Surface Base -->
          <!-- <div class="scene-base-glow" aria-hidden="true"></div> -->
        </div>
      </div>

      <!-- Trust Metrics Bar -->
      <div class="hero-stats-bar glass-panel-dark">
        <div class="stat-cell" v-for="(stat, i) in stats" :key="i">
          <div class="stat-icon-box">
            <i class="bi" :class="stat.icon"></i>
          </div>
          <div class="stat-text-group">
            <span class="stat-number">{{ stat.value }}{{ stat.suffix }}</span>
            <span class="stat-caption">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Minimalist Scroll Down Indicator -->
      <div class="scroll-indicator-container" aria-hidden="true">
        <div class="scroll-track-line">
          <div class="scroll-pulse-dot"></div>
        </div>
        <span class="scroll-caption">SCROLL</span>
      </div>
    </div>
  </section>
</template>

<style scoped>

.hero-section {
  position: relative;
  min-height: 100vh;
  padding-top: 110px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-background);
}

/* ── Ambient Floating Bubbles ── */
.hero-bubbles {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-bubble {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.55;
  will-change: transform, filter;
}

.hero-bubble-1 {
  width: 54vw; height: 54vw;
  top: -18vw; left: -12vw;
  background: radial-gradient(circle, rgba(124, 107, 255, 0.65), transparent 68%);
  animation: heroDrift1 18s ease-in-out infinite alternate, heroHueShift 12s linear infinite;
}

.hero-bubble-2 {
  width: 44vw; height: 44vw;
  top: 2vw; right: -14vw;
  background: radial-gradient(circle, rgba(46, 230, 255, 0.5), transparent 68%);
  animation: heroDrift2 15s ease-in-out infinite alternate, heroHueShift 16s linear infinite reverse;
}

.hero-bubble-3 {
  width: 38vw; height: 38vw;
  bottom: -16vw; left: 26vw;
  background: radial-gradient(circle, rgba(255, 62, 200, 0.35), transparent 70%);
  animation: heroDrift3 20s ease-in-out infinite alternate, heroHueShift 20s linear infinite;
}

.hero-bubble-4 {
  width: 26vw; height: 26vw;
  bottom: 6vw; right: 8vw;
  background: radial-gradient(circle, rgba(255, 180, 84, 0.3), transparent 70%);
  animation: heroDrift4 13s ease-in-out infinite alternate;
}

@keyframes heroDrift1 { to { transform: translate(7vw, 8vw) scale(1.18); } }
@keyframes heroDrift2 { to { transform: translate(-8vw, 6vw) scale(1.22); } }
@keyframes heroDrift3 { to { transform: translate(5vw, -7vw) scale(1.12); } }
@keyframes heroDrift4 { to { transform: translate(-4vw, -5vw) scale(1.15); } }
@keyframes heroHueShift { to { filter: blur(80px) hue-rotate(45deg); } }

@media (prefers-reduced-motion: reduce) {
  .hero-bubble { animation: none !important; }
}

/* ── Cursor Trail Canvas ── */
.hero-trail-canvas {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  mix-blend-mode: screen;
}

/* ── Ambient Environmental Layer ── */
.ambient-environment {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.mesh-gradient-aurora {
  position: absolute;
  inset: -10%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 80% 30%, rgba(139, 92, 246, 0.10) 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 50%);
  filter: blur(60px);
  opacity: 0.9;
  animation: auroraPulse 12s ease-in-out infinite alternate;
}

@keyframes auroraPulse {
  0% { transform: scale(1) rotate(0deg); }
  100% { transform: scale(1.08) rotate(3deg); }
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.orb-primary {
  width: 450px;
  height: 450px;
  top: 10%;
  left: -5%;
  background: rgba(59, 130, 246, 0.01);
}

.orb-secondary {
  width: 200px;
  height: 100px;
  bottom: -10%;
  right: -5%;
  background: rgba(139, 92, 246, 0.001);
}

.perspective-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 75%);
}

.ambient-light-beam {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%) rotate(-12deg);
  width: 600px;
  height: 1000px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, transparent 70%);
  filter: blur(40px);
}

/* ── Main Container ── */
.hero-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-x);
}

/* ── Content Wrapper ── */
.hero-content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 920px;
  gap: 24px;
}

/* ── Side Floating Feature Cards (Desktop 1280px+) ── */
.hero-side-card {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(18, 19, 24, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  transition: transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.hero-side-card:hover {
  border-color: rgba(59, 130, 246, 0.35);
  box-shadow: 0 25px 60px rgba(59, 130, 246, 0.2);
}

.card-left {
  left: -110px;
  top: 40px;
}

.card-right {
  right: -110px;
  top: 120px;
}

.side-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.icon-blue-glow {
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: var(--primary);
}

.side-card-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  text-align: left;
}

.side-card-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
}

.side-card-sub {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  font-weight: 500;
}

.side-card-tag {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  margin-top: 4px;
}

.tag-blue {
  background: rgba(59, 130, 246, 0.12);
  color: var(--accent-sky-text);
}

.tag-orange {
  background: rgba(249, 115, 22, 0.12);
  color: var(--secondary);
}

@media (max-width: 1280px) {
  .hero-side-card {
    display: none;
  }
}

/* Live Badge */
.hero-badge-container {
  display: flex;
  justify-content: center;
}

.editorial-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-secondary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.editorial-badge:hover {
  border-color: rgba(59, 130, 246, 0.3);
  background: rgba(255, 255, 255, 0.05);
}

.pulse-ring {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6);
  animation: pulseGreen 2s infinite;
}

.pulse-orange {
  background: var(--secondary) !important;
  box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.6) !important;
  animation: pulseOrange 2s infinite !important;
}

@keyframes pulseOrange {
  0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
  100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
}

.accent-orange-tag {
  color: var(--secondary);
  font-weight: 700;
}

.text-orange-highlight {
  color: var(--secondary) !important;
  font-weight: 800;
}

.icon-orange-glow {
  background: rgba(249, 115, 22, 0.12) !important;
  border-color: rgba(249, 115, 22, 0.3) !important;
  color: var(--secondary) !important;
}

.badge-orange {
  color: var(--secondary) !important;
  background: rgba(249, 115, 22, 0.12) !important;
}

.bar-orange {
  background: linear-gradient(to top, rgba(249, 115, 22, 0.3), var(--secondary)) !important;
}

@keyframes pulseGreen {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(52, 211, 153, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); }
}

.badge-arrow {
  font-size: 1.1rem;
  color: var(--primary-text);
}

/* Typography */
.editorial-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text);
  margin: 0;
}

.editorial-lead {
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 720px;
  margin: 0;
  font-weight: 400;
}

/* Actions */
.editorial-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.cta-magnetic {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  font-weight: 600;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  will-change: transform;
}

.cta-primary {
  color: var(--text-on-primary) !important;
  background: var(--primary) !important;
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.35);
  overflow: hidden;
}

.cta-primary:hover {
  background: var(--primary-hover) !important;
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.5);
  color: var(--text-on-primary) !important;
}

.cta-secondary {
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  color: var(--text);
}

.cta-arrow {
  font-size: 1.1rem;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-magnetic:hover .cta-arrow {
  transform: translateX(4px);
}

/* ── Interactive 3D Visual Scene ── */
.scene-3d-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  perspective: 1200px;
  margin-top: 10px;
}

.scene-3d-inner {
  position: relative;
  width: 100%;
  min-height: 380px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Floating UI Panels */
.floating-panel {
  position: absolute;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(18, 19, 24, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.floating-panel:hover {
  border-color: rgba(59, 130, 246, 0.35);
  box-shadow: 0 25px 70px rgba(59, 130, 246, 0.15);
}

/* Code Panel */
.panel-code {
  width: 480px;
  max-width: 90vw;
  top: 10px;
  left: 5%;
  z-index: 3;
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.02);
}

.window-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot-red { background: #ff5f56; }
.dot-yellow { background: #ffbd2e; }
.dot-green { background: #27c93f; }

.code-filename {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-tertiary);
}

.code-body {
  padding: 20px 24px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.6;
}

.code-body pre { margin: 0; }
.kwd { color: #f43f5e; }
.vrb { color: #38bdf8; }
.str { color: #34d399; }
.fnc { color: #a78bfa; }
.prop { color: #fb923c; }

/* AI Panel */
.panel-ai {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  top: -20px;
  right: 8%;
  z-index: 4;
}

.ai-icon-wrap {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
  border: 1px solid rgba(139, 92, 246, 0.3);
  display: grid;
  place-items: center;
  color: var(--accent-purple-text);
  font-size: 1.1rem;
}

.ai-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: left;
}

.ai-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--text);
}

.ai-status {
  font-size: 0.75rem;
  color: var(--accent-green-text);
}

/* Analytics Panel */
.panel-analytics {
  width: 240px;
  padding: 18px;
  bottom: 10px;
  right: 4%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.analytics-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.analytics-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
}

.analytics-badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-green-text);
  background: rgba(52, 211, 153, 0.1);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.analytics-graph {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  height: 50px;
}

.analytics-graph .bar {
  flex: 1;
  background: linear-gradient(to top, rgba(59, 130, 246, 0.3), var(--primary));
  border-radius: 4px;
  transition: height 0.5s ease;
}

.scene-base-glow {
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), var(--secondary), transparent);
  box-shadow: 0 0 30px var(--primary);
}

/* ── Trust Metrics Bar ── */
.hero-stats-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  padding: 24px 32px;
  border-radius: var(--radius-xl);
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(18, 19, 24, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.stat-cell {
  display: flex;
  align-items: center;
  gap: 14px;
}

.stat-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: grid;
  place-items: center;
  color: var(--primary-text);
  font-size: 1.25rem;
}

.stat-text-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat-number {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text);
  line-height: 1.1;
  font-family: var(--font-heading);
}

.stat-caption {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  font-weight: 500;
}

/* ── Minimal Scroll Indicator ── */
.scroll-indicator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}

.scroll-track-line {
  position: relative;
  width: 2px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  border-radius: 2px;
}

.scroll-pulse-dot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;
  background: linear-gradient(to bottom, var(--primary), transparent);
  animation: scrollPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

@keyframes scrollPulse {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(300%); }
}

.scroll-caption {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--text-tertiary);
}

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE BREAKPOINTS
   ═══════════════════════════════════════════════════════════════ */

@media (max-width: 991px) {
  .hero-stats-bar {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .scene-3d-inner {
    min-height: 480px;
  }

  .panel-code {
    width: 90%;
    left: 5%;
    top: 10px;
  }

  .panel-ai {
    top: 260px;
    left: 5%;
    right: auto;
  }

  .panel-analytics {
    top: 330px;
    right: 5%;
  }
}

@media (max-width: 576px) {
  .hero-section {
    padding-top: 100px;
    padding-bottom: 40px;
  }

  .editorial-actions {
    flex-direction: column;
    width: 100%;
  }

  .cta-magnetic {
    width: 100%;
  }

  .hero-stats-bar {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .scene-3d-inner {
    min-height: 440px;
  }

  .panel-code {
    width: 100%;
    left: 0;
  }

  .panel-ai {
    top: 240px;
    left: 0;
  }

  .panel-analytics {
    top: 310px;
    right: 0;
  }
}
</style>