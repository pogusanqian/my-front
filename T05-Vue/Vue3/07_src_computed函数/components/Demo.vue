<template>
	<h1>一个人的信息</h1>
	姓：<input type="text" v-model="person.firstName"><br>
	名：<input type="text" v-model="person.lastName"><br>
  全名：<input type="text" v-model="person.fullName"><br>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
	name: 'Demo',
	setup() {
		let person = reactive({
			firstName: '张',
			lastName: '三'
		});

		// 计算属性只有读时的简写
		// person.fullName = computed(() => person.firstName + '-' + person.lastName);

		// 计算属性读写完整写法
		person.fullName = computed({
			get() {
				return person.firstName + '-' + person.lastName;
			},
			set(value) {
				const nameArr = value.split('-');
				person.firstName = nameArr[0];
				person.lastName = nameArr[1];
			}
		});

		return {
			person
		};
	}
};
</script>

