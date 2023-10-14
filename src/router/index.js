import {createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from "@/components/Tabs.vue";
import {useMainStore} from "@/store/index.js";

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
        path: 'menu/:categoryId?',
        name: 'menu',
        component: () => import('@/views/MenuPage.vue')
      },
      // {
      //   path: 'menu/subCategory/:subCategory',
      //   name: 'subCategory',
      //   component: () => import('@/views/MenuPage.vue')
      // },
      {
        path: 'favs',
        name: 'favs',
        component: () => import('@/views/FavsPage.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/views/CartPage.vue')
      },
      {
        path: 'system',
        name: 'system',
        component: () => import('@/views/SystemPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async () => {
  const store = useMainStore();
  await store.restored;
})

export default router
