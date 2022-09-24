import { INCREMENT, DECREMENT } from './constant';

/**
 * reducer相当于是持久层, 每一个reducer都有一个状态值存储在store中
 * reducer本质是一个函数, 会接到两个参数: 之前的状态(preState), 动作对象(action)
 * @param {*} preState 
 * @param {*} action 
 * @returns 
 */
export default function countReducer(preState = 0, action) {
	const { type, data } = action;
	switch (type) {
		case INCREMENT:
			return preState + data;
		case DECREMENT:
			return preState - data;
		default:
			return preState;
	}
}