import React,{Component} from 'react'
import logo from '../logo.svg'

import '../index.css'
export default class App extends Component{
    render() {
        return (
            <div>
                <img className='logo' src={logo} alt="加载中..."/>
                <p className='react_p'>React app组件</p>
            </div>
        );
    }
}

