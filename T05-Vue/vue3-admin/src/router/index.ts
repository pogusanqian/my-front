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
    redirect: '/user',
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          menuTitle: '用户信息',
          menuIcon: 'user'
        },
        component: () => import('@/views/UserView.vue')
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (token) {
    to.path === '/login' ? router.push('/') : next();
  } else {
    to.path === '/login' ? next() : router.push('/login');
  }
});

export default router;
