<template>
  <div class="page-loader" role="status" aria-live="polite">
    <div class="loader-content">
      <!-- Gradient ring spinner -->
      <div class="loader-ring">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#3b82f6" />
              <stop offset="50%" stop-color="#8b5cf6" />
              <stop offset="100%" stop-color="#06b6d4" />
            </linearGradient>
          </defs>
          <circle 
            cx="32" cy="32" r="28" 
            fill="none" 
            stroke="url(#loaderGrad)" 
            stroke-width="3" 
            stroke-linecap="round"
            stroke-dasharray="120 60"
            class="spinner-circle"
          />
        </svg>
      </div>

      <!-- Brand shimmer bar -->
      <div class="shimmer-bar">
        <div class="shimmer-fill"></div>
      </div>

      <p class="loading-text">
        <span>C</span><span>O</span><span>R</span><span>E</span><span>X</span>
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  background: var(--color-background);
  display: grid;
  place-items: center;
  z-index: 9999;
}

.loader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* Gradient spinning ring */
.loader-ring {
  width: 56px;
  height: 56px;
  animation: loaderSpin 1.2s linear infinite;
}

.loader-ring svg {
  width: 100%;
  height: 100%;
}

.spinner-circle {
  transform-origin: center;
}

@keyframes loaderSpin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Shimmer progress bar */
.shimmer-bar {
  width: 120px;
  height: 3px;
  border-radius: var(--radius-full);
  background: rgba(59, 130, 246, 0.08);
  overflow: hidden;
}

.shimmer-fill {
  width: 40%;
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--primary-gradient);
  animation: shimmer 1.4s ease-in-out infinite;
}

@keyframes shimmer {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(400%); }
}

/* Staggered letter reveal */
.loading-text {
  font-family: var(--font-heading);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--text-tertiary);
  display: flex;
  gap: 2px;
}

.loading-text span {
  display: inline-block;
  animation: letterPulse 1.5s ease-in-out infinite;
}

.loading-text span:nth-child(1) { animation-delay: 0s; }
.loading-text span:nth-child(2) { animation-delay: 0.1s; }
.loading-text span:nth-child(3) { animation-delay: 0.2s; }
.loading-text span:nth-child(4) { animation-delay: 0.3s; }
.loading-text span:nth-child(5) { animation-delay: 0.4s; }

@keyframes letterPulse {
  0%, 100% { 
    opacity: 0.4;
    transform: translateY(0);
  }
  50% { 
    opacity: 1;
    transform: translateY(-3px);
  }
}
</style>
