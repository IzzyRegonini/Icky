let gunk;
let bact;
function preload() {
  gunk = loadImage("gunk.jpeg");
  bact = loadImage("bact.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(gunk, 10, 10, windowWidth, windowHeight);
  image(bact, mouseX,mouseY,50,50);
}

  