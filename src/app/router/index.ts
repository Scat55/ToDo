import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Tasks from '@/pages/Tasks.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
    },
  ],
});
export default router;
