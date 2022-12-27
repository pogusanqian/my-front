/**
 * 添加样式
 * @param {*} elementObj 
 * @param {*} className 
 */
function addClass(elementObj, className) {
	if (!new RegExp(className, 'i').test(elementObj.className)) {
		elementObj.className = `${elementObj.className} ${className}`;
	}
}

/**
 * 删除样式
 * @param {*} elementObj 
 * @param {*} className 
 */
function deleteClass(elementObj, className) {
	elementObj.className = elementObj.className.replace(new RegExp(className, 'i'), '').replace(/ +/g, ' ');
}

/**
 * 切换样式, 如果有这个样式就删除, 如果没有就添加
 * @param {*} elementObj 
 * @param {*} className 
 */
function toggleClass(elementObj, className) {
	if (new RegExp(className, 'i').test(elementObj.className)) {
		deleteClass(elementObj, className);
	} else {
		addClass(elementObj, className);
	}
}

/**
 * 重置样式
 * @param {*} elementObj 
 * @param {*} className 
 */
function resetClass(elementObj, className) {
	elementObj.className = className;
}

/**
 * 渐变移动效果函数
 * 之所以没有使用transition进行渐变, 是因为transition需要有一个初始有效值
 * @param {*} elementObj 要执行动画的对象
 * @param {*} attr 要执行动画的样式，比如：left top width height
 * @param {*} target 执行动画的目标位置
 * @param {*} speed 移动的速度, 只传递正数即可
 * @param {*} callback 回调函数，这个函数将会在动画执行完毕以后执行
 */
function transitionMove(elementObj, attr, target, speed, callback) {
	// 防止一个元素上有多个定时器在运行
	clearInterval(elementObj.timer);
	// 判断速度的正负值
	const current = parseInt(getComputedStyle(elementObj)[attr]);
	if (current > target) speed = -Math.abs(speed);
	//开启一个定时器，用来执行动画效果
	elementObj.timer = setInterval(function () {
		const oldValue = parseInt(getComputedStyle(elementObj)[attr]);
		let newValue = oldValue + speed;
		// 当(target - current) / speed有余数时
		if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
			newValue = target;
		}
		elementObj.style[attr] = newValue + "px";
		if (newValue == target) {
			clearInterval(elementObj.timer);
			callback && callback();
		}
	}, 30);
}