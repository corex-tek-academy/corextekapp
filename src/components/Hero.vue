<script setup>
import { ref, onMounted } from 'vue'

// Animated counter logic
const stats = ref([
  { value: 0, target: 500, suffix: '+', label: 'Students Enrolled' },
  { value: 0, target: 10, suffix: '+', label: 'Programs' },
  { value: 0, target: 95, suffix: '%', label: 'Completion Rate' },
])

onMounted(() => {
  // Animate counters
  stats.value.forEach((stat, index) => {
    const duration = 2000
    const startTime = performance.now() + (index * 200)
    
    function animate(currentTime) {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      stat.value = Math.round(eased * stat.target)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  })
})
</script>

<template>
  <section class="hero" aria-labelledby="hero-heading">
    <!-- Premium Elevated Background Effects -->
    <div class="hero-bg" aria-hidden="true">
      <!-- Original Brand Colors - Floating Orbs -->
      <div class="gradient-orb brand-blue orb-1"></div>
      <div class="gradient-orb brand-teal orb-2"></div>
      <div class="gradient-orb brand-purple orb-3"></div>
      
      <!-- Liquid Animated Aurora Mesh -->
      <div class="aurora-mesh"></div>
      
      <!-- Light Ray Effect -->
      <div class="light-ray"></div>
      
      <!-- Premium Grid Overlay -->
      <div class="grid-overlay"></div>
      
      <!-- Floating Glowing Particles -->
      <div class="particles-container">
        <div class="particle p-1"></div>
        <div class="particle p-2"></div>
        <div class="particle p-3"></div>
        <div class="particle p-4"></div>
        <div class="particle p-5"></div>
      </div>
    </div>

    <div class="container hero-inner">
      <!-- Main Content — Centered Layout -->
      <div class="hero-content">
        <div class="badge-wrapper" v-scroll-reveal>
          <span class="hero-badge">
            <span class="badge-dot"></span>
            <span>Cohort 1 Now Enrolling</span>
            <i class="bi bi-arrow-right-short"></i>
          </span>
        </div>
        
        <h1 id="hero-heading" class="hero-title" v-scroll-reveal="1">
          Build Real Tech Skills.
          <span class="text-gradient-vibrant">Launch Your Career</span>
          with Confidence.
        </h1>
            
        <p class="hero-lead" v-scroll-reveal="2">
          Corex Tek-Academy delivers mentor-led, project-based training designed to help 
          aspiring professionals gain practical, in-demand skills and job readiness.
        </p>

        <div class="hero-actions" v-scroll-reveal="3">
          <router-link to="/enrollment" class="btn btn-primary" role="button">
            <span>Join Cohort 1</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
          
          <router-link to="/enrollment" class="btn btn-secondary">
            <span>Explore Programs</span>
            <i class="bi bi-chevron-right" aria-hidden="true"></i>
          </router-link>
        </div>

        <!-- Trust Stats -->
        <div class="hero-stats" v-scroll-reveal="4">
          <div 
            class="stat-item" 
            v-for="(stat, i) in stats" 
            :key="i"
          >
            <span class="stat-value">{{ stat.value }}{{ stat.suffix }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <!-- Floating Tech Cards -->
      <div class="floating-cards" aria-hidden="true" v-scroll-reveal.scale="5">
        <div class="float-card card-code animate-float">
          <div class="float-card-icon">
            <i class="bi bi-code-slash"></i>
          </div>
          <span>Full-Stack Dev</span>
        </div>

        <div class="float-card card-ai animate-float-delayed">
          <div class="float-card-icon icon-purple">
            <i class="bi bi-cpu"></i>
          </div>
          <span>AI & ML</span>
        </div>

        <div class="float-card card-cloud animate-float" style="animation-delay: 0.5s;">
          <div class="float-card-icon icon-cyan">
            <i class="bi bi-cloud-check"></i>
          </div>
          <span>Cloud Computing</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator" aria-hidden="true" v-scroll-reveal="6">
      <div class="scroll-mouse">
        <div class="scroll-dot"></div>
      </div>
      <span>Scroll to explore</span>
    </div>
  </section>
</template>

<style scoped>
/* ═══ Hero Section ═══ */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0 80px;
  position: relative;
  overflow: hidden;
}

/* ── Background Effects (Preserving brand gradient identity) ── */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-color: var(--color-background);
  /* The original gradient background feeling integrated as a base */
  background: 
    radial-gradient(circle at 10% 10%, rgba(2, 86, 255, 0.05) 0%, transparent 35%),
    radial-gradient(circle at 90% 90%, rgba(1, 156, 154, 0.05) 0%, transparent 30%);
}

/* Glowing orbs using original brand colors: Blue (#0256ff) and Teal (#019c9a) */
.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.55;
  will-change: transform;
}

.brand-blue {
  background: radial-gradient(circle, rgba(2, 86, 255, 0.18) 0%, rgba(2, 86, 255, 0.04) 50%, transparent 75%);
}

.brand-teal {
  background: radial-gradient(circle, rgba(1, 156, 154, 0.15) 0%, rgba(1, 156, 154, 0.03) 50%, transparent 75%);
}

.brand-purple {
  background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.01) 50%, transparent 75%);
}

.orb-1 {
  width: 800px;
  height: 800px;
  top: -20%;
  left: -10%;
  animation: blobDrift 24s ease-in-out infinite;
}

.orb-2 {
  width: 700px;
  height: 700px;
  top: 15%;
  right: -15%;
  animation: blobDrift 28s ease-in-out 3s infinite reverse;
}

.orb-3 {
  width: 500px;
  height: 500px;
  bottom: -10%;
  left: 25%;
  animation: blobDrift 22s ease-in-out 6s infinite;
}

/* Liquid animated aurora mesh overlay */
.aurora-mesh {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(2, 86, 255, 0.01) 0%, rgba(1, 156, 154, 0.01) 50%, rgba(139, 92, 246, 0.01) 100%);
  background-size: 200% 200%;
  animation: auroraShift 20s ease infinite;
  opacity: 0.8;
}

@keyframes auroraShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Subtle Shimmering Light Ray */
.light-ray {
  position: absolute;
  top: -30%;
  left: -20%;
  width: 150%;
  height: 60%;
  background: linear-gradient(60deg, transparent 40%, rgba(2, 86, 255, 0.02) 48%, rgba(255, 255, 255, 0.07) 50%, rgba(1, 156, 154, 0.02) 52%, transparent 60%);
  transform: rotate(-12deg);
  animation: lightRayShimmer 15s ease-in-out infinite;
}

@keyframes lightRayShimmer {
  0%, 100% { transform: rotate(-12deg) translate(-50px, -50px); opacity: 0.3; }
  50% { transform: rotate(-10deg) translate(50px, 50px); opacity: 0.8; }
}

/* Grid Overlay with Glassmorphic Gradient Mask */
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(2, 86, 255, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(ellipse 65% 65% at 50% 40%, black 25%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 65% 65% at 50% 40%, black 25%, transparent 75%);
}

/* Floating particle system */
.particles-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: floatParticle 16s ease-in-out infinite;
}

.p-1 { width: 6px; height: 6px; left: 12%; top: 15%; background-color: #0256ff; animation-delay: 0s; animation-duration: 14s; }
.p-2 { width: 8px; height: 8px; left: 82%; top: 25%; background-color: #019c9a; animation-delay: 2s; animation-duration: 20s; }
.p-3 { width: 5px; height: 5px; left: 45%; top: 65%; background-color: #8b5cf6; animation-delay: 4s; animation-duration: 16s; }
.p-4 { width: 6px; height: 6px; left: 75%; top: 75%; background-color: #0256ff; animation-delay: 1s; animation-duration: 18s; }
.p-5 { width: 7px; height: 7px; left: 22%; top: 60%; background-color: #019c9a; animation-delay: 3s; animation-duration: 22s; }

@keyframes floatParticle {
  0% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 0.25;
  }
  90% {
    opacity: 0.25;
  }
  100% {
    transform: translateY(-80px) translateX(25px) scale(0.8);
    opacity: 0;
  }
}

/* ── Hero Inner Layout ── */
.hero-inner {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-16);
}

/* ── Main Content Block ── */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-6);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Animated Badge ── */
.badge-wrapper {
  margin-bottom: var(--space-2);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 6px 6px 12px;
  font-size: 0.825rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  color: var(--primary);
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.12);
  transition: all 0.3s var(--ease-out-expo);
  cursor: pointer;
}

.hero-badge:hover {
  background: rgba(59, 130, 246, 0.10);
  transform: translateY(-1px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-green);
  animation: pulseGlow 2s ease-in-out infinite;
  flex-shrink: 0;
}

.hero-badge i {
  font-size: 1.1rem;
  transition: transform 0.2s ease;
}

.hero-badge:hover i {
  transform: translateX(2px);
}

/* ── Title ── */
.hero-title {
  font-size: clamp(2.75rem, 5.5vw, 4.25rem);
  line-height: 1.08;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.03em;
  margin: 0;
}

/* ── Lead Paragraph ── */
.hero-lead {
  font-size: clamp(1.05rem, 1.5vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 650px;
  line-height: 1.7;
  margin: 0;
}

/* ── CTA Buttons ── */
.hero-actions {
  display: flex;
  gap: var(--space-4);
  margin-top: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.95rem;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary-gradient);
  color: var(--text-on-primary);
}

.btn-primary:hover {
  transform: translateY(-3px);
  color: var(--text-on-primary);
}

.btn-primary i {
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-primary:hover i {
  transform: translateX(4px);
}

.btn-secondary {
  background: var(--color-surface);
  color: var(--text);
  border: 1px solid var(--color-border);
}

.btn-secondary:hover {
  transform: translateY(-3px);
  border-color: var(--color-border-hover);
  color: var(--text);
}

.btn-secondary i {
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-secondary:hover i {
  transform: translateX(3px);
}

/* ── Trust Stats ── */
.hero-stats {
  display: flex;
  gap: var(--space-10);
  margin-top: var(--space-8);
  padding-top: var(--space-8);
  border-top: 1px solid rgba(59, 130, 246, 0.08);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  font-weight: 500;
  letter-spacing: 0.01em;
}

/* ── Floating Tech Cards ── */
.floating-cards {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 120px;
  margin-top: var(--space-4);
}

.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: linear-gradient(135deg, rgba(24, 25, 32, 0.65), rgba(12, 12, 14, 0.45));
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    1px 1px 0px rgba(255, 255, 255, 0.05),
    2px 2px 0px var(--card-accent, rgba(59, 130, 246, 0.2)),
    3px 3px 0px var(--card-accent, rgba(59, 130, 246, 0.2)),
    4px 4px 12px rgba(0, 0, 0, 0.4);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  transition: transform 0.4s var(--ease-out-expo), box-shadow 0.4s var(--ease-out-expo), border-color 0.3s ease;
  overflow: hidden;
}

.float-card::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: 1;
}

.float-card:hover {
  transform: translateY(-6px) translate3d(-3px, -3px, 10px) !important;
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    1px 1px 0px rgba(255, 255, 255, 0.1),
    2px 2px 0px var(--card-accent),
    4px 4px 0px var(--card-accent),
    6px 6px 0px var(--card-accent),
    8px 8px 0px var(--card-accent),
    12px 12px 24px rgba(0, 0, 0, 0.5);
}

.float-card-icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  background: rgba(59, 130, 246, 0.08);
  color: var(--primary-text);
  display: grid;
  place-items: center;
  font-size: 1.1rem;
}

.float-card-icon.icon-purple {
  background: var(--accent-purple-50);
  color: var(--accent-purple-text);
}

.float-card-icon.icon-cyan {
  background: var(--accent-cyan-50);
  color: var(--accent-cyan-text);
}

.card-code {
  left: 5%;
  top: 10px;
  --card-accent: rgba(59, 130, 246, 0.45);
}

.card-ai {
  left: 38%;
  top: 40px;
  --card-accent: rgba(139, 92, 246, 0.45);
}

.card-cloud {
  right: 5%;
  top: 5px;
  --card-accent: rgba(6, 182, 212, 0.5);
}

/* ── Scroll Indicator ── */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 0.8;
}

.scroll-indicator span {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-tertiary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.scroll-mouse {
  width: 24px;
  height: 38px;
  border: 2px solid var(--color-border);
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: center;
}

.scroll-dot {
  width: 3px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--primary);
  margin-top: 6px;
  animation: scrollBounce 2s ease-in-out infinite;
}

@keyframes scrollBounce {
  0%, 100% { 
    transform: translateY(0);
    opacity: 1;
  }
  50% { 
    transform: translateY(10px);
    opacity: 0.3;
  }
}

/* ═══ Responsive ═══ */
@media (max-width: 768px) {
  .hero {
    padding: 120px 0 80px;
    min-height: auto;
  }

  .hero-stats {
    gap: var(--space-6);
  }

  .stat-value {
    font-size: 1.4rem;
  }

  .floating-cards {
    display: none;
  }

  .scroll-indicator {
    display: none;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 110px 0 60px;
  }

  .hero-title {
    font-size: 2.25rem;
  }

  .hero-actions {
    width: 100%;
    flex-direction: column;
    gap: 12px;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-stats {
    flex-direction: column;
    gap: var(--space-4);
    align-items: center;
  }

  .stat-item {
    flex-direction: row;
    gap: 8px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .gradient-orb {
    animation: none !important;
  }
  .float-card {
    animation: none !important;
  }
}
</style>