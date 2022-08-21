<template>
  <div id="app">
    <h2>APP</h2>
    <ul>
      <li v-for="item in childData">{{ item }}</li>
    </ul>
    <Student />
    <School />
  </div>
</template>

<!-- 
    1. 消息订阅与发布: 一种组件间通信的方式, 适用于任意组件间通信, 类似于全局事件总线
    2. 需要使用第三方包pubsub-js实现
-->

<script>
import pubsub from 'pubsub-js';
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      childData: []
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe('myMsg', (msgName, data) => {
      this.childData.push(data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  }
};
</script>

<style>
</style>
