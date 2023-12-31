import {createRouter, createWebHistory} from '@ionic/vue-router';
import Tabs from "@/components/Tabs.vue";
import {useMainStore} from "@/store/index.js";
import {useCategoriesStore} from "@/store/categories.js";

const routes = [
  {
    path: '/',
    redirect: '/efimova/menu'
  },
  {
    path: '/:place/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/efimova/menu'
      },
      {
        path: 'menu/:categoryId?',
        name: 'menu',
        component: () => import('@/views/MenuPage.vue')
      },
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

router.afterEach(async () => {
  const store = useMainStore();
  await store.restored;

  const categoriesStore = useCategoriesStore();
  await categoriesStore.fetchCategories(router.currentRoute._value.params.place);
})

export default router
