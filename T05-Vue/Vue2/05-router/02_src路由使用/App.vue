<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Vue Router Demo</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 
            1. Vue中借助router-link标签实现路由的切换, router-link最终会被解析成a标签
            2. 当我们点击Home之后, Home组件就会被激活, 然后组件就会到指定的位置进行展示, 原本激活的About就会销毁(默认)
            3. active-class表示当组件激活时, router-link标签的样式, 注意不是组件的样式
            4. to表示激活那个组件, 默认是按照path配置的, 也可以使用name属性, 路由表中进行的设置
            5. 路由组件在失活时, 默认时将该组件进行了销毁; 路由组件在激活时, 进行了组件进行了组件的创建
          -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" :to="{ name: 'myHome' }">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件的呈现位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
