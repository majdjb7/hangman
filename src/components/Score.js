import React, { Component } from 'react';

class Score extends Component {
    render() {
        let color = ""
        if(this.props.score>=80) {
            color = "green"
        }
        else if(this.props.score >=50 && this.props.score<80) {
            color = "yellow"
        }
        else{
            color = "red"
        }
        return (
            <div class={color}>{this.props.score}</div>
        )
    }

}

export default Score