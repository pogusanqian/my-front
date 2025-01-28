import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = { hasError: '' }

  // 当Parent的子组件出现报错时候，会触发getDerivedStateFromError调用，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log('=========getDerivedStateFromError========', error)
    return { hasError: error }
  }

  componentDidCatch() {
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决')
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2 style={{ color: 'red' }}>子组件加载错误</h2> : <Child />}
      </div>
    )
  }
}
