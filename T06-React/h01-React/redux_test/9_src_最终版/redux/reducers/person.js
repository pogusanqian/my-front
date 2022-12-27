import { ADD_PERSON } from '../constant';

//初始化人的列表
const initState = [{ id: '001', name: '张三', age: 18 }];

export default function personReducer(preState = initState, action) {
	const { type, data } = action;
	switch (type) {
		case ADD_PERSON:
			// 数组对象不能直接使用unshitf, 这样的话, 数组的应用没有任何变化
			// preState.unshift(data);
			return [data, ...preState];
		default:
			return preState;
	}
}
