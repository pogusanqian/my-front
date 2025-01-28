import { createStore } from 'redux'
import countReducer from './count_reducer'

// 创建了一个store, store中只有一个reduce
export default createStore(countReducer)
