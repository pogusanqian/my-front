<template>
  <div class="login-box">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="60px" class="loginForm">
      <h2>后台管理系统</h2>
      <el-form-item label="账号: " prop="name">
        <el-input v-model="form.name" type="text" />
      </el-form-item>

      <el-form-item label="密码: " prop="password">
        <el-input v-model="form.password" type="password" show-password autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm(formRef)">登录</el-button>
        <el-button class="login-btn" @click="formRef?.resetFields()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { FormInstance } from 'element-plus';
import axiosUtil from '@/util/axiosUtil';
import JSEncrypt from 'jsencrypt';

// useRouter只能在setup函数中调用, 否则返回的就是undefined(this引用问题)
const router = useRouter();
const formRef = $ref<FormInstance>();
const form = $ref({
  name: '',
  password: ''
});
const rules = {
  name: [
    { required: true, message: '请输入账号', trigger: 'blur' },
    { min: 5, max: 10, message: '账号长度5~10', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 5, message: '最少五位', trigger: 'blur' }
  ]
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  // 校验form表单, 如果form表单没有通过校验, 便会抛出异常, 终止程序
  await formEl.validate();
  // 对密码加密并添加时间戳
  const publicKey = process.env.VUE_APP_PUBLIC_KEY;
  const jsEncrypt = new JSEncrypt();
  jsEncrypt.setPublicKey(publicKey);
  const password = jsEncrypt.encrypt(Date.now() + form.password);
  // 发起登录请求
  const res = await axiosUtil.post('/login', {name: form.name, password});
  // 存储token
  localStorage.setItem('token', res.data.token);
  // 跳转首页
  router.push('/');
}
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/bj.jpg');
  background-size: 100%;
  // 设置子元素垂直水平居中(子元素设置margin: auto)
  display: flex;
  // 设置文字水平居中
  text-align: center;

  .loginForm {
    width: 500px;
    margin: auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;

    h2 {
      margin-bottom: 20px;
    }

    .login-btn {
      width: 48%;
    }
  }
}
</style>
