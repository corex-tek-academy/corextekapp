<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import logo from '/src/assets/image/logo.png'
import logoWebp from '/src/assets/image/logo.webp'
import logoAvif from '/src/assets/image/logo.avif'
import OptimizedImage from '@/components/OptimizedImage.vue'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('programs')

const navItems = [
  { name: 'Programs', sectionId: 'programs', path: '/' },
  { name: 'Mentors', sectionId: 'about', path: '/' },
  { name: 'Outcomes', sectionId: 'testimonials', path: '/' },
  { name: 'Cohorts', path: '/enrollment' },
  { name: 'Contact', path: '/contact' }
]

function handleScroll() {
  isScrolled.value = window.scrollY > 30

  // Track active section when on Home page
  if (route.path === '/') {
    const sections = ['programs', 'about', 'testimonials']
    const scrollPos = window.scrollY + 200

    for (const sec of sections) {
      const el = document.getElementById(sec)
      if (el) {
        const top = el.offsetTop
        const height = el.offsetHeight
        if (scrollPos >= top && scrollPos < top + height) {
          activeSection.value = sec
          break
        }
      }
    }
  }
}

function navigateTo(item) {
  mobileOpen.value = false

  if (item.path === '/enrollment' || item.path === '/contact') {
    activeSection.value = ''
    router.push(item.path)
    return
  }

  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => scrollToSection(item.sectionId), 150)
    })
  } else {
    scrollToSection(item.sectionId)
  }
}

function scrollToSection(id) {
  if (!id) return
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -100
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
}

function isActive(item) {
  if (item.path === '/enrollment' && route.path === '/enrollment') return true
  if (item.path === '/contact' && route.path === '/contact') return true
  if (route.path === '/' && item.sectionId === activeSection.value) return true
  return false
}

watch(() => route.path, (newPath) => {
  mobileOpen.value = false
  if (newPath !== '/') {
    activeSection.value = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="floating-nav-wrapper" :class="{ 'is-scrolled': isScrolled }">
    <div class="pill-navbar">
      <!-- Left: Logo & Brand -->
      <router-link to="/" class="brand-group" aria-label="Corex Tek-Academy Home">
        <OptimizedImage
          :src="logo"
          :webp="logoWebp"
          :avif="logoAvif"
          alt="Corex Tek-Academy logo"
          width="100"
          height="32"
          class="brand-logo-img"
          loading="eager"
        />
      </router-link>

      <!-- Center: Navigation Links (Desktop) -->
      <nav class="desktop-nav" aria-label="Main Navigation">
        <ul class="nav-links">
          <li v-for="item in navItems" :key="item.name">
            <button 
              type="button" 
              class="nav-link-btn" 
              :class="{ 'is-active': isActive(item) }"
              @click="navigateTo(item)"
            >
              <span>{{ item.name }}</span>
              <span v-if="isActive(item)" class="active-indicator"></span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Right: CTA Button & Mobile Toggle -->
      <div class="nav-right-actions">
        <router-link to="/enrollment" class="apply-btn">
          <span>Apply Now</span>
          <i class="bi bi-arrow-right arrow-icon" aria-hidden="true"></i>
        </router-link>

        <button 
          type="button" 
          class="mobile-toggle-btn"
          :class="{ 'is-open': mobileOpen }"
          @click="toggleMobile"
          aria-label="Toggle Menu"
        >
          <span class="hamburger-bar bar-1"></span>
          <span class="hamburger-bar bar-2"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <transition name="mobile-slide">
      <div v-if="mobileOpen" class="mobile-menu-drawer">
        <ul class="mobile-nav-list">
          <li v-for="item in navItems" :key="item.name">
            <button 
              type="button" 
              class="mobile-nav-link"
              :class="{ 'is-active': isActive(item) }"
              @click="navigateTo(item)"
            >
              <span>{{ item.name }}</span>
              <i class="bi bi-chevron-right mobile-arrow"></i>
            </button>
          </li>
        </ul>
        <div class="mobile-drawer-footer">
          <router-link to="/enrollment" class="mobile-apply-btn" @click="mobileOpen = false">
            <span>Apply Now</span>
            <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>


.floating-nav-wrapper {
  display: grid;
  place-items: center;
  position: fixed;
  /* top: 20px;  */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  z-index: 1000;
  width:   90%;
  padding: 14px;
  /* width: calc(100% - 32px);
  max-width: 1040px; */

  box-sizing: border-box;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), top 0.35s ease;
}

/* Scrolled state subtle elevation */
/* .floating-nav-wrapper.is-scrolled {
  top: 14px;
} */

.pill-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px;
  background: rgba(13, 14, 20, 0.78);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  box-sizing: border-box;
  width: 65%;
  box-shadow: 
    0 16px 40px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 1px 1px rgba(255, 255, 255, 0.12);
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.floating-nav-wrapper.is-scrolled .pill-navbar {
  background: rgba(10, 11, 16, 0.90);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.65),
    0 0 0 1px rgba(255, 255, 255, 0.08);
}

/* ── Brand Logo Group ── */
.brand-group {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  padding-left: 4px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.brand-group:hover {
  transform: scale(1.03);
}

.brand-logo-img,
.brand-logo-img :deep(img) {
  width: 135px;
  height: 32px;
  display: block;
  object-fit: contain;
}

/* ── Desktop Navigation Links ── */
.desktop-nav {
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link-btn {
  position: relative;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.58);
  font-family: var(--font-body);
  font-size: 0.925rem;
  font-weight: 500;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.25s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-link-btn:hover {
  color: #ffffff;
}

.nav-link-btn.is-active {
  color: #ffffff;
  font-weight: 700;
}

/* Active Glowing Indicator Bar (Blue System) */
.active-indicator {
  position: absolute;
  bottom: 0;
  left: 18%;
  width: 64%;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
  border-radius: 2px;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.7);
  animation: indicatorFadeIn 0.25s ease forwards;
}

@keyframes indicatorFadeIn {
  from { opacity: 0; transform: scaleX(0.4); }
  to { opacity: 1; transform: scaleX(1); }
}

/* ── Right Action Controls ── */
.nav-right-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

/* Primary Orange CTA Apply Button */
.apply-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 20px;
  background: var(--secondary);
  color: #ffffff !important;
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 18px rgba(249, 115, 22, 0.35);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background 0.25s ease;
}

.apply-btn:hover {
  transform: translateY(-1px) scale(1.02);
  background: var(--secondary-hover);
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.5);
  color: #ffffff !important;
}

.arrow-icon {
  font-size: 0.95rem;
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.apply-btn:hover .arrow-icon {
  transform: translateX(4px);
}

/* Mobile Toggle Hamburger */
.mobile-toggle-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  padding: 0;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
}

.hamburger-bar {
  width: 16px;
  height: 2px;
  background: #ffffff;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.mobile-toggle-btn.is-open .bar-1 {
  transform: translateY(3.5px) rotate(45deg);
}

.mobile-toggle-btn.is-open .bar-2 {
  transform: translateY(-3.5px) rotate(-45deg);
}

/* ── Mobile Drawer ── */
.mobile-menu-drawer {
  margin-top: 10px;
  padding: 16px 20px;
  background: rgba(13, 14, 20, 0.94);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.975rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.mobile-nav-link:hover,
.mobile-nav-link.is-active {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.mobile-arrow {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
}

.mobile-drawer-footer {
  padding-top: 8px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-apply-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  background: #ffffff;
  color: #0b0c10 !important;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
}

.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ── Responsive Breakpoints ── */
@media (max-width: 860px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle-btn {
    display: flex;
  }
  .floating-nav-wrapper {
    width: 100%;
    padding: 12px;
    /* top: 12px; */
  }

}

@media (max-width: 600px) {

  
  .pill-navbar {
    padding: 6px 10px;
    width:100%;
  }
  .apply-btn{
    display: none;
  }

  .brand-group {
    padding-left: 2px;
  }

  .brand-logo-img,
  .brand-logo-img :deep(img) {
    width: 108px;
    height: 26px;
  }

  .nav-right-actions {
    gap: 6px;
  }

  .apply-btn {
    padding: 7px 12px;
    font-size: 0.78rem;
  }

  .mobile-toggle-btn {
    width: 34px;
    height: 34px;
  }
  .hero-section{
    padding-top: 190px;
  }
}

@media (max-width: 380px) {
  

  .pill-navbar {
    padding: 6px 8px;
  }

  .brand-logo-img,
  .brand-logo-img :deep(img) {
    width: 96px;
    height: 24px;
  }

  .apply-btn {
    padding: 6px 10px;
    font-size: 0.75rem;
  }

  .apply-btn .arrow-icon {
    display: none;
  }
}
</style>
