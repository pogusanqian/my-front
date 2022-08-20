<template>
	<div class="todo-footer">
		<label>
			<input type="checkbox" v-model="isAllCheck" />
		</label>
		<span>
			<span>已完成{{ todos.filter(item => item.done).length }}</span> / 全部{{ todos.length }}
		</span>
		<button class="btn btn-danger" @click="clear">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	props: ['todos', 'reverseAll', 'clearDone'],
	methods: {
		clear() {
			this.clearDone();
		}
	},
	computed: {
		isAllCheck: {
			get() { // 父组件影响子组件的值
				return this.todos.every(item => item.done);
			},
			set(value) { // 子组件影响父组件的值
				this.reverseAll(value);
			}
		}
	}
};
</script>

<style scoped>
.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;
}

.todo-footer label {
	display: inline-block;
	margin-right: 20px;
	cursor: pointer;
}

.todo-footer label input {
	position: relative;
	top: -1px;
	vertical-align: middle;
	margin-right: 5px;
}

.todo-footer button {
	float: right;
	margin-top: 5px;
}
</style>