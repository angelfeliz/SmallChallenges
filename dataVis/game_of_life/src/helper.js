
export const calculateNeighbour = (neighbour,col,row) => {
  if(neighbour > 3) {
    console.log(col,row," mayor que 3");

    return { [col]:{[row]: {active: ""}}}
  }
  if(neighbour < 3) {
    console.log(col,row," menor que 3");

    return { [col]:{[row]: {active: ""}} }
  }
  if(neighbour === 3) {

    console.log(col,row, " igual a 3");

    return { [col]:{[row]: {active: "on"}} }
  }
}

export const checkNeighbour = (obj,objInner,shadowBoard,board, child = false) => {
  let neighbour = 0;

  for(let col = -1; col <= 1; col++) {
      let x = parseInt(obj) + col;
      if(board.hasOwnProperty([x])) {
         for(let row = -1; row <= 1; row++) {
             let y = parseInt(objInner) + row;
             if(board[x].hasOwnProperty([y]))  {
                if(!(parseInt(obj) === x && parseInt(objInner) === y))
                {
                  if(!child) {
                    checkNeighbour(x,y,shadowBoard,board,true);
                  }
                  if(board[x][y].active === "on") { neighbour++; }
                }                
              }
            }
         }
      }
      let backObj = calculateNeighbour(neighbour,obj,objInner);

       return backObj;
}
