import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/what-we-do',
      name: 'WhatWeDo',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WhatWeDo.vue')
    },
    {
      path: '/the-digital-divide',
      name: 'TheDigitalDivide',
      component: () => import('../views/TheDigitalDivide.vue')
    },
    {
      path: '/get-involved',
      name: 'GetInvolved',
      component: () => import('../views/GetInvolved.vue')
    },
    {
      path: '/our-network',
      name: 'OurNetwork',
      component: () => import('../views/OurNetwork.vue')
    },
    {
      path: '/insights',
      name: 'Insights',
      component: () => import('../views/Insights.vue')
    }
  ]
});

export default router;
