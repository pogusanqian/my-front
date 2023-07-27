console.log('===index执行=====');

/**
 * 正常加载: 可以认为是并行加载(同一时间加载多个文件), 效率较低
 * 懒加载: 当文件需要使用时才加载; 懒加载的实现是靠动态import引入, 动态引入代码会出现js代码的分割
 * 预加载: 等其他资源加载完毕，浏览器空闲了，再偷偷加载资源; webpackPrefetch: 设置预加载
 */
document.getElementById('btn').onclick = () => {
  import(/*webpackChunkName: 'show', webpackPrefetch: true*/ './show').then((mod) => mod.show());
};
