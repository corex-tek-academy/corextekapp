<template>
  <section class="cta-banner container">
    <div class="cta-card glass-panel-dark" v-scroll-reveal.scale>
      <!-- Background Aurora Glow -->
      <div class="cta-bg-glow" aria-hidden="true">
        <div class="orb orb-primary"></div>
        <div class="orb orb-purple"></div>
      </div>

      <div class="cta-content">
        <span class="badge-pill badge-pill-dark">
          <i class="bi bi-rocket-takeoff-fill"></i>
          Limited Cohort 1 Seats
        </span>
        <h2>Ready to Begin Your Tech Journey?</h2>
        <p>
          Join Cohort 1 at Corex Tek-Academy today. Learn from active mentors, work on production-grade projects, and build a verified career trajectory.
        </p>
        <div class="actions">
          <router-link to="/enrollment" class="btn btn-primary" role="button">
            <span>Secure Your Seat</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
          
          <router-link to="/contact" class="btn btn-secondary-dark" role="button">
            <span>Talk to Admissions</span>
            <i class="bi bi-chat-dots" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-banner {
  padding: var(--space-8) var(--container-padding-x) 0;
}

.cta-card {
  position: relative;
  background: linear-gradient(135deg, #090d16 0%, #0c1221 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-2xl);
  padding: var(--space-12) var(--space-8);
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}

/* Background glows */
.cta-bg-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.2;
}

.orb-primary {
  width: 400px;
  height: 400px;
  top: -50%;
  left: -20%;
  background: radial-gradient(circle, #3b82f6 0%, transparent 70%);
}

.orb-purple {
  width: 400px;
  height: 400px;
  bottom: -50%;
  right: -20%;
  background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
}

/* Content Layout */
.cta-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  max-width: 680px;
  margin: 0 auto;
}

.badge-pill-dark {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--light);
}

.cta-content h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--light);
  line-height: 1.15;
  margin: 0;
}

.cta-content p {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-dark-muted);
  margin: 0;
}

/* Actions buttons */
.actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
  justify-content: center;
  margin-top: var(--space-2);
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
}

.btn-primary {
  background: var(--primary-gradient);
  color: var(--text-on-primary);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.25);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(59, 130, 246, 0.35);
  color: var(--text-on-primary);
}

.btn-primary i {
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-primary:hover i {
  transform: translateX(4px);
}

.btn-secondary-dark {
  background: rgba(255, 255, 255, 0.04);
  color: var(--light);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.btn-secondary-dark:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--light);
}

@media (max-width: 576px) {
  .cta-card {
    padding: var(--space-10) var(--space-5);
    border-radius: var(--radius-xl);
  }
  
  .actions {
    width: 100%;
    flex-direction: column;
  }
  
  .actions .btn {
    width: 100%;
  }
}
</style>
