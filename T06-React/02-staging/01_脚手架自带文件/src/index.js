import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// ReactDOM.render函数只执行一次就行了, 这个是一个覆盖操作的方法
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// 记录页面性能
reportWebVitals()
