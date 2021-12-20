import React, { Component } from 'react';
import Letter from './Letter';

class LetterHolder extends Component {
    render() {
        let alphabets = []
        for(let i=0; i<26; i++) {
            let letter = (i+10).toString(36).toUpperCase()
            alphabets.push(letter)
        }
        return (
            <div>
                {alphabets.map(a => <div>{a}</div>)}
                {/* {alphabets} */}
            </div>
        )
    }

}

export default LetterHolder