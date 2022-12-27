<template>
  <div>
    <button @click="myClick">显示/隐藏</button>
    <!-- 如果直接使用v-show的话, 当元素隐藏时, 元素隐藏的动画效果还没有出来, 元素就已经隐藏了 -->
    <!-- <h1 v-show="isShow" :class="classObj">Hello World</h1> -->
    <h1 :class="classObj">Origin</h1>
  </div>
</template>

<script>
export default {
  name: 'Origin',
  data() {
    return {
      isShow: true,
      classObj: {
        come: true,
        go: false,
      }
    };
  },
  methods: {
    myClick() {
      this.isShow = !this.isShow;
      this.classObj.come = !this.classObj.come;
      this.classObj.go = !this.classObj.go;
    }
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

.come {
  animation: come 0.5s linear forwards;
}

.go {
  animation: go 0.5s linear forwards;
}

@keyframes come {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}

@keyframes go {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>