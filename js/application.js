$(document).ready(function() {

  $("button").on("click", function(e){
    e.preventDefault();
    console.log("Clicked play!");

    Mousetrap.bind("up", function() {
      console.log("up");
      game.move("up");
      game.complete(game.gameBoard, game.solution);
    });

    Mousetrap.bind("down", function() {
      console.log("down");
      game.move("down");
      game.complete(game.gameBoard, game.solution);
    });

    Mousetrap.bind("right", function() {
      console.log("right");
      game.move("right");
      game.complete(game.gameBoard, game.solution);
    });

    Mousetrap.bind("left", function() {
      console.log("left");
      game.move("left");
      game.complete(game.gameBoard, game.solution);
    });

    game.testComplete();
    // game.shuffle();
  });
});