import React from 'react';

const Cell = (col, row, board, selectSqurad) => {
  let cell = [];

  for (let x = 1; x <= row; x++) {
      cell.push(
        <div
           key={x}
           className={`cell ${board[col][x].active}`}
           data-col={col}
           data-cell={x}
           name={`${col}-${x}`}
           onClick={()=>{selectSqurad(col,x)}}
           >
        </div>
         );
  }
  return cell;
}


export default Cell;
