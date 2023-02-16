<template>
	<h1>Test组件</h1>
	<h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint';
export default {
	name: 'Test',
	setup() {
		return {
			point: usePoint()
		};
	}
};
</script>