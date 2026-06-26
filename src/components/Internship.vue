<script setup>
import img2 from '/src/assets/image/img2.png'
</script>

<template>
  <div class="container internship">
    <div class="internship-grid">
      <div class="internship-text" v-scroll-reveal.left>
        <span class="badge-pill badge-pill--teal">
          <i class="bi bi-briefcase-fill"></i>
          Enrollment Now Open
        </span>
        
        <h2 class="section-title">
          Break Into Tech As a 
          <span class="text-gradient-secondary">Front-End Developer.</span>
        </h2>
        
        <p class="section-desc">
          Corex Tek-Academy is now accepting students for Cohort 1! If you are a beginner and ready to upskill, learn from scratch, and build real production-grade projects, this program is custom-tailored for you.
        </p>

        <div class="program-meta">
          <div class="meta-item">
            <i class="bi bi-clock"></i>
            <span>8 Weeks Duration</span>
          </div>
          <div class="meta-item">
            <i class="bi bi-people"></i>
            <span>Small Class Sizes</span>
          </div>
          <div class="meta-item">
            <i class="bi bi-laptop"></i>
            <span>100% Online</span>
          </div>
        </div>
        
        <div class="cta-wrapper">
          <router-link to="/enrollment" class="btn btn-primary" role="button">
            <span>Join Cohort 1</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    
      <div class="internship-img" v-scroll-reveal.right>
        <div class="img-frame box-3d-extruded" style="--card-accent: rgba(13, 148, 136, 0.55);" aria-hidden="true">
          <img :src="img2" alt="Corex student working on frontend code" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.internship {
  padding: var(--section-padding-y) var(--container-padding-x);
}

.internship-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

/* Text */
.internship-text {
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

/* Program metadata pills */
.program-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 8px 14px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
}

.meta-item i {
  color: var(--accent-teal);
  font-size: 0.95rem;
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
  background: var(--secondary-gradient);
  color: var(--text-on-primary);
  box-shadow: 0 8px 24px rgba(13, 148, 136, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(13, 148, 136, 0.3);
  color: var(--text-on-primary);
}

.btn-primary i {
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-primary:hover i {
  transform: translateX(4px);
}

/* Image */
.internship-img {
  position: relative;
}

.img-frame {
  border-radius: var(--radius-xl);
  overflow: hidden;
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

/* Responsive */
@media (max-width: 900px) {
  .internship-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .img-frame {
    max-width: 500px;
  }
}

@media (max-width: 576px) {
  .internship-text {
    align-items: center;
    text-align: center;
  }

  .program-meta {
    justify-content: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .img-frame:hover img {
    transform: none !important;
  }
}
</style>