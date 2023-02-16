<template>
	<div class="son">
		<h3>Son组件{{ car }}</h3>
	</div>
</template>

<script>
import { inject } from 'vue';
export default {
	name: 'Son',
	setup() {
		return {
			car: inject('car')
		};
	}
};
</script>

<style>
.son {
	background-color: orange;
	padding: 10px;
}
</style>