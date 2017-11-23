import React, { Component } from 'react';
import './App.css';

const COLUMN = 70;
const ROW = 50;

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="board-game">
        <p>hello</p>
          <div className="column">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
          <div className="column">
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
