<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear表示初始话加载的时候就有动画效果 -->
    <transition name="Test" appear>
      <h1 v-show="isShow">Test</h1>
    </transition>
  </div>
</template>

<!-- 
  1. vue给动画做了包装处理(不需要再手动的切换动画样式), 必须使用transition标签进行包裹, 而且还必须配置name属性
  2. name属性主要是为了配置样式的, 如name叫Test, 则会自动给transition标签配置六个属性
    ${name}-enter(进入的起点), ${name}-enter-active(进入的过程), ${name}-enter-to(进入的终点) 
    ${name}-leave(离开的起点), ${name}-leave-active(离开的过程), ${name}-leave-to(离开的终点)
  3. 当添加或显示节点时, 就表示进入; 当删除/隐藏节点的时候, 就表示离开
 -->
<script>
export default {
  name: 'Test',
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

.Test-enter-active {
  animation: myKey 0.5s linear;
}

.Test-leave-active {
  animation: myKey 0.5s linear reverse;
}

@keyframes myKey {
  from {
    /* 将图像想左移动100%形成初始化图像*/
    transform: translateX(-100%);
  }

  to {
    /* 原位置形成结束图像, 可以填写0或0%*/
    transform: translateX(0px);
  }
}
</style>