// 加载这个库时, 便会执行这个方法
(function () {
  window.$ = function () {
    console.log('my lib $()...');
  };
})();
