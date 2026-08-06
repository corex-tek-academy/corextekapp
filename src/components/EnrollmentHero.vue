<script setup>
import OptimizedImage from '@/components/OptimizedImage.vue'
import img5 from '/src/assets/image/img5.png'
import img5Webp from '/src/assets/image/img5.webp'
import img5Avif from '/src/assets/image/img5.avif'
</script>

<template>
  <section class="enrollment-hero" aria-labelledby="enrollment-heading">
    <!-- Ambient Environmental Mesh Background -->
    <div class="ambient-environment" aria-hidden="true">
      <div class="mesh-gradient-aurora"></div>
      <div class="glow-orb orb-primary"></div>
      <div class="glow-orb orb-secondary"></div>
      <div class="perspective-grid-pattern"></div>
    </div>

    <div class="container hero-inner">
      <div class="hero-content">
        <span class="editorial-badge">
          <span class="pulse-ring pulse-orange"></span>
          <span class="badge-text">Cohort 1 Registration • <span class="accent-orange-tag">Feb 2026 Batch</span></span>
          <i class="bi bi-arrow-right-short badge-arrow"></i>
        </span>

        <h1 id="enrollment-heading" class="editorial-title">
          Your Tech Career Starts Here. <br />
          <span class="text-orange-highlight">Enroll Now</span> & Start Learning.
        </h1>

        <p class="editorial-lead">
          Corex Tek-Academy equips beginners with hands-on skills, dedicated mentorship, and real-world projects that open doors to top tech roles.
        </p>
      </div>
    </div>
  </section>

  <section class="cohort-info container">
    <div class="cohort-card glass-panel-dark">
      <div class="cohort-grid">
        <div class="cohort-visual">
          <span class="status-badge badge-orange-status">
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
              <div class="icon-circle icon-blue"><i class="bi bi-compass"></i></div>
              <div>
                <h4>Step-by-Step Guided Paths</h4>
                <p>No assumptions. We teach you from the absolute ground up, block by block.</p>
              </div>
            </div>
            <div class="why-join-item">
              <div class="icon-circle icon-orange"><i class="bi bi-folder-check"></i></div>
              <div>
                <h4>Production-Grade Projects</h4>
                <p>Work on actual apps and build a portfolio that commands recruiter attention.</p>
              </div>
            </div>
            <div class="why-join-item">
              <div class="icon-circle icon-blue"><i class="bi bi-people-fill"></i></div>
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
  position: relative;
  margin-top: 70px;
  padding: 110px 0 70px;
  overflow: hidden;
  background: var(--color-background);
}

/* Ambient Environmental Layer */
.ambient-environment {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.mesh-gradient-aurora {
  position: absolute;
  inset: -10%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 45%),
    radial-gradient(circle at 80% 30%, rgba(249, 115, 22, 0.10) 0%, transparent 40%),
    radial-gradient(circle at 50% 80%, rgba(13, 148, 136, 0.08) 0%, transparent 50%);
  filter: blur(60px);
  opacity: 0.9;
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}

.orb-primary {
  width: 400px;
  height: 400px;
  top: 5%;
  left: -5%;
  background: rgba(59, 130, 246, 0.12);
}

.orb-secondary {
  width: 400px;
  height: 400px;
  bottom: -5%;
  right: -5%;
  background: rgba(249, 115, 22, 0.10);
}

.perspective-grid-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 75%);
  -webkit-mask-image: radial-gradient(circle at 50% 40%, black 20%, transparent 75%);
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.editorial-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  color: var(--text-secondary);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.pulse-orange {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--secondary);
  box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.6);
  animation: pulseOrange 2s infinite;
}

@keyframes pulseOrange {
  0% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(249, 115, 22, 0); }
  100% { box-shadow: 0 0 0 0 rgba(249, 115, 22, 0); }
}

.accent-orange-tag {
  color: var(--secondary);
  font-weight: 700;
}

.text-orange-highlight {
  color: var(--secondary) !important;
  font-weight: 800;
}

.badge-arrow {
  font-size: 1.1rem;
  color: var(--primary-text);
}

.editorial-title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--text);
  margin: 0;
}

.editorial-lead {
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0;
}

/* Cohort Information Card */
.cohort-info {
  margin-top: -30px;
  position: relative;
  z-index: 20;
  padding: 0 24px;
}

.cohort-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  padding: 48px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
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

.badge-orange-status {
  position: absolute;
  top: 20px;
  left: 20px;
  background: var(--secondary);
  color: #ffffff;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.35);
}

.img-wrapper {
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border-light);
}

.img-wrapper :deep(img) {
  width: 100%;
  height: auto;
  display: block;
}

.cohort-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.cohort-details h2 {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text);
  margin: 0;
}

.cohort-details .description {
  font-size: 0.975rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

.why-join-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 8px;
}

.why-join-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.icon-blue {
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
  color: var(--primary);
}

.icon-orange {
  background: rgba(249, 115, 22, 0.12);
  border: 1px solid rgba(249, 115, 22, 0.25);
  color: var(--secondary);
}

.why-join-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
}

.why-join-item p {
  font-size: 0.875rem;
  color: var(--text-tertiary);
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 991px) {
  .enrollment-hero {
    padding-top: 130px;
  }
  
  .cohort-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 576px) {
  .enrollment-hero {
    padding-top: 110px;
    padding-bottom: 50px;
  }

  .cohort-card {
    padding: 24px 18px;
  }
}
</style>
