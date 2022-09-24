import { INCREMENT, DECREMENT } from './constant';

//同步action返回一个对象, 异步action返回一个函数(必须在store中引入redux-thunk用来支持异步函数)
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });
export const createIncrementAsyncAction = (data, time) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(createIncrementAction(data));
		}, time);
	};
};