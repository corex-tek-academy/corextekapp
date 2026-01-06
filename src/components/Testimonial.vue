<script setup>

</script>

<template>
  <section class="testimonial container">
    <header class="testimonial-header">
      <h2 class="title">What Our Students Say</h2>
      <p class="subtitle">Real stories from learners who changed careers with Corex Tek-Academy</p>
    </header>
    
    <div class="testimonial_inner">
      <div id="carouseltestimonialInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="profile">
              <img src="/public/Corex thumbnail 2.jpg" alt="Student Photo" class="student-photo">
              <div>
                <h3 class="student-name">Jane Doe</h3>
                <p class="student-course">Full-Stack Web Development</p>
                <h6 class="student-rating">★★★★★</h6>
              </div>
            </div>
            <div class="text">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </div>

          <div class="carousel-item" data-bs-interval="10000">
            <div class="profile">
              <img src="/public/Corex thumbnail 2.jpg" alt="Student Photo" class="student-photo">
              <div>
                <h3 class="student-name">John Smith</h3>
                <p class="student-course">Data Science</p>
                <h6 class="student-rating">★★★★☆</h6>
              </div>
            </div>
            <div class="text">
              <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="10000">
            <div class="profile">
              <img src="/public/Corex thumbnail 2.jpg" alt="Student Photo" class="student-photo">
              <div class="profile_details">
                <h3 class="student-name">Alice Johnson</h3>
                <p class="student-course">Cybersecurity</p>
                <h6 class="student-rating">★★★★★</h6>
              </div>
            </div>
            <div class="text">
              <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p> 
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouseltestimonialInterval" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouseltestimonialInterval" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

  </section>
</template>

<style scoped>
  .testimonial{
    padding: 48px 16px 0 16px;
  }
  .testimonial-header{
    text-align: center;
    margin-bottom: 32px;
  }
  .testimonial_inner{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 24px;
    padding: 24px;
    border-radius: 20px;
    background-color: var(--primary-50);
    transition: transform 260ms cubic-bezier(.2,.9,.2,1), box-shadow 260ms ease;
    position: relative;
    overflow: hidden;
    place-items: center;
  }
  /* .carouseltestimonialInterval{
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto;
    max-width: 600px;
    background-color: var(--light) ;
    min-height: 300px;
  } */

  
  /* ====================== Profile Section ====================== */
  .profile{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid var(--light-gray);
  }
  .profile_details{
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .student-photo{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  .student-name{
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text);
  }
  .student-course{
    margin: 0;
    font-size: 1rem;
    line-height: 1;
    color: var(--small--text);
  }
  /* ====================== Text Section ====================== */
  .text{
    padding: 16px;
    text-align: center;
    max-width: 700px;
    font-size: 20px !important;
  }
  .text p{
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--dark);
    font-style: italic;
    color: var(--small--text);
  }
  .student-rating{
    margin:  0;
    color: #FFD700; /* Gold color for stars */
    font-size: 1rem;
  }

</style>