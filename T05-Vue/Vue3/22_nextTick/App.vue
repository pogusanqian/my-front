<template>
  <button id="counter" @click="increment">{{ count }}</button>
</template>

<!-- 
	vue的数据绑定并不是数据更改后就立即进行dom渲染, 而是先将更改的数据放到一个队列中; 
	当数据都变化完后, 然后再一次性更改, 这样做的好处是只渲染一次dom

	nextTick就是等待本次的数据渲染到dom之后, 属于一个钩子函数; 也就是说他的时机执行在因为本次数据更改导致的onUpdated之后
 -->
<script setup>
import { ref, nextTick, onBeforeUpdate, onUpdated } from 'vue';

const count = ref(0);
onBeforeUpdate(() => console.log('===onBeforeUpdate==='));
onUpdated(() => console.log('===onUpdated==='));

async function increment() {
  count.value++;
  // DOM 还未更新
  console.log(count.value, document.getElementById('counter').textContent); // 0

  await nextTick();
  // DOM 此时已经更新
  console.log(count.value, document.getElementById('counter').textContent); // 1
}
</script>
