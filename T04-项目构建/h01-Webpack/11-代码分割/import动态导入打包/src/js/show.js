// 使用动态打包的时候, 不要使用这种方式导出, export default show, default是一种关键字, 不能直接
export function show() {
  console.log('=========show===========')
}
