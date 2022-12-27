<template>
  <div id="app">
    <h1 ref="title">学习Vue</h1>
    <Student ref="sch" /><br>
    <button @click="getRef">获取元素</button>
  </div>
</template>
<!-- 
  ref可以定位到唯一的元素, 类似于id
  html表中获取的是真实的dom元素, 组件标签中获取的是组件实例对象
 -->
<script>
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: { Student },
  methods: {
    getRef() {
      console.log(this.$refs.title);
      console.log(this.$refs.sch);
    }
  },
};
</script>

<style>
</style>
