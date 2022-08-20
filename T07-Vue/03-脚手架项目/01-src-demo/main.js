//引入Vue, 注意这里引入的vue并不是一个完整版的vue包, 只有vue的核心指令, 并没有templete模板解析
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

/**
 * vue.js与vue.runtime.esm.js的区别: 
 *  1.vue.js是完整版的Vue, 包含: 核心功能+模板解析器; import Vue from 'vue/dist/vue.js'
 *  2.vue.runtime.esm.js是运行版的Vue, 只包含: 核心功能；没有模板解析器
 *    所以不能使用template配置项, 需要使用render函数接收到的createElement函数去指定具体内容
 */

new Vue({
  // render函数会将组件放入指定容器中,  h()函数相当于是createElement(), 会创建一个dom元素
  render: h => h(App),
}).$mount('#app');


// 使用完整版Vue导入模块
// new Vue({
//   el: '#app',
//   template: '<App></App>',
//   components: {App}
// });