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
      path: '/user',
      name: 'TheUsers',
      component: () => import('@/views/UsersView.vue'),
    },
    {
      path: '/books',
      name: 'TheBooks',
      component: () => import('@/views/UsersView.vue'),
    },
    {
      path: '/authors',
      name: 'TheAuthors',
      component: () => import('@/views/UsersView.vue'),
    },
    {
      path: '/test',
      name: 'TheTest',
      component: () => import('@/views/TestView.vue'),
    },

  ],
})

export default router
