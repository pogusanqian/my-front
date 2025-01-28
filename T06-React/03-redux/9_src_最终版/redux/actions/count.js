import { INCREMENT, DECREMENT } from '../constant'

// action和reduce是怎么进行关联的呢?
// 只要有Action被分发(dispatch), 所有的reducer都会收到action, 然后根据type进行判断
// 在组件初始化加载的时候, 是不会触发action的; 但是会触发reduce给state添加上默认值(可以说reduce的默认值就是为了初始化加载组件使用)
export const increment = (data) => ({ type: INCREMENT, data })
export const decrement = (data) => ({ type: DECREMENT, data })
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => dispatch(increment(data)), time)
  }
}
