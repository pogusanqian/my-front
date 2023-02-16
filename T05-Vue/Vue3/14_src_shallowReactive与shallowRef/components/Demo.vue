<template>
	<h4>当前的年龄值是：{{ stu.age }}</h4>
	<button @click="stu = { age: 100 }">整体替换</button>
	<button @click="stu.age++">添加</button>
	<hr>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}K</h2>
	<button @click="name += '~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue';
export default {
	name: 'Demo',
	setup() {
		// 只考虑第一层数据的响应式; salary修改之后并不会显示在前端页面, 但是如果再次更改name值, 那么salary便会起作用了
		let person = shallowReactive({
			name: '张三',
			age: 18,
			job: { j1: { salary: 20 } }
		});

		// 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换
		let stu = shallowRef({ age: 0 });
		return {
			stu,
			...toRefs(person)
		};
	}
};
</script>

