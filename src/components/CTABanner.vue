<template>
  <section class="cta-section bg-diagonal-grid divider-line-y">
    <div class="cta-banner container">
      <div class="cta-card dark-accent-card" style="--card-accent: var(--primary);" v-scroll-reveal.scale>

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
          
          <router-link to="/contact" class="btn btn-secondary--neutral" role="button">
            <span>Talk to Admissions</span>
            <i class="bi bi-chat-dots" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.cta-section {
  padding: var(--section-padding-y) 0;
}

.cta-banner {
  padding: 0 var(--container-padding-x);
}

.cta-card {
  position: relative;
  border-radius: var(--radius-2xl);
  padding: var(--space-12) var(--space-8);
  overflow: hidden;
  z-index: 1;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
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
