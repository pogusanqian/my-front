import { Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Home from '../pages/home';
import Province from '../pages/province';
import City from '../pages/city';

export default [
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
				path: 'province',
				element: <Province />
			}
		]
	},
	{
		path: '/',
		element: <Navigate to="/home" />
	}
];