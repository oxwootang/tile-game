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

//takes in a direction as a string
Game.prototype.move = function(direction){

  var direction = direction;

  //get gameBoard
  var grid = this.gameBoard;
  console.log(grid);

  //index of tile that is moving towards emptyTile - to be assigned after valid directional check below
  var val;
  var iIndex;
  var jIndex;

  //find empty tile #16
  //check that the tile in opposite direction of direction-string is a valid game tile
  //i.e. "left" direction when #16 is in the bottom-right corner of the grid would be an impossible move because there should be no tile to move "left" to the empty tile
  var checkDirection = function(){
    for(var i=0; i<4; i++){
      for(var j=0; j<4; j++){
        console.log(grid[i][j]);
        if(grid[i][j]===16){
          if(direction==="up" && i+1<grid.length){
            console.log("valid!");
            iIndex = i;
            jIndex = j;
            val = grid[i+1][j]
            return "valid";
          }
          else if(direction==="down" && i-1>=0){
            console.log("valid");
            iIndex = i;
            jIndex = j;
            val = grid[i-1][j];
            return "valid";
          }
          else if(direction==="right" && j-1>=0){
            console.log("valid");
            iIndex = i;
            jIndex = j;
            val = grid[i][j-1];
            return "valid";
          }
          else if(direction==="left" && j+1<grid.length){
            console.log("valid");
            iIndex = i;
            jIndex = j;
            val = grid[i][j+1];
            return "valid";
          }
          else{
            console.log("invalid!");
          }
        }
      }
    }
    // console.log(this.gameBoard.indexOf)
  };
  if(checkDirection()==="valid"){
    switch(direction){
      case "up":
        grid[iIndex][jIndex] = val;
        grid[iIndex+1][jIndex] = 16;
        break;
      case "down":
        grid[iIndex][jIndex] = val;
        grid[iIndex-1][jIndex] = 16;
        break;
      case "left":
        grid[iIndex][jIndex] = val;
        grid[iIndex][jIndex+1] = 16;
        break;
      case "right":
        grid[iIndex][jIndex] = val;
        grid[iIndex][jIndex-1] = 16;
        break;
    }
    this.gameBoard = grid;
  };
  this.display();
};

var game = new Game(4);
game.display();
