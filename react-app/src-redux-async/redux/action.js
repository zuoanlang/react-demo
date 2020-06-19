/**/
import {INCREMENT, DECREMENT} from '../redux/action-types'

// 1.增加
export const increment = (number) => ({type: INCREMENT, data: number})

// 2.减少
export const decrement = (number) => ({type: DECREMENT, data: number})

// 3.异步
export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(increment(number))
        },1000)
    }

}