import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'user',
        name: 'user',
        meta: {
          isShow: true,
          title: '用户列表',
          icon: 'User'
        },
        component: () => import(/* webpackChunkName: "user" */ '@/views/UserView.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        meta: {
          isShow: true,
          title: '商品列表',
          icon: 'Goods'
        },
        // 注意这里路由是进行了异步加载, 并且单独打了一个chunk
        component: () => import(/* webpackChunkName: "goods" */ '@/views/GoodsView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
