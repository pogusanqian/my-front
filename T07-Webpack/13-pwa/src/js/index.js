console.log('===index执行=====');


// 注册serviceWorker, 处理兼容性问题
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      // service-worker是webpack打包时, 自动生成的文件
      .register('/service-worker.js')
      .then(() => {
        console.log('sw注册成功了~');
      })
      .catch(() => {
        console.error('sw注册失败了~');
      });
  });
}