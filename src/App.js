import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';

export class App extends Component {
  constructor() {
    super()
    let letterStatus = this.generateLetterStatuses(); //NEED THIS FOR DYNAMIC
    // let letterStatus = {
    //   A: false,
    //   B: false,
    //   C: false,
    //   D: false,
    //   E: true,
    //   F: false,
    //   G: false,
    //   H: false,
    //   I: false,
    //   J: false,
    //   K: false,
    //   L: false,
    //   M: false,
    //   N: false,
    //   O: false,
    //   P: false,
    //   Q: false,
    //   R: false,
    //   S: true,
    //   T: false,
    //   U: false,
    //   V: false,
    //   W: false,
    //   X: false,
    //   Y: true,
    //   Z: false
    // }
    this.state = {
      letterStatus: letterStatus,
      solution: {word: "WORDY", hint: "HINT!"},
      score: 100
    }
  }

  getSolution = () => {
    let solution = ""
    for(let letter of this.state.solution.word) {
      this.state.letterStatus[letter] ? solution += letter : solution += "_ "
    }
    return solution
  }

  generateLetterStatuses = function() {
    let letterStatus = {}
    for(let i=0; i<26; i++) {
      let letter = (i+10).toString(36).toUpperCase()
      letterStatus[letter] = false
    }
    return letterStatus
  }

  selectLetter = (letter) => {
    let newScore = this.state.score
    this.state.solution.word.includes(letter) ? (newScore += 5) : (newScore -= 20)

    let newStatus = {...this.state.letterStatus}
    newStatus[letter] = true
    this.setState({letterStatus: newStatus,
                  score: newScore})
  }
  
  render() {
  this.generateLetterStatuses()
  console.log(this.state.letterStatus)

    let newS = this.getSolution()

    console.log(this.getSolution())
    return(
      <div>
        <div>Hangman</div>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={newS}/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
      </div>
    )

      }
}