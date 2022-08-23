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
					meta: { isAuth: true, title: '新闻' },
					// 独享只有前置守卫, 没有后置守卫
					beforeEnter: (to, from, next) => {
						if (to.meta.isAuth) {
							if (localStorage.getItem('school') === '河南理工大学') {
								next();
							} else {
								alert('学校名不对，无权限查看！');
							}
						} else {
							next();
						}
					}
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
								};
							}
						}
					]
				}
			]
		}
	]
});

router.afterEach((to, from) => {
	document.title = to.meta.title || 'Vue';
});

export default router;
