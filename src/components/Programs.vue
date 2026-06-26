<script setup>
import { ref, computed } from 'vue'

const pageSize = 3
const programs = ref([
  { 
    id: 1, title: 'Front-End Development', slug: 'frontend',
    desc: 'Master the art of crafting modern, responsive, and highly interactive user interfaces using HTML, CSS, JavaScript, and Vue.js.', 
    duration: '8 Weeks', price: '₦65,000',
    color: '#2dd4bf', icon: 'bi-window-sidebar'
  },
  { 
    id: 2, title: 'Back-End Development', slug: 'backend',
    desc: 'Build robust, scalable APIs, handle databases, and architect server-side logic using Node.js, Express, and database systems.', 
    duration: '12 Weeks', price: '₦75,000',
    color: '#fb923c', icon: 'bi-database-fill-gear'
  },
  { 
    id: 3, title: 'Full-Stack Development', slug: 'fullstack',
    desc: 'Become a versatile software engineer by mastering both frontend interface design and backend database/server architectures.', 
    duration: '16 Weeks', price: '₦120,000',
    color: '#818cf8', icon: 'bi-layers-half'
  },
  { 
    id: 4, title: 'Mobile App Development', slug: 'mobile',
    desc: 'Create beautiful, native-feeling mobile applications for iOS and Android platforms using modern cross-platform frameworks.', 
    duration: '12 Weeks', price: '₦85,000',
    color: '#a78bfa', icon: 'bi-phone-fill'
  },
  { 
    id: 5, title: 'Data Science & Analytics', slug: 'data-science',
    desc: 'Unlock business insights and drive decisions by learning data cleaning, statistical modeling, machine learning, and visualization.', 
    duration: '16 Weeks', price: '₦100,000',
    color: '#60a5fa', icon: 'bi-bar-chart-line-fill'
  },
  { 
    id: 6, title: 'Cybersecurity Principles', slug: 'cybersecurity',
    desc: 'Defend network infrastructures, learn penetration testing, ethical hacking, and secure applications against modern digital threats.', 
    duration: '10 Weeks', price: '₦90,000',
    color: '#f87171', icon: 'bi-shield-lock-fill'
  },
  { 
    id: 7, title: 'Cloud Computing Architecture', slug: 'cloud',
    desc: 'Learn cloud infrastructures, serverless deployments, and deployment architectures on AWS and modern cloud ecosystems.', 
    duration: '14 Weeks', price: '₦110,000',
    color: '#38bdf8', icon: 'bi-cloud-check-fill'
  },
  { 
    id: 8, title: 'DevOps Engineering', slug: 'devops',
    desc: 'Bridge the gap between development and operations by mastering continuous integration, Docker containers, and automation tools.', 
    duration: '12 Weeks', price: '₦95,000',
    color: '#34d399', icon: 'bi-terminal-fill'
  },
  { 
    id: 9, title: 'Artificial Intelligence', slug: 'ai',
    desc: 'Learn neural network basics, cognitive computing concepts, deep learning models, and building smart automated systems.', 
    duration: '16 Weeks', price: '₦130,000',
    color: '#e879f9', icon: 'bi-cpu-fill'
  },
  { 
    id: 10, title: 'Machine Learning Basics', slug: 'ml',
    desc: 'Dive deep into supervised and unsupervised learning algorithms, regression models, and training intelligent model weights.', 
    duration: '14 Weeks', price: '₦115,000',
    color: '#fbbf24', icon: 'bi-robot'
  }
])

const currentPage = ref(1)
const totalPages = computed(() => Math.max(1, Math.ceil(programs.value.length / pageSize)))
const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))
const paginatedPrograms = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return programs.value.slice(start, start + pageSize)
})

function setPage(n) { currentPage.value = Math.min(Math.max(1, n), totalPages.value) }
function nextPage() { if (currentPage.value < totalPages.value) { currentPage.value++ } }
function prevPage() { if (currentPage.value > 1) { currentPage.value-- } }
</script>

<template>
  <section class="programs container bg-lines" data-component="programs">
    <!-- Section Header -->
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-mortarboard-fill"></i>
        Academy Curriculum
      </span>
      <h2>Our <span class="text-gradient">Programs</span></h2>
      <p>
        Explore our diverse range of tech programs designed to equip you with the practical skills 
        and professional mindset needed for a high-paying career in technology.
      </p>
    </div>

    <!-- Program Cards Grid -->
    <div class="program-grid">
      <article 
        class="program-card" 
        v-for="(program, index) in paginatedPrograms" 
        :key="program.id"
        :style="{ '--card-accent': program.color }"
        v-scroll-reveal="index + 1"
      >
        <!-- Gradient border effect on hover -->
        <div class="card-border-glow" aria-hidden="true"></div>

        <div class="card-header">
          <div class="icon-box" :style="{ backgroundColor: program.color + '12', color: program.color }">
            <i class="bi" :class="program.icon"></i>
          </div>
          <span class="duration-tag">
            <i class="bi bi-clock"></i>
            {{ program.duration }}
          </span>
        </div>
        
        <div class="card-body">
          <h4>{{ program.title }}</h4>
          <p>{{ program.desc }}</p>
        </div>

        <div class="card-footer">
          <div class="price-info">
            <span class="price-label">Tuition</span>
            <span class="price-value">{{ program.price }}</span>
          </div>
          
          <router-link 
            :to="{ path: '/enrollment', query: { course: program.slug } }" 
            class="btn-enroll"
            :style="{ '--hover-bg': program.color }"
          >
            <span>Enroll Now</span>
            <i class="bi bi-arrow-right-short"></i>
          </router-link>
        </div>
      </article>
    </div>

    <!-- Pagination -->
    <div class="pagination-wrapper" v-if="totalPages > 1" v-scroll-reveal>
      <div class="pagination">
        <button 
          class="page-btn" 
          :disabled="currentPage === 1" 
          @click="prevPage" 
          aria-label="Previous page"
        >
          <i class="bi bi-chevron-left"></i>
          <span class="page-btn-text">Prev</span>
        </button>

        <div class="page-numbers">
          <button 
            v-for="p in pages" 
            :key="p" 
            class="page-number" 
            :class="{ active: currentPage === p }" 
            @click="setPage(p)" 
            :aria-current="currentPage === p ? 'page' : null"
          >
            {{ p }}
          </button>
        </div>

        <button 
          class="page-btn" 
          :disabled="currentPage === totalPages" 
          @click="nextPage" 
          aria-label="Next page"
        >
          <span class="page-btn-text">Next</span>
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programs {
  padding: var(--section-padding-y) var(--container-padding-x);
}

/* Program Cards Grid */
.program-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-6);
}

.program-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  height: 100%;
  overflow: hidden;
  /* 3D tilt perspective settings */
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
}

/* Gradient border glow on hover */
.card-border-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, var(--card-accent), transparent 60%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
}

.program-card:hover {
  transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translate3d(-4px, -6px, 15px);
  border-color: var(--card-accent);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    2px 2px 0px var(--card-accent),
    4px 4px 0px var(--card-accent);
}

.program-card:hover .card-border-glow {
  opacity: 1;
}

/* 3D pop out effect on card children */
.program-card .card-header {
  transform: translateZ(10px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.program-card .card-body {
  transform: translateZ(15px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.program-card .card-footer {
  transform: translateZ(12px);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.program-card:hover .card-header {
  transform: translateZ(25px);
}

.program-card:hover .card-body {
  transform: translateZ(35px);
}

.program-card:hover .card-footer {
  transform: translateZ(30px);
}

/* Card Header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  transition: transform 0.3s var(--ease-out-expo);
}

.program-card:hover .icon-box {
  transform: scale(1.08) rotate(3deg);
}

.duration-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border-light);
  color: var(--text-secondary);
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: var(--radius-full);
}

/* Card Body */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
}

.program-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text);
  line-height: 1.25;
  margin: 0;
}

.program-card p {
  color: var(--text-secondary);
  font-size: 0.925rem;
  line-height: 1.65;
  margin: 0;
}

/* Card Footer */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border-light);
  padding-top: var(--space-5);
  gap: var(--space-4);
}

.price-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.price-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
  font-weight: 500;
}

.price-value {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
}

/* Enroll Button */
.btn-enroll {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  background: var(--color-background-soft);
  border: 1px solid var(--color-border-light);
  color: var(--text);
  transition: all 0.3s var(--ease-out-expo);
}

.btn-enroll:hover {
  background-color: var(--hover-bg);
  border-color: var(--hover-bg);
  color: var(--text-on-primary);
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.btn-enroll i {
  font-size: 1.2rem;
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-enroll:hover i {
  transform: translateX(3px);
}

/* Pagination */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  margin-top: var(--space-10);
}

.pagination {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 6px 12px;
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
}

.page-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s var(--ease-out-expo);
  border-radius: var(--radius-full);
}

.page-btn:hover:not(:disabled) {
  color: var(--primary-text);
  background: rgba(59, 130, 246, 0.05);
}

.page-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 4px;
}

.page-number {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: none;
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-secondary);
  background: transparent;
  cursor: pointer;
  transition: all 0.25s var(--ease-out-expo);
}

.page-number:hover {
  background: rgba(59, 130, 246, 0.06);
  color: var(--primary-text);
}

.page-number.active {
  background: var(--primary-gradient);
  color: var(--text-on-primary);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

/* Responsive */
@media (max-width: 576px) {
  .program-card {
    padding: var(--space-6);
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .btn-enroll {
    width: 100%;
    justify-content: center;
  }

  .page-btn-text {
    display: none;
  }
  .page-btn {
    padding: 8px;
  }
}
</style>