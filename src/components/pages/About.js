import React, { Component } from 'react';

export class About extends Component {
    state = {
        counter: parseInt(this.props.match.params.id) || 0
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div className="about-container">
                <h1>About</h1>
                <p>This is my about page. Your name is {this.props.match.params.name}. I'm going to search for book number {this.props.match.params.bookId}.</p>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.increase}>Add</button>
                <button onClick={this.decrease}>Subtract</button>
            </div>
        )
    }
}

export default About;
