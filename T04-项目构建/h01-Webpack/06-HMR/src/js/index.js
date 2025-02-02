import print from './print'
import '../css/iconfont.css'
import '../css/index.less'

console.log('index.js文件被加载了')

if (module.hot) {
  // 方法会监听print.js文件的变化, 一旦发生变化, 其他模块不会重新打包构建
  module.hot.accept('./print.js', () => console.log('======='))
}
