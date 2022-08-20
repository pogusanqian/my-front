<template>
	<li>
		<label>
			<!-- 注意updateTodo和deleteItem是同样的原理, 父组件传递过来的值不直接修改(即使传递过来的是一个引用对象) -->
			<!-- <input type="checkbox" v-model="todo.done" /> -->
			<input type="checkbox" @change="reverseItem" :checked="todo.done" />
			<span>{{ todo.title }}</span>
		</label>
		<button class="btn btn-danger" @click="deleteItem">删除</button>
	</li>
</template>

<script>
export default {
	name: 'MyItem',
	props: ['todo', 'deleteTodo', 'reverseTodo'],
	methods: {
		deleteItem() {
			this.deleteTodo(this.todo);
		},
		reverseItem() {
			this.reverseTodo(this.todo);
		}
	},
};
</script>


<style scoped>
li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;
}

li label {
	float: left;
	cursor: pointer;
}

li label li input {
	vertical-align: middle;
	margin-right: 6px;
	position: relative;
	top: -1px;
}

li button {
	float: right;
	display: none;
	margin-top: 3px;
}

li:before {
	content: initial;
}

li:last-child {
	border-bottom: none;
}

li:hover {
	background-color: #ddd;
}

li:hover button {
	display: block;
}
</style>