function setup() {
  createCanvas(700, 850);
  background(255);
  
  textSize(12);
  fill(0, 150, 150);  
  noStroke();
  
  text('Candidate Name', 10, 20);
  text('Centre Number', 250, 20);
  text('Candidate Number', 450, 20);
  text('Subject', 10, 50);
  text('Paper', 450, 50);
  text('Question No.', 10, 80);
  
  stroke(0, 150, 150, 100);
  
  line(100, 25, 240, 25);    
  line(330, 25, 440, 25);    
  line(520, 25, width, 25);  
  
  line(50, 55, 440, 55);     
  line(480, 55, width, 55);  
  
  drawGrid();
}

function drawGrid() {
  strokeWeight(1.8);
  
  for (let x = 0; x <= width; x += 10) {
    // Every 5th line is darker
    if (x % 50 === 0) {
      stroke(0, 150, 150, 100);  
    } else {
      stroke(0, 150, 150, 50);   
    }
    line(x, 100, x, height);
  }
  
  for (let y = 100; y <= height; y += 10) {
    // Every 5th line is darker
    if ((y - 100) % 50 === 0) {
      stroke(0, 150, 150, 100);  
    } else {
      stroke(0, 150, 150, 50);   
    }
    line(0, y, width, y);
  }
}

function draw() {
}