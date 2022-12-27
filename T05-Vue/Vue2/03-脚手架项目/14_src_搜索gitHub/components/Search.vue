<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyWord" />&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Search',
	data() {
		return {
			keyWord: ''
		};
	},
	methods: {
		searchUsers() {
			// 请求成功就渲染列表, 失败就清空列表
			axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
				.then(response => this.$bus.$emit('updateListData', { isLoading: false, errMsg: '', users: response.data.items, isFirst: false }))
				.catch(error => this.$bus.$emit('updateListData', { isLoading: false, errMsg: error.message, users: [], isFirst: false }));
		}
	},
};
</script>
