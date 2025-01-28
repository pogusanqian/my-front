import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // 接收params参数
    const { id, title } = this.props.match.params

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
      </ul>
    )
  }
}
