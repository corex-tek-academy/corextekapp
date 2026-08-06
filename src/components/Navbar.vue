<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useRoute } from 'vue-router'
import logo from '/src/assets/image/logo.png'
import logoWebp from '/src/assets/image/logo.webp'
import logoAvif from '/src/assets/image/logo.avif'
import OptimizedImage from '@/components/OptimizedImage.vue'

const route = useRoute()
const isOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function onKey(e) {
  if (e.key === 'Escape') closeMenu()
}

let ticking = false
function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      isScrolled.value = window.scrollY > 20
      ticking = false
    })
    ticking = true
  }
}

// Automatically close mobile menu when navigating routes
watch(() => route.path, () => {
  closeMenu()
})

onMounted(() => {
  document.addEventListener('keydown', onKey)
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header 
    class="navbar-wrapper" 
    :class="{ 'is-scrolled': isScrolled, 'is-open': isOpen }"
  >
    <!-- Click-to-dismiss Mobile Backdrop -->
    <div 
      class="nav-backdrop" 
      :class="{ active: isOpen }" 
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <div class="container navbar-container">
      <!-- Brand Logo -->
      <router-link to="/" class="brand-link" aria-label="Corex Tek-Academy Home" @click="closeMenu">
        <div class="logo-box">
          <OptimizedImage
            :src="logo"
            :webp="logoWebp"
            :avif="logoAvif"
            alt="Corex Tek-Academy logo"
            class="brand-logo"
            loading="eager"
          />
        </div>
      </router-link>

      <!-- Desktop Navigation Pill Menu -->
      <nav class="desktop-nav" aria-label="Primary Navigation">
        <ul class="nav-links">
          <li>
            <router-link to="/" exact-active-class="active">
              <i class="bi bi-house-door-fill nav-icon"></i>
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/enrollment" active-class="active">
              <i class="bi bi-mortarboard-fill nav-icon"></i>
              <span>Enrollment</span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active">
              <i class="bi bi-chat-left-text-fill nav-icon"></i>
              <span>Contact</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Action Cluster: CTA + Hamburger Toggle -->
      <div class="header-actions">
        <router-link to="/enrollment" class="cta-btn desktop-cta">
          <span class="cta-glow"></span>
          <span class="cta-text">Join Cohort 1</span>
          <i class="bi bi-arrow-right-short cta-icon" aria-hidden="true"></i>
        </router-link>

        <button 
          class="hamburger-btn"
          @click="toggleMenu"
          :aria-expanded="String(isOpen)"
          aria-label="Toggle Navigation Menu"
        >
          <span class="bar bar-1"></span>
          <span class="bar bar-2"></span>
          <span class="bar bar-3"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer (100% Opaque Surface) -->
    <aside class="mobile-drawer" :class="{ open: isOpen }">
      <div class="drawer-header">
        <div class="drawer-brand">
          <OptimizedImage
            :src="logo"
            :webp="logoWebp"
            :avif="logoAvif"
            alt="Corex logo"
            class="drawer-logo"
          />
        </div>
        <button class="drawer-close" @click="closeMenu" aria-label="Close menu">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <!-- Cohort Trust Status Box -->
      <div class="drawer-badge">
        <span class="badge-pulse"></span>
        <span>Cohort 1 Enrolling • Starts Feb 2026</span>
      </div>

      <nav class="drawer-nav" aria-label="Mobile Navigation">
        <ul class="drawer-links">
          <li>
            <router-link to="/" exact-active-class="active" @click="closeMenu">
              <div class="link-left">
                <i class="bi bi-house-door-fill"></i>
                <span>Home</span>
              </div>
              <i class="bi bi-chevron-right arrow-indicator"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/enrollment" active-class="active" @click="closeMenu">
              <div class="link-left">
                <i class="bi bi-mortarboard-fill"></i>
                <span>Enrollment</span>
              </div>
              <i class="bi bi-chevron-right arrow-indicator"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active" @click="closeMenu">
              <div class="link-left">
                <i class="bi bi-chat-left-text-fill"></i>
                <span>Contact</span>
              </div>
              <i class="bi bi-chevron-right arrow-indicator"></i>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="drawer-footer">
        <router-link to="/enrollment" class="cta-btn drawer-cta" @click="closeMenu">
          <span>Join Cohort 1 Now</span>
          <i class="bi bi-arrow-right-short cta-icon" aria-hidden="true"></i>
        </router-link>
      </div>
    </aside>
  </header>
</template>

<style scoped>
/* ═══════════════════════════════════════════════════════════════
   $20k PROFESSIONAL NAVIGATION HEADER
   ═══════════════════════════════════════════════════════════════ */

.navbar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: padding 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar-wrapper.is-scrolled {
  padding: 10px 0;
  background: rgba(12, 12, 14, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

@media (max-width: 991px) {
  .navbar-wrapper {
    position: sticky;
    background: rgba(12, 12, 14, 0.94) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .desktop-nav,
  .desktop-cta,
  .cta-btn {
    display: none !important;
  }

  .hamburger-btn {
    display: flex;
  }
}

/* ── Container Layout ── */
.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-x);
}

/* ── Brand Logo ── */
.brand-link {
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 10;
}

.brand-link:hover {
  transform: scale(1.03);
}

.logo-box :deep(img) {
  height: 36px;
  width: auto;
  display: block;
  transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.navbar-wrapper.is-scrolled .logo-box :deep(img) {
  height: 30px;
}

/* ── Desktop Navigation Pill Menu ── */
.desktop-nav {
  display: flex;
  align-items: center;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 6px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.nav-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.nav-icon {
  font-size: 0.95rem;
  opacity: 0.7;
  transition: opacity 0.25s ease, color 0.25s ease;
}

.nav-links a:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.06);
}

.nav-links a:hover .nav-icon {
  opacity: 1;
  color: var(--primary-text);
}

.nav-links a.active {
  color: var(--text) !important;
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.18), rgba(139, 92, 246, 0.18)) !important;
  border: 1px solid rgba(59, 130, 246, 0.3);
  font-weight: 600 !important;
}

.nav-links a.active .nav-icon {
  color: var(--primary-text) !important;
  opacity: 1 !important;
}

/* ── Actions Cluster ── */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Primary CTA Button */
.cta-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 22px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff !important;
  background: var(--primary) !important;
  border: none;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.cta-btn:hover {
  transform: translateY(-2px);
  background: var(--primary-hover) !important;
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.45);
  color: #ffffff !important;
}

.cta-icon {
  font-size: 1.1rem;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.cta-btn:hover .cta-icon {
  transform: translateX(4px);
}

/* ── Custom Animated Hamburger Toggle ── */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  z-index: 2100;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.hamburger-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.bar {
  width: 18px;
  height: 2px;
  background-color: var(--text);
  border-radius: 2px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.3s ease,
              width 0.3s ease;
}

.bar-1 { transform: translateY(-4px); }
.bar-2 { transform: translateY(0); }
.bar-3 { transform: translateY(4px); }

/* Hamburger Open Morph (X) */
.navbar-wrapper.is-open .bar-1 {
  transform: translateY(2px) rotate(45deg);
}

.navbar-wrapper.is-open .bar-2 {
  opacity: 0;
  transform: scaleX(0);
}

.navbar-wrapper.is-open .bar-3 {
  transform: translateY(-2px) rotate(-45deg);
}

/* ── Mobile Click-to-dismiss Backdrop ── */
.nav-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
  z-index: 1500;
}

.nav-backdrop.active {
  opacity: 1;
  pointer-events: auto;
}

/* ── Mobile Navigation Drawer (100% Solid Opaque Panel) ── */
.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: #0d0e12 !important; /* 100% Solid Opaque Dark Surface — ZERO transparency bleed */
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 2000;
  box-shadow: -15px 0 50px rgba(0, 0, 0, 0.7);
}

.mobile-drawer.open {
  transform: translateX(0);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.drawer-logo :deep(img) {
  height: 28px;
  width: auto;
  display: block;
}

.drawer-close {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text);
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.drawer-close:hover {
  background: rgba(255, 255, 255, 0.12);
}

/* Trust status badge */
.drawer-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 600;
  color: #34d399;
}

.badge-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

/* Drawer links list */
.drawer-nav {
  flex-grow: 1;
}

.drawer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
}

.drawer-links a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-radius: var(--radius-md);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text);
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.25s ease;
}

.link-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.link-left i {
  color: var(--primary-text);
  font-size: 1.1rem;
}

.arrow-indicator {
  font-size: 0.85rem;
  color: var(--text-tertiary);
  transition: transform 0.25s ease;
}

.drawer-links a:hover,
.drawer-links a.active {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.25);
  color: var(--primary-text);
}

.drawer-links a:hover .arrow-indicator,
.drawer-links a.active .arrow-indicator {
  transform: translateX(4px);
  color: var(--primary-text);
}

.drawer-footer {
  margin-top: auto;
}

.drawer-cta {
  width: 100%;
  justify-content: center;
  padding: 14px;
  font-size: 0.95rem;
}

/* ═══════════════════════════════════════════════════════════════
   RESPONSIVE BREAKPOINTS
   ═══════════════════════════════════════════════════════════════ */

@media (max-width: 991px) {
  .desktop-nav,
  .desktop-cta,
  .cta-btn {
    display: none !important;
  }

  .hamburger-btn {
    display: flex;
  }
}

@media (max-width: 480px) {
  .navbar-wrapper {
    padding: 14px 0;
  }

  .navbar-wrapper.is-scrolled {
    padding: 10px 0;
  }

  .mobile-drawer {
    width: 100%;
    max-width: 100vw;
  }
}
</style>