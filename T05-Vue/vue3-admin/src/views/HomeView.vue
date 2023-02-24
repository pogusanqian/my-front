<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="@/assets/logo.png" class="logo" />
          </el-col>
          <el-col :span="16">
            <h2>后台管理系统</h2>
          </el-col>
          <el-col :span="4">
            <span class="logout">退出登录</span>
          </el-col>
        </el-row>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <!-- router属性需要开启之后, 才能进行点击路由, 而且el-menu-item中的index用来标识路径-->
          <el-menu default-active="/user" class="el-menu-vertical-demo" background-color="#545c64" router>
            <el-menu-item :index="item.path" v-for="item in routes" :key="item.path">
              <el-icon>
                <component :is="item.meta.icon" />
              </el-icon>
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const routes = useRouter().getRoutes().filter((item) => item.meta.isShow);
</script>

<style lang="scss" scoped>
// el-header是element组件中的元素
.el-header {
  height: 80px;
  background: #666;

  .logo {
    height: 80px;
  }

  h2,
  .logout {
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
}

.el-menu {
  height: calc(100vh - 80px);
}
</style>
