var arrayc = ["red", "blue", "green", "yellow"];
var mtarray = [];
var mtarray2 = [];
var level = 0;
var started = false;
$(document).keypress(function (event) {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextsequence();
    started = true;
  }
  // head(level);
});

$(".btn").click(function () {
  var userclr = $(this).attr("id");
  mtarray2.push(userclr);
  playsound(userclr);
  animatePress(userclr);
  core(mtarray2.length - 1);
  
});
function core(length) {
  if (mtarray[length] === mtarray2[length]) {
    if (mtarray.length === mtarray2.length) {
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }
  } else {
    playsound("wrong");
  $("h1").text("Game Over.");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  }
}

function nextsequence() {
  mtarray = [];
  level++;
  head(level);
  var randomNumber = Math.floor(Math.random() * 4);
  var ranColor = arrayc[randomNumber];
  mtarray.push(ranColor);
  playsound(ranColor);
  $("#" + ranColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}
function playsound(userclr) {
  var src = "./sounds/" + userclr + ".mp3";
  var audio = new Audio(src);
  audio.play();
}
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
function head(level) {
  $("h1").text("Level " + level);
}
