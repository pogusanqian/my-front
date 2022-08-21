<template>
	<div class="sch">
		<h2>名称: {{ name }}</h2>
		<h2>地址: {{ address }}</h2>
		<button @click="sendValue">传递参数给父组件</button>
		<button @click="unbind">接触绑定事件</button>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data() {
		return {
			name: '河南理工大学',
			address: '河南焦作',
		};
	},
	methods: {
		sendValue() {
			this.$emit('sendValueToFather', this.name);
		},
		unbind() {
			this.$off('sendValueToFather');
		}
	},
};
</script>

<style scoped>
.sch {
	background-color: grey;
}
</style>