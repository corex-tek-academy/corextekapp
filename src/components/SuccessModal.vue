<script setup>
defineProps({
  show: { type: Boolean, default: false },
  type: { type: String, default: 'success' }, // 'success' | 'error'
  message: { type: String, default: '' }
})

const emit = defineEmits(['close'])
</script>

<template>
  <transition name="modal">
    <div v-if="show" class="modal-overlay" role="dialog" aria-modal="true">
      <div class="modal-card glass-panel animate-scale">
        <button class="modal-close-corner" @click="emit('close')" aria-label="Close dialog">✕</button>

        <div class="modal-icon-wrapper" :class="type">
          <i class="bi bi-patch-check-fill" v-if="type === 'success'"></i>
          <i class="bi bi-exclamation-triangle-fill" v-else></i>
        </div>

        <h3 class="modal-title">{{ type === 'success' ? 'Registration Complete!' : 'Registration Failed' }}</h3>
        <p class="modal-msg-text">{{ message }}</p>

        <button class="btn btn-modal-close" @click="emit('close')">
          Close
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 24px;
}

.modal-card {
  max-width: 440px;
  width: 100%;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  padding: 40px;
  border-radius: 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.modal-close-corner {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--text-tertiary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: all 0.2s ease;
}

.modal-close-corner:hover {
  background-color: var(--color-background-soft);
  color: var(--text);
}

.modal-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 3rem;
}

.modal-icon-wrapper.success {
  background-color: rgba(16, 185, 129, 0.08);
  color: #10b981;
}

.modal-icon-wrapper.error {
  background-color: rgba(239, 68, 68, 0.08);
  color: #ef4444;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text);
}

.modal-msg-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.btn-modal-close {
  background: var(--primary);
  color: var(--light);
  border: none;
  padding: 12px 32px;
  border-radius: 100px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}

.btn-modal-close:hover {
  background-color: var(--primary-hover);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

@media (max-width: 480px) {
  .modal-card {
    padding: 28px 20px;
    border-radius: 20px;
    margin: 0 12px;
  }
  .modal-icon-wrapper {
    width: 60px;
    height: 60px;
    font-size: 2.25rem;
  }
  .modal-title {
    font-size: 1.25rem;
  }
  .modal-msg-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 360px) {
  .modal-card {
    padding: 24px 16px;
  }
}

/* Vue Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .animate-scale {
  animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes scaleUp {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>
