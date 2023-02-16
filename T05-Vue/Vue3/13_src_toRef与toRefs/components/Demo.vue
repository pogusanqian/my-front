<template>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
<button @click="job.j1.salary++">涨薪</button>
</template>

<!-- 
	toRef: 创建一个ref对象，其value值指向reactive对象中的某个属性
	toRefs: 将一个对象的所有属性都转换成ref对象
 -->
<script>
import { reactive, toRef, toRefs } from 'vue';
export default {
	name: 'Demo',
	setup() {
		const person = reactive({
			name: '张三',
			age: 18,
			job: { j1: { salary: 20 } }
		});

		return {
			name: toRef(person, 'name'),
			age: toRef(person, 'age'),
			job: toRef(person, 'job'),
			// ...toRefs(person)
		};
	}
};
</script>

