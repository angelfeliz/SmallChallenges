import React, { Component } from 'react';
import Board from './Board';
import {calculateNeighbour, checkNeighbour} from './helper.js'
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


    if( this.state.play) {
      this.setState({
        ...this.state,
        board:{...this.state.board,[col]:{...this.state.board[col],[row]:{active: "on"}}},
        shadowBoard:{...this.state.shadowBoard,[col]:{...this.state.shadowBoard[col] ,[row]:{active:"on"}}}
      });
    }
  }

  nextGeneration = (col, row) => {
    let newGeneration  = {};
    for(let obj in this.state.shadowBoard) {
      for(let objInner in this.state.shadowBoard[obj]) {
            let inobj = checkNeighbour(obj,objInner,this.state.shadowBoard,this.state.board);
            console.log('in new ', inobj);

            /*for(let col = -1; col <= 1; col++) {
                let x = parseInt(obj) + col;
                if(this.state.board.hasOwnProperty([x])) {
                   for(let row = -1; row <= 1; row++) {
                       let y = parseInt(objInner) + row;
                       if(this.state.board[x].hasOwnProperty([y]))  {
                          if(this.state.board[x][y].active === "on") {  neighbour++; }
                        }
                      }
                   }
                }
                calculateNeighbour(neighbour,col,row);*/
                //newGeneration = {...newGeneration, ...calculateNeighbour(neighbour,col,row)}
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
