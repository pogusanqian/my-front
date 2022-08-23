import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

const router = new VueRouter({
	routes: [
		{
			name: 'guanyu',
			path: '/about',
			component: About,
			meta: { title: '关于' }
		},
		{
			name: 'zhuye',
			path: '/home',
			component: Home,
			meta: { title: '主页' },
			children: [
				{
					name: 'xinwen',
					path: 'news',
					component: News,
					meta: { isAuth: true, title: '新闻' }
				},
				{
					name: 'xiaoxi',
					path: 'message',
					component: Message,
					meta: { isAuth: true, title: '消息' },
					children: [
						{
							name: 'xiangqing',
							path: 'detail',
							component: Detail,
							meta: { isAuth: true, title: '详情' },
							props($route) {
								return {
									id: $route.query.id,
									title: $route.query.title,
									a: 1,
									b: 'hello'
								};
							}

						}
					]
				}
			]
		}
	]
});

// 全局前置路由守卫————初始化的时候被调用, 每次路由切换之前被调用, 对所有的路由组件都使用
// to 表示的时下一个组件, from表示本组件
router.beforeEach((to, from, next) => {
	if (to.meta.isAuth) { // 判断下一个组件是不是需要鉴权
		if (localStorage.getItem('school') === '河南理工大学') {
			next();
		} else {
			alert('学校名不对，无权限查看！');
		}
	} else {
		next();
	}
});

// 全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to, from) => {
	document.title = to.meta.title || 'Vue';
});

export default router;
