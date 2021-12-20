import React, { Component } from 'react';

class Letter extends Component {
    render(props) {
        let alphabets = []
        for(let i=0; i<26; i++) {
            let letter = (i+10).toString(36).toUpperCase()
            alphabets.push(letter)
        }
        // let letter = (i+10).toString(36).toUpperCase()
        return (
            <div>
            {alphabets.map(a => <span>{a}</span>)}
            </div>
        )
    }

}

export default Letter