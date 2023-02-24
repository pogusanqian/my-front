import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import '@/mock';

// 创建APP
const app = createApp(App);
// 注册路由
app.use(router);
// 全局引入Element中的ICON
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => app.component(key, component));
// 挂载容器
app.mount('#app');
