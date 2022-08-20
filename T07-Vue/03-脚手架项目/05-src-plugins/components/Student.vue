<template>
	<div class="stu">
		<h2>姓名: {{name | mySlice}}</h2>
		<h2>年龄: {{age}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Student',
		data() {
			return {
				name:'狗.德川家康.薛定谔.保留.猫',
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