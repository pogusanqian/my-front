import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

const router = new VueRouter({
	// 使用history模式, url中便没有了#, 但是编译之后, 在刷新页面, 组件路由会失效, 需要后端进行配后, 重新定位
	mode: 'history',
	routes: [
		{
			name: 'guanyu',
			path: '/about',
			component: About,
			meta: { isAuth: true, title: '关于' },
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
								};
							}
						}
					]
				}
			]
		}
	]
});


export default router;
