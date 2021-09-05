var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNouth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNouth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// Draw images
function draw() {
  ctx.drawImage(fg, 0, 0);
}
draw();
