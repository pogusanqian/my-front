import { INCREMENT, DECREMENT } from '../constant'

const initState = 0 //初始化状态
export default function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT: //如果是加
      return preState + data
    case DECREMENT: //若果是减
      return preState - data
    default:
      return preState
  }
}
