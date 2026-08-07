<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const stats = ref([
  { value: 0, target: 500, suffix: '+', label: 'Students Trained', icon: 'bi-people-fill', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.12)', borderColor: 'rgba(59, 130, 246, 0.25)' },
  { value: 0, target: 95, suffix: '%', label: 'Completion Rate', icon: 'bi-check-circle-fill', color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.25)' },
  { value: 0, target: 10, suffix: '+', label: 'Tech Programs', icon: 'bi-mortarboard-fill', color: '#8b5cf6', bgColor: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.25)' },
  { value: 0, target: 50, suffix: '+', label: 'Projects Built', icon: 'bi-code-slash', color: '#f97316', bgColor: 'rgba(249, 115, 22, 0.12)', borderColor: 'rgba(249, 115, 22, 0.25)' },
])

const hasAnimated = ref(false)
let observer = null

function animateCounters() {
  if (hasAnimated.value) return
  hasAnimated.value = true

  stats.value.forEach((stat, index) => {
    const duration = 2200
    const startTime = performance.now() + (index * 150)
    
    function animate(currentTime) {
      const elapsed = currentTime - startTime
      if (elapsed < 0) {
        requestAnimationFrame(animate)
        return
      }
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      stat.value = Math.round(eased * stat.target)
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else if (index === stats.value.length - 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.to('.stat-card', {
          boxShadow: '0 0 25px rgba(59, 130, 246, 0.25)',
          duration: 0.4,
          yoyo: true,
          repeat: 1,
          stagger: 0.1
        })
      }
    }
    requestAnimationFrame(animate)
  })
}

onMounted(() => {
  const el = document.querySelector('.stats-section')
  if (!el) return
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters()
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  observer.observe(el)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<template>
  <section class="stats-section container">
    <div class="stats-grid">
      <div 
        class="stat-card glass-panel-dark" 
        v-for="(stat, i) in stats" 
        :key="i"
        v-scroll-reveal="i + 1"
        :style="{ '--stat-color': stat.color, '--stat-bg': stat.bgColor, '--stat-border': stat.borderColor }"
      >
        <div class="stat-icon" :style="{ background: stat.bgColor, color: stat.color, borderColor: stat.borderColor }">
          <i class="bi" :class="stat.icon"></i>
        </div>
        <div class="stat-content">
          <span class="stat-number">{{ stat.value }}{{ stat.suffix }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: var(--space-12) var(--container-padding-x);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.stat-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6) var(--space-6);
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  border-color: var(--stat-border) !important;
  box-shadow: 0 12px 32px var(--stat-bg);
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid transparent;
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 16px var(--stat-bg);
}

.stat-card:hover .stat-icon {
  transform: scale(1.08) rotate(3deg);
}

.stat-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.stat-label {
  font-size: 0.825rem;
  color: var(--text-tertiary);
  font-weight: 500;
}

@media (max-width: 991px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

</style>
