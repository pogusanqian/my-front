import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const axiosUtil = axios.create({
  // 使用mockjs时, baseURL填写/, 否则无法拦截请求
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 1000 * 5,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
});

// 请求拦截
axiosUtil.interceptors.request.use(
  (config) => {
    config.headers.token = localStorage.getItem('token') || '';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
axiosUtil.interceptors.response.use(
  (res) => {
    const { code, message, data } = res.data;
    if (code === 0) { // 成功响应
      res.data = data;
      return res;
    } else { // 错误响应处理
      if (code === 1001) { // 无效token, 重定向到首页
        location.assign('https://localhost:3000/login');
      } else {
        ElMessage.error(message);
      }
      return Promise.reject(message);
    }
  },
  (err) => {
    ElMessage.error(err.message);
    return Promise.reject(err);
  }
);

export default axiosUtil;
