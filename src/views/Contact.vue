<template>
  <div class="contact-page">
    <!-- Top Header Banner with Frosted Overlay -->
    <section class="contact-hero" aria-labelledby="contact-heading">
      <div class="hero-overlay"></div>
      <div class="container hero-inner animate-fade-in-up">
        <span class="badge-pill badge-pill--primary">
          <i class="bi bi-chat-right-text-fill"></i>
          Connect With Us
        </span>
        <h1 id="contact-heading">Contact Our Admissions</h1>
        <p class="hero-sub">
          Have questions about our syllabus, tuition payments, schedules, or career placement? <br />
          We are here to guide you along every step of your digital learning journey.
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

// Handle Contact form submit via AJAX POST for Netlify compatibility
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

// Handle Newsletter form submit via AJAX POST
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
  margin-top: 80px;
  position: relative;
  background-image: url('/src/assets/image/contact.jpg');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  text-align: center;
  color: var(--light);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(9, 13, 22, 0.9) 0%, rgba(15, 23, 42, 0.85) 100%);
  z-index: 1;
}

.hero-inner {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.contact-hero h1 {
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 800;
  color: var(--light);
  margin: 0;
  letter-spacing: -0.02em;
}

.hero-sub {
  max-width: 650px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-dark-theme);
  opacity: 0.9;
  margin: 0;
}

/* Form and Newsletter Grid */
.form-news-section {
  margin-top: -50px;
  position: relative;
  z-index: 20;
  padding: 0 24px;
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
  border: 1px solid var(--color-border);
  padding: 40px;
  text-align: left;
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
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text);
  outline: none;
  transition: all 0.3s ease;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: #94a3b8;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
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
  background: var(--primary-gradient);
  color: var(--light);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
}

.btn-submit-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.3);
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
  color: #10b981;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 8px;
}

/* Newsletter Column Card */
.newsletter-card-wrapper {
  background: linear-gradient(135deg, #090d16 0%, #0f172a 100%);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--light);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
}

.newsletter-card-wrapper h2 {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--light);
}

.newsletter-card-wrapper .card-header p {
  color: var(--text-dark-muted);
  font-size: 0.925rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.newsletter-form input {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
  color: var(--light);
}

.newsletter-form input::placeholder {
  color: var(--text-dark-muted);
}

.newsletter-form input:focus {
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.06);
}

.btn-submit-light {
  background: var(--light);
  color: var(--bg-dark);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
}

.btn-submit-light:hover:not(:disabled) {
  background: var(--primary);
  color: var(--light);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
}

.btn-submit-light:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.alert-success-box.text-green {
  color: #10b981;
  background-color: rgba(16, 185, 129, 0.05);
  border-color: rgba(16, 185, 129, 0.1);
}

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
  border: 1px solid var(--color-border);
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
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.info-card:hover::before {
  width: 6px;
  opacity: 1;
}

.info-card .icon-circle {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background-color: var(--primary-light);
  color: var(--primary-text);
  display: grid;
  place-items: center;
  font-size: 1.35rem;
  flex-shrink: 0;
}

/* Customize colors of different info card details */
.card-call .icon-circle { background-color: var(--accent-purple-50); color: var(--accent-purple-text); }
.card-call::before { background-color: var(--accent-purple-text); }
.card-email .icon-circle { background-color: var(--primary-light); color: var(--primary-text); }
.card-email::before { background-color: var(--primary-text); }
.card-location .icon-circle { background-color: var(--accent-green-50); color: var(--accent-green-text); }
.card-location::before { background-color: var(--accent-green-text); }

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

/* Spinner Rotate Keyframe */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  display: inline-block;
  animation: spin 1s linear infinite;
}

/* Responsive configurations */
@media (max-width: 991px) {
  .form-news-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 80px 0;
  }
  
  .contact-card-wrapper,
  .newsletter-card-wrapper {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .form-row-split {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .contact-hero {
    padding: 60px 0;
  }
  
  .form-news-section {
    margin-top: -30px;
    padding: 0 16px;
  }
  
  .info-cards-section {
    padding: 0 16px;
  }

  .contact-card-wrapper,
  .newsletter-card-wrapper {
    padding: 24px 16px;
  }
  
  .info-card {
    padding: 24px 16px;
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
