import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/homePage.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router