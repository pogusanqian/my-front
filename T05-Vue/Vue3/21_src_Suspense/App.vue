<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child />
			</template>
			<template v-slot:fallback>
				<h3>稍等，加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
// 直接静态引入
// import Child from './components/Child';

// 异步引入
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(() => import('./components/Child'));
export default {
	name: 'App',
	components: { Child },
};
</script>

<style>
.app {
	background-color: gray;
	padding: 10px;
}
</style>