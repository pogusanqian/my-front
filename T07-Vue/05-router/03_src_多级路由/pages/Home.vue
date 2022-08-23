<template>
	<div>
		<h2>Home组件内容</h2>
		<div>
			<ul class="nav nav-tabs">
				<li>
					<!-- 这里直接配置了子级路由 -->
					<router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
					<router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
				</li>
			</ul>
			<!-- 这里配置的子级路由组件的展示 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
};
</script>