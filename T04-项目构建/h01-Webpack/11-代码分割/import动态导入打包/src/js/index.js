console.log('===index执行=====');

/**
 * 动态引入文件, 使show.js文件单独打包成一个chunk
 * webpackChunkName: 'show' 设置打包后的chunk名称, 也是文件名称
 */
import(/*webpackChunkName: 'show'*/ './show')
  .then((mod) => mod.show())
  .catch(err => console.error(err));