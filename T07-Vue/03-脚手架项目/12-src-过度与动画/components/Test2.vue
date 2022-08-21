<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="Test2" appear>
      <!-- 这里的key不能少 -->
      <h1 v-show="!isShow" key="1">张三</h1>
      <h1 v-show="isShow" key="2">李四</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      isShow: true
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.Test2-enter,
.Test2-leave-to {
  transform: translateX(-100%);
}

.Test2-enter-active,
.Test2-leave-active {
  transition: 0.5s linear;
}

.Test2-enter-to,
.Test2-leave {
  transform: translateX(0);
}
</style>