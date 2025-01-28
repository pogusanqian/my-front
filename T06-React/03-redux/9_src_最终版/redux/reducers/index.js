import { combineReducers } from 'redux'
import count from './count'
import persons from './person'

// 将多个reduce变成一个reducer, redux中的state中会添加两个属性
export default combineReducers({
  count,
  persons
})
