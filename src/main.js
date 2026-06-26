import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { vScrollReveal } from './lib/useScrollReveal'

const app = createApp(App)
app.directive('scroll-reveal', vScrollReveal)
app.use(router)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
