/**
 *  index.js时webpack打包的起始文件
 *  打包命令: webpack ./src/index.js -o ./build --mode=development/production
 */

// 正常来讲import只能在在<script type="module">标签中引用, 但是现在webpack可以自动打包
import data from './data.json'

// webpack不能直接引入css资源, 可以通过配置文件配置loader进行解析, 然后再打包
import './index.css'
import './index.less'
import './iconfont.js'

console.log('好好学习, 天天向上')
console.log(data)

const element = document.createElement('h2')
element.innerText = 'Hello World'
