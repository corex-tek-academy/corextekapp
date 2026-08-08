<script setup>
import img3 from '/src/assets/image/img3.png'
import img3Webp from '/src/assets/image/img3.webp'
import img3Avif from '/src/assets/image/img3.avif'
import OptimizedImage from '@/components/OptimizedImage.vue'
</script>

<template>
  <section class="about-section bg-dots">
    <div class="about container">
    <div class="about-grid">
      <div class="about-img" v-scroll-reveal.left>
        <div class="img-frame">
          <OptimizedImage
            :src="img3"
            :webp="img3Webp"
            :avif="img3Avif"
            alt="Corex Tek-Academy students pair programming"
            class="about-img-tag"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
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
          <span class="text-orange-highlight">Competitive Edge</span> 
          to Your Skills.
        </h2>
        
        <p class="section-desc">
          You don't need to have it all figured out to start you just need the right guidance and environment to grow. At Corex Tek-Academy, we provide structured learning, hands-on projects, and mentorship that help you develop in-demand skills and build confidence at every stage.
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
          <router-link to="/enrollment" class="btn btn-primary-orange" role="button">
            <span>Start Learning</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: var(--section-padding-y) 0;
}

.about {
  padding: var(--space-12) var(--space-12);
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
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
  color: var(--primary);
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

.btn-primary-orange {
  background: var(--secondary) !important;
  color: #ffffff !important;
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.35);
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

@media (max-width: 991px) {
  .about {
    border-radius: 0 !important;
    border-left: none !important;
    border-right: none !important;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
  
  .img-frame {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .about {
    padding: var(--space-8) var(--container-padding-x);
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