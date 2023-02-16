<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
<button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>
<!-- 
setup方法的参数
		props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
		context：上下文对象
			- attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于this.$attrs
			- slots: 收到的插槽内容, 相当于this.$slots
			- emit: 分发自定义事件的函数, 相当于 this.$emit
-->
<script>
import { reactive } from 'vue';
export default {
	name: 'Demo',
	props: ['msg', 'school'],
	emits: ['hello'],

	setup(props, context) {
		let person = reactive({
			name: '张三',
			age: 18
		});

		function test() {
			context.emit('hello', 666);
		}

		return {
			person,
			test
		};
	}
};
</script>

