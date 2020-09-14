function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 160, 140);
  
  function drawEar(x, y, start, end){
    strokeWeight(0);
    fill(50, 50, 50);
    arc(x, y, 55, 90, start, end, OPEN, PI);
  }
  function drawEye(x, y){
    fill(10, 10, 10);
    circle(x, y, 20);
    fill(255, 255, 255);
    circle(x-3, y-3, 7);
  }
  function drawLeg(x, y){
    fill(120, 120, 120);
    triangle(x, y, x-15, y+90, x+15, y+90);
    fill(200, 200, 200);
    arc(x, y+95, 30, 50, PI, TWO_PI);
    fill(0, 0, 0);
    rect(x-8, y+85, 2, 10);
    rect(x+3, y+85, 2, 10);
  }
  
  //body
  fill(70, 70, 70);
  rect(115, 180, 70, 100);
  triangle(185, 190, 185, 280, 220, 250);
  fill(95, 95, 95);
  arc(205, 275, 40, 80, PI, TWO_PI);
  fill(140, 140, 140);
  arc(200, 280, 40, 40, PI, TWO_PI);
  
  //legs
  drawLeg(115, 190);
  drawLeg(185, 190);
  
  
  
  
  //ears
  drawEar(100, 110, 5, 9.5);
  drawEar(200, 110, 6, 4.5);
  
  //head
  fill(130, 130, 130);
  circle(150, 150, 100);
  
  //eyes
  drawEye(130, 150);
  drawEye(170, 150);
  
  //snout
  fill(190, 190, 190);
  ellipse(150, 180, 55, 45);
  fill(50, 50, 50);
  triangle(140, 165, 150, 180, 160, 165);
  fill(0, 0, 0);
  rect(149, 178, 2, 8);
  
}