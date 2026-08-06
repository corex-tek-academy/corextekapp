<script setup>
import { ref } from 'vue'

const copied = ref(false)

function copyAccountNumber() {
  navigator.clipboard.writeText('6542304832').then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 3000)
  })
}
</script>

<template>
  <div class="billing-card-wrapper animate-fade-in-up">
    <div class="billing-card">
      <div class="card-chip"></div>
      <div class="card-brand">Secure Payment Details</div>

      <div class="card-details-grid">
        <div class="detail-item">
          <span class="label">REGISTRATION FEE</span>
          <span class="val fee-highlight">₦1,500</span>
        </div>
        <div class="detail-item">
          <span class="label">BANK NAME</span>
          <span class="val">MONIEPOINT</span>
        </div>
        <div class="detail-item">
          <span class="label">ACCOUNT NAME</span>
          <span class="val">OGBONNA JENNIFER .C</span>
        </div>
        <div class="detail-item account-number-col">
          <span class="label">ACCOUNT NUMBER</span>
          <div class="number-copy-wrapper">
            <span class="val number">6542304832</span>
            <button type="button" class="btn-copy" @click="copyAccountNumber" aria-label="Copy Account Number">
              <i class="bi" :class="copied ? 'bi-check-circle-fill text-success' : 'bi-copy'"></i>
              <span class="copy-tooltip" v-if="copied">Copied!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.billing-card-wrapper {
  margin-top: 12px;
}

.billing-card {
  background: linear-gradient(135deg, #090d16 0%, #172554 100%);
  color: var(--light);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid var(--glass-dark-border);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  overflow: hidden;
}

.billing-card::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  pointer-events: none;
}

.card-chip {
  width: 44px;
  height: 32px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-radius: 6px;
  position: relative;
}

.card-brand {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.card-details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: left;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item.account-number-col {
  grid-column: span 3;
  border-top: 1px solid var(--dark-inset-mid);
  padding-top: 16px;
  margin-top: 8px;
}

.detail-item .label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.detail-item .val {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--light);
}

.detail-item .fee-highlight {
  font-size: 1.15rem;
  color: #10b981;
  font-weight: 800;
}

.number-copy-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.detail-item .number {
  font-size: 1.5rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.05em;
  font-family: monospace;
}

.btn-copy {
  background: var(--dark-highlight-strong);
  border: 1px solid var(--dark-inset-mid);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--light);
  transition: all 0.2s ease;
  position: relative;
}

.btn-copy:hover {
  background: var(--dark-highlight-strong);
  color: var(--light);
}

.copy-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  background: #10b981;
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 700;
  pointer-events: none;
}

@media (max-width: 768px) {
  .billing-card-wrapper {
    grid-column: span 1;
  }
  .card-details-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  .detail-item.account-number-col {
    grid-column: span 1;
  }
  .detail-item .number {
    font-size: 1.2rem !important;
  }
}

@media (max-width: 480px) {
  .billing-card {
    padding: 24px 16px;
  }
}
</style>
