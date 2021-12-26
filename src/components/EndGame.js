import React, { Component } from 'react';

class EndGame extends Component {
    render() {      
        return (
            <div>
            {this.props.score <=0
            ? <div>You lost. The word is: "{this.props.word}"</div>
            : <div>Congratulations!</div>}
            </div>
        )
    }

}

export default EndGame