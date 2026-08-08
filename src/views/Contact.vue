<template>
  <div class="contact-page">
    <!-- Top Header Banner with Frosted Editorial Overlay -->
    <section class="contact-hero" aria-labelledby="contact-heading">
      <!-- Ambient Environmental Background -->
      <div class="ambient-environment" aria-hidden="true">
        <div class="mesh-gradient-aurora"></div>
        <div class="glow-orb orb-primary"></div>
        <div class="glow-orb orb-secondary"></div>
        <div class="perspective-grid-pattern"></div>
      </div>

      <div class="container hero-inner animate-fade-in-up">
        <span class="editorial-badge">
          <span class="pulse-ring pulse-blue"></span>
          <span class="badge-text">Connect With Us • <span class="accent-blue-tag">24/7 Admissions Support</span></span>
          <i class="bi bi-arrow-right-short badge-arrow"></i>
        </span>

        <h1 id="contact-heading" class="editorial-title">
          Contact Our Admissions & <br />
          <span class="text-orange-highlight">Career Advisors</span>
        </h1>

        <p class="editorial-lead">
          Have questions about our syllabus, tuition payments, schedules, or career placement? <br />
          
        </p>
      </div>
    </section>

    <!-- Form + Newsletter Grid -->
    <section class="form-news-section container">
      <div class="form-news-grid">
        <!-- Contact Form Card -->
        <div class="contact-card-wrapper glass-panel">
          <div class="card-header">
            <h2>Send a Message</h2>
            <p>Fill out the form below, and our admissions team will respond within 24 hours.</p>
          </div>
          
          <form name="contact" class="contact-form" @submit.prevent="handleContactSubmit" novalidate>
            <div class="form-row-split">
              <div class="form-group">
                <label for="contact-name" class="form-label">Full Name <span class="required">*</span></label>
                <input 
                  id="contact-name"
                  type="text" 
                  v-model="contactData.name" 
                  placeholder="e.g. John Doe" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="contact-phone" class="form-label">Phone Number <span class="required">*</span></label>
                <input 
                  id="contact-phone"
                  type="tel" 
                  v-model="contactData.phone" 
                  placeholder="e.g. +234 803 123 4567" 
                  required 
                />
              </div>
            </div>

            <div class="form-group">
              <label for="contact-email" class="form-label">Email Address <span class="required">*</span></label>
              <input 
                id="contact-email"
                type="email" 
                v-model="contactData.email" 
                placeholder="yourname@domain.com" 
                required 
              />
            </div>

            <div class="form-group">
              <label for="contact-message" class="form-label">Your Message <span class="required">*</span></label>
              <textarea 
                id="contact-message"
                rows="5" 
                v-model="contactData.message" 
                placeholder="How can we help you? Share any questions or concerns here..." 
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-submit-primary" :disabled="isSubmittingContact">
              <span v-if="isSubmittingContact">
                <i class="bi bi-arrow-clockwise animate-spin"></i>
                Sending Message...
              </span>
              <span v-else>
                <span>Send Message</span>
                <i class="bi bi-send-fill"></i>
              </span>
            </button>

            <transition name="fade">
              <div v-if="contactSubmitted" class="alert-success-box">
                <i class="bi bi-check-circle-fill"></i>
                <span>Thanks! Your message has been sent successfully. Our team will contact you shortly.</span>
              </div>
            </transition>
          </form>
        </div>

        <!-- Newsletter Subscription Column -->
        <div class="newsletter-card-wrapper glass-panel-dark">
          <div class="card-header">
            <h2>Join Our Newsletter</h2>
            <p>Stay updated with new cohort announcements, free coding workshops, webinars, and job-ready placement opportunities.</p>
          </div>

          <form name="newsletter-contact" class="newsletter-form" @submit.prevent="handleNewsletterSubmit" novalidate>
            <div class="form-group">
              <label for="news-email" class="form-label text-white">Email Address <span class="required">*</span></label>
              <input 
                id="news-email"
                type="email" 
                v-model="newsletterEmail" 
                placeholder="yourname@domain.com" 
                required 
              />
            </div>
            
            <button type="submit" class="btn btn-submit-light" :disabled="isSubmittingNewsletter">
              <span v-if="isSubmittingNewsletter">
                <i class="bi bi-arrow-clockwise animate-spin"></i>
                Subscribing...
              </span>
              <span v-else>
                <span>Subscribe Now</span>
                <i class="bi bi-chevron-right"></i>
              </span>
            </button>

            <transition name="fade">
              <div v-if="newsletterSubmitted" class="alert-success-box text-green">
                <i class="bi bi-patch-check-fill"></i>
                <span>Subscription successful! Thank you for joining our network.</span>
              </div>
            </transition>
          </form>
        </div>
      </div>
    </section>

    <!-- Info Cards Grid Section -->
    <section class="info-cards-section container">
      <div class="info-grid">
        <div class="info-card glass-panel card-call">
          <div class="icon-circle">
            <i class="bi bi-telephone-fill"></i>
          </div>
          <div class="card-body">
            <h3>Call Admissions</h3>
            <a href="tel:+2348135711038" class="info-link">(+234) 813 5711 038</a>
            <p class="desc">Mon - Fri, 9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div class="info-card glass-panel card-email">
          <div class="icon-circle">
            <i class="bi bi-envelope-fill"></i>
          </div>
          <div class="card-body">
            <h3>Email Support</h3>
            <a href="mailto:corextekacademy@gmail.com" class="info-link">corextekacademy@gmail.com</a>
            <p class="desc">Drop us a line anytime!</p>
          </div>
        </div>

        <div class="info-card glass-panel card-location">
          <div class="icon-circle">
            <i class="bi bi-geo-alt-fill"></i>
          </div>
          <div class="card-body">
            <h3>Location</h3>
            <span class="info-link text-static">Abuja, Nigeria</span>
            <p class="desc">Global Remote Classes Available</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const contactData = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const newsletterEmail = ref('')

const isSubmittingContact = ref(false)
const contactSubmitted = ref(false)

const isSubmittingNewsletter = ref(false)
const newsletterSubmitted = ref(false)

async function handleContactSubmit() {
  if (!contactData.name || !contactData.email || !contactData.phone || !contactData.message) return
  
  isSubmittingContact.value = true
  try {
    const formData = new FormData()
    formData.append('form-name', 'contact')
    formData.append('name', contactData.name)
    formData.append('email', contactData.email)
    formData.append('phone', contactData.phone)
    formData.append('message', contactData.message)

    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })

    contactSubmitted.value = true
    contactData.name = ''
    contactData.email = ''
    contactData.phone = ''
    contactData.message = ''
    
    setTimeout(() => {
      contactSubmitted.value = false
    }, 6000)
  } catch (error) {
    console.error('Admissions contact submission failed:', error)
    alert('Oops! Submission failed. Please verify your connection and try again.')
  } finally {
    isSubmittingContact.value = false
  }
}

async function handleNewsletterSubmit() {
  if (!newsletterEmail.value) return
  
  isSubmittingNewsletter.value = true
  try {
    const formData = new FormData()
    formData.append('form-name', 'newsletter')
    formData.append('email', newsletterEmail.value)

    await fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })

    newsletterSubmitted.value = true
    newsletterEmail.value = ''
    
    setTimeout(() => {
      newsletterSubmitted.value = false
    }, 6000)
  } catch (error) {
    console.error('Contact newsletter subscription failed:', error)
    alert('Oops! Subscription failed. Please try again.')
  } finally {
    isSubmittingNewsletter.value = false
  }
}
</script>

<style scoped>
.contact-page {
  background-color: var(--color-background-soft);
  min-height: 100vh;
  padding-bottom: 80px;
}

/* Contact Hero Banner */
.contact-hero {
  position: relative;
  padding: 150px 0 90px;
  overflow: hidden;
  background: var(--color-background);
  text-align: center;
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
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  max-width: 650px;
  margin: 0;
}

/* Form and Newsletter Grid */
.form-news-section {
  /* margin-top: -30px; */
  position: relative;
  z-index: 20;
  padding: 60px 24px;
}

.form-news-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.9fr;
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.contact-card-wrapper {
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  padding: 40px;
  text-align: left;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 28px;
}

.contact-card-wrapper h2 {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--primary-text);
}

.contact-card-wrapper .card-header p {
  color: var(--text-secondary);
  font-size: 0.925rem;
}

/* Contact Form Input styling */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row-split {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
}

.contact-form input,
.contact-form textarea,
.newsletter-form input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--color-border-light);
  background: var(--color-background-soft);
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text);
  outline: none;
  transition: all 0.3s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--text-tertiary);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  padding: 14px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: none;
}

.btn-submit-primary {
  background: var(--secondary) !important;
  color: var(--text-on-primary) !important;
  /* box-shadow: 0 8px 20px rgba(249, 115, 22, 0.35); */
}

.btn-submit-primary:hover:not(:disabled) {
  background: var(--secondary-hover) !important;
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(249, 115, 22, 0.5);
}

.btn-submit-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert-success-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--accent-green);
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 8px;
}

/* Newsletter Column Card */
.newsletter-card-wrapper {
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-2xl);
  color: var(--text);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.newsletter-card-wrapper h2 {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--text);
}

.newsletter-card-wrapper .card-header p {
  color: var(--text-secondary);
  font-size: 0.925rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.newsletter-form input {
  background: var(--color-background-soft);
  border-color: var(--color-border-light);
  color: var(--text);
}

.btn-submit-light {
  background: var(--secondary) !important;
  color: var(--text-on-primary) !important;
}

.btn-submit-light:hover:not(:disabled) {
  background: var(--secondary-hover) !important;
  color: var(--text-on-primary) !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.45);
}

.btn-submit-light:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.card-call .icon-circle,
.card-email .icon-circle,
.card-location .icon-circle { background-color: rgba(59, 130, 246, 0.12); color: var(--primary); }
.card-call::before,
.card-email::before,
.card-location::before { background-color: var(--primary); }

/* Info Cards Section */
.info-cards-section {
  margin-top: 60px;
  padding: 0 24px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.info-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-xl);
  padding: 32px 24px;
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  border-radius: 4px 0 0 4px;
  background-color: var(--primary);
  opacity: 0.8;
  transition: width 0.3s ease, opacity 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

.info-card:hover::before {
  width: 6px;
  opacity: 1;
}

.info-card .icon-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: rgba(59, 130, 246, 0.1);
  color: var(--primary-text);
  display: grid;
  place-items: center;
  font-size: 1.35rem;
  flex-shrink: 0;
}

.info-card .card-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.info-link {
  font-size: 0.925rem;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s ease;
}

.info-link:hover:not(.text-static) {
  color: var(--primary-text);
}

.info-link.text-static {
  cursor: default;
}

.info-card .desc {
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 991px) {
  .contact-hero {
    padding-top: 130px;
  }

  .form-news-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .contact-hero {
    padding-top: 110px;
    padding-bottom: 50px;
  }

  .contact-card-wrapper,
  .newsletter-card-wrapper {
    padding: 24px 18px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
