import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import Letters from './components/Letters';
import Solution from './components/Solution';
import Score from './components/Score';

export class App extends Component {
  render() {
    let x

    return(
      <div>
        <div>Hangman</div>
        <Score/>
        <Solution/>
        <Letters/>
      </div>
    )

      }
}