// 0是初始化默认值
export default function countReducer(preState = 0, action) {
  const { type, data } = action
  switch (type) {
    case 'increment': //如果是加
      return preState + data
    case 'decrement': //若果是减
      return preState - data
    default:
      return preState
  }
}
