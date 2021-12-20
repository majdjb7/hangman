import React, { Component } from 'react';
import './App.css';
import { render } from '@testing-library/react';
import LetterHolder from './components/LetterHolder';

export class App extends Component {
  render() {
    let x

    return(
      <div>
        <div>Hangman</div>
        <LetterHolder/>
      </div>
    )

      }
}