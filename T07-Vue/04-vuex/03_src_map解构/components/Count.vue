<template>
	<div>
		<h1>当前求和为：{{ sum }}</h1>
		<h3>当前求和放大10倍为：{{ bigSum }}</h3>
		<h3>我在{{ school }}，学习{{ subject }}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
	name: 'Count',
	data() {
		return {
			n: 1,
		};
	},
	computed: {
		...mapState(['sum', 'school', 'subject']),
		...mapGetters(['bigSum'])
	},
	methods: {
		// 注意这里解构之后一定要再调用的地方传递参数, 不然会将事件传递过去
		...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
		...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' })
	},
	mounted() {
		// 将state中的sum属性, 读取成sum属性(注意sum是一个计算方法, 不是直接的一个值)
		console.log(mapState(['sum', 'school', 'subject']));

		// 按照指定key读取state中的属性
		console.log(mapState({ he: 'sum', xuexiao: 'school' }));
	},
};
</script>

<style lang="css">
button {
	margin-left: 5px;
}
</style>
