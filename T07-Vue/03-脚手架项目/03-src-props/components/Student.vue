<template>
	<div class="stu">
		<h2>姓名: {{ name }}</h2>
		<h2>年龄: {{ age }}</h2>
		<button @click="addAge">年龄加一</button>
	</div>
</template>

<!-- 
	props是只读的, Vue底层会监测你对props的修改, 如果进行了修改, 就会发出警告
	若业务需求确实需要修改, 那么请复制props的内容到data中一份, 然后去修改data中的数据()
	如果data和props中都有name属性, 同样也会发出警告
 -->
<script>
export default {
	name: 'Student',
	data() {
		return {
			name: this.propName,
			// 没有使用props接收的属性, 可以从$attrs属性中获取; 如果被props接收了, 则$attrs中就没有这个只
			age: this.$attrs.propAge,
			stu: this.propStu
		};
	},
	methods: {
		addAge() {
			this.age++;
		}
	},
	// 简单接收
	props: ['propName'],

	// 对数据类型做限制
	// props: {
	// 	propName: String,
	// 	propAge: Number,
	// }

	// props: {
	// 	propName: {
	// 		type: String,
	// 		required: true,
	// 	},
	// 	propAge: {
	// 		type: Number,
	// 		default: 23,
	// 	},
	// 	propStu: {
	// 		typeof: Object,
	// 		default: {}
	// 	}
	// }
};
</script>

<style>
.stu {
	background-color: #bfa;
}
</style>