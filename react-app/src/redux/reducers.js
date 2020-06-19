// 存放所有的reducer函数
// 作用：根据老的state和action返回一个新的state
// 实际发生调用

//定义初始值
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT} from "./action-types";

const initComments = [
    // {username: 'Tom', content: 'React挺好的！'},
    // {username: 'Jack', content: 'React太难了！'}
]

export function comments(state = initComments, action) {

    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state]
        case DELETE_COMMENT:
            return state.filter((comment, index) => index !== action.data)
        case RECEIVE_COMMENT:
            return action.data
        default:
            return state
    }
}
