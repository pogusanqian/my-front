import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {
  render() {
    // 接收search参数
    const { search } = this.props.location
    const { id, title } = qs.parse(search.slice(1))

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
      </ul>
    )
  }
}
