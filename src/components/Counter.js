import React, { Component } from 'react';

import './Counter.css';

export class Counter extends Component {
    state = {
        counter: 0
    };

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decreaseCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div className="counter">
                <div className="inside-text" >
                    Hello, {this.props.name}! You have hit the button {this.state.counter} times.
                </div>
                <div className="the-button">
                    <button onClick={this.increaseCounter}>Increase me</button>
                    <button onClick={this.decreaseCounter}>Decrease me</button>
                </div>
            </div>
        );
    }
}

// export const Counter = (props) => (
//     <div className="counter">Hello, {props.name}! This is {props.adj}!!!</div>
// );

export default Counter;
