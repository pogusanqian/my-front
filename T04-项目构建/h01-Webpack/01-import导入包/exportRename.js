const name = '张三';
const age = 23;

function show() {
  console.log('好好学习, 天天向上');
}

/**
 * 命名导出:
 *    - 直接使用命名导出时, 不能直接导出对象, {name: '张三', age: 23}, 而是特殊的语法
 *    - as关键字可以重命名, 如果重命名成了default, 就表示这个属性是默认导出的
 */
export { name, age as myage, show as default };
