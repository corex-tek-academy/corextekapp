<script setup>
const values = [
  {
    icon: 'bi-bullseye',
    title: 'Our Mission',
    desc: 'To deliver accessible, practical tech education through structured learning paths, real-world portfolio projects, and direct mentor guidance.',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.12)',
    borderColor: 'rgba(59, 130, 246, 0.25)',
  },
  {
    icon: 'bi-eye-fill',
    title: 'Our Vision',
    desc: 'To become a trusted global launchpad for beginners to gain absolute clarity, build confidence, and transition into software careers.',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.25)',
  },
  {
    icon: 'bi-shield-check',
    title: 'Core Values',
    desc: 'Structured clarity, zero gatekeeping, supportive communication, and an uncompromising focus on building real-world software.',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
  },
]
</script>

<template>
  <section class="aboutcorex-section container" id="about">
    <!-- Clean Section Header -->
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-info-circle-fill"></i>
        Who We Are
      </span>
      <h2 class="section-title">About Corex Tek-Academy</h2>
      <p class="section-desc">
        We are a training-driven technology academy helping beginners and career-shifters master real software development through structured learning, dedicated mentorship, and hands-on project execution.
      </p>
    </div>

    <!-- Clean 3-Card Grid -->
    <div class="about-grid" v-scroll-reveal>
      <article 
        class="about-card" 
        v-for="(item, i) in values" 
        :key="i"
        v-scroll-reveal="i + 1"
        :style="{ '--card-accent-color': item.color, '--card-accent-bg': item.bgColor, '--card-accent-border': item.borderColor }"
      >
        <div class="card-icon" :style="{ background: item.bgColor, color: item.color, borderColor: item.borderColor }">
          <i class="bi" :class="item.icon"></i>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════════════════
   ULTRA-CLEAN "WHO WE ARE" SECTION
   ═══════════════════════════════════════════════════════════════ */

.aboutcorex-section {
  padding: var(--section-padding-y) var(--container-padding-x);
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
  max-width: 760px;
  margin: 0 auto;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  line-height: 1.2;
  color: var(--text);
  margin: 0;
  letter-spacing: -0.025em;
}

.section-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

/* Clean 3-Card Grid */
.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.about-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-4px);
  border-color: var(--card-accent-border) !important;
  box-shadow: 0 12px 32px var(--card-accent-bg);
}

.card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid transparent;
  display: grid;
  place-items: center;
  font-size: 1.35rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px var(--card-accent-bg);
}

.about-card:hover .card-icon {
  transform: scale(1.08) rotate(3deg);
}

.about-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  line-height: 1.25;
}

.about-card p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 991px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
}

@media (max-width: 576px) {
  .about-card {
    padding: var(--space-6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-card {
    transition: none !important;
    transform: none !important;
  }
}
</style>