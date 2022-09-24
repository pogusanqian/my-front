import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
// 给所有APP中的所有容器组件分发store对象
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);