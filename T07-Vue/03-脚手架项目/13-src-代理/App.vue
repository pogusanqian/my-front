<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getHtml">获取静态信息</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  methods: {
    getStudents() {
      // 注意这里请求的端口时8080代理服务器, 这个代理服务器是vue创建的
      // const oneProxyUrl = 'http://localhost:8080/mykoa/getText'; // 代理服务器值转发请求到一个服务器
      const manyProxyUrl = 'http://localhost:8080/koa/mykoa/getText'; // 代理服务器值转发请求到多个服务器(配置前缀koa)
      axios.get(manyProxyUrl)
        .then(response => {
          console.log('请求成功了', response.data);
        })
        .catch(error => {
          console.log('请求失败了', error.message);
        });
    },
    getHtml() {
      axios.get('http://localhost:8080/liveView/T01-HTML+CSS/01-HTML/09-br.html').then(
        response => {
          console.log('请求成功了', response.data);
        },
        error => {
          console.log('请求失败了', error.message);
        }
      );
    }
  },
};
</script>

<style>
</style>
