/**
 * Created by ninghai on 2018/7/7.
 *
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import *  as CounterActions from '../redux/actions/countActions'

class Home extends Component {
    render() {
        const {
            count,
            increment,
            incrementIfOdd,
            incrementAsync,
            decrement
        } = this.props
        return (
            <div className="box">
                {count + 1}
             <button onClick={increment}>+</button>
             <button onClick={decrement}>-</button>
             <button onClick={incrementIfOdd}>是偶数则加</button>
             <button onClick={incrementAsync}>异步增加</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {count: state.count}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(CounterActions, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)