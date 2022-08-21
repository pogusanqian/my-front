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
  1. 全局事件总线(GlobalEventBus):
          一种组件间的通讯方式, 适用于任意组件通信; 全局事件总线类似于是一个中转站
          例如A组件需要获取B组件传递的参数, 首先A组件先往$bus中挂载一个回调函数, 然后B组件直接调用A组件的回调函数进行传参
  2. 两点必要条件: 一任意组件都能获取到$bus, 二$bus中具有$emit, $on, $off三个方法, 进行事件的绑定触发解绑
  3. 全局事件总线的缺点: 需要维护$bus中的事件名称, 防止名称冲突; 所以当一个组件失效后, 需要将该组件挂载再$bus中的事件取消
  4. 组件通常再mount钩子中挂载回调函数, 在beforeDestroy中删除回调函数(on和off是成对出现的)
-->

<script>
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
  methods: {
    getChildData(value) {
      this.childData.push(value);
    },
  },
  mounted() {
    this.$bus.$on('sendValueToAPP', this.getChildData);
  },
  beforeDestroy() {
    this.$bus.$off('sendValueToAPP');
  }
};
</script>

<style>
</style>
