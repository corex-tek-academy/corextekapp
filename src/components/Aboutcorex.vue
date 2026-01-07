<template>
  <section class="aboutcorex container">

    <!-- HERO AREA -->
    <div class="about_intro">
      <h1>About Corex Tek-Academy</h1>
      <p>
        We are a training-driven technology academy helping beginners and career-shifters
        unlock real digital skills through structured learning, mentorship, and practice.
      </p>
    </div>

    <!-- STORY / WHO WE ARE -->
    <!-- <div class="about_story">
      <h2>Who We Are</h2>
      <p>
        Corex Tek-Academy was created to solve a real problem — talented people want to learn tech,
        but don’t know where to start, who to trust, or how to stay consistent long enough to
        build true ability. Our academy bridges that gap by turning learners into confident
        developers, problem-solvers, and job-ready professionals through guidance, community,
        and hands-on execution.
      </p>
    </div> -->

    <!-- OUR IDENTITY -->
    <div class="identity_section">
        <div class="mission">
            <h3>Our Mission</h3>
            <p>
            To make practical, high-quality tech education accessible through curated learning,
            real-world projects, and mentor accountability.
            </p>
        </div>
        <div class="mission">
            <h3>Our Vision</h3>
            <p>
            To become a trusted launchpad for beginners to gain clarity, build confidence,
            and transition into meaningful technology careers.
            </p>
        </div>
    </div>

    <!-- 4 CORE VALUES -->
    <div class="values_grid">
        <article class="value">
            <span class="icon">
                <svg viewBox="0 0 24 24" stroke-width="1.5">
                    <circle cx="12" cy="12" r="8"></circle>
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M21 12h-2"></path><path d="M12 3v2"></path>
                </svg>
            </span>
            <div>
                <h4>We Prioritize Clarity</h4>
                <p>Straightforward learning paths, clear goals, and actionable steps to success.</p>
            </div>
        </article>

        <article class="value">
            <span class="icon">
                <svg viewBox="0 0 24 24" stroke-width="1.5">
                    <path d="M9 18h6"></path><path d="M10 22h4"></path>
                    <path d="M12 2a6 6 0 0 0-4 10v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a6 6 0 0 0-4-10z"></path>
                </svg>
            </span>
            <div>
                <h4>We Make Tech Accessible</h4>
                <p>No jargon. No gatekeeping. Just structured clarity and real understanding.</p>
            </div>
        </article>

        <article class="value">
            <span class="icon">
                <svg viewBox="0 0 24 24" stroke-width="1.5">
                    <path d="M12 3l1.3 2.6L16 7l-2.7 1.4L12 11l-1.3-2.6L8 7l2.7-1.4L12 3z"></path>
                    <path d="M4 13l.8 1.6L7 16l-1.2.6L4 18l-.8-1.4L2 16l1.2-.6L4 13z"></path>
                    <path d="M20 16l.6 1.2L22 18l-1.2.6L20 20l-.6-1.4L18 18l1.2-.6L20 16z"></path>
                </svg>
            </span>
           <div>
                <h4>We Focus on Results</h4>
                <p>Projects, portfolio, experience, direction, not just lessons and theory.</p>
           </div>
        </article>
    </div>

  </section>
</template>

<style scoped>

    .mission{
        padding: 16px;
        border-radius: 12px;
        background-color: var(--gray);
        border: 1px solid rgba(0,0,0,0.05);
    }

    .values_grid .value:nth-child(1){
        background-color: #8502ff13;
        h4{
            color: #8502ff;
        }
        svg{
            fill: #8502ff;
        }
        .icon{
            background-color:#8502ff13;
        }
    }
    .values_grid .value:nth-child(3){
        background-color: #ff5f0213;
        h4{
            color: #ff5f02;
        }
        svg{
            fill: #ff5f02;
        }
        .icon{
            background-color:#ff5f0213;
        }
    
    }
    .values_grid .value:nth-child(2){
        background-color: #019c9a13;
        h4{
            color: #019c9a;
        }
        svg{
            fill: #019c9a;
        }
        .icon{
            background-color:#019c9a13;
        }
    
    }
    /* .values_grid .value:nth-child(3){
        background-color: #0256ff13;
        h4{
            color: #0256ff;
        }
        svg{
            fill: #0256ff;
        }
        .icon{
            background-color:#0256ff13;
        }
    
    } */

    .aboutcorex{
    padding: 40px 16px 0 16px 16px;
    --accent: var(--primary, #4f46e5);
    --muted: #6b7280;
    display: flex;
    flex-direction: column;
    gap: 44px;
    }

    /* HERO */
    .about_intro{
    /* background: var(--primary); */
    padding: 16px;
    border-radius: 18px;
    text-align: center;
    margin-top: 48px;
    }
    .about_intro h1{ 
        /* color: var(--light);  */
        margin: 0 0 12px; 
        font-weight: 700;
    }
    .about_intro p{
    max-width: 700px;
    margin: 0 auto;
    /* color: var(--bg); */
    line-height: 1.6;
    }

    /* IDENTITY (Mission + Vision) */
    .identity_section{
    display: grid;
    gap: 24px;
    }
    .identity_section h3{
    margin: 0 0 6px;
    }
    .identity_section p{
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
    }
    @media(min-width:700px){
    .identity_section{
        grid-template-columns: repeat(2,1fr);
    }
    }

    /* VALUES */
    .values_grid{
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    .value{
        padding: 24px 22px;
        border-radius: 14px;
        border: 1px solid rgba(0,0,0,0.05);
        /* box-shadow: 0 8px 24px rgba(15,23,42,0.05); */
        transition: transform .2s ease, box-shadow .2s ease;
    }
    .value:hover{
        transform: translateY(-6px);
        box-shadow: 0 14px 38px rgba(79,70,229,0.08);
    }
    .icon{
        width: 48px;
        height: 48px;
        border-radius: 10px;
        display: grid;
        place-items: center;
        margin-bottom: 10px;
    }
    .icon svg{ 
        width: 22px; 
        height: 22px; 
    }
    .value h4{ 
        margin: 0 0 6px; 
        font-size: 1rem; 
        font-weight: 700; 
    }
    .value p{ 
        margin: 0; 
        /* color: var(--text);  */
        line-height: 1.55; 
    }

    @media (max-width:425.9px) {
        .value{
            padding: 16px;
            display: flex;
            gap: 12px;
            align-items: center;
            
        }
        .about_intro{
            padding: 0;
        }
        .icon{
            width: 80px;
            /* height: 40px; */
        }
        .values_grid{
            gap: 8px;
        }
        .identity_section{
            gap: 8px;
            display: none;
        }
    }
</style>