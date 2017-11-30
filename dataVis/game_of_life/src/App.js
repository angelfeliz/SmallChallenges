import React, { Component } from 'react';
import Board from './Board';
import './App.css';

const COLUMN = 70;
const ROW = 50;

class App extends Component {
  constructor(props){
    super(props);
    let obj = {};
    for(let x = 1; x <= COLUMN; x++)
    {
      //I can remove the [x]... part but for more understanding when reading the code is ok there
      let obje = {
        [x]:{}
      }
      for(let y = 1 ; y <= ROW; y++)
      {
        obje[x][y] =  { active: ""  }
      }
      obj = {...obj, ...obje}
    }
    this.state = {
      play: true,
      board:obj,
      shadowBoard:[]
    };
  }

   selectSqurad = (col,row) => {
     let arrayShadow = [];
     console.log(this.state.shadowBoard[col]);
     if(this.state.shadowBoard[col]) {
       arrayShadow[col][row] = true;
     }
     console.log(arrayShadow);
    if( this.state.play) {
      this.setState({
        ...this.state,
        board:{...this.state.board,[col]:{...this.state.board[col],[row]:{active: "on"}}},
        shadowBoard:{...this.state.shadowBoard,[col]:{...this.state.shadowBoard[col] ,[row]:{active:"on"}}}
      });
    }
  }

  nextGeneration = (col, row) => {
    let neighbour = 0;
    let newGeneration  = {};
    for(let obj in this.state.board) {
      if(parseInt(obj) > 1 && parseInt(obj) < 70)
      for(let objInner in this.state.board[obj]) {
        if(parseInt(objInner) > 1 && parseInt(objInner) < 50 ) {
            for(let col = -1; col <= 1; col++) {
              for(let row = -1; row <= 1; row++) {
                console.log('owner ', obj,objInner);
                let x = parseInt(obj) + col;
                let y = parseInt(objInner) + row;
                console.log('the neighbour ', x,y);
                //if(this.state.board[x][y].active === "on") {  neighbour++; }
               }
             }
           }

          if(neighbour > 3) {
            console.log("mayor que 3");
            newGeneration = {...newGeneration, [col]:{[row]: {active: ""}}}
          }
          if(neighbour < 3) {
            console.log("manero que 3");
            newGeneration = {...newGeneration, [col]:{[row]: {active: ""}}}
          }
          if(neighbour === 3) {
            console.log("igual que 3");
            newGeneration = {...newGeneration, [col]:{[row]: {active: "on"}}}
          }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="board-game">
          <Board
            col={COLUMN}
            row={ROW}
            board = {this.state.board}
            selectSqurad = {this.selectSqurad}
          />
        </div>
        <button onClick={()=>this.nextGeneration(1,1)}>test</button>
      </div>
    );
  }
}



export default App;
