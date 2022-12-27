import Vue from 'vue';
import App from './App.vue';
import { hunhe3 } from './mixin';

Vue.config.productionTip = false;
Vue.mixin(hunhe3); // 全局混合

new Vue({
  render: h => h(App),
}).$mount('#app');
