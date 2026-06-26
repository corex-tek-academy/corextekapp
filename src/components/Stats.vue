<script setup>
import { ref, onMounted } from 'vue'

const stats = ref([
  { value: 0, target: 500, suffix: '+', label: 'Students Trained', icon: 'bi-people-fill', color: 'rgba(59, 130, 246, 0.4)' },
  { value: 0, target: 95, suffix: '%', label: 'Completion Rate', icon: 'bi-check-circle-fill', color: 'rgba(16, 185, 129, 0.4)' },
  { value: 0, target: 10, suffix: '+', label: 'Tech Programs', icon: 'bi-mortarboard-fill', color: 'rgba(139, 92, 246, 0.4)' },
  { value: 0, target: 50, suffix: '+', label: 'Projects Built', icon: 'bi-code-slash', color: 'rgba(249, 115, 22, 0.4)' },
])

const hasAnimated = ref(false)

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
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  })
}

onMounted(() => {
  const el = document.querySelector('.stats-section')
  if (!el) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters()
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.3 })
  io.observe(el)
})
</script>

<template>
  <section class="stats-section container">
    <div class="stats-grid">
      <div 
        class="stat-card box-3d-extruded" 
        v-for="(stat, i) in stats" 
        :key="i"
        :style="{ '--card-accent': stat.color }"
        v-scroll-reveal="i + 1"
      >
        <div class="stat-icon">
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
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: rgba(59, 130, 246, 0.06);
  color: var(--primary-text);
  display: grid;
  place-items: center;
  font-size: 1.25rem;
  flex-shrink: 0;
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
