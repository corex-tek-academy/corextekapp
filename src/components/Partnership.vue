<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const el = document.querySelector('.sponsor-section')
  if (!el) return
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.add('in-view')
      }
    })
  }, { threshold: 0.15 })
  io.observe(el)
})
</script>

<template>
  <div class="sponsor-section container">
    <p class="sponsor-label" v-scroll-reveal>Trusted by learners building with</p>
    
    <div class="logo-marquee" role="presentation">
      <div class="marquee-track">
        <!-- Logo Set A -->
        <div class="logo-set">
          <div class="logo-item" title="Google">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path fill="currentColor" d="M12.24 10.285V13.4h6.887c-.275 1.56-1.88 4.575-6.887 4.575-4.32 0-7.84-3.57-7.84-7.975s3.52-7.975 7.84-7.975c2.46 0 4.103 1.025 5.044 1.926l2.427-2.334C17.955 2.19 15.348 1 12.24 1 6.05 1 1 6.05 1 12.24s5.05 11.24 11.24 11.24c6.458 0 10.766-4.538 10.766-10.95 0-.735-.08-1.3-.175-1.86v.015h-10.59z"/>
            </svg>
            <span class="logo-text">Google</span>
          </div>
          <div class="logo-item" title="Microsoft">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path fill="currentColor" d="M0 0h11.24v11.24H0V0zm12.76 0H24v11.24H12.76V0zM0 12.76h11.24V24H0V12.76zm12.76 0H24V24H12.76V12.76z"/>
            </svg>
            <span class="logo-text">Microsoft</span>
          </div>
          <div class="logo-item" title="GitHub">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            <span class="logo-text">GitHub</span>
          </div>
          <div class="logo-item" title="Vercel">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path fill="currentColor" d="M24 22.525H0L12 1.745z"/>
            </svg>
            <span class="logo-text">Vercel</span>
          </div>
          <div class="logo-item" title="Stripe">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path fill="currentColor" d="M13.962 7.02c0-1.077-.852-1.464-2.228-1.464-1.745 0-3.666.526-4.839 1.139L5.942 3.864c1.61-.795 3.99-1.314 6.302-1.314 4.293 0 6.945 2.052 6.945 5.864v8.326c0 1.996.398 2.87 1.054 3.447l-4.14 1.164c-.633-.678-.857-1.73-.857-2.905l.006-.443c-1.353 1.833-3.327 2.793-5.597 2.793-3.864 0-6.43-2.072-6.43-5.467 0-4.636 4.316-6.19 10.222-6.177l.515-.01v-.321zm-1.07 3.513c-2.956-.046-5.013.567-5.013 2.756 0 1.196.88 1.905 2.22 1.905 1.776 0 3.252-1.19 3.252-3.037v-1.624h-.46z"/>
            </svg>
            <span class="logo-text">Stripe</span>
          </div>
          <div class="logo-item" title="Supabase">
            <svg viewBox="0 0 24 24" class="logo-svg">
              <path fill="currentColor" d="M21.36 10.224a1.2 1.2 0 0 0-1.066-.624h-6.22l2.368-6.904a1.2 1.2 0 0 0-1.854-1.29L3.106 12.56a1.2 1.2 0 0 0 .93 2.064h6.22l-2.368 6.904a1.2 1.2 0 0 0 1.854 1.29l11.482-11.152a1.2 1.2 0 0 0 .136-1.442z"/>
            </svg>
            <span class="logo-text">Supabase</span>
          </div>
        </div>

        <!-- Logo Set B (Duplicate for seamless loop) -->
        <div class="logo-set" aria-hidden="true">
          <div class="logo-item">
            <svg viewBox="0 0 24 24" class="logo-svg"><path fill="currentColor" d="M12.24 10.285V13.4h6.887c-.275 1.56-1.88 4.575-6.887 4.575-4.32 0-7.84-3.57-7.84-7.975s3.52-7.975 7.84-7.975c2.46 0 4.103 1.025 5.044 1.926l2.427-2.334C17.955 2.19 15.348 1 12.24 1 6.05 1 1 6.05 1 12.24s5.05 11.24 11.24 11.24c6.458 0 10.766-4.538 10.766-10.95 0-.735-.08-1.3-.175-1.86v.015h-10.59z"/></svg>
            <span class="logo-text">Google</span>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 24 24" class="logo-svg"><path fill="currentColor" d="M0 0h11.24v11.24H0V0zm12.76 0H24v11.24H12.76V0zM0 12.76h11.24V24H0V12.76zm12.76 0H24V24H12.76V12.76z"/></svg>
            <span class="logo-text">Microsoft</span>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 24 24" class="logo-svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            <span class="logo-text">GitHub</span>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 24 24" class="logo-svg"><path fill="currentColor" d="M24 22.525H0L12 1.745z"/></svg>
            <span class="logo-text">Vercel</span>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 24 24" class="logo-svg"><path fill="currentColor" d="M13.962 7.02c0-1.077-.852-1.464-2.228-1.464-1.745 0-3.666.526-4.839 1.139L5.942 3.864c1.61-.795 3.99-1.314 6.302-1.314 4.293 0 6.945 2.052 6.945 5.864v8.326c0 1.996.398 2.87 1.054 3.447l-4.14 1.164c-.633-.678-.857-1.73-.857-2.905l.006-.443c-1.353 1.833-3.327 2.793-5.597 2.793-3.864 0-6.43-2.072-6.43-5.467 0-4.636 4.316-6.19 10.222-6.177l.515-.01v-.321zm-1.07 3.513c-2.956-.046-5.013.567-5.013 2.756 0 1.196.88 1.905 2.22 1.905 1.776 0 3.252-1.19 3.252-3.037v-1.624h-.46z"/></svg>
            <span class="logo-text">Stripe</span>
          </div>
          <div class="logo-item">
            <svg viewBox="0 0 24 24" class="logo-svg"><path fill="currentColor" d="M21.36 10.224a1.2 1.2 0 0 0-1.066-.624h-6.22l2.368-6.904a1.2 1.2 0 0 0-1.854-1.29L3.106 12.56a1.2 1.2 0 0 0 .93 2.064h6.22l-2.368 6.904a1.2 1.2 0 0 0 1.854 1.29l11.482-11.152a1.2 1.2 0 0 0 .136-1.442z"/></svg>
            <span class="logo-text">Supabase</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-section {
  padding: var(--space-8) var(--container-padding-x) 0;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s var(--ease-out-expo), 
              transform 0.8s var(--ease-out-expo);
}

.sponsor-section.in-view {
  opacity: 1;
  transform: translateY(0);
}

.sponsor-label {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-tertiary);
  letter-spacing: 0.02em;
  margin-bottom: var(--space-6);
}

/* Infinite Scrolling Marquee */
.logo-marquee {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  align-items: center;
  animation: scroll-left 30s linear infinite;
}

.sponsor-section.in-view .marquee-track {
  animation-play-state: running;
}

.logo-marquee:hover .marquee-track {
  animation-play-state: paused;
}

.logo-set {
  display: flex;
  align-items: center;
  gap: 56px;
  padding-right: 56px;
}

.logo-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-tertiary);
  opacity: 0.4;
  transition: all 0.3s var(--ease-out-expo);
  cursor: default;
}

.logo-item:hover {
  opacity: 0.8;
  color: var(--text-secondary);
}

.logo-svg {
  width: 22px;
  height: 22px;
}

.logo-text {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Responsive */
@media (max-width: 768px) {
  .logo-set {
    gap: 40px;
    padding-right: 40px;
  }
  .logo-svg {
    width: 18px;
    height: 18px;
  }
  .logo-text {
    font-size: 0.85rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none !important;
  }
}
</style>