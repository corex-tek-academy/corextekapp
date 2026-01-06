<script setup>
  import img1 from '/src/assets/image/img1.png' 
</script>
<template>
    <div class="about container">
        <div class="about_content">
          <div class="about_img">
              <img :src="img1" alt="Corex Tek-Academy">
          </div>
          <div class="about_text">
            <h1>Become Job-Ready. Add a Competitive Edge to Your Skills Today.</h1>
            <p>
                You don’t need to have it all figured out to start, you just need the right guidance and environment to grow. At Corex Tek-Academy, we provide structured learning, hands-on projects, and mentorship that help you develop in-demand skills and build confidence at every stage. This is your opportunity to become job-ready and elevate your skill set with purpose.

            </p>
            <div class="cta">
                <a href="#" class="btn btn--primary" role="button">Join cohort 1 <i class="bi bi-arrow-right" aria-hidden="true"></i></a>
                
              </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
/* Keep structure, modernize look + subtle interactions */
.about{
  padding: 32px 16px 0 16px;
}

.about_content{
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  padding: 28px;
  border-radius: 20px;
  background-color: #0257FF13;
  /* background: linear-gradient(180deg, rgba(255,255,255,0.7), rgba(250,250,250,0.85)); */
  box-shadow: 0 10px 30px rgba(16,24,40,0.01);
  transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease;
  position: relative;
  overflow: hidden;
}

/* subtle decorative texture */
/* .about_content::before{
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(2,87,255,0.02) 1px, transparent 1px);
  background-size: 22px 22px;
  opacity: 0.35;
  pointer-events: none;
  mix-blend-mode: overlay;
} */

/* hover lifts content and gently scales image */
/* .about_content:hover{ transform: translateY(-6px); box-shadow: 0 20px 50px rgba(16,24,40,0.09); } */

/* Layout for larger screens: image + text side-by-side */
@media (min-width: 900px){
  .about_content{ grid-template-columns: 420px 1fr; gap: 36px; padding: 36px; }
}

/* Image area */
.about_img img{
  width: 100%;
  height: auto;
  display: block;
  border-radius: 14px;
  object-fit: cover;
  transition: transform 420ms cubic-bezier(.2,.9,.2,1), filter 420ms ease, box-shadow 420ms ease;
  /* box-shadow: 0 10px 26px rgba(16,24,40,0.06); */
}
.about_content:hover .about_img img{ transform: scale(1.03) translateZ(0); filter: saturate(1.02); }

/* Text area */
.about_text{
  display:flex ;
  flex-direction: column;
  gap: 16px;
}
.about_text h1{
  margin: 0 0 6px 0;
  color: var(--text);
  line-height: 1.2;
  font-weight: 700;
}

.about_text p{
  margin: 0.6rem auto 1.25rem auto;
  line-height: 1.6;
  font-weight: normal;
  /* font-size: 18px; */
}

/* Small decorative accent under the heading */
.about_text h2::after{
  content: '';
  display: block;
  width: 56px;
  height: 4px;
  margin-top: 10px;
  border-radius: 4px;
  background: linear-gradient(90deg, var(--primary), rgba(2,87,255,0.6));
}

/* CTA styling: centered on mobile, left-aligned on desktop, with subtle motion */
.cta{
  display: flex;
  gap: 12px;
  margin-top: 12px;
  justify-content: center;
}

@media (min-width: 900px){
  .cta{ justify-content: flex-start; }
}

.cta .btn{
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(2,87,255,0.06);
    transition: transform 160ms cubic-bezier(.2,.9,.2,1), box-shadow 160ms ease, opacity 160ms ease;
    text-decoration: none;
    border: 1px solid var(--primary);
    font-weight: 500;
}

.cta .btn:active{ transform: translateY(1px); }

.cta .btn--primary:hover{ transform: translateY(-4px); box-shadow: 0 18px 48px rgba(2,87,255,0.12); }

.cta .btn .bi{ margin-left: 8px; transition: transform 160ms ease; display: inline-block; }
.cta .btn--primary:hover .bi{ transform: translateX(6px); }

@media (prefers-reduced-motion: reduce){
  .cta .btn, .cta .btn .bi{ transition: none !important; transform: none !important; }
}

/* Accessible focus + subtle transitions for links if present */
.about_text a{ color: var(--primary); text-decoration: underline; transition: color 160ms ease, text-decoration-color 160ms ease; }
.about_text a:focus-visible{ outline: 3px solid rgba(2,87,255,0.18); outline-offset: 3px; }

/* Reduced motion support */
@media (prefers-reduced-motion: reduce){
  .about_content, .about_img img{ transition: none !important; transform: none !important; }
}

</style>