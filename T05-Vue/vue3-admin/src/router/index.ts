import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          menuTitle: '用户信息',
          menuIcon: 'User'
        },
        component: () => import(/* webpackChunkName: "user" */ '@/views/UserView.vue')
      },
      {
        path: 'location',
        name: 'location',
        meta: {
          menuTitle: '区域信息',
          menuIcon: 'Location'
        },
        children: [
          {
            path: 'city',
            name: 'city',
            meta: {
              menuTitle: '城市'
            },
            component: () => import('@/views/CityView.vue')
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
