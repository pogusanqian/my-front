<template>
  <div v-loading="loadingFlag">
    <el-form :inline="true" :model="params">
      <el-form-item label="名称">
        <el-input v-model="params.name" />
      </el-form-item>
      <el-form-item label="编码">
        <el-input v-model="params.code" />
      </el-form-item>
      <el-form-item>
        <el-button @click="query">查询</el-button>
        <el-button type="primary" @click="showEditPage(null)">添加</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" stripe border max-height="675px" header-row-class-name="my-table-titile">
      <el-table-column prop="id" label="主键" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="fullName" label="全名" />
      <el-table-column prop="code" label="编码" />
      <el-table-column prop="pinYin" label="拼音" />
      <el-table-column prop="operator" label="修改者" />
      <el-table-column prop="updateTime" label="创建时间" />
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button type="primary" @click="showEditPage(scope.row.id)">修改</el-button>
          <el-button type="danger" @click="destory(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination class="patination" layout="jumper, next, pager, prev, sizes, total" :page-sizes="pageSizes"
      v-model:current-page="currentPage" v-model:page-size="pageSize" :total="total" @size-change="query"
      @current-change="query" />
  </div>

  <el-dialog v-model="dialogFlag" align-center>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="全名" prop="fullName">
        <el-input v-model="form.fullName" />
      </el-form-item>
      <el-form-item label="编码" prop="code">
        <el-input v-model="form.code" />
      </el-form-item>
      <el-form-item label="拼音" prop="pinYin">
        <el-input v-model="form.pinYin" />
      </el-form-item>
      <el-form-item label="操作者" prop="operator">
        <el-input v-model="form.operator" />
      </el-form-item>
      <el-form-item label-width="40%">
        <el-button size="large" type="primary" @click="editData">提交</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
import axiosUtil from '@/util/axiosUtil';
import CityMap from '@/type/CityMap';
import { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';

// 查询路径
const url = '/dbhub/cityMap';
// loading加载表示
let loadingFlag = $ref(false);
// 表格数据
let tableData = $ref<CityMap[]>();
// 数据总数
let total = $ref(0);
// 当前页
let currentPage = $ref(1);
// 页数条数
let pageSize = $ref(10);
// 分页种类
let pageSizes = [10, 50, 100];
// 查询参数
let params = $ref<Record<string, string | number>>({ name: '', code: '' });
// 是否是编辑页
let isEdit = false;
let editId = 0;

// 编辑页数据
const formRef = $ref<FormInstance>();
let dialogFlag = $ref(false);
const originForm = {
  name: '',
  fullName: '',
  code: '',
  pinYin: '',
  operator: '',
};
let form = $ref<CityMap>(JSON.parse(JSON.stringify(originForm)));
const rules = {
  name: [
    { required: true, message: '请输入城市名称', trigger: 'blur' },
  ],
  fullName: [
    { required: true, message: '请输入全名', trigger: 'blur' },
  ],
  code: [
    { required: true, message: '请输入城市编码', trigger: 'blur' },
  ],
  pinYin: [
    { required: true, message: '请输入拼音', trigger: 'blur' },
  ],
  operator: [
    { required: true, message: '请输入操作者', trigger: 'blur' },
  ]
};

// 初始化查询数据
query();

async function showEditPage(id: number | null) {
  if (id) {
    const { data } = await axiosUtil.get(`${url}/${id}`);
    form = data;
    editId = id;
    isEdit = true;
  }
  dialogFlag = true;
}

/**
 * 查询数据方法
 */
async function query() {
  try {
    // loading加载
    loadingFlag = true;
    // 补充上page和pageSize字段
    params.page = currentPage;
    params.pageSize = pageSize;
    // 将params中为空的数据进行去掉
    for (const [key, value] of Object.entries(params)) {
      if (value === '' || value === null || value === undefined) {
        delete params[key];
      }
    }
    // 获取数据
    const res = await axiosUtil.get(url, { params });
    // 渲染表格和总数量
    total = res.data.count;
    tableData = res.data.rows;
    loadingFlag = false;
  } catch (err) {
    loadingFlag = false
  }
}

/**
 * 添加数据
 */
async function editData() {
  try {
    loadingFlag = true;
    if (isEdit) {
      await axiosUtil.put(`${url}/${editId}`, form);
      editId = 0;
      isEdit = false;
    } else {
      await axiosUtil.post(url, form);
    }
    // 清空form数据
    form = JSON.parse(JSON.stringify(originForm));
    // 关闭dialogFlag
    dialogFlag = false;
    await query();
    // 弹出提示消息
    ElMessage.success('修改数据成功');
    loadingFlag = false;
  } catch (err) {
    loadingFlag = false
  }
}

/**
 * 删除数据
 */
async function destory(id: number) {
  await axiosUtil.delete(`${url}/${id}`);
  await query();
}

</script>

<style lang="scss" scoped>
.patination {
  margin-top: 30px;
  margin-right: 80px;
  flex-direction: row-reverse;
}
</style>

<style>
/* header-row-class-name使用class样式的时候, 不能添加scoped隔离 */
.my-table-titile {
  font-size: 20px;
}
</style>