<script setup>
import OptimizedImage from '@/components/OptimizedImage.vue'
import img5 from '/src/assets/image/img5.png'
import img5Webp from '/src/assets/image/img5.webp'
import img5Avif from '/src/assets/image/img5.avif'
</script>

<template>
  <section class="enrollment-hero" aria-labelledby="enrollment-heading">
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="badge-pill badge-pill--primary animate-fade-in-up">
          <i class="bi bi-person-plus-fill"></i>
          Cohort 1 Registration
        </span>
        <h1 id="enrollment-heading" class="animate-fade-in-up">
          Your Tech Career Starts Here. <br />
          <span class="text-gradient">Enroll Now</span> & Start Learning.
        </h1>
        <p class="lead animate-fade-in-up">
          Corex Tek-Academy equips beginners with hands-on skills, dedicated mentorship, and real-world projects that open doors to top tech roles.
        </p>
      </div>
    </div>
  </section>

  <section class="cohort-info container">
    <div class="cohort-card glass-panel">
      <div class="cohort-grid">
        <div class="cohort-visual">
          <span class="status-badge">
            <i class="bi bi-calendar-event-fill"></i>
            Starts Feb 9, 2026
          </span>
          <div class="img-wrapper">
            <OptimizedImage
              :src="img5"
              :webp="img5Webp"
              :avif="img5Avif"
              alt="Corex Tek-Academy class onboarding representation"
            />
          </div>
        </div>
        <div class="cohort-details">
          <h2>Why Join Cohort 1?</h2>
          <p class="description">
            Corex Tek-Academy Cohort 1 is a beginner-friendly web development program that takes you from zero programming experience to real-world career readiness. Through structured lessons, hands-on portfolio development, and personal mentorship, you will build strong foundations, confidence, and in-demand skills.
          </p>
          <div class="why-join-list">
            <div class="why-join-item">
              <div class="icon-circle"><i class="bi bi-compass"></i></div>
              <div>
                <h4>Step-by-Step Guided Paths</h4>
                <p>No assumptions. We teach you from the absolute ground up, block by block.</p>
              </div>
            </div>
            <div class="why-join-item">
              <div class="icon-circle"><i class="bi bi-folder-check"></i></div>
              <div>
                <h4>Production-Grade Projects</h4>
                <p>Work on actual apps and build a portfolio that commands recruiter attention.</p>
              </div>
            </div>
            <div class="why-join-item">
              <div class="icon-circle"><i class="bi bi-people-fill"></i></div>
              <div>
                <h4>Industry Mentorship</h4>
                <p>Get direct support, code reviews, and career counseling from active tech pros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Hero Section */
.enrollment-hero {
  margin-top: 80px;
  padding: 80px 0;
  background: radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(13, 148, 136, 0.06) 0%, transparent 40%);
  border-bottom: 1px solid var(--color-border-light);
}

.hero-inner {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.hero-content h1 {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text);
}

.hero-content .lead {
  max-width: 680px;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Cohort Information Card */
.cohort-info {
  margin-top: -40px;
  position: relative;
  z-index: 20;
  padding: 0 24px;
}

.cohort-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 48px;
}

.cohort-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 48px;
  align-items: center;
}

.cohort-visual {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.status-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #10b981;
  color: var(--light);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.825rem;
  font-weight: 700;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cohort-visual .img-wrapper {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.03);
}

.cohort-visual :deep(img) {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.cohort-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
}

.cohort-details h2 {
  font-size: 1.85rem;
  font-weight: 800;
}

.cohort-details .description {
  color: var(--small--text);
  font-size: 0.975rem;
  line-height: 1.7;
}

.why-join-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.why-join-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary-text);
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.why-join-item h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.why-join-item p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 991px) {
  .cohort-card {
    padding: 32px;
  }
  .cohort-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .cohort-details h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .enrollment-hero {
    padding: 60px 0;
  }
  .cohort-info {
    margin-top: -20px;
  }
}

</style>
