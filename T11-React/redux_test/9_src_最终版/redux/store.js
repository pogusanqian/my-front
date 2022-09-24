import { createStore, applyMiddleware } from 'redux';
// 引入异步reaction组件
import thunk from 'redux-thunk';
// 引入浏览器段redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension';
// 引入合并后的reducers
import reducers from './reducers';

//暴露store 
export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));