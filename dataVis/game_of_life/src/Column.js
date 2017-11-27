import React from 'react';
import Cell from './Cell';

const Column = (props) => {
  //{Cell(x,props.row,props.board)}
  let column = [];
  for (var x = 1; x <= props.col; x++) {
    column.push(
      <div key={x} className="column">
        {Cell(x,props.row, props.board, props.selectSqurad)}
      </div>
  )
  }
  return column;
}

export default Column;
