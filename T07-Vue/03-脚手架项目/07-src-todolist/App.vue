<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList :todos="todos" :deleteTodo="deleteTodo" :reverseTodo="reverseTodo" />
        <MyFooter :todos="todos" :reverseAll="reverseAll" :clearDone="clearDone" />
      </div>
    </div>
  </div>
</template>

<!-- 
  由于todos是MyHeader组件和MyFooter组件都在使用, 所以放在App中(状态提升)
  通常而言数据在那个组件, 就在那个组件中做数据操作
  即使在子组件中用到todos并且是引用数据类型, 也不要在子组件中直接操作todos; 子组件是通过父组件传递过去的回调方法进行操作todos
 -->
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

  },
  watch: {
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
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
