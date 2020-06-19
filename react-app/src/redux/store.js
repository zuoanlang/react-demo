// redux最核心的管理对象
import {createStore, applyMiddleware} from 'redux'
import thunk from "redux-thunk";
import {comments} from "./reducers";

// 生成一个store对象
const store = createStore(
    comments,
    applyMiddleware(thunk)//应用上异步中间件
)

export default store