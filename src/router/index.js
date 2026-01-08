import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Enrollment from '@/views/Enrollment.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/enrollment', component: Enrollment },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
