//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
// 控制整个单页面的路由跳转
import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
