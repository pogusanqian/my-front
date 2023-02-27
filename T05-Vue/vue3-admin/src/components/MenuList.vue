<!-- 递归菜单栏组件 -->
<template>
  <template v-for="item in children" :key="item.path">
    <el-sub-menu v-if="item.children?.length" :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta?.menuIcon" />
        </el-icon>
        <span>{{ item.meta?.menuTitle }}</span>
      </template>
      <MenuList :children="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.path">
      <el-icon>
        <component :is="item.meta?.menuIcon" />
      </el-icon>
      <span>{{ item.meta?.menuTitle }}</span>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { RouteRecordNormalized, RouteRecordRaw } from "vue-router";
import MenuList from "@/components/MenuList.vue";

defineProps({
  children: {
    type: Object as PropType<RouteRecordNormalized[] | RouteRecordRaw[]>,
    required: true
  }
})
</script>

