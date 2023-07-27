<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
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
        <el-aside class="aside">
          <!-- router属性需要开启之后, 才能进行点击路由, 而且el-menu-item中的index用来标识路径-->
          <el-menu class="menu" default-active="/user" router background-color="#545c64">
            <MenuList :children="routes"></MenuList>
          </el-menu>
        </el-aside>
        <el-main class="main"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { getMenuList } from '@/util/viewUtil';
import MenuList from '@/components/MenuList.vue';

const routes = getMenuList(useRouter().getRoutes());
</script>

<style lang="scss" scoped>
.header {
  height: 8vh;
  background: #666;

  .logo {
    height: 8vh;
  }

  h2,
  .logout {
    height: 8vh;
    text-align: center;
    line-height: 8vh;
    color: #fff;
  }
}

.aside {
  width: 10vw;

  .menu {
    height: calc(100vh - 8vh);
  }
}

.main {
  height: calc(100vh - 8vh);
}
</style>
