<template>
	<div class="stu">
		<h2>姓名: {{ name }}</h2>
		<h2>年龄: {{ age }}</h2>
		<button @click="sendValue">传递参数给父组件</button>
		<button @click="unbind">接触绑定事件</button>
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
			// 触发Student组件实例身上的sendValueToFather事件, 可以传递多个参数
			this.$emit('sendValueToFather', this.name);
		},
		unbind() {
			this.$off('sendValueToFather'); // 解绑一个自定义事件
			// this.$off(['sendValueToFather','sendValueToFather2']) // 解绑多个自定义事件
			// this.$off() // 解绑所有的自定义事件(慎用)
		}
	},
};
</script>

<style scoped>
.stu {
	background-color: #bfa;
}
</style>