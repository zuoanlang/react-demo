// 存放所有的action creator （action工厂函数）：定义函数
// 引入状态常量
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENT} from './action-types'

// 同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment})

// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index})

// 接受参数:自用
const receiveComments = (comments) => ({type: RECEIVE_COMMENT, data: comments})

export const getComments = () => {
    return dispatch => {
        // 延迟加载
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React挺好的！'},
                {username: 'Jack', content: 'React太难了！'}
            ]
            dispatch(receiveComments(comments))
        }, 1000)
    }

}