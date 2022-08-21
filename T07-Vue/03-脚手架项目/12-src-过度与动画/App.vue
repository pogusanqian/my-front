<template>
  <div>
    <Origin />
    <Test />
    <Test2 />
    <Test3 />
  </div>
</template>

<script>
import Origin from './components/Origin.vue';
import Test from './components/Test';
import Test2 from './components/Test2';
import Test3 from './components/Test3';

export default {
  name: 'App',
  components: { Origin, Test, Test2, Test3 },
};
</script>
