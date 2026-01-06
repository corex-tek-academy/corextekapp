<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logoblue from '/src/assets/image/logoblue.png'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function onKey(e) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <nav class="site-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-inner">
      <div class="container">
        <div class="nav-main">
          <a class="brand" href="/">
            <img :src="logoblue" alt="Corex logo">
          </a>

          <button
            class="menu-toggle"
            @click="toggleMenu"
            :aria-expanded="String(isOpen)"
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
          >
            <span class="visually-hidden">Menu</span>
            <i class="bi bi-list" aria-hidden="true"></i>
          </button>

          <ul
            id="primary-navigation" class="nav-list" :class="{ open: isOpen }">

            <li><a href="#" class="active" @click="closeMenu"><i class="bi bi-house-door" aria-hidden="true"></i><span>Home</span></a></li>
            <li><a href="#" @click="closeMenu"><i class="bi bi-info-circle" aria-hidden="true"></i><span>About us</span></a></li>
            <li><a href="#" @click="closeMenu"><i class="bi bi-telephone" aria-hidden="true"></i><span>Contacts</span></a></li>
            <li><a href="#" @click="closeMenu"><i class="bi bi-journal-text" aria-hidden="true"></i><span>Blog</span></a></li>
          </ul>

          <div class="cta">
            <a href="#">Contact Us <i class="bi bi-telephone-inbound-fill" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .active{
    color: var(--primary) !important;
  }
  ul{
    background-color: #0257FF04;
    padding: 16px 24px !important;
    border-radius: 14px;
    color: var(--primary);
    border: 1px solid #0257FF23;
  }

.site-nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: var(--bg);
  border-bottom: 1px solid rgba(0,0,0,0.04);
  z-index: 50;
}

.nav-inner{
  /* wrapper only; container handles width & horizontal padding */
  display: block;
}

.nav-main{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.brand{
  display: inline-flex;
  align-items: center;
}

.brand img{
  height: 48px;
  display: block;
}

.menu-toggle{
  display: none;
  background: transparent;
  border: none;
  padding: 8px;
  color: var(--text);
  font-size: 22px; /* size for bootstrap icon */
}
.menu-toggle .bi{ display: inline-block; font-size: 1.25em; line-height: 1; }

.visually-hidden{
  position: absolute !important;
  height: 1px; width: 1px; overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px); white-space: nowrap; border: 0; padding: 0; margin: -1px;
}

.nav-list{
  list-style: none;
  display: flex;
  gap: 12px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-list a{
  color: var(--text);
  padding: 8px 10px;
  /* border-radius: 3px; */
  /* font-weight: 500; */
  text-decoration: none;
}

.nav-list a:hover,
.nav-list a:focus{
  color: var(--primary);
  outline: none;
  /* box-shadow: inset 0 -2px 0 var(--primary); */
}
.nav-list a i{
  margin-right: 8px;
  font-size: 1rem;
  vertical-align: middle;
  display: inline-block;
}
.nav-list a span{ display:inline-block; }
.cta a .bi{ margin-left:8px; transition: transform 160ms ease; display:inline-block; }
.cta a:hover .bi{ transform: translateX(4px); }

.cta a{
  display: inline-block;
  padding: 8px 14px;
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
}

.cta a:hover,
.cta a:focus{
  background: var(--primary);
  color: var(--light);
}

/* Responsive: collapse into hamburger under 800px */
@media (max-width: 800px){
  .menu-toggle{ display: inline-flex; align-items:center; justify-content:center }
  .nav-list{ 
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--bg);
    flex-direction: column;
    gap: 0;
    padding: 8px 12px;
    transform-origin: top;
    transform: scaleY(0);
    transition: transform 180ms ease, opacity 180ms ease;
    opacity: 0;
    box-shadow: 0 6px 18px rgba(15,15,15,0.08);
  }
  .nav-list.open{
    transform: scaleY(1);
    opacity: 1;
  }
  .nav-list li{ width: 100%; }
  .nav-list a{ display:block; width:100%; padding: 12px 8px; }
  .cta{ display: none; }
}

/* Focus-visible support for keyboard users */
a:focus-visible, button:focus-visible{ outline: 3px solid rgba(2,87,255,0.18); outline-offset: 2px }

</style>