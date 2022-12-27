import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';

export default new VueRouter({
	routes: [
		{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [// 配置子级路由
				{
					path: 'news',
					component: News,
				},
				{
					path: 'message',
					component: Message,
				}
			]
		}
	]
});
