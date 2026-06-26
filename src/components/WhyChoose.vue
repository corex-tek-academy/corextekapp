<template>
  <section class="why-choose container bg-dots">
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--purple">
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
        class="feature-card acrylic-card" 
        v-for="(feature, i) in features" 
        :key="i"
        :style="{ '--card-accent': feature.color }"
        v-scroll-reveal="i + 1"
      >
        <div class="feature-icon" :style="{ background: feature.bgColor, color: feature.color }">
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
    color: '#60a5fa',
    bgColor: 'rgba(96, 165, 250, 0.08)',
  },
  {
    icon: 'bi-kanban',
    title: 'Project-Based Learning',
    desc: 'Build real-world applications from day one. Our curriculum is centered around practical, portfolio-worthy projects.',
    color: '#a78bfa',
    bgColor: 'rgba(167, 139, 250, 0.08)',
  },
  {
    icon: 'bi-emoji-smile',
    title: 'Beginner-Friendly',
    desc: 'No prior experience needed. Our structured curriculum takes you from zero to confident developer step by step.',
    color: '#2dd4bf',
    bgColor: 'rgba(45, 212, 191, 0.08)',
  },
  {
    icon: 'bi-briefcase',
    title: 'Career Support',
    desc: 'Resume building, portfolio reviews, interview prep, and job placement assistance to launch your tech career.',
    color: '#fb923c',
    bgColor: 'rgba(251, 146, 60, 0.08)',
  },
  {
    icon: 'bi-calendar-check',
    title: 'Flexible Schedule',
    desc: 'Learn at your own pace with recorded sessions, live classes, and 24/7 access to course materials and support.',
    color: '#22d3ee',
    bgColor: 'rgba(34, 211, 238, 0.08)',
  },
  {
    icon: 'bi-award',
    title: 'Certificate of Completion',
    desc: 'Earn an industry-recognized certificate upon completing your program to validate your skills to employers.',
    color: '#34d399',
    bgColor: 'rgba(52, 211, 153, 0.08)',
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
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.feature-card:hover {
  border-color: var(--card-accent) !important;
}

.feature-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  font-size: 1.4rem;
  transition: transform 0.3s var(--ease-out-expo);
}

.feature-card:hover .feature-icon {
  transform: scale(1.1);
}

.feature-card h4 {
  font-size: 1.1rem;
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
