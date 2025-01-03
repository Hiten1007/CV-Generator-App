import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import MainPage from './components/MainPage.vue'
import BuildResume from './components/BuildResume.vue'

import { createRouter, createWebHistory } from 'vue-router'

// Define your routes
const routes = [
  // Example route
  { path: '/', component: MainPage },
  { path: '/build-resume', component: BuildResume },
]

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

createApp(App).use(router).mount('#app')
