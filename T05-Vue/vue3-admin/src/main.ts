import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'dayjs/locale/zh-cn';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 创建APP
const app = createApp(App);
// 注册路由
app.use(router);
// 引入Element组件
app.use(ElementPlus, { locale: zhCn })
// 全局引入Element中的ICON
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => app.component(key, component));
// 挂载容器
app.mount('#app');
