import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/homePage.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'
import Products from '../pages/Products.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/about', name: 'about', component: About },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/products', name: 'products', component: Products },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router