// var cvs = document.getElementById("canvas");
// var ctx = cvs.getContext("2d");

// // load images

// var bird = new Image();
// var bg = new Image();
// var fg = new Image();
// var pipeNorth = new Image();
// var pipeSouth = new Image();

// bird.src = "images/bird.png";
// bg.src = "images/bg.png";
// fg.src = "images/fg.png";
// pipeNorth.src = "images/pipeNorth.png";
// pipeSouth.src = "images/pipeSouth.png";

// // some Variables

// var gap = 75;
// var constant = pipeNorth.height + gap;

// // Draw images
// function draw() {
//   ctx.drawImage(bg, 0, 0);
// }
// draw();

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

// some variables

var gap = 85;
var constant;

var bX = 10;
var bY = 150;

var gravity = 1.5;

var score = 0;

// audio files

var fly = new Audio();
var scor = new Audio();

fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

// on key down

document.addEventListener("keydown", moveUp);

function moveUp() {
  bY -= 25;
  fly.play();
}

// pipe coordinates

var pipe = [];

pipe[0] = {
  x: cvs.width,
  y: 0,
};

// draw images

function draw() {
  ctx.drawImage(bg, 0, 0);
}

draw();
