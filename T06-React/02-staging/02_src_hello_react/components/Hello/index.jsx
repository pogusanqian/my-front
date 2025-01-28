import React, { Component } from 'react'
// module使用的css模块组件化
import hello from './index.module.css'

export default class Hello extends Component {
  render() {
    return <h2 className={hello.title}>Hello,React!</h2>
  }
}
