import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    // 接收state参数
    const { id, title } = this.props.location.state || {}

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
      </ul>
    )
  }
}
