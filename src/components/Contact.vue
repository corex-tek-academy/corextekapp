
<script setup>
import { ref } from 'vue'
import img from '/src/assets/image/img1.png'

const email = ref('')
const submitted = ref(false)

function handleSubmit(e){
  e.preventDefault()
  if(!email.value) return
  submitted.value = true
  console.log('subscribed', email.value)
  email.value = ''
  setTimeout(()=> submitted.value = false, 4000)
}
</script>

<template>
    <div class="contact container">
        <div class="contact_inner">
          <div class="contact_text">
            <h1>Get updates and happenings at Corex Tek-Academy</h1>
            <p>Subscribe to our newsletter to receive regular updates and announcements about our programs.</p>
            <form name="newsletter" class="newsletter-form" method="POST" action="/src/views/Contact.vue" data-netlify="true" netlify-honeypot="bot-field">

              <!-- required hidden fields -->
              <input type="hidden" name="form-name" value="newsletter" />
              <input type="hidden" name="bot-field" />

              <label for="email" class="sr-only">Email address</label>
              <div class="form-control">
                  <input type="email" name="email" placeholder="Email Address" required />
                  <button type="submit" class="btn-subscribe">Subscribe</button>
              </div>
              <p class="subscribe-msg" v-if="submitted">Thanks! We've received your subscription.</p>
            </form>
          </div>
          <div class="contact_img" aria-hidden="true">
            <img :src="img" alt="Corex Tek-Academy illustration">
          </div>
        </div>
    </div>
</template>

<style scoped>

.contact{
  padding: 48px 16px 0 16px;
}
.contact_inner{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 24px;
  border-radius: 20px;
  background-color: var(--primary);
  transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease;
  position: relative;
  overflow: hidden;
  color: var(--light);
  place-items: center;
}

.contact_text h1{
  /* margin: 0 0 8px 0; */
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.12;
  font-weight: 700;
  color: var(--light);
}
.contact_text p{ 
  /* margin: 0 0 8px 0;  */
  color: var(--light);
}

.contact_text{
  display:flex ;
  flex-direction: column;
  gap: 12px;
}

/* form */
.newsletter-form .form-control{
  display:flex;
  gap: 8px;
  align-items: center;
  margin-top: 8px;
}
.newsletter-form input[type="email"]{
  flex: 1 1 auto;
  padding: 12px 14px;
  border-radius: 10px;
  border: 0;
  outline: none;
  font-size: 1rem;
}
.newsletter-form input::placeholder{ color: rgba(0,0,0,0.45); }

.btn-subscribe{
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: var(--primary);
  color: var(--light);
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(2,87,255,0.08);
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
}
.btn-subscribe:active{ transform: translateY(1px); }
.btn-subscribe:hover{ opacity: 0.95; box-shadow: 0 12px 32px rgba(2,87,255,0.12); }

.subscribe-msg{
  margin-top: 10px;
  color: rgba(255,255,255,0.95);
  font-size: .95rem;
}

/* image */
.contact_img img{
  width: 100%;
  height: auto;
  display:block;
  border-radius: 14px;
  object-fit: cover;
}
.contact_img {
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* small screens: stack and expand image */
@media (max-width: 600px){
  .newsletter-form .form-control{ 
        flex-direction: column; 
        align-items: stretch; 
    }
    .btn-subscribe{ 
        width: 100%; 
    }
}

/* larger layout: image + text */
@media (min-width: 900px){
    .contact_inner{ 
        grid-template-columns: 1fr 420px;  
        padding: 36px; gap: 28px; 
    }
    .contact_img img{ 
        max-width: 420px; 
    }
}
@media (max-width: 425.9px){
  .contact_inner{
    padding: 16px;
    border-radius: 14px;
    display: block;
  }
  .contact_img {
    display: none;
  }
}

/* utility: visually-hidden label */
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