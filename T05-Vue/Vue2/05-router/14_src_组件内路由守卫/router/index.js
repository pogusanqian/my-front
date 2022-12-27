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
			meta: { isAuth: true, title: '关于' },
			beforeEnter: (to, from, next) => {
				console.log('====================beforeEnter============', to.name);
				next();
			}
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
					meta: { isAuth: true, title: '新闻' },
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

// beforeEach -> beforeEnter -> beforeRouteEnter -> afterEach -> beforeRouteLeave
router.beforeEach((to, from, next) => {
	console.log('============beforeEach==============', to.name);
	next();
});

router.afterEach((to, from) => {
	console.log('============afterEach==============', to.name);
});

export default router;
