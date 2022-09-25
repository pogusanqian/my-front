import { Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Province from '../pages/province';
import City from '../pages/city';
import CityEdit from '../pages/city/edit';

const routes = [
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: 'city',
				element: <City />
			},
			{
				path: 'city-edit',
				element: <CityEdit />
			},
			{
				path: 'province',
				element: <Province />
			},
			{
				path: '',
				// element: <City /> 这种方式也可以, 只不过url显示的就是/home
				element: <Navigate to="city" /> // 这种方式url显示的/home/city
			}
		]
	},
	{
		path: '/',
		element: <Navigate to="/home" />
	}
];

export default routes;