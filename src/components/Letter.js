import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            <span className={this.props.status.toString()}>{this.props.letter}</span>
        )
    }

}

export default Letter