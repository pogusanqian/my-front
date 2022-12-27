<template>
	<h2>我是Home的内容</h2>
</template>

<script>
export default {
	name: 'Home',
	beforeCreate() {
		console.log('Home组件被创建了');
	},
	beforeDestroy() {
		console.log('Home组件即将被销毁了');
	},
};
</script>