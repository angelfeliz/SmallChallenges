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
    {board()}
        </div>
      </div>
    );
  }
}

const board = () => {
  let boardPaint
  let cell = [];
  let top = [];
  for(var x = 0; x < 5; x++)
  {

    for(var y = 0; y < 5; y++)
    {
      cell.push(<div className="cell"></div>)
    }
    top.push(<div className="column"></div>)


    boardPaint = top.concat(cell);
  }
  console.log(boardPaint);
  return boardPaint;
}

export default App;
