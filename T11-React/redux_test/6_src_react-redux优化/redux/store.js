import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 异步action组件
import countReducer from './count_reducer';


export default createStore(countReducer, applyMiddleware(thunk));