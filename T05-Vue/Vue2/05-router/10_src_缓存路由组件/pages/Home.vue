<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!-- 
				使用keep-alive进行路由组件的的缓存, 这样在路由组件失效时, 并不会销毁
				缓存多个组件 :include="['News','Message']"
				如果不写include就表示所有的组件都缓存
			 -->
			<keep-alive include="News">
				<router-view></router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
};
</script>