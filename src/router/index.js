import {createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from "@/components/Tabs.vue";

const routes = [
  {
    path: '/',
    redirect: '/tabs/menu'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/menu'
      },
      {
        path: 'menu',
        component: () => import('@/views/MenuPage.vue')
      },
      {
        path: 'favs',
        component: () => import('@/views/FavsPage.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/CartPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
