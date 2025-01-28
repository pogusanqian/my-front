import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))
// 直接使用redux监听所有组件的state状态值更改, 由于有diff算法, 所以不会导致大面积重新渲染dom
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
