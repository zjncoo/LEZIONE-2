function setup() {
  createCanvas(windowWidth, windowHeight); // Fullscreen canvas
  noLoop(); // No need to continuously redraw
}

function draw() {
  background(255); // White background
  
  // Set size for the main square and positions
  let squareSize = 300; // Fixed square size
  let offsetX = (windowWidth - squareSize) / 2; // Center the square
  let offsetY = (windowHeight - squareSize) / 2;
  
  // Draw the grid lines (black lines)
  stroke(0);
  strokeWeight(5);
  
  // Red square
  fill(255, 0, 0);
  rect(offsetX + 100, offsetY, 200, 200);
  
  // Blue square
  fill(0, 0, 255);
  rect(offsetX, offsetY + 200, 100, 100);
  
  // Yellow square
  fill(255, 255, 0);
  rect(offsetX + 250, offsetY + 250, 50, 50);
  
  // Black lines (manual positions)
  stroke(0);
  strokeWeight(5);
  
  // Vertical black line
  line(offsetX + 100, offsetY, offsetX + 100, offsetY + 300);
  
  // Horizontal black line
  line(offsetX, offsetY + 200, offsetX + 300, offsetY + 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas when window is resized
  draw(); // Redraw the painting after resizing
}