<template>
	<ul class="todo-main">
		<transition-group name="todo" appear>
			<MyItem v-for="item of todos" :todo="item" :key="item.id" />
		</transition-group>
	</ul>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
	name: "MyList",
	components: { MyItem },
	props: ['todos']
};
</script>

<style scoped>
.todo-main {
	margin-left: 0px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0px;
}

.todo-enter-active {
	animation: atguigu 0.5s linear;
}

.todo-leave-active {
	animation: atguigu 0.5s linear reverse;
}

@keyframes atguigu {
	from {
		transform: translateX(100%);
	}

	to {
		transform: translateX(0px);
	}
}
</style>