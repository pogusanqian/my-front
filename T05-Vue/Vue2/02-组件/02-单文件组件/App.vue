<template>
	<div>
		<!-- 使用组件 -->
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
//引入组件
import School from './School.vue';
import Student from './Student.vue';

export default {
	name: 'App',
	// 将子组件挂在到父组件中(注册组件)
	components: {
		School,
		Student
	}
};
</script>
