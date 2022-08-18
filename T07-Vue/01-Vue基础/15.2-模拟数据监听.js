const data = {
	name: '张三',
	age: 23
};

Object.defineProperty(data, 'name', {
	get() {
		// 这里会循环递归调用, 导致报错
		return data.name;
	},
	set(val) {
		data.name = val;
	}
});


console.log(data.name);