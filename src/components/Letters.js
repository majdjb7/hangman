import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    constructor() {
        super()
        this.state = {
            alphabets: []
        }
    }
    
      selectLetter = (letter) => {
          this.props.selectLetter(letter)
      }

    render() {
        for(let i=0; i<26; i++) {
            let letter = (i+10).toString(36).toUpperCase()
            this.state.alphabets.push(letter)
        }
        return (
            <div>
                <div>Available Letters</div>
                {Object.keys(this.props.letterStatus).map(a => <Letter key={a} letter={a} status={this.props.letterStatus[a]} selectLetter={this.selectLetter}/>)}
            </div>
        )
    }
}

export default Letters