<template>
  <h1>Setup</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <h3>公司{{ company.name }}</h3>
  <h3>地址：{{ company.address }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script setup>
import { ref, reactive } from 'vue';

const name = ref('张三');
const age = ref(18);
const job = ref({
  type: '前端工程师',
  salary: '30K',
});

const company = reactive({
  name: '中国移动公司',
  address: '北京',
});
function changeInfo() {
  name.value = '李四';
  age.value = 48;
  job.value = {
    type: 'JAVA工程师',
    salary: '50k',
  };
  company.name = '中石油';
  company.address = '天津';
}

console.log(ref);
console.log(company);
</script>
