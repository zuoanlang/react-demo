import React from 'react'

const allMessages = [
    {id: 1, title: 'message001', content: 'XX1'},
    {id: 2, title: 'message002', content: 'XX1'},
    {id: 3, title: 'message003', content: 'XX1'},
    {id: 4, title: 'message004', content: 'XX1'}
]

export default function MessageDetail(props) {

    console.log('---',props)
    // 得到请求参数中的id
    const {id} = props.match.params;
    // debugger
    //查询对应的message
    // 找到匹配的第一个
    let message = allMessages.find((m) => m.id === id*1)
    return (
        <ul>
            <li>ID:{message.id}</li>
            <li>Title:{message.title}</li>
            <li>Content:{message.content}</li>
        </ul>
    )
}