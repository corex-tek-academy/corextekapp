<template>
  <div class="enrollment-page">
    <EnrollmentHero />

    <Suspense>
      <template #default>
        <RegistrationForm
          @register-success="onRegisterSuccess"
          @register-error="onRegisterError"
        />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>

    <!-- Academy Introductory Video -->
    <section class="video-section container">
      <div class="video-wrapper glass-panel">
        <h2 class="video-heading">Corex Tek-Academy Walkthrough</h2>
        <p class="video-sub">Watch this short introductory video to learn more about our student experience and cohort structure.</p>
        <div class="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/ScMzIvxBSi4"
            title="Corex Tek-Academy Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Student Testimonials -->
    <section class="testimonials-dock">
      <Suspense>
        <template #default>
          <Testimonial />
        </template>
        <template #fallback>
          <PageLoader />
        </template>
      </Suspense>
    </section>

    <Suspense>
      <template #default>
        <SuccessModal
          :show="showModal"
          :type="modalType"
          :message="modalMessage"
          @close="closeModal"
        />
      </template>
      <template #fallback>
        <PageLoader />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'
import PageLoader from '@/components/PageLoader.vue'

// Critical components - statically imported for instant render
import EnrollmentHero from '@/components/EnrollmentHero.vue'

// Non-critical components - lazy loaded for better performance
const RegistrationForm = defineAsyncComponent(() => import('@/components/RegistrationForm.vue'))
const Testimonial = defineAsyncComponent(() => import('@/components/Testimonial.vue'))
const SuccessModal = defineAsyncComponent(() => import('@/components/SuccessModal.vue'))

const showModal = ref(false)
const modalType = ref('success')
const modalMessage = ref('')

function onRegisterSuccess() {
  modalType.value = 'success'
  modalMessage.value = 'Your registration for Corex Tek-Academy Cohort 1 was submitted successfully! 🎉 Our admissions team will review your payment evidence and contact you via email/WhatsApp shortly.'
  showModal.value = true
}

function onRegisterError(message) {
  modalType.value = 'error'
  modalMessage.value = message
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<style scoped>
.enrollment-page {
  background: var(--color-background-soft);
  min-height: 100vh;
  padding-bottom: 80px;
}

/* Video walkthrough section */
.video-section {
  margin-top: 80px;
  padding: 0 24px;
}

.video-wrapper {
  max-width: 960px;
  margin: 0 auto;
  background: var(--color-surface);
  padding: 48px;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
}

.video-heading {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text);
}

.video-sub {
  color: var(--text-secondary);
  max-width: 600px;
  font-size: 0.975rem;
  margin-bottom: 8px;
}

.iframe-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-border);
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.testimonials-dock {
  margin-top: 40px;
}

@media (max-width: 480px) {
  .video-wrapper {
    padding: 24px 16px;
  }
  .video-heading {
    font-size: 1.4rem;
  }
}
</style>
