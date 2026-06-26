<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logo from '/src/assets/image/logo.png'

const isOpen = ref(false)
const isScrolled = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
  // Prevent body scroll when mobile menu is open
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function onKey(e) {
  if (e.key === 'Escape') closeMenu()
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

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
  <nav 
    class="site-nav" 
    :class="{ 'nav-scrolled': isScrolled, 'nav-open': isOpen }" 
    role="navigation" 
    aria-label="Main navigation"
  >
    <div class="nav-container">
      <a class="brand" href="/" aria-label="Corex Tek-Academy Home">
        <img :src="logo" alt="Corex logo">
      </a>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="String(isOpen)"
        aria-controls="primary-navigation"
        aria-label="Toggle navigation"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <div class="nav-menu-wrapper" :class="{ open: isOpen }">
        <ul id="primary-navigation" class="nav-list">
          <li>
            <router-link to="/" @click="closeMenu" exact-active-class="active-link">
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/enrollment" @click="closeMenu" active-class="active-link">
              <span>Enrollment</span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" @click="closeMenu" active-class="active-link">
              <span>Contact</span>
            </router-link>
          </li>
        </ul>

        <div class="cta-mobile">
          <router-link to="/enrollment" class="btn-nav-cta" @click="closeMenu">
            <span>Join Cohort 1</span>
            <i class="bi bi-arrow-right" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>

      <div class="cta-desktop">
        <router-link to="/enrollment" class="btn-nav-cta">
          <span>Join Cohort 1</span>
          <i class="bi bi-arrow-right" aria-hidden="true"></i>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* ═══ Premium Sticky Glassmorphism Nav ═══ */
.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 0;
  background: rgba(24, 25, 32, 0.4);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border-bottom: 1px solid transparent;
  z-index: 1000;
  transition: all 0.4s var(--ease-out-expo);
}

/* Scrolled: acrylic effect */
.site-nav.nav-scrolled {
  padding: 12px 0;
  background: rgba(24, 25, 32, 0.65);
  backdrop-filter: blur(28px) saturate(190%);
  -webkit-backdrop-filter: blur(28px) saturate(190%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 4px 30px rgba(0, 0, 0, 0.35);
  position: relative;
}

.site-nav.nav-scrolled::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: -1;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-x);
}

/* ── Brand ── */
.brand {
  display: inline-flex;
  align-items: center;
  transition: transform 0.3s var(--ease-out-expo);
  position: relative;
  z-index: 10;
}

.brand:hover {
  transform: scale(1.03);
}

.brand img {
  height: 38px;
  width: auto;
  display: block;
  transition: height 0.4s var(--ease-out-expo);
}

.site-nav.nav-scrolled .brand img {
  height: 34px;
}

/* ── Hamburger Toggle ── */
.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1100;
  position: relative;
}

.hamburger-box {
  width: 22px;
  height: 14px;
  display: inline-block;
  position: relative;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 22px;
  height: 2px;
  background-color: var(--text);
  position: absolute;
  border-radius: var(--radius-full);
  transition: all 0.3s var(--ease-out-expo);
}

.hamburger-inner {
  top: 6px;
}

.hamburger-inner::before {
  content: "";
  top: -6px;
  left: 0;
}

.hamburger-inner::after {
  content: "";
  bottom: -6px;
  left: 0;
  width: 16px;
}

/* Open state X morph */
.nav-open .hamburger-inner {
  background-color: transparent;
}

.nav-open .hamburger-inner::before {
  transform: rotate(45deg);
  top: 0;
  width: 22px;
}

.nav-open .hamburger-inner::after {
  transform: rotate(-45deg);
  bottom: 0;
  width: 22px;
}

/* ── Nav Menu ── */
.nav-menu-wrapper {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-list {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
}

.nav-list a {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 20px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.25s var(--ease-out-expo);
  position: relative;
}

.nav-list a:hover {
  color: var(--primary-text);
  background: rgba(59, 130, 246, 0.06);
}

/* Active Link */
.active-link {
  color: var(--primary-text) !important;
  background: rgba(59, 130, 246, 0.08) !important;
  font-weight: 600 !important;
}

/* ── CTA Button ── */
.cta-desktop {
  display: block;
}

.cta-mobile {
  display: none;
}

.btn-nav-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  font-size: 0.875rem;
  font-weight: 600;
  background: var(--primary-gradient);
  border: none;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.25);
  transition: all 0.3s var(--ease-out-expo);
  color: var(--text-on-primary);
  position: relative;
  overflow: hidden;
}

/* Glow effect on hover */
.btn-nav-cta::after {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: var(--primary-gradient);
  opacity: 0;
  filter: blur(12px);
  transition: opacity 0.3s ease;
  z-index: -1;
}

.btn-nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.35);
  color: var(--text-on-primary);
}

.btn-nav-cta:hover::after {
  opacity: 0.5;
}

.btn-nav-cta i {
  transition: transform 0.25s var(--ease-out-expo);
  font-size: 1rem;
}

.btn-nav-cta:hover i {
  transform: translateX(3px);
}

/* ═══ Responsive: Mobile ═══ */
@media (max-width: 850px) {
  .site-nav {
    padding: 14px 0;
  }

  .site-nav.nav-scrolled {
    padding: 10px 0;
  }

  .menu-toggle {
    display: inline-block;
  }

  .cta-desktop {
    display: none;
  }

  .cta-mobile {
    display: block;
    width: 100%;
    margin-top: 16px;
    padding: 0 4px;
  }

  .cta-mobile .btn-nav-cta {
    width: 100%;
    justify-content: center;
    padding: 14px;
    font-size: 0.95rem;
  }

  .nav-menu-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 320px;
    max-width: 85vw;
    background: rgba(24, 25, 32, 0.98);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-left: 1px solid var(--color-border);
    padding: 80px 24px 32px;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    box-shadow: -20px 0 60px rgba(0, 0, 0, 0.08);
    transition: transform 0.4s var(--ease-out-expo),
                opacity 0.4s var(--ease-out-expo);
    z-index: 1050;
  }

  .nav-menu-wrapper.open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-list {
    flex-direction: column;
    align-items: stretch;
    background: none;
    border: none;
    padding: 0;
    gap: 4px;
    border-radius: 0;
  }

  .nav-list a {
    padding: 14px 16px;
    border-radius: var(--radius-sm);
    width: 100%;
    font-size: 1rem;
  }

  .nav-list a:hover {
    background: rgba(59, 130, 246, 0.05);
  }
}

/* Keyboard accessibility */
a:focus-visible, button:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 3px;
}
</style>