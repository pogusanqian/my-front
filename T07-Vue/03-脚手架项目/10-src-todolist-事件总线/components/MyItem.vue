<template>
	<li>
		<label>
			<input type="checkbox" @change="reverseItem" :checked="todo.done" />
			<span v-show="!todo.isEdit">{{ todo.title }}</span>
			<!-- 注意这里使用的是v-bind绑定, 并不是使用了v-model -->
			<input v-show="todo.isEdit" :value="todo.title" @blur="itemBlur" ref="inputTitle" />
		</label>
		<button class="btn btn-danger" @click="deleteItem">删除</button>
		<button class="btn btn-edit" @click="updateDoneTitle">修改</button>
	</li>
</template>

<script>
export default {
	name: 'MyItem',
	props: ['todo'],
	methods: {
		deleteItem() {
			this.$bus.$emit('deleteTodo', this.todo);
		},
		reverseItem() {
			this.$bus.$emit('reverseTodo', this.todo);
		},
		updateDoneTitle() {
			if (this.todo.hasOwnProperty('itEdit')) {
				this.todo.isEdit = true;
			} else {
				this.$set(this.todo, 'isEdit', true);
			}
			// $nextTick 在下一次Dom更新结束后才执行回调函数
			this.$nextTick(function () {
				this.$refs.inputTitle.focus();
			});
		},
		itemBlur(e) {
			// delete this.todo.isEdit; // 这里不能进行直接删除,因为删除之后idEdit对应的setter也会删除, 导致不能渲染
			this.todo.isEdit = false;
			this.$bus.$emit('updateDoneTitle', this.todo, e.target.value);
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