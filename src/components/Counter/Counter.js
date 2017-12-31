import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    incrementCount = () => {
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrementCount = () => {
        this.props.dispatch({type: 'DECREMENT'});
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>
                    Increment
                </button>
                <h1>{this.props.count}</h1>
                <button onClick={this.decrementCount}>
                    Decrement
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

export default connect(mapStateToProps)(Counter);