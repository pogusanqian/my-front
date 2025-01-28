import React from 'react'
import ReactDOM from 'react-dom'

function Demo() {
  const myRef = React.useRef()
  const [count, setCount] = React.useState(0)

  // 三个生命周期的合集: componentDidMount() componentDidUpdate() componentWillUnmount() 
  React.useEffect(() => {
    // DidMount和DidUpdate时调用, 注意DidUpdate和useEffect的第二个参数有关, []表示的时监听那个属性, 第二个参数如果不写, 则表示监听所有属性
    let timer = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    
    // 返回值是一个函数, 相当于componentWillUnmount
    return () => {
      clearInterval(timer)
    }
  }, [])

  //加的回调
  function add() {
    //setCount(count+1) //第一种写法
    setCount((count) => count + 1)
  }

  //提示输入的回调
  function show() {
    alert(myRef.current.value)
  }

  //卸载组件的回调
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}

export default Demo
