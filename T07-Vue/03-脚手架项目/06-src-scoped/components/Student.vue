<template>
	<div class="backgroundcolor">
		<h2>姓名: {{ name }}</h2>
		<h2>年龄: {{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			age: 23,
		};
	},
};
</script>

<style scoped>
.backgroundcolor {
	background-color: #bfa;
}
</style>