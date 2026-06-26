<script setup>
import { ref } from 'vue'
import logo from '/src/assets/image/logo.png'

const email = ref('')
const sent = ref(false)

function subscribe(e) {
  e.preventDefault()
  if (!email.value) return
  sent.value = true
  email.value = ''
  setTimeout(() => sent.value = false, 5000)
}
</script>

<template>
  <footer class="site-footer" role="contentinfo" id="contact">
    <div class="container site-footer__inner">
      <div class="footer-brand">
        <a href="/" class="logo-link" aria-label="Corex Tek-Academy Home">
          <img :src="logo" alt="Corex logo" />
        </a>
        <p class="brand-desc">
          Corex Tek-Academy delivers hands-on tech training, dedicated mentorship, and career support to launch beginner and aspiring professionals into tech.
        </p>
        <div class="socials" aria-label="Social links">
          <a href="https://x.com/CorexTek_Acad" target="_blank" rel="noopener" aria-label="Twitter" class="social-btn twitter">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/110778439/admin/" target="_blank" rel="noopener" aria-label="LinkedIn" class="social-btn linkedin">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://web.facebook.com/profile.php?id=61585524490063" target="_blank" rel="noopener" aria-label="Facebook" class="social-btn facebook">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <div class="nav-col">
          <h4>Programs</h4>
          <ul>
            <li><router-link to="/enrollment">Front-End Development</router-link></li>
            <li><router-link to="/enrollment">Back-End Development</router-link></li>
            <li><router-link to="/enrollment">Full-Stack Development</router-link></li>
            <li><router-link to="/enrollment">Mobile App Development</router-link></li>
          </ul>
        </div>
        <div class="nav-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
      </nav>

      <div class="footer-contact">
        <h4>Get in Touch</h4>
        <address class="contact-address">
          <div class="contact-item">
            <i class="bi bi-envelope-fill text-primary"></i>
            <a href="mailto:corextekacademy@gmail.com">corextekacademy@gmail.com</a>
          </div>
          <div class="contact-item">
            <i class="bi bi-telephone-fill text-primary"></i>
            <a href="tel:+2348135711038">+234 813 5711 038</a>
          </div>
          <div class="contact-item">
            <i class="bi bi-geo-alt-fill text-primary"></i>
            <span>Abuja, Nigeria (Remote Classes)</span>
          </div>
        </address>

        <form class="footer-subscribe" @submit.prevent="subscribe" novalidate>
          <label for="footer-email" class="sr-only">Email address</label>
          <div class="subscribe-row">
            <input 
              id="footer-email" 
              type="email" 
              v-model="email" 
              placeholder="Enter your email" 
              required
            >
            <button class="btn-subscribe" type="submit" aria-label="Subscribe to newsletter">
              <span>Subscribe</span>
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
          <transition name="fade">
            <p class="subscribe-msg" v-if="sent">
              <i class="bi bi-check-circle-fill"></i>
              Thanks — we'll keep you updated.
            </p>
          </transition>
        </form>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="container bottom-inner">
        <p>© 2026 Corex Tek-Academy. All rights reserved.</p>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--bg-dark);
  color: var(--text-dark-theme);
  padding: 80px 0 0 0;
  margin-top: 100px;
  position: relative;
}

/* Elegant radial glow at the bottom-left of the footer */
.site-footer::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.site-footer__inner {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1fr;
  gap: 60px;
  align-items: start;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logo-link img {
  height: 48px;
  width: auto;
  display: block;
}

.brand-desc {
  color: var(--text-dark-muted);
  font-size: 0.925rem;
  line-height: 1.6;
  max-width: 38ch;
}

/* Social Buttons styling */
.socials {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.social-btn {
  color: var(--text-dark-theme);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.social-btn:hover {
  transform: translateY(-4px);
  color: var(--light);
}

.social-btn.twitter:hover {
  background: #1da1f2;
  border-color: #1da1f2;
  box-shadow: 0 8px 20px rgba(29, 161, 242, 0.3);
}

.social-btn.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
  box-shadow: 0 8px 20px rgba(0, 119, 181, 0.3);
}

.social-btn.facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
  box-shadow: 0 8px 20px rgba(24, 119, 242, 0.3);
}

/* Footer Navigation */
.footer-nav {
  display: flex;
  gap: 60px;
}

.nav-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.site-footer h4 {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--light);
  margin-bottom: 4px;
}

.nav-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.nav-col a {
  color: var(--text-dark-muted);
  text-decoration: none;
  font-size: 0.925rem;
  transition: all 0.2s ease;
  display: inline-block;
}

.nav-col a:hover {
  color: var(--primary);
  transform: translateX(4px);
}

/* Contact block */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-address {
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.925rem;
  color: var(--text-dark-muted);
}

.contact-item a {
  color: var(--text-dark-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: var(--primary);
}

.contact-item i {
  font-size: 1rem;
  color: var(--primary);
}

/* Newsletter Subscription */
.footer-subscribe {
  margin-top: 8px;
}

.subscribe-row {
  display: flex;
  gap: 8px;
  position: relative;
}

.subscribe-row input {
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  color: var(--light);
  font-family: inherit;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.subscribe-row input::placeholder {
  color: var(--text-dark-muted);
}

.subscribe-row input:focus {
  outline: none;
  border-color: var(--primary);
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.btn-subscribe {
  padding: 12px 18px;
  border-radius: 10px;
  border: none;
  background: var(--light);
  color: var(--bg-dark);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-subscribe:hover {
  background: var(--primary);
  color: var(--light);
  transform: translateY(-1px);
}

.btn-subscribe i {
  font-size: 0.8rem;
  transition: transform 0.25s ease;
}

.btn-subscribe:hover i {
  transform: translateX(2px);
}

.subscribe-msg {
  color: var(--accent-green);
  margin-top: 10px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}

/* Footer Bottom */
.site-footer__bottom {
  margin-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 24px 0;
}

.bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-dark-muted);
  font-size: 0.875rem;
}

.bottom-inner p {
  color: var(--text-dark-muted);
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  color: var(--text-dark-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.legal-links a:hover {
  color: var(--primary);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Styles */
@media (max-width: 991px) {
  .site-footer__inner {
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
  }
  .footer-contact {
    grid-column: 1 / -1;
    max-width: 500px;
  }
}

@media (max-width: 768px) {
  .site-footer {
    padding: 60px 0 0 0;
  }
  .site-footer__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .footer-nav {
    flex-direction: column;
    gap: 30px;
  }
  .bottom-inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  .legal-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }
}

/* Screen reader utility */
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