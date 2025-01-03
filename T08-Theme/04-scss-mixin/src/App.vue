<template>
  <div class="header" @click="changeTheme">
    <div>Hello World</div>
    <div>Hello World</div>
    <div>Hello World</div>
    <div>Hello World</div>
  </div>
</template>

<script setup>
const changeTheme = () => document.documentElement.setAttribute('data-theme', 'theme1');
</script>

<!-- 
  优点:
    不用重新加载样式文件，在样式切换时不会有卡顿
    在需要切换主题的地方利用mixin混合绑定变量即可，不存在优先级问题
    新增或修改主题方便灵活，仅需新增或修改SCSS变量即可，经过编译后会将所有主题全部编译出来

  缺点:
    首屏加载时会牺牲一些时间加载样式资源
-->

<style scoped lang="scss">
@import './assets/css/variable.scss';
@import './assets/css/mixin.scss';

.header {
  width: 100%;
  font-size: $font_medium;
  @include bg_color();
}
</style>
