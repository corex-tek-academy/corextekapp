<template>
  <section class="learning-path container" id="syllabus">
    <!-- Section Header -->
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-bezier2"></i>
        Learning Roadmap
      </span>
      <h2>Your Path to <span class="text-gradient">Tech Mastery</span></h2>
      <p>
        We've designed a structured, project-first roadmap to take you from writing your first line of code to landing a professional software role.
      </p>
    </div>

    <!-- Timeline / Path Grid -->
    <div class="path-timeline">
      <div class="timeline-line" aria-hidden="true"></div>
      <div class="timeline-line-glow" aria-hidden="true"></div>

      <article 
        class="timeline-item" 
        v-for="(step, i) in steps" 
        :key="i"
        :class="{ 'item-left': i % 2 === 0, 'item-right': i % 2 !== 0 }"
        :style="{ '--step-color': step.color }"
        v-scroll-reveal="i + 1"
      >
        <div class="timeline-marker" :style="{ background: step.color }" aria-hidden="true">
          <i class="bi" :class="step.icon"></i>
        </div>

        <div class="timeline-card glass-card">
          <div class="card-phase" :style="{ color: step.color }">{{ step.phase }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
          <div class="skills-tags">
            <span v-for="skill in step.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    phase: 'Phase 01 — Weeks 1-2',
    title: 'Foundations & Semantic Layouts',
    desc: 'Master the building blocks of the web: HTML5 structure, semantic elements, CSS3 styling foundations, flexbox, grid layouts, and clean responsive design systems.',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox & Grid', 'Semantic markup'],
    icon: 'bi-bricks',
    color: '#60a5fa',
  },
  {
    phase: 'Phase 02 — Weeks 3-5',
    title: 'Programming Logic with JavaScript',
    desc: 'Learn logic flow, data structures, DOM manipulation, asynchronous programming, APIs, ES6+ syntax, and modular JavaScript architectures.',
    skills: ['JavaScript', 'DOM API', 'Fetch / Axios', 'ES6+', 'Async / Await'],
    icon: 'bi-braces',
    color: '#a78bfa',
  },
  {
    phase: 'Phase 03 — Weeks 6-8',
    title: 'Modern Single Page Applications',
    desc: 'Adopt reactive frontend frameworks. Component structures, state management, client-side routing, hooks, and integration with backend APIs.',
    skills: ['Vue.js / React', 'State Management', 'Vue Router', 'Component Lifecycle'],
    icon: 'bi-window-sidebar',
    color: '#2dd4bf',
  },
  {
    phase: 'Phase 04 — Weeks 9+',
    title: 'Professional Git & Production Deployment',
    desc: 'Learn version control, pull requests, collaborative merging, hosting configurations, Netlify/Vercel deployment, and SEO performance optimization.',
    skills: ['Git / GitHub', 'Netlify / Vercel', 'Web Performance', 'SEO Best Practices'],
    icon: 'bi-git',
    color: '#22d3ee',
  },
]
</script>

<style scoped>
.learning-path {
  padding: var(--section-padding-y) var(--container-padding-x);
  position: relative;
}

/* Timeline Layout */
.path-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-8) 0;
}

/* Center timeline vertical line */
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: var(--color-border-light);
  z-index: 1;
}

/* Center timeline animated vertical line glow */
.timeline-line-glow {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(96, 165, 250, 0) 0%,
    rgba(96, 165, 250, 0.8) 20%,
    rgba(167, 139, 250, 0.8) 40%,
    rgba(45, 212, 191, 0.8) 60%,
    rgba(34, 211, 238, 0.8) 80%,
    rgba(34, 211, 238, 0) 100%
  );
  z-index: 2;
  opacity: 0.6;
  overflow: hidden;
}

.timeline-line-glow::after {
  content: '';
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--primary-text), transparent);
  animation: scrollGlow 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes scrollGlow {
  0% {
    top: -120px;
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

.timeline-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
  position: relative;
  align-items: center;
}

/* Marker / Circle on the line */
.timeline-marker {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid var(--color-background);
  display: grid;
  place-items: center;
  color: var(--white);
  font-size: 1.1rem;
  box-shadow: var(--shadow-md);
  z-index: 10;
}

/* Card configuration */
.timeline-card {
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
  position: relative;
}

/* Horizontal connecting threads */
.timeline-card::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 48px;
  height: 1px;
  background: linear-gradient(to right, var(--color-border), var(--step-color), var(--color-border));
  z-index: 1;
  opacity: 0.7;
}

/* Glowing dot traveler */
.timeline-card::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--step-color);
  box-shadow: 0 0 8px var(--step-color), 0 0 16px var(--step-color);
  z-index: 2;
  opacity: 0;
}

/* Card phase label */
.card-phase {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.timeline-card p {
  font-size: 0.925rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

/* Skills tags inside cards */
.skills-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.skill-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  background: var(--color-background-soft);
  border: 1px solid var(--color-border-light);
  color: var(--text-secondary);
}

/* Stagger placement: Left vs Right items */
.item-left .timeline-card {
  grid-column: 1 / 2;
}

.item-left .timeline-card::after {
  right: -48px;
  transform: translateY(-50%);
}

.item-left .timeline-card::before {
  right: -48px;
  animation: glowPulseLeft 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.item-right .timeline-card {
  grid-column: 2 / 3;
}

.item-right .timeline-card::after {
  left: -48px;
  transform: translateY(-50%);
}

.item-right .timeline-card::before {
  left: -48px;
  animation: glowPulseRight 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes glowPulseLeft {
  0% {
    transform: translate(0, -50%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(-48px, -50%);
    opacity: 0;
  }
}

@keyframes glowPulseRight {
  0% {
    transform: translate(0, -50%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(48px, -50%);
    opacity: 0;
  }
}

/* Responsive configurations */
@media (max-width: 768px) {
  .timeline-line,
  .timeline-line-glow {
    left: 24px !important;
    transform: translateX(-50%) !important;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding-left: 56px;
    margin-bottom: var(--space-10);
  }

  .timeline-marker {
    left: 24px;
    top: 30px;
    transform: translate(-50%, -50%);
  }

  .item-left .timeline-card,
  .item-right .timeline-card {
    grid-column: 1 / -1;
  }

  /* Reset connecting threads for left alignment on mobile */
  .timeline-card::after {
    left: -32px !important;
    right: auto !important;
    width: 32px !important;
    top: 30px !important;
    transform: translateY(-50%) !important;
  }

  .timeline-card::before {
    left: -32px !important;
    right: auto !important;
    top: 30px !important;
    animation: glowPulseRightMobile 4s cubic-bezier(0.4, 0, 0.2, 1) infinite !important;
  }
}

@keyframes glowPulseRightMobile {
  0% {
    transform: translate(0, -50%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translate(32px, -50%);
    opacity: 0;
  }
}
</style>
