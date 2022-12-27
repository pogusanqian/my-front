<template>
	<div class="sch">
		<h2>国家: {{ country }}</h2>
		<h2>名称: {{ name }}</h2>
		<h2>地址: {{ address }}</h2>
		<button @click="showName">显示名称</button>
	</div>
</template>

<!-- 
	如果混合文件和本组件中的data中都有name属性, 那么以data中的数据为准(methods等其他属性一样)
	钩子函数比较特殊, 先调用混合中的钩子函数, 然后再调用组件中的钩子函数
 -->
<script>
import { hunhe, hunhe2 } from '../mixin';
export default {
	name: 'Student',
	data() {
		return {
			name: '河南理工大学',
			address: '河南焦作',
		};
	},
	mounted() {
		console.log('Student组件的mounted函数');
	},
	mixins: [hunhe, hunhe2]
};
</script>

<style>
.sch {
	background-color: grey;
}
</style>