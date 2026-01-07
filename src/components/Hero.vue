<script setup>
  import img1 from '/src/assets/image/img1.png'
</script>

<template>
  <section class="hero Expanded" aria-labelledby="hero-heading">
    <div class="hero-inner container">
      <div class="hero-content">
        <div>
          <span>Welcome to Corex Tek-Academy</span>
          <h1 id="hero-heading">Build Real Tech Skills. Launch Your Career with Confidence.</h1>
        </div>
            
        <p class="lead">
          Corex Tek-Academy is a beginner-friendly tech academy delivering mentor-led, project-based training designed to help aspiring professionals gain practical, in-demand skills and career readiness.

        </p>

        <div class="key_highllight">
          <span class=" highlight">Beginner-friendly <i class="bi bi-box-fill"></i></span>
          <span class=" highlight">Mentorship & coaching <i class="bi bi-award"></i></span>
          <span class=" highlight">Project-based learning <i class="bi bi-cpu"></i></span>
          <!-- <span class=" highlight">Job readiness support</span> -->

        </div>

        <div class="hero-actions">
          <a href="#" class="btn btn--primary" role="button">Join cohort 1 <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
          <a href="#about" class="btn btn--secondary">Learn More <i class="bi bi-chevron-right" aria-hidden="true"></i></a>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <img :src="img1" alt="">
      </div>
    </div>
  </section>
</template>

<style scoped>

    /* Image area */
    .hero-visual img{
    width: 100%;
    height: auto;
    display: block;
    border-radius: 14px;
    object-fit: cover;
    /* transition: transform 420ms cubic-bezier(.2,.9,.2,1), filter 420ms ease, box-shadow 420ms ease; */
    /* box-shadow: 0 10px 26px rgba(16,24,40,0.06); */
    }
    .hero-visual{
      padding: 24px;
    }

    .key_highllight{
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 16px;
    }
    .highlight{
        color: #fff;
        padding: 10px 12px;
        font-size: 0.875rem;
        border-radius: 20px;
        font-weight: 500;
    }
    .highlight:nth-child(1){
        background-color: #af02ff13;
        color: #af02ff; 
    }
    .highlight:nth-child(2){
        background-color: #ff5f0213;
        color: #ff5f02; 
    }
    .highlight:nth-child(3){
        background-color: #02ffab13;
        color: #019c9a; 
    }
    

/* Improved hero styling: typography, spacing, CTA polish, and subtle entrance animation */
.hero{
  /* min-height: calc(100vh - 64px); */
  margin-top: 91px;
  display: flex;
  align-items: center;
  padding: 40px 12px;
  background: radial-gradient(circle at 10% 10%,  #0256ff27 20%, transparent 30%),
  radial-gradient(circle at 100% 100%,  #019c9a27 10%, transparent 10%);
}


.hero-inner{
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 44px;
  padding: 36px var(--container-padding-x);
  align-items: center;
  text-align: center;
}

/* content entrance */
@keyframes slideUpFade {
  from { transform: translateY(8px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hero-content{
  animation: slideUpFade 520ms cubic-bezier(.2,.9,.2,1) both;
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
}

.hero-content h1{
  font-size: 52px;
  /* font-size: clamp(1.6rem, 4.4vw, 4rem); */
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  max-width: 54ch;
  margin-left: auto;
  margin-right: auto;
}
.hero-content span{
    line-height: 1.03;
    font-weight: 500;
    color: #0257FF;
    letter-spacing: -0.02em;
}

@media (max-width: 768px){
  .hero{
    margin-top: 70px;
  }
  /* .hero-content h1{
    font-size: 52px;
  } */
}
@media (max-width: 426px){
  .hero-content h1{
    font-size: 44px;
  }
}

@media (max-width: 426px){
  .hero-content h1{
    font-size: 44px;
  }
}
@media (max-width: 376px){

  .hero-inner{
    padding: 28px 8px;
  }
  .key_highllight{

    gap: 8px;

  }
 
}

/* subtle accent under the heading */
/* .hero-content h1::after{
  content: '';
  display: block;
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), rgba(2,87,255,0.6));
  border-radius: 3px;
  margin-top: 12px;
} */

.lead{
  opacity: 0.92;
  font-size: clamp(0.95rem, 1.6vw, 1rem);
  max-width: 64ch;
  margin: 0.6rem auto 1.25rem auto;
  line-height: 1.4;
  font-weight: normal;
}

.hero-actions{
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  /* font-weight: 400; */
  cursor: pointer;
  transition: transform 160ms cubic-bezier(.2,.9,.2,1), box-shadow 160ms ease, opacity 160ms ease;
}

.btn:active{ transform: translateY(1px); }

.btn--primary{
  background-color: var(--primary);
  color: var(--light);
  border: 0;
  box-shadow: 0 10px 30px rgba(2,87,255,0.12);
}

.btn--primary:hover{ transform: translateY(-3px); box-shadow: 0 16px 40px rgba(2,87,255,0.14); }

/* Icon spacing & motion on CTAs */
.btn .bi{ margin-left: 8px; transition: transform 160ms ease; display:inline-block; }
.btn--primary:hover .bi{ transform: translateX(4px); }
.btn--secondary:hover .bi{ transform: translateX(2px); }
.btn--secondary{
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
}

.btn--secondary:hover{ 
  background: rgba(2,87,255,0.02); 
}

.btn:focus-visible{ 
  outline: 3px solid rgba(2,87,255,0.18); 
  outline-offset: 4px; 
}

.hero-visual{ 
  display: none; 
  justify-self: center; 
  animation: slideUpFade 640ms 80ms cubic-bezier(.2,.9,.2,1) both; 
}

/* larger layout */
@media (min-width: 900px){
  .hero-inner{ 
    grid-template-columns: 1fr 480px; 
    text-align: left; gap: 48px; 
  }
  .hero-visual{ 
    display: block; 
  }
  .hero-actions{ 
    justify-content: flex-start;
   }
  .hero-content h1{ 
    margin-left: 0; margin-right: 0; 
  }
}

/* ensure accessible reduced motion */
@media (prefers-reduced-motion: reduce){
  .hero-content, .hero-visual { 
    animation: none !important; 
  }
  .btn, .btn--primary, .btn--secondary { 
    transition: none !important; 
  }
}

</style>