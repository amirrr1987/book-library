import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'TheAbout',
      component: () => import('@/views/AboutView.vue'),
    },
  ],
})

export default router
