// es6引入的模块是单实例模块, 所以此处的vue对象和main.js文件中引入的vue是同一个
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * actions: 用于响应组件中的动作(相当于service)
 * actions通常调用后端的api获取数据, 异步逻辑都应该封装到action里面
 */
const actions = {
	jiaOdd(context, value) {
		if (context.state.sum % 2) {
			context.commit('JIA', value);
		}
	},
	jiaWait(context, value) {
		setTimeout(() => {
			context.commit('JIA', value);
		}, 500);
	}
};

/**
 * mutations: 用于操作数据(相当于Dao), mutation是更改状态的唯一方法, 并且这个过程是同步的
 */
const mutations = {
	JIA(state, value) {
		state.sum += value;
	},
	JIAN(state, value) {
		state.sum -= value;
	}
};

/**
 * state: 用于存储数据(相当于数据库)
 * Vuex通过Vue的插件系统将store实例从根组件中注入到所有的子组件里(注意不是Vue构造函数的原型上), 且子组件能通过this.$store访问到
 */
const state = {
	sum: 0, //当前的和
};

/**
 * 在创建store实例的时候, 需要先在vue中引入vuex
 * store数据发生改变后, 调用render函数(vuex自动调用), 重新解析了组件, 然后就会造成dom渲染
 */
export default new Vuex.Store({
	actions,
	mutations,
	state,
});