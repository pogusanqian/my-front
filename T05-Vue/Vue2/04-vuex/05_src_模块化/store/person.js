import axios from 'axios';

export default {
	namespaced: true,
	actions: {
		addPersonWang(context, value) {
			if (value.name.indexOf('王') === 0) {
				context.commit('ADD_PERSON', value);
			} else {
				alert('添加的人必须姓王！');
			}
		},
		addPersonServer(context) {
			axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
				response => {
					context.commit('ADD_PERSON', { id: Date.now().toString(), name: response.data });
				},
				error => {
					alert(error.message);
				}
			);
		}
	},
	mutations: {
		ADD_PERSON(state, value) {
			state.personList.unshift(value);
		}
	},
	state: {
		personList: [
			{ id: '001', name: '张三' }
		]
	},
	getters: {
		firstPersonName(state) {
			return state.personList[0].name;
		}
	},
};