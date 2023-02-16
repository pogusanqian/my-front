<template>
	<h2>当前求和为：{{ sum }}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{ msg }}</h2>
	<button @click="msg += '！'">修改信息</button>
	<hr>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>薪资：{{ person.job.j1.salary }}K</h2>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watchEffect } from 'vue';
export default {
	name: 'Demo',
	setup() {
		let sum = ref(0);
		let msg = ref('你好啊');
		let person = reactive({
			name: '张三',
			age: 18,
			job: { j1: { salary: 20 } }
		});

		// 这里用到了sum和salary属性, 那么当这两个属性发生变化时, 便会触发watchEffect函数
		// 注意ref代理的对象, 需要使用value属性才能被监听到
		watchEffect(() => console.log(sum.value, person.job.j1.salary));

		return {
			sum,
			msg,
			person
		};
	}
};
</script>

