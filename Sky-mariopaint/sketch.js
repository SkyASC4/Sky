function setup() {
  createCanvas(700, 700);
  background(153);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, random(10,50), random(10,50));
  fill(random(0,255), random(0,255), random(0,255));
  // prevent default
  return false;
}