<template>
	<div class="container">

		<Category title="游戏">
			<!-- 将插槽中的值赋给scopObj变量(父组件直接通过插槽, 获取到了子组件的值), 也可以使用{games}直接结构获取子组件通过插槽传递过来的值 -->
			<template scope="scopObj">
				<ul>
					<li v-for="(item, index) in scopObj.games" :key="index">{{ item }}</li>
				</ul>
			</template>
		</Category>

		<Category title="游戏">
			<template scope="{games}">
				<ol>
					<li style="color:red" v-for="(item, index) in games" :key="index">{{ item }}</li>
				</ol>
			</template>
		</Category>

		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
			</template>
		</Category>

	</div>
</template>

<script>
import Category from './components/Category';
export default {
	name: 'App',
	components: { Category },
};
</script>

<style scoped>
.container,
.foot {
	display: flex;
	justify-content: space-around;
}

h4 {
	text-align: center;
}
</style>
