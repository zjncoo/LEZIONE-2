function setup() {
  canvas=createCanvas(w, h);
  noLoop();
  drawMondrian();
}
function setup() {
  createCanvas(windowWidth, windowHeight); // Full screen canvas
  noLoop();
  drawMondrian();
}

function drawMondrian() {
  background(255); // White background
  
  // Set the proportions relative to the screen size
  let w = windowWidth;
  let h = windowHeight;
  
  stroke(0); // Black stroke for the grid
  strokeWeight(w * 0.02); // Proportional stroke width
  
  // Red rectangle
  fill(255, 0, 0);
  rect(w * 0.1, h * 0.1, w * 0.4, h * 0.4);
  
  // Yellow rectangle
  fill(255, 255, 0);
  rect(w * 0.52, h * 0.1, w * 0.25, h * 0.25);
  
  // Blue rectangle
  fill(0, 0, 255);
  rect(w * 0.1, h * 0.52, w * 0.2, h * 0.2);
  
  // Black rectangle
  fill(0);
  rect(w * 0.1, h * 0.75, w * 0.2, h * 0.1);
  
  // Grey rectangle
  fill(200);
  rect(w * 0.35, h * 0.52, w * 0.3, h * 0.2);
  
  // White rectangle (background already white)
  noFill();
  rect(w * 0.52, h * 0.35, w * 0.25, h * 0.4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas on window resize
  drawMondrian(); // Redraw the Mondrian when resizing
}