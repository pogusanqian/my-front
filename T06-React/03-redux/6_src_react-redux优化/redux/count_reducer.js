import { INCREMENT, DECREMENT } from './constant'

// 0表示的是初始化值
export default function countReducer(preState = 0, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
