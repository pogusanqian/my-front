import axios from "axios";

// 创建axios实例
const service = axios.create({
  // moke时填写的url地址, baseURL的默认值就是/, 上线时填写真正的URL
  baseURL: "/",
  timeout: 1000 * 5,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 请求拦截
service.interceptors.request.use((config) => {
  config.headers.token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  return config;
});

// 响应拦截
service.interceptors.response.use(
  (res) => {
    console.log('===拦截响应=====', res);
    if (res.data.code !== 0) {
      return Promise.reject(res.data.message);
    }
    return res.data;
  },
  (err) => {
    console.log('======拦截错误信息======', err);
  }
);


export default service;
