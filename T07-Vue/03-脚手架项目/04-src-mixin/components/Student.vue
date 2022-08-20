<template>
	<div class="stu">
		<h2>国家: {{ country }}</h2>
		<h2>姓名: {{name}}</h2>
		<h2>年龄: {{age}}</h2>
		<button @click="showName">显示名称</button>
	</div>
</template>

<script>
import { hunhe} from '../mixin';
	export default {
		name:'Student',
		data() {
			return {
				name:'张三',
				age: 23,
			}
		},
		mixins: [hunhe]
	}
</script>

<style>
	.stu{
		background-color: #bfa;
	}
</style>