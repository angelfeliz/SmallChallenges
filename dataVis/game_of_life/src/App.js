import React, { Component } from 'react';
import './App.css';

const COLUMN = 70;
const ROW = 50;

class App extends Component {
  constructor(props){
    super(props);
    let obj = {};
    for(let x = 1; x <= 3; x++)
    {
      let obje = {
        [x]:{}
      }
      for(let y = 1 ; y <= 3; y++)
      {

        obje[x][y] =  {
                     "on": false
                   }
      }
      obj = {...obj, ...obje}
    }
    this.state = {board:obj};
    console.log(this.state)
  }


  nextGeneration = (col, row) => {
    let element = document.getElementsByName(`${col}-${row}`);
    console.log(element);
    element.className = "cell on"
    React.cloneElement(element);
  }
  render() {
    return (
      <div className="App">
        <div className="board-game">
          {Board(5,5)}
        </div>
        <button onClick={()=>this.nextGeneration(1,1)}>test</button>
      </div>
    );
  }
}

const Board = (col,row) => Column(col,row)


const Column = (col,row) => {
  let column = [];
  for (var x = 0; x < col; x++) {
    column.push(<div key={x} className="column">{Cell(x,row)}</div>)
  }
  return column;
}

const Cell = (col,row) => {
  let cell = [];
  for (var x = 0; x < row; x++) {
      cell.push(<div key={x} className="cell" data-col={col} data-cell={x} name={`${col}-${x}`}></div>);
  }
  return cell;
}

export default App;
