<template>
  <section class="why-choose container bg-dots">
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-stars"></i>
        Why Corex
      </span>
      <h2>Why Choose <span class="text-gradient">Corex Tek-Academy?</span></h2>
      <p>
        We're not just another training program. Here's what makes the Corex experience different.
      </p>
    </div>

    <div class="features-grid">
      <article 
        class="feature-card unified-card" 
        v-for="(feature, i) in features" 
        :key="i"
        v-scroll-reveal="i + 1"
        :style="{ '--feature-color': feature.color, '--feature-bg': feature.bgColor, '--feature-border': feature.borderColor }"
      >
        <div class="icon-wrapper" :style="{ background: feature.bgColor, color: feature.color, borderColor: feature.borderColor }">
          <i class="bi" :class="feature.icon"></i>
        </div>
        <h4>{{ feature.title }}</h4>
        <p>{{ feature.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'bi-person-video3',
    title: 'Dedicated Mentorship',
    desc: 'Every student gets paired with an experienced mentor for personalized guidance, code reviews, and career coaching.',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.12)',
    borderColor: 'rgba(59, 130, 246, 0.25)',
  },
  {
    icon: 'bi-kanban',
    title: 'Project-Based Learning',
    desc: 'Build real-world applications from day one. Our curriculum is centered around practical, portfolio-worthy projects.',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.12)',
    borderColor: 'rgba(139, 92, 246, 0.25)',
  },
  {
    icon: 'bi-emoji-smile',
    title: 'Beginner-Friendly',
    desc: 'No prior experience needed. Our structured curriculum takes you from zero to confident developer step by step.',
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.12)',
    borderColor: 'rgba(6, 182, 212, 0.25)',
  },
  {
    icon: 'bi-briefcase',
    title: 'Career Support',
    desc: 'Resume building, portfolio reviews, interview prep, and job placement assistance to launch your tech career.',
    color: '#f97316',
    bgColor: 'rgba(249, 115, 22, 0.12)',
    borderColor: 'rgba(249, 115, 22, 0.25)',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Flexible Schedule',
    desc: 'Learn at your own pace with recorded sessions, live classes, and 24/7 access to course materials and support.',
    color: '#0ea5e9',
    bgColor: 'rgba(14, 165, 233, 0.12)',
    borderColor: 'rgba(14, 165, 233, 0.25)',
  },
  {
    icon: 'bi-award',
    title: 'Certificate of Completion',
    desc: 'Earn an industry-recognized certificate upon completing your program to validate your skills to employers.',
    color: '#10b981',
    bgColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
  },
]
</script>

<style scoped>
.why-choose {
  padding: var(--section-padding-y) var(--container-padding-x);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--feature-border) !important;
  box-shadow: 0 12px 32px var(--feature-bg);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid transparent;
  display: grid;
  place-items: center;
  font-size: 1.35rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 16px var(--feature-bg);
}

.feature-card:hover .icon-wrapper {
  transform: scale(1.08) rotate(3deg);
}

.feature-card h4 {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.feature-card p {
  font-size: 0.925rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 991px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .feature-card {
    padding: var(--space-6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .feature-card {
    transition: none !important;
    transform: none !important;
  }
}
</style>
