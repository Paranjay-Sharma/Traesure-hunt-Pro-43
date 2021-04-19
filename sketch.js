var bg,bg2,form,system,code,security;
var score=0;
var arab;
function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  arab=loadSound("arab.mp3");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    strokeWeight(3);
    stroke("red");
    text("TREASURE UNLOCKED",250, 200);
    arab.loop();
  }

  drawSprites()
}