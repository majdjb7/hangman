import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';

export class App extends Component {
  constructor() {
    super()
    let letterStatus = this.generateLetterStatuses();
    this.state = {
      letterStatus: letterStatus,
      solution: {word: "WORD", hint: "HINT!"},
      score: 100
    }
  }

  generateLetterStatuses = function() {
    let letterStatus = {}
    for(let i=0; i<26; i++) {
      let letter = (i+10).toString(36).toUpperCase()
      letterStatus[letter] = false
    }
    return letterStatus
  }
  
  render() {
  this.generateLetterStatuses()
  console.log(this.state.letterStatus)


    return(
      <div>
        <div>Hangman</div>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution}/>
        <Letters letterStatus={this.state.letterStatus}/>
      </div>
    )

      }
}