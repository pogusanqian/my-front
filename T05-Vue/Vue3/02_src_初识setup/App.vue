<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>性别：{{ sex }}</h2>
	<button @click="sayHello">自我介绍</button>
	<br>
<br>
</template>

<script>
export default {
	name: 'App',
	setup() {
		// 此时的name属性并没有前端页面形成双向绑定, 需要借助于ref方法
		let name = '张三';
		let age = 18;
		let sex = '男'

		function sayHello() {
			alert(`我叫${name}，我${age}岁了，你好啊！`);
		}

		return {
			name,
			age,
			sex,
			sayHello,
		};
	}
};
</script>

