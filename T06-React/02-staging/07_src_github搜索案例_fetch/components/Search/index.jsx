import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
  search = async () => {
    //获取用户的输入(连续解构赋值+重命名)
    const {
      keyWordElement: { value: keyWord }
    } = this
    //发送请求前通知List更新状态
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })
    //发送网络请求
    try {
      const response = await fetch(`/api1/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('atguigu', { isLoading: false, users: data.items })
    } catch (error) {
      console.log('请求出错', error)
      PubSub.publish('atguigu', { isLoading: false, err: error.message })
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={(c) => (this.keyWordElement = c)} type="text" placeholder="输入关键词点击搜索" />
          &nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
