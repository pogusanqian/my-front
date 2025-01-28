import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  // 给所有APP中的所有容器组件分发store对象
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

/**
 * 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染App组件
 * 容器组件会自动监听store对象的变化，一旦发生变化，就会重新渲染, 所以不用再store.subscribe
 */
// store.subscribe(() => ReactDOM.render(<App />, document.getElementById('root')))
