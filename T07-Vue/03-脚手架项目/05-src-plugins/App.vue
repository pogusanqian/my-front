<template>
  <div id="app">
    <h1>学习Vue</h1>
    <Student /><br>
  </div>
</template>

<script>
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: { Student },
};
</script>

<style>
</style>
