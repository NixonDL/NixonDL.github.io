//beginning of miniMax function
function miniMax(board, isPlayerX){
  //Check if board already has winner. If winner is equal to player, then return 1. Else, return -1.
  var isWinner = checkBoardForWin(board);
  if(isWinner.hasWinner){
    if(xWins && isPlayerX){
      return 1;
      
    }
    else if(xWins && !isPlayerX){
      return -1;
    }
    else if(oWins && isPlayerX){
      return -1;
    }
    else{
      return 1;
    }
  }
  //Try every move and recursively calculate a minimax score for it.
  var move = -1;
  var score = -2;
  for(var x = 0;x < 9; x++){
    if(!(board[x]=='X' || board[x]=='O')){
      var boardWithNewMove = Array.from(board);
      boardWithNewMove[x] = isPlayerX ? 'X':'O';
      var scoreForTheMove = -1*miniMax(boardWithNewMove, !isPlayerX);
      if(scoreForTheMove > score){
        score = scoreForTheMove;
        move = x;
      }
    }
  }
  if(move == -1 ){
    return 0;
  }
  return score;
} //End of miniMax function
//Beginning of checkBoardForWin function 
function checkBoardForWin(board){
        var val0;
        var val1;
        var val2;
        var reply = {hasWinner:false, xWins:false, oWins:false};
        // check rows
        for(var x = 0;x<9;x=x+3){
          val0 =board[x];
          val1 =board[x+1];
          val2 =board[x+2];
          if(val0 == 'X' && val1 == 'X' && val2 == 'X'){
            reply.hasWinner = true;
            reply.xWins = true;
            
            return reply;
          }
          else if(val0 == 'O' && val1 == 'O' && val2 == 'O'){
            reply.hasWinner = true;
            reply.oWins = true;
            return reply;
          }     
        }
        //check columns
        for(var x = 0;x<3;x++){
          val0 = board[x];
          val1 = board[x+3];
          val2 = board[x+6];
          if(val0 == 'X' && val1 == 'X' && val2 == 'X'){
            reply.hasWinner = true;
            reply.xWins = true;
            return reply;
          }
          else if(val0 == 'O' && val1 == 'O' && val2 == 'O'){
            reply.hasWinner = true;
            reply.oWins = true;
            return reply;
          }     
        }
        //check top left to lower right diagonal
        val0 = board[0];
        val1 = board[4];
        val2 = board[8];
        if(val0 == 'X' && val1 == 'X' && val2 == 'X'){
          reply.hasWinner = true;
          reply.xWins = true;
          return reply;
        }
        else if(val0 == 'O' && val1 == 'O' && val2 == 'O'){
          reply.hasWinner = true;
          reply.oWins = true;
          return reply;
        }
        //check lower left to top right diagonal
        val0 = board[6];
        val1 = board[4];
        val2 = board[2];
        if(val0 == 'X' && val1 == 'X' && val2 == 'X'){
         reply.hasWinner = true;
         reply.xWins = true;
         return reply;
          
        }
        else if(val0 == 'O' && val1 == 'O' && val2 == 'O'){
          reply.hasWinner = true;
          reply.oWins = true;
          return reply;
          
        }
        //no winner yet
        return reply;
  
}//End of checkBoardForWin function
