/**
 * 添加样式
 * @param {*} elementObj 
 * @param {*} className 
 */
function addClass(elementObj, className) {
  if (!new RegExp(className, 'g').test(elementObj.className)) {
    elementObj.className = `${elementObj.className} ${className}`;
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