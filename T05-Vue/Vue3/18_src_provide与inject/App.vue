<template>
	<div class="app">
		<h3>APP组件{{ name }}--{{ price }}</h3>
		<Child />
	</div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue';
import Child from './components/Child.vue';
export default {
	name: 'App',
	components: { Child },
	setup() {
		let car = reactive({ name: '奔驰', price: '40W' });
		// 组合式传递值, 可以代替propos
		provide('car', car);
		return { ...toRefs(car) };
	}
};
</script>

<style>
.app {
	background-color: gray;
	padding: 10px;
}
</style>