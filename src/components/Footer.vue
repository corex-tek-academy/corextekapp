<script setup>
import { ref } from 'vue'
import logo from '/src/assets/image/logo.png'

const email = ref('')
const sent = ref(false)
function subscribe(e){
  e.preventDefault()
  if(!email.value) return
  sent.value = true
  console.log('footer subscribe', email.value)
  email.value = ''
  setTimeout(()=> sent.value = false, 4000)
}
</script>

<template>
  <footer class="site-footer mt-5" role="contentinfo" id="contact">
    <div class="site-footer__inner container">
      <div class="footer-brand">
        <a href="/" class="logo" aria-label="Corex Tek-Academy home">
          <img :src="logo" alt="Corex logo" />
        </a>
        <p class="brand-desc">Corex Tek-Academy; hands-on tech training, mentorship, and career support for beginner and aspiring professionals.</p>
        <div class="socials" aria-label="Social links">
          <a href="https://x.com/CorexTek_Acad" aria-label="Twitter" class="social"><i class="bi bi-twitter"></i></a>
          <a href="https://www.linkedin.com/company/110778439/admin/" aria-label="LinkedIn" class="social"><i class="bi bi-linkedin"></i></a>
          <a href="https://web.facebook.com/profile.php?id=61585524490063" aria-label="facebook" class="social"><i class="bi bi-facebook"></i></a>
        </div>
      </div>

      <nav class="footer-nav" aria-label="Footer navigation">
        <div class="nav-col">
          <h4>Programs</h4>
          <ul>
            <li><a href="#">Front-End Development</a></li>
            <li><a href="#">Back-End Development</a></li>
            <li><a href="#">Full-Stack Development</a></li>
            <li><a href="#">Mobile App Development</a></li>
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
        <h4>Contact</h4>
        <address>
          <div>Email: <a href="mailto:hello@corexacademy.com">corextekacademy@gmail.com</a></div>
          <div>Phone: <a href="tel:+2348012345678">+234 813 5711 038</a></div>
          <div>Address: Abuja, Nigeria</div>
        </address>

        <form class="footer-subscribe" @submit.prevent="subscribe" novalidate>
          <label for="footer-email" class="sr-only">Email address</label>
          <div class="subscribe-row">
            <input id="footer-email" type="email" v-model="email" placeholder="Your email" required>
            <button class="btn-subscribe" type="submit">Subscribe</button>
          </div>
          <p class="subscribe-msg" v-if="sent">Thanks — we'll keep you updated.</p>
        </form>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="container">
        <div class="bottom-inner">
          <p>© 2024 Corex Tek-Academy. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer{
  background: var(--primary);
  padding: 40px 0 0 0;
  color: var(--light);
}
.site-footer__inner{
  display: grid;
  grid-template-columns: 1fr 1fr 320px;
  gap: 28px;
  align-items: start;
  padding: 24px;
}
@media (max-width:320.9px){
  .footer-nav{
    flex-direction: column;
  }
}
.footer-brand img{ 
    width: 132px; 
    height: auto; 
    display:block; 
}
.brand-desc{ 
    margin-top: 12px; 
    color: rgba(255,255,255,0.95); 
    max-width: 36ch; 
}
.socials{ 
    margin-top: 12px; 
    display:flex; 
    gap:8px; 
}
.social{ 
    color: var(--light); 
    display:inline-flex; 
    align-items:center; 
    justify-content:center; 
    width:36px; height:36px; 
    background: rgba(255, 255, 255, 0.116); 
    border-radius:8px; 
}
.footer-nav{ 
    display:flex; 
    gap: 24px; 
}
.nav-col h4{ 
    margin: 0 0 10px 0; 
    font-weight:700; 
    color: var(--light); 
}
.nav-col ul{ 
    list-style:none; 
    padding:0; 
    margin:0; 
    display:flex; 
    flex-direction:column; 
    gap:8px; 
}
.nav-col a{ 
    color:var(--light); 
    text-decoration:none; 
}
.nav-col a:hover{ 
    text-decoration: underline; 
}
.footer-contact h4{ 
    margin: 0 0 12px 0; 
    font-weight:700; 
    color: var(--light); 
}
.footer-contact a{ 
    color: var(--light); 
    /* text-decoration:none;  */
}
.footer-contact address{ 
    font-style: normal; 
    color: var(--bg); 
    display:flex; 
    flex-direction:column; 
    gap:6px; 
}
.footer-subscribe{ 
    margin-top: 12px; 
}
.subscribe-row{ 
    display:flex; 
    gap:8px; 
}
@media (max-width:320.9px){
  .subscribe-row{
    flex-direction: column;
  }
}
.subscribe-row input{ 
    flex:1; 
    padding:10px 12px; 
    border-radius:8px; 
    border:1px solid rgba(0,0,0,0.06); 
    background: var(--light); 
    color: #111; 
}
.btn-subscribe{ 
    padding: 10px 12px; 
    border-radius:8px; 
    border:none; 
    background: var(--light); 
    color: var(--primary); 
    font-weight:600; 
    box-shadow: 0 8px 24px rgba(2,87,255,0.08); }
.subscribe-msg{ 
    color: var(--bg); 
    margin-top:8px; 
}

.site-footer__bottom{ 
    margin-top: 28px; 
    border-top: 1px solid rgba(255,255,255,0.06); 
    padding: 18px 0; 
    background: transparent; 
}
.bottom-inner{ 
    display:flex; 
    gap:12px; 
    justify-content:space-between; 
    align-items:center; 
    color: var(--bg); 
}
.bottom-inner p{ 
    margin:0; 
    color: var(--bg);
}
.legal-links a{ 
    margin-left: 12px; 
    color: var(--bg); 
    text-decoration:none; 
}
.legal-links a:hover{ 
    text-decoration: underline; 
}

@media (max-width: 900px){
    .site-footer__inner{ 
        grid-template-columns: 1fr; 
    }
    .bottom-inner{ 
        flex-direction:column; 
        gap:6px; 
        text-align:center; 
    }
}

    .sr-only{ 
        position: absolute; 
        width: 1px;
        height: 1px; 
        padding: 0; 
        margin: -1px; 
        overflow: hidden; 
        clip: rect(0,0,0,0); 
        white-space: nowrap; 
        border: 0; 
    }
</style>