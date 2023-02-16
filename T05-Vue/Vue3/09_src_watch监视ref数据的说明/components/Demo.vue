<template>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>薪资：{{ person.job.j1.salary }}K</h2>
	<button @click="person.name += '~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import { ref, reactive, watch } from 'vue';
export default {
	name: 'Demo',
	setup() {
		let person = ref({
			name: '张三',
			age: 18,
			job: { j1: { salary: 20 } }
		});

		// 此时deep起作用, 但是仍然无法监听到oldValue
		watch(person, (newValue, oldValue) => console.log('person的值变化了', newValue, oldValue), { deep: false });

		return { person };
	}
};
</script>

