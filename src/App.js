import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';
import EndGame from './components/EndGame';

export class App extends Component {
  constructor() {
    super()
    let letterStatus = this.generateLetterStatuses();
  
    this.state = {
      letterStatus: letterStatus,
      solution: {word: "WORDY", hint: "HINT!"},
      score: 100,
      gameWon: false,
      gameLost: false,
      solutionWithBlanks: ""
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

  checkIfGameWon = (solution) => {
      let won = false
      if(!solution.includes("_")) {
        won = true
      }
      return won
  }
  
  render() {
  this.generateLetterStatuses()

    let newS = this.getSolution()
    let won = this.checkIfGameWon(newS)

    return(
      <div>
        <div>Hangman</div>
        <Score score={this.state.score}/>
        <Solution letterStatus={this.state.letterStatus} solution={newS}/>
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter}/>
        {(won || this.state.score <=0) ? <EndGame score={this.state.score} word={this.state.solution.word}/> : <div />}
      </div>
    )

      }
}