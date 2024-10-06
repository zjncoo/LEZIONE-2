function setup() {
  createCanvas(400, 400);
  noLoop();
  drawMondrian();
}

function drawMondrian() {
  background(255); // White background
  
  // Black lines (grid)
  stroke(0);
  strokeWeight(10);

  // Red rectangle
  fill(255, 0, 0);
  rect(50, 50, 200, 200);
  
  // Yellow rectangle
  fill(255, 255, 0);
  rect(260, 50, 80, 80);
  
  // Blue rectangle
  fill(0, 0, 255);
  rect(50, 260, 80, 80);
  
  // Black rectangle
  fill(0);
  rect(50, 350, 80, 40);
  
  // Grey rectangle
  fill(200);
  rect(140, 260, 120, 80);
  
  // White rectangle (background already white, but adding for structure)
  noFill();
  rect(260, 140, 80, 200);
}