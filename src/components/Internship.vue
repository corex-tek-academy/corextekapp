<script setup>
import img2 from '/src/assets/image/img2.png'
import img2Webp from '/src/assets/image/img2.webp'
import img2Avif from '/src/assets/image/img2.avif'
import OptimizedImage from '@/components/OptimizedImage.vue'
</script>

<template>
  <div class="container internship bg-dots">
    <div class="internship-grid">
      <div class="internship-text" v-scroll-reveal.left>
        <span class="badge-pill badge-pill--primary">
          <i class="bi bi-briefcase-fill"></i>
          Enrollment Now Open
        </span>
        
        <h2 class="section-title">
          Break Into Tech As a 
          Front-End Developer.
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
          <router-link to="/enrollment" class="btn btn-primary-orange" role="button">
            <span>Join Cohort 1</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    
      <div class="internship-img" v-scroll-reveal.right>
        <div class="img-frame" aria-hidden="true">
          <OptimizedImage
            :src="img2"
            :webp="img2Webp"
            :avif="img2Avif"
            alt="Corex student working on frontend code"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.internship {
  padding: var(--space-12);
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
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
  color: var(--primary);
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

.btn-primary-orange {
  background: var(--secondary) !important;
  color: #ffffff !important;
  /* box-shadow: 0 6px 20px rgba(249, 115, 22, 0.35); */
}

.btn-primary-orange:hover {
  transform: translateY(-2px);
  background: var(--secondary-hover) !important;
  box-shadow: 0 10px 28px rgba(249, 115, 22, 0.5);
  color: #ffffff !important;
}

.btn-primary-orange i {
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-primary-orange:hover i {
  transform: translateX(4px);
}

/* Image */
.internship-img {
  position: relative;
}

.img-frame {
  position: relative;
}

.img-frame :deep(img) {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  transition: transform 0.7s var(--ease-out-expo);
}

.img-frame:hover :deep(img) {
  transform: scale(1.04);
}

/* Responsive */
@media (max-width: 991px) {
  .internship {
    border-radius: 0 !important;
    border-left: none !important;
    border-right: none !important;
  }

  .internship-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .img-frame {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .internship {
    padding: var(--space-6);
  }

  .internship-text {
    align-items: center;
    text-align: center;
  }

  .program-meta {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .internship {
    padding: var(--space-5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .img-frame:hover img {
    transform: none !important;
  }
}
</style>