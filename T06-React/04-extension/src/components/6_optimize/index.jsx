import React, { PureComponent } from 'react'
import './index.css'

// PureComponent: 父组件更新时, 子组件数据没有变, 子组件变不刷新
// 另外this.setState({}) 如果使用Component时会刷新组件, 使用PureComponent便不刷新
export default class Parent extends PureComponent {
  state = { carName: '奔驰c36' }

  changeCar = () => {
    // 这种语法在PureComponent中不生效, 但是在Component中会生效
    // const obj = this.state
    // obj.carName = '迈巴赫'
    // this.setState(obj)

    this.setState({ carName: '迈巴赫' })
  }

  render() {
    console.log('Parent---render')
    const { carName } = this.state
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{carName}</span>
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('Child---render')
    return (
      <div className="child">
        <h3>我是Child组件</h3>
      </div>
    )
  }
}
