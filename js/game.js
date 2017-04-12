//initialize game board
var Game = function(count){
  this.gameBoard = init(count);

  function init(count) {
    var grid = [];
    for (var i=0; i<count; i++){
      var row = [];
      switch(grid.length) {
        case 3:
          var toAdd = 12;
          break;
        case 2:
          var toAdd = 8;
          break;
        case 1:
          var toAdd = 4;
          break;
        default:
          var toAdd = 0;
      }
      for (var j=0; j<count; j++){
        row.push(j+toAdd+1);
        if(j==count-1){
          grid.push(row);
        }
      }
    }
    return grid;
  }
}

// display 2d array on table in html
Game.prototype.display = function() {
  // initialize html
  $(".gameBoard").html("");


  $(".gameBoard").append('<tbody></tbody>');

  for (var i = 0; i < this.gameBoard.length; i ++){
    $(".gameBoard tbody").append("<tr class='row" + i + "'></tr>");

    for (var j = 0; j < this.gameBoard[i].length; j ++){
      $(".row" + i).append("<td>" + this.gameBoard[i][j] + "</td>");
    }

  }
}

var game = new Game(4);
game.display();