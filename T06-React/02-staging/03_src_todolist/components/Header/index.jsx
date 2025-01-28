import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleKeyUp = (event) => {
    // 判断是否是回车按键
    const { keyCode, target } = event
    if (keyCode !== 13) return

    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }

    // vue这里是通过emit进行出发
    this.props.addTodo({ id: nanoid(), name: target.value, done: false })
    target.value = ''
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
