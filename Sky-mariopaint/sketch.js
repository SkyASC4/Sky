function setup() {
  createCanvas(700, 700);
  background(153);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, random(10,50), random(10,50));
  // prevent default
  return false;
}