<template>
	<h2>我是About的内容</h2>
</template>

<script>
export default {
	name: 'About',
	beforeCreate() {
		console.log('About组件被创建了');
	},
	beforeDestroy() {
		console.log('About组件即将被销毁了');
	},
};
</script>