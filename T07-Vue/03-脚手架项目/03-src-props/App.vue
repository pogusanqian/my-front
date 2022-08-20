<template>
  <div id="app">
    <h1>学习Vue</h1>
    <!-- 
      如果不使用v-bind绑定, 那么传递过去的是一个23字符串
      如果传递过去的是一个引用类型, 那么子组件中修改, 那么父组件中也会同步修改, 反之依然
      注意如果再多个子组件中都传递了这个引用类型, 那么其中一个子组件修改, 就会引起其他组件属性值的变化
    -->
    <Student :propName="name" :propAge="23" :propStu="propStu"/>
    <Student propName="李四" :propAge="24" :propStu="propStu"/>
  </div>
</template>

<script>
import Student from './components/Student.vue';

export default {
  name: 'App',
  data(){
    return {
      name: '张三',
      propStu: {
        name: '秦始皇',
        age: 2000
      }
    }
  },
  components: { Student },
};
</script>

<style>
</style>
