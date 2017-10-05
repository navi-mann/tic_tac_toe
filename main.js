document.addEventListener("DOMContentLoaded", function(event) {

  var PLAYER_1 = "X";
  var PLAYER_2 = "O";
  var currentPlayer = PLAYER_1;

  var divArray = document.querySelectorAll('.board .square');
  divArray.forEach(function(div) {
    div.addEventListener('click', function(e) {
      var square = e.currentTarget;
      if (square.innerHTML === "") {
        square.innerHTML = currentPlayer;
        // check if player won!

        var boardState = [];
        var boardCount = 0;
        for (var i = 0; i < divArray.length; i++) {
          var state = divArray[i].innerHTML;
          if (state) {
            boardCount++;
          }

          boardState.push(state);
        }

        // if (results[0] === results[1] && results[1] === results[2]) {
        //   alert(currentPlayer + ' WINS!');
        // }


        // check for rows
        var row1 = checkWinner(0, 1, 2, boardState);
        var row2 = checkWinner(3, 4, 5, boardState);
        var row3 = checkWinner(6, 7, 8, boardState);

        var col1 = checkWinner(0, 3, 6, boardState);
        var col2 = checkWinner(1, 4, 7, boardState);
        var col3 = checkWinner(2, 5, 8, boardState);

        var diag1 = checkWinner(0, 4, 8, boardState);
        var diag2 = checkWinner(2, 4, 6, boardState);

        var winner = row1 || row2 || row3 ||
                      col1 || col2 || col3 ||
                      diag1 || diag2;

        if (winner) {
          alert(currentPlayer + ' WINS!');
          return;
        } else if (boardCount === 9) {
          alert("Nobody wins! Try Again!");
          return;
        }

        // if player doesn't win change player
        switch (currentPlayer) {
          case PLAYER_1:
            currentPlayer = PLAYER_2;
            break;
          case PLAYER_2:
            currentPlayer = PLAYER_1;
            break;
        }
      }
    });
  });
});

function checkWinner(x, y, z, boardState) {
  if (boardState[x] === boardState[y] && boardState[y] === boardState[z]) {
    return boardState[x];
  } else {
    return false;
  }
}

//
//
// var a = 'X';
// var b = '';
//
// var winner = a && b;
//
// if (a || b) {
//   alert('yay');
// }
//
