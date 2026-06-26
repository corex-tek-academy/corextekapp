<script setup>
import img3 from '/src/assets/image/img3.png'
</script>

<template>
  <div class="about container">
    <div class="about-grid">
      <div class="about-img" v-scroll-reveal.left>
        <div class="img-frame">
          <img :src="img3" alt="Corex Tek-Academy students pair programming" loading="lazy">
          <div class="img-glow" aria-hidden="true"></div>
        </div>
      </div>
      
      <div class="about-text" v-scroll-reveal.right>
        <span class="badge-pill badge-pill--primary">
          <i class="bi bi-graph-up-arrow"></i>
          Accelerated Growth
        </span>
        
        <h2 class="section-title">
          Become Job-Ready. Add a 
          <span class="text-gradient">Competitive Edge</span> 
          to Your Skills.
        </h2>
        
        <p class="section-desc">
          You don't need to have it all figured out to start — you just need the right guidance and environment to grow. At Corex Tek-Academy, we provide structured learning, hands-on projects, and mentorship that help you develop in-demand skills and build confidence at every stage.
        </p>

        <div class="feature-pills">
          <div class="feature-pill">
            <i class="bi bi-check-circle-fill"></i>
            <span>Industry-relevant curriculum</span>
          </div>
          <div class="feature-pill">
            <i class="bi bi-check-circle-fill"></i>
            <span>1-on-1 mentorship sessions</span>
          </div>
          <div class="feature-pill">
            <i class="bi bi-check-circle-fill"></i>
            <span>Real-world portfolio projects</span>
          </div>
        </div>

        <div class="cta-wrapper">
          <router-link to="/enrollment" class="btn btn-primary" role="button">
            <span>Start Learning</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: var(--section-padding-y) var(--container-padding-x);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-16);
  align-items: center;
}

/* Image */
.about-img {
  position: relative;
}

.img-frame {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(59, 130, 246, 0.06);
}

.img-frame img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.7s var(--ease-out-expo);
}

.img-frame:hover img {
  transform: scale(1.04);
}

.img-glow {
  position: absolute;
  bottom: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%);
  pointer-events: none;
  z-index: -1;
}

/* Text Block */
.about-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-5);
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.15;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.section-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
}

/* Feature check pills */
.feature-pills {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.feature-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.925rem;
  font-weight: 500;
  color: var(--text-secondary);
}

.feature-pill i {
  color: var(--accent-green);
  font-size: 1rem;
  flex-shrink: 0;
}

/* CTA */
.cta-wrapper {
  margin-top: var(--space-4);
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
  cursor: pointer;
  transition: all 0.3s var(--ease-out-expo);
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: var(--primary-gradient);
  color: var(--text-on-primary);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
}

.btn-primary::after {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  background: var(--primary-gradient);
  opacity: 0;
  filter: blur(14px);
  z-index: -1;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(59, 130, 246, 0.3);
  color: var(--text-on-primary);
}

.btn-primary:hover::after {
  opacity: 0.4;
}

.btn-primary i {
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-primary:hover i {
  transform: translateX(4px);
}

/* Responsive */
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  
  .img-frame {
    max-width: 500px;
  }
}

@media (max-width: 576px) {
  .about {
    padding: var(--space-16) var(--container-padding-x);
  }

  .about-text {
    align-items: center;
    text-align: center;
  }

  .feature-pills {
    align-items: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .img-frame:hover img {
    transform: none !important;
  }
}
</style>