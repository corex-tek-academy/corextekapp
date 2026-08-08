<script setup>
import { ref, computed } from 'vue'

const pageSize = 3
const programs = ref([
  { 
    id: 1, title: 'Front-End Development', slug: 'frontend',
    desc: 'Master the art of crafting modern, responsive, and highly interactive user interfaces using HTML, CSS, JavaScript, and Vue.js.', 
    duration: '8 Weeks', price: '₦65,000',
    icon: 'bi-window-sidebar', color: '#06b6d4', bgColor: 'rgba(6, 182, 212, 0.12)', borderColor: 'rgba(6, 182, 212, 0.25)'
  },
  { 
    id: 2, title: 'Back-End Development', slug: 'backend',
    desc: 'Build robust, scalable APIs, handle databases, and architect server-side logic using Node.js, Express, and database systems.', 
    duration: '12 Weeks', price: '₦75,000',
    icon: 'bi-database-fill-gear', color: '#f97316', bgColor: 'rgba(249, 115, 22, 0.12)', borderColor: 'rgba(249, 115, 22, 0.25)'
  },
  { 
    id: 3, title: 'Full-Stack Development', slug: 'fullstack',
    desc: 'Become a versatile software engineer by mastering both frontend interface design and backend database/server architectures.', 
    duration: '16 Weeks', price: '₦120,000',
    icon: 'bi-layers-half', color: '#6366f1', bgColor: 'rgba(99, 102, 241, 0.12)', borderColor: 'rgba(99, 102, 241, 0.25)'
  },
  { 
    id: 4, title: 'Mobile App Development', slug: 'mobile',
    desc: 'Create beautiful, native-feeling mobile applications for iOS and Android platforms using modern cross-platform frameworks.', 
    duration: '12 Weeks', price: '₦85,000',
    icon: 'bi-phone-fill', color: '#8b5cf6', bgColor: 'rgba(139, 92, 246, 0.12)', borderColor: 'rgba(139, 92, 246, 0.25)'
  },
  { 
    id: 5, title: 'Data Science & Analytics', slug: 'data-science',
    desc: 'Unlock business insights and drive decisions by learning data cleaning, statistical modeling, machine learning, and visualization.', 
    duration: '16 Weeks', price: '₦100,000',
    icon: 'bi-bar-chart-line-fill', color: '#3b82f6', bgColor: 'rgba(59, 130, 246, 0.12)', borderColor: 'rgba(59, 130, 246, 0.25)'
  },
  { 
    id: 6, title: 'Cybersecurity Principles', slug: 'cybersecurity',
    desc: 'Defend network infrastructures, learn penetration testing, ethical hacking, and secure applications against modern digital threats.', 
    duration: '10 Weeks', price: '₦90,000',
    icon: 'bi-shield-lock-fill', color: '#f43f5e', bgColor: 'rgba(244, 63, 94, 0.12)', borderColor: 'rgba(244, 63, 94, 0.25)'
  },
  { 
    id: 7, title: 'Cloud Computing Architecture', slug: 'cloud',
    desc: 'Learn cloud infrastructures, serverless deployments, and deployment architectures on AWS and modern cloud ecosystems.', 
    duration: '14 Weeks', price: '₦110,000',
    icon: 'bi-cloud-check-fill', color: '#0ea5e9', bgColor: 'rgba(14, 165, 233, 0.12)', borderColor: 'rgba(14, 165, 233, 0.25)'
  },
  { 
    id: 8, title: 'DevOps Engineering', slug: 'devops',
    desc: 'Bridge the gap between development and operations by mastering continuous integration, Docker containers, and automation tools.', 
    duration: '12 Weeks', price: '₦95,000',
    icon: 'bi-terminal-fill', color: '#10b981', bgColor: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.25)'
  },
  { 
    id: 9, title: 'Artificial Intelligence', slug: 'ai',
    desc: 'Learn neural network basics, cognitive computing concepts, deep learning models, and building smart automated systems.', 
    duration: '16 Weeks', price: '₦130,000',
    icon: 'bi-cpu-fill', color: '#d946ef', bgColor: 'rgba(217, 70, 239, 0.12)', borderColor: 'rgba(217, 70, 239, 0.25)'
  },
  { 
    id: 10, title: 'Machine Learning Basics', slug: 'ml',
    desc: 'Dive deep into supervised and unsupervised learning algorithms, regression models, and training intelligent model weights.', 
    duration: '14 Weeks', price: '₦115,000',
    icon: 'bi-robot', color: '#f59e0b', bgColor: 'rgba(245, 158, 11, 0.12)', borderColor: 'rgba(245, 158, 11, 0.25)'
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
function goToPage(p) {
  if (p >= 1 && p <= totalPages.value) {
    currentPage.value = p
  }
}

// Mouse-following gradient REMOVED for cleaner design
// function onCardMouseMove(e) { ... }
</script>

<template>
  <section class="programs container bg-lines" id="programs" data-component="programs">
    <!-- Section Header -->
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-mortarboard-fill"></i>
        Academy Curriculum
      </span>
      <h2>Our <span class="text-gradient">Programs</span> & Tracks</h2>
      <p>
        Explore our diverse range of tech programs designed to equip you with the practical skills 
        and professional mindset needed for a high-paying career in technology.
      </p>
    </div>

    <!-- Program Cards Grid -->
    <div class="program-grid">
      <article 
        class="program-card unified-card" 
        v-for="(program, index) in paginatedPrograms" 
        :key="program.id"
      >
        <div class="card-header">
          <div class="icon-wrapper" :style="{ background: program.bgColor, color: program.color, borderColor: program.borderColor }">
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
            class="btn btn-primary"
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
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: var(--space-6);
}

.program-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  height: 100%;
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

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid transparent;
  display: grid;
  place-items: center;
  font-size: 1.35rem;
  transition: transform 0.3s ease;
}

.program-card:hover .icon-wrapper {
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

/* Enroll Button - using unified button system */
.btn-enroll {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  background: var(--secondary);
  border: none;
  color: var(--text-on-primary);
  transition: all 0.3s var(--ease-out-expo);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.35);
}

.btn-enroll:hover {
  background: var(--secondary-hover);
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(249, 115, 22, 0.5);
}

.btn-enroll i {
  font-size: 1.2rem;
  transition: transform 0.25s var(--ease-out-expo);
}

.btn-enroll:hover i {
  transform: translateX(4px);
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
@media (max-width: 768px) {
  .program-card:hover {
    transform: translateY(-4px);
  }

  .program-card:hover .card-header,
  .program-card:hover .card-body,
  .program-card:hover .card-footer {
    transform: none;
  }
}

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