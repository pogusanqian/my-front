import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

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

const mutations = {
	JIA(state, value) {
		state.sum += value;
	},
	JIAN(state, value) {
		state.sum -= value;
	}
};

const state = {
	sum: 0,
};

// getters相当于是组件中的计算属性, 注意不要再这里直接修改state的值
const getters = {
	// 返回给组件的是mySum属性
	mySum(state) {
		return state.sum;
	},

	// 返回给组件的是getMySum方法
	getMySum: (state) => (name, sex) => {
		return `${state.sum}_${name}_${sex}`;
	},
};

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state,
	getters
});