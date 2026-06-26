<script setup>
import { ref } from 'vue'
import img from '/src/assets/image/img1.png'

const email = ref('')
const submitted = ref(false)
const isSubmitting = ref(false)

async function handleSubmit(e) {
  if (!email.value) return
  
  isSubmitting.value = true
  
  // Simulate API post call (compatible with Netlify AJAX or custom backend)
  try {
    const formData = new FormData()
    formData.append('form-name', 'newsletter')
    formData.append('email', email.value)
    
    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    
    submitted.value = true
    email.value = ''
    setTimeout(() => submitted.value = false, 5000)
  } catch (error) {
    console.error('Newsletter submission failed:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="contact container">
    <div class="contact_inner glass-panel-dark">
      <div class="contact_text">
        <span class="badge-pill badge-pill-dark">
          <i class="bi bi-envelope-open-fill"></i>
          Stay Connected
        </span>
        
        <h1>Get updates and happenings at Corex Tek-Academy</h1>
        <p>Subscribe to our newsletter to receive regular updates, free workshop invites, and announcements about our programs.</p>
        
        <form name="newsletter" class="newsletter-form" @submit.prevent="handleSubmit" novalidate>
          <label for="newsletter-email" class="sr-only">Email address</label>
          <div class="form-row">
            <input 
              id="newsletter-email"
              type="email" 
              name="email" 
              v-model="email" 
              placeholder="Enter your email address" 
              required 
            />
            <button type="submit" class="btn-subscribe" :disabled="isSubmitting">
              <span v-if="isSubmitting">
                <i class="bi bi-arrow-clockwise animate-spin"></i>
                Subscribing...
              </span>
              <span v-else>
                <span>Subscribe</span>
                <i class="bi bi-send-fill"></i>
              </span>
            </button>
          </div>
          <transition name="fade">
            <p class="subscribe-msg" v-if="submitted">
              <i class="bi bi-patch-check-fill"></i>
              Thanks! We've received your subscription.
            </p>
          </transition>
        </form>
      </div>
      
      <div class="contact_img" aria-hidden="true">
        <div class="image-wrapper">
          <img :src="img" alt="Corex Tek-Academy tech workspace illustration">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding: 80px 24px 0 24px;
}

.contact_inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  padding: 60px;
  border-radius: 28px;
  background: linear-gradient(135deg, #090d16 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Decorative glowing radial blob */
.contact_inner::after {
  content: '';
  position: absolute;
  bottom: -150px;
  right: -150px;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.contact_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
}

.badge-pill-dark {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--light);
}

.contact_text h1 {
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  line-height: 1.2;
  font-weight: 800;
  color: var(--light);
}

.contact_text p { 
  color: var(--text-dark-muted);
  font-size: 0.975rem;
  line-height: 1.6;
  max-width: 52ch;
}

/* Newsletter Form styling */
.newsletter-form {
  width: 100%;
  margin-top: 8px;
}

.form-row {
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 500px;
}

.newsletter-form input[type="email"] {
  flex: 1;
  padding: 14px 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--light);
  font-family: inherit;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-form input::placeholder { 
  color: var(--text-dark-muted); 
}

.newsletter-form input:focus {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.btn-subscribe {
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  background: var(--light);
  color: var(--bg-dark);
  font-weight: 700;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-subscribe:hover:not(:disabled) {
  background: var(--primary);
  color: var(--light);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
}

.btn-subscribe:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Spinner animation */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  display: inline-block;
  animation: spin 1s linear infinite;
}

.subscribe-msg {
  margin-top: 12px;
  color: var(--accent-green);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
}

/* Image container styling */
.contact_img {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
  object-fit: cover;
  opacity: 0.85;
}

/* Responsive configurations */
@media (max-width: 991px) {
  .contact_inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 32px;
  }
  
  .contact_img {
    display: none; /* Hide illustrative image on tablet/mobile to keep layout clean */
  }

  .form-row {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .contact {
    padding: 60px 16px 0 16px;
  }

  .contact_inner {
    padding: 32px 20px;
    border-radius: 20px;
  }

  .form-row {
    flex-direction: column;
    gap: 12px;
  }

  .btn-subscribe {
    width: 100%;
  }
}

/* Accessibility settings */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>