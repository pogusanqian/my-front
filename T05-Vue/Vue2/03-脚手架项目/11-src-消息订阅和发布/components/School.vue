<template>
	<div class="sch">
		<h2>名称: {{ name }}</h2>
		<h2>地址: {{ address }}</h2>
		<button @click="sendValue">传递参数给父组件</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';
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
			pubsub.publish('myMsg', this.name);
		}
	},
};
</script>

<style scoped>
.sch {
	background-color: grey;
}
</style>