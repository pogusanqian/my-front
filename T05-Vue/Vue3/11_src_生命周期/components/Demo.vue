<template>
	<h2>当前求和为：{{ sum }}</h2>
<button @click="sum++">点我+1</button>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default {
	name: 'Demo',

	setup() {
		console.log('===setup===');
		// 数据
		let sum = ref(0);

		// 组合API函数要比配置先执行一步
		onBeforeMount(() => console.log('===onBeforeMount==='));
		onMounted(() => console.log('===onMounted==='));
		onBeforeUpdate(() => console.log('===onBeforeUpdate==='));
		onUpdated(() => console.log('===onUpdated==='));
		onBeforeUnmount(() => console.log('===onBeforeUnmount==='));
		onUnmounted(() => console.log('===onUnmounted==='));

		return { sum };
	},
	beforeCreate() {
		console.log('---beforeCreate---');
	},
	created() {
		console.log('---created---');
	},
	beforeMount() {
		console.log('---beforeMount---');
	},
	mounted() {
		console.log('---mounted---');
	},
	beforeUpdate() {
		console.log('---beforeUpdate---');
	},
	updated() {
		console.log('---updated---');
	},
	beforeUnmount() {
		console.log('---beforeUnmount---');
	},
	unmounted() {
		console.log('---unmounted---');
	},
};
</script>

