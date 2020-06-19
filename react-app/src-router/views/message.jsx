import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import MessageDetail from "./message-detail";
import MyNavLink from "../component/MyNavLink";

export default class message extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        //模拟发送ajax请求模拟发送数据
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message001'},
                {id: 2, title: 'message002'},
                {id: 3, title: 'message003'},
                {id: 4, title: 'message004'}
            ]
            // 更新状态
            this.setState({messages})
        }, 100)
    }

    render() {

        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((m, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${m.id}`}>{m.title}</MyNavLink>
                            </li>
                        ))
                    }
                </ul>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>


        );
    }
}

