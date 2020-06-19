import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Counter extends Component {


    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    increment = () => {
        // 1.得到选择的增量
        let number = this.select.value * 1
        // 2.get 原本的count状态
        // const count = this.state.count + number
        // 3.计算并并更新状态
        // this.setState({count})
        // 调用store更新状态
        // this.props.store.dispatch(actions.increment(number))
        this.props.increment(number)
    }

    decrement = () => {
        // 1.得到选择的增量
        let number = this.select.value * 1
        // 2.get 原本的count状态
        // const count = this.state.count - number
        // 3.计算并并更新状态
        // 调用store更新状态
        // this.props.store.dispatch(actions.decrement(number))
        this.props.decrement(number)
    }

    // 奇数增加
    incrementIfOdd = () => {
        // 1.得到选择的增量
        let number = this.select.value * 1
        // 2.get 原本的count状态
        const count = this.props.count
        if (count % 2 === 1) {
            // 3.计算并并更新状态
            // 调用store更新状态
            this.props.increment(number)
        }
    }

    //异步更新
    incrementAsync = () => {
        // 1.得到选择的增量
        let number = this.select.value * 1
        // 2.get 原本的count状态
        // const count = this.state.count
        // 3.计算并并更新状态
        setTimeout(() => {
            // 调用store更新状态
            this.props.increment(number)
        }, 1000)
    }

    render() {
        // const count = this.props.store.getState()
        const {count} = this.props
        return (
            <div>
                <p>click {count} times</p>
                <select ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>increment if add</button>
                &nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        );
    }
}



