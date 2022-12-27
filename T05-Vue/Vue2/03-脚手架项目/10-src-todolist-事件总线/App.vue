<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList :todos="todos" />
        <MyFooter :todos="todos" />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  name: 'App',
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter(item => item.id !== todo.id);
    },
    reverseTodo(todo) {
      todo.done = !todo.done;
    },
    reverseAll(done) {
      this.todos.forEach(item => item.done = done);
    },
    clearDone() {
      this.todos = this.todos.filter(item => !item.done);
    },
    updateDoneTitle(todo, title) {
      todo.title = title;
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
  },
  mounted() {
    this.$bus.$on('addTodo', this.addTodo);
    this.$bus.$on('deleteTodo', this.deleteTodo);
    this.$bus.$on('reverseTodo', this.reverseTodo);
    this.$bus.$on('reverseAll', this.reverseAll);
    this.$bus.$on('clearDone', this.clearDone);
    this.$bus.$on('updateDoneTitle', this.updateDoneTitle);
  },
  beforeDestroy() {
    this.$bus.$off(['addTodo', 'deleteTodo', 'reverseTodo', 'reverseAll', 'clearDone', 'updateDoneTitle']);
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
  margin: 0 5px;
}

.btn-edit {
  color: #fff;
  background-color: #3e5bdf;
  border: 1px solid #1825e2;
  margin: 0 5px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
