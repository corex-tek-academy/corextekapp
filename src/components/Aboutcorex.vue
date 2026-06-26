<template>
  <section class="aboutcorex container" id="about">
    <!-- Section Header -->
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-info-circle-fill"></i>
        Who We Are
      </span>
      <h2>About <span class="text-gradient">Corex Tek-Academy</span></h2>
      <p>
        We are a training-driven technology academy helping beginners and career-shifters unlock real digital skills through structured learning, dedicated mentorship, and hands-on project execution.
      </p>
    </div>

    <!-- Mission + Vision Grid -->
    <div class="identity-grid">
      <article class="identity-card acrylic-card" v-scroll-reveal="1">
        <div class="card-accent accent-blue"></div>
        <div class="card-icon-wrap">
          <i class="bi bi-bullseye"></i>
        </div>
        <h3>Our Mission</h3>
        <p>
          To make practical, high-quality tech education accessible through curated learning paths, real-world portfolio projects, and rigorous mentor accountability.
        </p>
      </article>
      
      <article class="identity-card acrylic-card" v-scroll-reveal="2">
        <div class="card-accent accent-purple"></div>
        <div class="card-icon-wrap icon-purple">
          <i class="bi bi-eye-fill"></i>
        </div>
        <h3>Our Vision</h3>
        <p>
          To become a trusted global launchpad for beginners to gain absolute clarity, build confidence, and transition smoothly into meaningful technology careers.
        </p>
      </article>
    </div>

    <!-- Core Values -->
    <div class="values-section" v-scroll-reveal>
      <h3 class="values-heading">Our Core Values</h3>
      <div class="values-grid">
        <article class="value-card box-3d-extruded" style="--card-accent: rgba(139, 92, 246, 0.45)" v-scroll-reveal="1">
          <div class="value-icon icon-purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
              <line x1="19.07" y1="4.93" x2="14.83" y2="9.17"></line>
              <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
              <line x1="9.17" y1="14.83" x2="4.93" y2="19.07"></line>
            </svg>
          </div>
          <h4>We Prioritize Clarity</h4>
          <p>Straightforward learning paths, transparent benchmarks, and actionable milestones custom-fit for your learning pace.</p>
        </article>

        <article class="value-card box-3d-extruded" style="--card-accent: rgba(13, 148, 136, 0.45)" v-scroll-reveal="2">
          <div class="value-icon icon-teal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h4>We Make Tech Accessible</h4>
          <p>No unnecessary jargon. No gatekeeping. Just structured clarity, supportive communication, and deep conceptual understanding.</p>
        </article>

        <article class="value-card box-3d-extruded" style="--card-accent: rgba(249, 115, 22, 0.45)" v-scroll-reveal="3">
          <div class="value-icon icon-orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </div>
          <h4>We Focus on Results</h4>
          <p>Projects, portfolios, industrial experience, and career guidance. We prepare you to solve real problems and build products.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.aboutcorex {
  padding: var(--section-padding-y) var(--container-padding-x);
  display: flex;
  flex-direction: column;
  gap: var(--space-14);
}

/* Identity Grid (Mission/Vision) */
.identity-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.identity-card {
  position: relative;
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Gradient accent line at top */
.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  z-index: 10;
}

.accent-blue {
  background: var(--primary-gradient);
}

.accent-purple {
  background: linear-gradient(135deg, #8b5cf6, #06b6d4);
}

.card-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: rgba(59, 130, 246, 0.08);
  color: var(--primary);
  display: grid;
  place-items: center;
  font-size: 1.4rem;
}

.card-icon-wrap.icon-purple {
  background: var(--accent-purple-50);
  color: var(--accent-purple);
}

.identity-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0;
}

.identity-card p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: 0.975rem;
}

/* Values Grid */
.values-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.values-heading {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--text);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.value-card {
  background: var(--color-surface);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.value-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  transition: transform 0.3s var(--ease-out-expo);
}

.value-card:hover .value-icon {
  transform: scale(1.1);
}

.value-icon svg {
  width: 24px;
  height: 24px;
}

.value-icon.icon-purple {
  background: var(--accent-purple-50);
  color: var(--accent-purple);
}

.value-icon.icon-teal {
  background: var(--accent-teal-50);
  color: var(--accent-teal);
}

.value-icon.icon-orange {
  background: var(--accent-orange-50);
  color: var(--accent-orange);
}

.value-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.value-card p {
  color: var(--text-secondary);
  font-size: 0.925rem;
  line-height: 1.65;
}

/* Responsive */
@media (max-width: 991px) {
  .identity-grid {
    grid-template-columns: 1fr;
  }
  .values-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .aboutcorex {
    gap: var(--space-10);
  }
  .identity-card {
    padding: var(--space-6);
  }
  .value-card {
    padding: var(--space-6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .value-card, .identity-card {
    transition: none !important;
    transform: none !important;
  }
}
</style>