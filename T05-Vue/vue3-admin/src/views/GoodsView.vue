<template>
  <div>
    <el-form :inline="true" :model="queryGoods" class="demo-form-inline">
      <el-form-item label="标题">
        <el-input v-model="queryGoods.title" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="详情">
        <el-input v-model="queryGoods.introduce" placeholder="请输入" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="goodsList" stripe border style="width: 100%">
      <el-table-column prop="id" label="主键" />
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="introduce" label="详情" />
      <el-table-column prop="operator" label="操作者" />
      <el-table-column prop="createTime" label="修改时间" />
      <el-table-column prop="updateTime" label="创建时间" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { GoodsData } from '@/type/goods';
import request from '@/request';

export default defineComponent({
  setup() {
    const data = reactive(new GoodsData());
    request.get('/goods').then((res) => {
      data.goodsList = res.data.rows;
    });
    const onSubmit = () => {
      console.log('=========');
    };
    return { ...toRefs(data), onSubmit };
  }
});
</script>

<style scoped></style>
