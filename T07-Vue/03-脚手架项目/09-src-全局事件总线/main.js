import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线, 将$bus挂载到原型上可以实现所有组件可见, $bus的值是vm实例可以满足$emit, $on, $off
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
