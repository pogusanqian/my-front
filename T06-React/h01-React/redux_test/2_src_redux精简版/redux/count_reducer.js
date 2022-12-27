/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

// 0是初始化默认值
export default function countReducer(preState = 0, action) {
	const { type, data } = action;
	switch (type) {
		case 'increment': //如果是加
			return preState + data;
		case 'decrement': //若果是减
			return preState - data;
		default:
			return preState;
	}
}