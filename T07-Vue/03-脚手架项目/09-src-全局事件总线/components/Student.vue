<template>
	<div class="stu">
		<h2>姓名: {{ name }}</h2>
		<h2>年龄: {{ age }}</h2>
		<button @click="sendValue">传递参数给父组件</button>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '张三',
			age: 23
		};
	},
	methods: {
		sendValue() {
			this.$bus.$emit('sendValueToAPP', this.name);
		},
	},
};
</script>

<style scoped>
.stu {
	background-color: #bfa;
}
</style>