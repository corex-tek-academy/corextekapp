<template>
    <div class="contact-page container">

        <!-- Top Banner -->
        <section class="header">
        <h1>Contact Us</h1>
        <p>
            Got questions, partnership requests, or want to begin your learning journey?
            We’d love to hear from you.
        </p>
        </section>

        <!-- Brand Row -->
        <!-- <section class="brands">
        <img v-for="n in 5" :key="n" :src="`/assets/brand${n}.svg`" alt="Brand logo" />
        </section> -->

        <!-- Form + Newsletter -->
        <section class="form-news-container">
            <form class="contact-form" @submit.prevent="submitForm">
                <div class="split">
                    <input type="email" v-model="email" placeholder="Email" required />
                    <input type="tel" v-model="phone" placeholder="Phone" required />
                </div>
                <input type="text" v-model="name" placeholder="Full Name" required />
                <textarea rows="5" v-model="message" placeholder="Message" required></textarea>

                <button type="submit">Send Message</button>
            </form>

            <aside class="newsletter">
                <h3>Join Our Newsletters</h3>
                <p>Stay updated with new courses, free workshops and job-ready opportunities.</p>

                <div class="newsletter-form">
                <input type="email" placeholder="Email Address" />
                <button>Subscribe</button>
                </div>
            </aside>
        </section>

        <!-- Contact Feature Blocks -->
        <section class="contact-grid">
            <div class="cell">
                <i class="bi bi-telephone-fill"></i>
                <h4>Call Us</h4>
                <p>(+234) 900 000 0000</p>
            </div>

            <div class="cell">
                <i class="bi bi-envelope-fill"></i>
                <h4>Email</h4>
                <p>info@corextekacademy.com</p>
            </div>

            <div class="cell">
                <i class="bi bi-geo-alt-fill"></i>
                <h4>Location</h4>
                <p>Lagos, Nigeria (Remote Classes)</p>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref } from 'vue'
// import Corexform from '/src/assets/image/corexform.png'

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')

function submitForm() {
  alert(`Thanks ${name.value}, we received your message!`)
  name.value = email.value = phone.value = message.value = ''
}
</script>

<style scoped>
    *{
        object-fit: cover;
        box-sizing: border-box;
    }
/* ===== Layout ===== */
    .contact-page {
        display: flex;
        flex-direction: column;
        gap: 40px;
        margin-top: 80px;
    }

/* ===== Header ===== */
    .header {
        text-align: center;
        padding: 60px 20px;
        /* background-color: var(--primary); */
        background-image: url(/src/assets/image/contact.jpg);
        background-size: cover;
        background-position: center;
        min-height: 300px;
    }
    .header h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 8px;
        color: var(--light);
    }
    .header p {
        max-width: 650px;
        margin: auto;
        font-size: 1.1rem;
        opacity: .8;
        color: var(--bg);
    }

/* ===== Brands ===== */
    .brands {
        display: flex;
        justify-content: center;
        gap: 50px;
        opacity: .7;
        flex-wrap: wrap;
    }

/* ===== Form + Newsletter ===== */
.form-news-container {
  display: grid;
  grid-template-columns: 1.2fr .9fr;
  gap: 40px;
  align-items: start;
  /* max-width: 1200px; */
  padding: 20px;
  margin: auto;
  width: 100%;

}
@media (max-width: 850px) {
  .form-news-container {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 425.9px) {
    .form-news-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
    }
    }

/* Contact Form */
    .contact-form,
    .newsletter {
        background: #fff;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.08);
    }
    .contact-form input,
    .contact-form textarea {
        width: 100%;
        margin-bottom: 16px;
        padding: 14px;
        border-radius: 8px;
        border: 1px solid #ccd7e0;
        font-size: 1rem;
        background: #f1f6fa;
    }
    .split {
        display: flex;
        gap: 15px;
    }
    @media screen and (max-width: 850px) {
        .split {
            flex-direction: column;
        }
    }
    button {
        padding: 14px;
        width: 100%;
        border: none;
        border-radius: 8px;
        background: #0066ff;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: .25s;
    }
    button:hover {
        background: #004bb5;
    }

    /* Newsletter */
    .newsletter {
        background-color: var(--primary);
        background-size: cover;
        width: 100%;
        /* color: white; */
    }
    .newsletter h3 {
        font-size: 1.4rem;
        margin-bottom: 8px;
        color: var(--light);
    }
    
    .newsletter p {
        color: var(--bg);
    }
    .newsletter-form {
        display: flex;
        gap: 8px;
        margin-top: 20px;
    }

    .newsletter input {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        border: none;
    }
    .newsletter button {
        width: auto;
        background: var(--light);
        color: var(--primary);
    }

/* ===== Info Cards ===== */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  max-width: 1100px;
  padding: 0 20px;
  margin: auto;
  gap: 20px;
}
@media(max-width:800px){
  .contact-grid{ grid-template-columns: 1fr; }
}
.cell {
  background: var(--light);
  padding: 30px;
  border-radius: 14px;
  text-align: center;
}
.cell i {
  font-size: 2rem;
  margin-bottom: 10px;
  display: block;
  color: #0d6efd;
}

    @media screen and (max-width: 425.9px) {
        .newsletter-form {
            display: flex;
            flex-direction: column;
        }
        .contact-form,.newsletter {
            padding: 16px;
        }
        .cell h4{
            display: none;
        }
        .cell p{
            margin: 0%;
        }
        .cell i{
            margin: 0%;
        }
        .cell {
            display: flex;
            gap: 24px;
            align-items: center;
            text-align: left;
            padding: 8px 24px;
        }
        .contact-grid{
            width: 100%;
            padding:0px;
            gap: 8px;
        }
    }
/* ===== Map ===== */
.map-box iframe {
  width: 100%;
  height: 350px;
  border: none;
  border-radius: 18px;
}
</style>
