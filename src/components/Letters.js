import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    constructor() {
        super()
        this.state = {
            alphabets: []
        }
    }
    render() {
        for(let i=0; i<26; i++) {
            let letter = (i+10).toString(36).toUpperCase()
            this.state.alphabets.push(letter)
        }
        return (
            <div>
                <div>Available Letters</div>
                {this.state.alphabets.map(a => <Letter letter={a}/>)}
                {/* <Letter alphabets={this.state.alphabets}/> */}
            </div>
        )
    }
}

export default Letters