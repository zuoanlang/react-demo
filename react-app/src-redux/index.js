import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/app'
import store from "./redux/store";

function render() {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}

// 初始化渲染
render()

//订阅
store.subscribe(render)
