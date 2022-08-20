<template>
	<div class="backgroundcolor">
		<h2>名称: {{ name }}</h2>
		<h2>名称: {{ address }}</h2>
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
};
</script>

<!-- 
	scoped表示此样式只在组件中生效, 原理是在组件中添加了一个data属性 .backgroundcolor[data-v-04c21a42]
	如果没有使用scoped限制样式范围, 那么谁的组件最后加载, 谁的样式起作用
	lang如果less的时候, 下载的less-loader不要是最新的, 因为vue2中使用webpack的版本不是最新的
-->
<style scoped lang="less">
.backgroundcolor {
	background-color: grey;
}
</style>