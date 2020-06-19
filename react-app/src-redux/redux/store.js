import {createStore} from 'redux'
import {counter} from "./reducers";

// 生成一个store对象
const store = createStore(counter)
console.log(store, store.getState())

export default store