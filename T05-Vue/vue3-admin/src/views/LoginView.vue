<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px" class="demo-ruleForm">
      <h2>后台管理系统</h2>
      <el-form-item label="账号: " prop="username">
        <el-input v-model="ruleForm.username" type="text" />
      </el-form-item>

      <el-form-item label="密码: " prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>

      <el-form-item>
        <el-button class="login-btn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button class="login-btn" @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { login } from '@/request/api';
import { useRouter } from 'vue-router';
import { LoginData } from '@type/login';
import { defineComponent, reactive, toRefs, ref } from 'vue';
import { FormInstance, ElMessage } from 'element-plus';

export default defineComponent({
  setup() {
    const ruleFormRef = ref<FormInstance>();
    // 采用ts进行语法声明
    const data = reactive(new LoginData());
    // 由于rules的值不会发生改变, 所以这里不需要使用ts声明类型
    const rules = {
      username: [
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        },
        {
          min: 5,
          max: 10,
          message: '账号长度5~10',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 5,
          max: 10,
          message: '密码长度5~10',
          trigger: 'blur'
        }
      ]
    };
    // useRouter只能在setup函数中调用, 否则返回的就是undefined
    const router = useRouter();
    // 自定义校验规则
    const submitForm = (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.validate((valid) => {
        if (valid) {
          login(data.ruleForm).then((res) => {
            console.log('===login响应=====', res);
            // 存储token
            localStorage.setItem('token', res.data.token);
            // 跳转首页
            router.push('/');
          });
        } else {
          ElMessage.error('校验没有通过, 请重新填写参数');
          // 这里不返回fasle也没有什么影响
          return false;
        }
      });
    };
    // 重置参数逻辑
    function resetForm(formEl: FormInstance | undefined) {
      if (!formEl) return;
      formEl.resetFields();
    }
    return { ...toRefs(data), rules, ruleFormRef, submitForm, resetForm };
  }
});
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/bj.jpg');
  background-size: 100%;
  // 解决外边距重叠: padding: 1px; overflow: hidden;
  // 设置子元素垂直水平居中(子元素设置margin: auto)
  display: flex;
  // 设置文字水平居中
  text-align: center;

  .demo-ruleForm {
    width: 500px;
    margin: auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;
    h2 {
      margin-bottom: 20px;
    }
  }

  .login-btn {
    width: 45%;
  }
}
</style>
