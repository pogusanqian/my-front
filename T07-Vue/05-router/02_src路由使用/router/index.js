import VueRouter from 'vue-router';
import About from '../components/About';
import Home from '../components/Home';

// 创建并暴露一个路由器
export default new VueRouter({
	routes: [
		{
			// 组件的名称, 用于组件的路由
			name: 'myAbout',
			// url的后缀, 也可以用于组件路由
			path: '/about',
			component: About
		},
		{
			name: 'myHome',
			path: '/home',
			component: Home
		}
	]
});
