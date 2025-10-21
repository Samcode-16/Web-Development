import React, { Component } from 'react';

class Child extends Component {
    handleClick = () => {
        alert(this.props.greeting);
    };

    render() {
        return (
            <div className = "child-container">
                <h2>Child Component</h2>
                <button onClick= {this.handleClick}>Click to see greeting</button>
            </div>
        );
    }
}  

export default Child;

