import { createRouter, createWebHistory } from 'vue-router'

// Lazy load components for code splitting
const Home = () => import('@/views/Home.vue')
const Enrollment = () => import('@/views/Enrollment.vue')
const Contact = () => import('@/views/Contact.vue')

const routes = [
  { 
    path: '/', 
    component: Home,
    meta: {
      title: 'Home | Corex Tek-Academy',
      description: 'Build real tech skills with Corex Tek-Academy. Mentor-led, project-based training for beginners.'
    }
  },
  { 
    path: '/enrollment', 
    component: Enrollment,
    meta: {
      title: 'Enrollment | Corex Tek-Academy',
      description: 'Join Cohort 1 at Corex Tek-Academy. Register for our tech programs and start your journey today.'
    }
  },
  { 
    path: '/contact', 
    component: Contact,
    meta: {
      title: 'Contact | Corex Tek-Academy',
      description: 'Get in touch with Corex Tek-Academy. Have questions? Our team is here to help.'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update meta tags on route change
router.afterEach((to) => {
  document.title = to.meta.title || 'Corex Tek-Academy'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }
})

export default router
