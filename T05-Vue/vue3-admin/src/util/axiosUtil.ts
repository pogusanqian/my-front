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
    if (code !== 0) {
      ElMessage.error(message);
      return Promise.reject(message);
    }
    res.data = data;
    return res;
  },
  (err) => {
    ElMessage.error(err.message);
    return Promise.reject(err);
  }
);

export default axiosUtil;
