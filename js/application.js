$(document).ready(function() {

  Mousetrap.bind("up", function() {
    console.log("up");
    game.move("up");
  })

  Mousetrap.bind("down", function() {
    console.log("down");
    game.move("down");
  })

  Mousetrap.bind("right", function() {
    console.log("right");
    game.move("right");
  })

  Mousetrap.bind("left", function() {
    console.log("left");
    game.move("left");
  })
});