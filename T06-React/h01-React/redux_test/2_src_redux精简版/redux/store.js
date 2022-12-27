import { createStore } from 'redux';
import countReducer from './count_reducer';

//暴露store
export default createStore(countReducer);