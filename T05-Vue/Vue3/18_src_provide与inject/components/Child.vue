<template>
	<div class="child">
		<h3>Child组件{{ car }}</h3>
		<hr>
		<Son />
	</div>
</template>

<script>
import { inject } from 'vue';
import Son from './Son.vue';
export default {
	name: 'Child',
	components: { Son },
	setup() {
		return {
			car: inject('car')
		};
	}
};
</script>

<style>
.child {
	background-color: skyblue;
	padding: 10px;
}
</style>