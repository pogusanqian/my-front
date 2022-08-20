<template>
  <div id="app">
    <h1>学习Vue</h1>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  components: { Student, School },
};
</script>

<style>
</style>
