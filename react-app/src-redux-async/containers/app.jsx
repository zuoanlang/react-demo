import React from 'react'
import {connect} from "react-redux";
import {decrement, increment,incrementAsync} from "../redux/action";
import Counter from "../component/counter";

export default connect(
    state => ({count: state}),
    {increment, decrement,incrementAsync}
)(Counter)