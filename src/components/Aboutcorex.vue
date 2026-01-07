<template>
    <div class="aboutcorex container">
        
        <div class="corex">
            <div class="corex_header">
                <h1>Corex Tek-Academy</h1>
                <p>Corex Tek-Academy is a forward-thinking technology academy focused on equipping beginners and aspiring professionals with the skills, confidence, and experience required to succeed in today’s digital economy.</p>
            </div>
            <hr>
            <!-- <div class="corex_inner"> -->
                <!-- <img src="/public/img1.png" alt=""> -->
                <!-- <div class="corex_content"> -->
                    <div class="corex_options">
                        <div class="vision">
                            <span class="icon" aria-hidden="true">
                            <!-- Target / Mission -->
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <circle cx="12" cy="12" r="8" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <circle cx="12" cy="12" r="4" stroke-linecap="round" stroke-linejoin="round"></circle>
                                <path d="M21 12h-2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 3v2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </span>
                            <div>
                            <h5>Our Mission</h5>
                            <p>To make high-quality, practical tech education accessible by providing structured, mentor-led, and project-driven learning experiences.</p>
                            </div>
                        </div>
                        <div class="vision">
                            <span class="icon" aria-hidden="true">
                            <!-- Lightbulb / Vision -->
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M9 18h6" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10 22h4" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 2a6 6 0 0 0-4 10v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a6 6 0 0 0-4-10z" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </span>
                            <div>
                            <h5>Our Vision</h5>
                            <p>To become a trusted pathway for individuals transitioning into technology careers through hands-on learning and real-world application.</p>
                            </div>
                        </div>
                        <div class="vision">
                            <span class="icon" aria-hidden="true">
                            <!-- Users / Who we serve -->
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"></circle>
                            </svg>
                            </span>
                            <div>
                            <h5>Who We Serve</h5>
                            <p>We support individuals at the early stages of their tech journey—those seeking clarity, structure, mentorship, and practical exposure.</p>
                            </div>
                        </div>
                        <div class="vision">
                            <span class="icon" aria-hidden="true">
                            <!-- Sparkles / What makes us different -->
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M12 3l1.3 2.6L16 7l-2.7 1.4L12 11l-1.3-2.6L8 7l2.7-1.4L12 3z" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M4 13l.8 1.6L7 16l-1.2.6L4 18l-.8-1.4L2 16l1.2-.6L4 13z" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M20 16l.6 1.2L22 18l-1.2.6L20 20l-.6-1.4L18 18l1.2-.6L20 16z" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </span>
                            <div>
                            <h5>What Makes Us Different</h5>
                            <p>We focus on learning by doing, guided by experienced mentors, with a clear emphasis on real-world relevance rather than theory alone.</p>
                            </div>
                        </div>

                    </div>
                <!-- </div> -->
            <!-- </div> -->
        </div>

    </div>
</template>
<style scoped>
  /* Modernized About section styles */
    .aboutcorex{
        padding: 48px 16px 0 16px;
        --accent: var(--primary, #4f46e5);
        --muted: #6b7280;
    }
    
    .corex{
        background-color: var(--primary);
        padding: 28px;
        border-radius: 20px;
    }
    @media (max-width:425.9px){
        .corex{
            /* background-color: transparent ; */
            padding: 14px;
           border-radius: 10px;
        }
    }
    .corex_header h1{
        color: var(--light);
        margin: 0 0 8px 0; 
        font-weight: 700;
    }
    .corex_header p{
        max-width: 600px;
        margin: 0; 
        color: var(--bg);
    }

    .corex_options{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        width: 100%;
    }

    .vision{
        background: linear-gradient(180deg, #fff, #fbfbff);
        padding: 18px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(15,23,42,0.04);
        border: 1px solid rgba(79,70,229,0.04);
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
        transition: transform .22s ease, box-shadow .22s ease;
    }
    .vision:hover{ transform: translateY(-6px); box-shadow: 0 14px 36px rgba(79,70,229,0.06); }

    .vision .icon{
        width: 44px;
        height: 44px;
        border-radius: 10px;
        background: rgba(79,70,229,0.08);
        color: var(--accent);
        display: grid;
        place-items: center;
        font-size: 18px;
        flex-shrink: 0;
        transition: transform .18s ease, box-shadow .18s ease;
    }
    .vision .icon svg{ 
        width: 22px; 
        height: 22px; 
        color: var(--accent); 
    }
    .vision:hover .icon{ 
        transform: translateY(-4px); 
        box-shadow: 0 8px 18px rgba(79,70,229,0.06); 
    }

    .vision h5{
        margin: 0 0 6px 0;
        color: #0f172a;
        line-height: 1.2;
        font-weight: 700;
        font-size: 0.98rem;
    }

    .vision p{
        margin: 0;
        line-height: 1.6;
        color: var(--muted);
        font-size: 0.95rem;
    }

    /* Larger layout on wide screens */
    @media (min-width: 900px){
        .corex_inner{
        grid-template-columns: 420px 1fr;
        gap: 36px;
        padding: 36px;
        align-items: center;
        }
        .corex_content{ 
            align-items: flex-start; 
            text-align: left; 
        }
        .corex_inner img{ 
            /* height: 100%;  */
            max-height: 420px; 
        }
    }

    /* Small screens tweaks */
    @media (max-width: 520px){
    
        .corex_inner img{ 
            height: 220px; 
        }
        .corex_content p{ 
            font-size: 0.98rem; 
        }
    }
</style>