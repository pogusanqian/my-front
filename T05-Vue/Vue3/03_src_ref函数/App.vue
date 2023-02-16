<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h3>工作种类：{{ job.type }}</h3>
	<h3>工作薪水：{{ job.salary }}</h3>
<button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue';
export default {
	name: 'App',
	setup() {
		let name = ref('张三');
		let age = ref(18);
		let job = ref({
			type: '前端工程师',
			salary: '30K'
		});

		function changeInfo() {
			// 修改基本类型值时, 是修改了value
			name.value = '李四';
			age.value = 48;
			// 修改对象类型时, 这个value也不能省略
			job.value.type = 'UI设计师';
			job.value.salary = '60K';
		}

		return {
			name,
			age,
			job,
			changeInfo
		};
	}
};
</script>

