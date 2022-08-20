<template>
	<ul class="todo-main">
		<MyItem v-for="item of todos" :todo="item" :key="item.id" :deleteTodo="deleteTodo" :reverseTodo="reverseTodo" />
	</ul>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
	name: "MyList",
	components: { MyItem },
	props: ['todos', 'deleteTodo', 'reverseTodo',]
};
</script>

<style scoped>
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
}
</style>