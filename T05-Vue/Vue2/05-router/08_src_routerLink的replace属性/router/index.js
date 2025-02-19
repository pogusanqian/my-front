import VueRouter from 'vue-router';
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

export default new VueRouter({
	routes: [
		{
			name: 'guanyu',
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: 'news',
					component: News,
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							name: 'xiangqing',
							path: 'detail',
							component: Detail,
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
