var frontColor = "green";
var backColor = "blue";
var bottomColor = "white";
var topColor = "yellow";
var rightColor = "orange";
var leftColor = "red";
var inColor = "gray";

var xOffset, yOffset;

var Xrotate = 125;
var Yrotate = 0;

var camdist = 1000;

var counter = 0;

var rotate = false;

function setup() {

  canvas = createCanvas(windowWidth / 2, 600, WEBGL);
  canvas.parent("#cube-target");
  rectMode(CENTER);

  rubix = new Cube();

}

function draw() {

  let a = map(Xrotate, 0, width, -PI, PI);
  let b = map(Yrotate, 0, height, -PI, PI);

  camera(camdist * cos(b) * cos(a), camdist * sin(b), camdist * cos(b) * sin(a), 0, 0, 0, 0, 1, 0);

  background(0);

  rubix.show();
  rubix.update();

}

// Sets Offset For Rotation
function mousePressed() {

  if (rotate) {
    xOffset = Xrotate - mouseX;
    yOffset = Yrotate - mouseY;
  }

}

// Moves Cube During Mouse Movement
function mouseDragged() {

  if (rotate) {
    Xrotate = mouseX + xOffset;
    Yrotate = mouseY + yOffset;
    redraw();
  }

}