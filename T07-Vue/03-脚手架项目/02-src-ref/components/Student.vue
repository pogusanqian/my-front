<template>
	<div class="stu">
		<h2>姓名: {{name}}</h2>
		<h2>年龄: {{age}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				age: 23,
			}
		},
	}
</script>

<style>
	.stu{
		background-color: #bfa;
	}
</style>