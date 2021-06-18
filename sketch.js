

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  noStroke();
}

function draw() {
  background(255,255,255); 
  
  

  let hr = hour();
  text('Current hour:\n' + hr, 5, 50);

  let mn = minute();
  text('Current minute:\n' + hr, 5, 100);

  let sc = second();
  text('Current second:\n' + hr, 5, 150);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  stroke(255,0,0); arc(0,0,300,300,0,scAngle);
   minutes stroke(0,255,0); arc(0,0,280,280,0,mnAngle);
    hour stroke(0,0,255); arc(0,0,260,260,0,hrAngle);
  drawSprites();
}

function map(){
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);

  scAngle = map(sc, 0, 60, 0, 360);
}

function arc(){
  arc(50, 55, 50, 50, 0, HALF_PI);
noFill();
arc(50, 55, 60, 60, HALF_PI, PI);
arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);
}
  