function setup() {
  createCanvas(300, 300);
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
  strokeWeight(7);
  line(offsetX + 250, offsetY +246, offsetX + 300, offsetY + 246);
  line(offsetX + 250, offsetY +254, offsetX + 300, offsetY + 254);
  line(offsetX + 100, offsetY +300, offsetX + 300, offsetY + 300);

  strokeWeight(0)
  fill(0)

  text('Composition with Red, Blue and Yellow - Piet Mondrian', offsetX, offsetY + 320);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Resize canvas when window is resized
  draw(); // Redraw the painting after resizing
}