import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    const { id, title } = this.props.location.state || {}

    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
      </ul>
    )
  }
}
