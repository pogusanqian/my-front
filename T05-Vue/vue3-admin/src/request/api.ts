import axiosUtil from ".";
import { LoginFromInt } from "@/type/login";

// 注意这个函数返回的是一个promise
// TODO 感觉这一层可以不要, 直接在组件中调用
export function login(data: LoginFromInt) {
  return axiosUtil.post('/login', data);
}
