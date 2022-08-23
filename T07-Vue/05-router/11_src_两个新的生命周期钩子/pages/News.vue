<template>
	<ul>
		<li :style="{ opacity }">欢迎学习Vue</li>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
export default {
	name: 'News',
	data() {
		return {
			opacity: 1
		};
	},

	// 这两个钩子函数是vueRouter的, 通常用于组件保存了缓存
	activated() {
		console.log('News组件被激活了');
		this.timer = setInterval(() => {
			this.opacity -= 0.01;
			if (this.opacity <= 0) this.opacity = 1;
		}, 16);
	},
	deactivated() {
		// 组件失活时, 组件并不一定进行了销毁, 例如当组件进行了缓存
		console.log('News组件失活了');
		clearInterval(this.timer);
	},
};
</script>