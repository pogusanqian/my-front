<template>
	<div>
		<h1>人员列表</h1>
		<h3 style="color:red">Count组件求和为：{{ sum }}</h3>
		<input type="text" placeholder="请输入名字" v-model="name">
		<button @click="add">添加</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{ p.name }}</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'Person',
	data() {
		return {
			name: ''
		};
	},
	computed: {
		...mapState(['personList', 'sum'])
	},
	methods: {
		// 这里直接将逻辑的处理放到aciton中还是比较好的, 这样数据的逻辑就和组件分开了(组件只要数据就够了, 不需要数据的逻辑)
		add() {
			this.$store.commit('ADD_PERSON', {
				id: Date.now().toString(),
				name: this.name
			});

			// 这行逻辑可以保留, 因为这个name不是共有的数据
			this.name = '';
		}
	},
};
</script>
