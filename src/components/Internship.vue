<script setup>
    import img2 from '/src/assets/image/img2.png'
</script>
<template>
    <div class="container internship">
        <div class="internship_inner">
            <div class="internship_text">
                <h1> Break Into Tech As a Front-End Developer</h1>
                <p>
                    Corex Tek-Academy is now accepting students for Cohort 1 
                    If you’re a beginner and ready to upskill, learn from scratch, and build real projects, this is for you.
                </p>
                <div class="cta">
                    <a href="#" class="btn btn--primary" role="button">Join cohort 1 <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        
            <div class="">
                <img :src="img2" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Modern, consistent styling for Internship section */
.internship{
    padding: 32px 16px 0 16px;
}

.internship_inner{
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  padding: 28px;
  border-radius: 20px;
  background-color: var(--accent-green-50);
  /* background: linear-gradient(180deg, rgba(2,87,255,0.03), rgba(2,87,255,0.01)); */
  /* box-shadow: 0 12px 34px rgba(16,24,40,0.04); */
  transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease;
  position: relative;
  overflow: hidden;
}

/* Larger layout: text + image */
@media (min-width: 900px){
  .internship_inner{ 
    grid-template-columns: 1fr 420px; 
    align-items: center; gap: 36px; 
    padding: 36px; }
}
.internship_text{
    display:flex ;
    flex-direction: column;
    gap: 16px;
}
.internship_text h1{
    margin: 0 0 6px 0;
    /* font-size: clamp(1.2rem, 3vw, 1.8rem); */
    color: var(--text);
    line-height: 1.3;
    font-weight: 700;
}

.internship_text p{
  /* font-size: clamp(0.95rem, 1.6vw, 1rem); */
  margin: 0.6rem auto 1.25rem auto;
  line-height: 1.6;
  font-weight: normal;
}

/* CTA — centered on mobile, left on desktop; pill button with hover lift */
.cta{ 
    display:flex; 
    justify-content:center; 
}
@media (min-width: 900px){ 
    .cta{ 
        justify-content:flex-start; 
    } 
}
@media (max-width: 768.9px){
  .cta{ 
    margin-top: 0px;
    justify-content: left;
  }
}
@media (max-width: 425.9px){
  .internship_inner{ 
    padding: 0px;
    border-radius: px;
    background-color: transparent;
  }
}
.cta .btn{
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    color: var(--primary);
    /* box-shadow: 0 8px 26px rgba(2,87,255,0.06); */
    transition: transform 160ms cubic-bezier(.2,.9,.2,1), box-shadow 160ms ease, opacity 160ms ease;
    border: 1px solid var(--primary);
}
.cta .btn:active{
    transform: translateY(1px); 
}
.cta .btn--primary:hover{ 
    transform: translateY(-5px); 
    box-shadow: 0 20px 48px rgba(2,87,255,0.12); 
   
}
.cta .btn .bi{ 
    margin-left:8px; 
    transition: transform 160ms ease; 
}
.cta .btn--primary:hover .bi{ 
    transform: translateX(6px); 
}

/* Image styling */
.internship_inner img{ 
    width: 100%; 
    height: auto; 
    display:block; 
    border-radius: 14px; 
    object-fit: cover; 
    transition: transform 420ms cubic-bezier(.2,.9,.2,1), filter 420ms ease, box-shadow 420ms ease;
    /* box-shadow: 0 10px 30px rgba(16,24,40,0.06); transition: transform 420ms cubic-bezier(.2,.9,.2,1);  */
}
.internship_inner:hover img{ 
    transform: scale(1.03) translateZ(0); 
    filter: saturate(1.02);
 }

/* Subtle accent line */
.internship_text h2::after{ 
    content: ''; 
    display:block; 
    width:56px; 
    height:4px; 
    margin-top:10px; 
    border-radius:4px; 
    background: linear-gradient(90deg, var(--primary), 
    rgba(2,87,255,0.6)); 
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce){
    .internship_inner, .internship_inner img, .cta .btn{
        transition: none !important; 
        transform: none !important; 
    }
}
</style>