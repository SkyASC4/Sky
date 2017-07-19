function setup(){
    createCanvas(500, 500);
    background(153);
    line(0, 62, 500, 62);
    line(0, 124, 500, 124)
    line(0, 186, 500, 186)
    line(0, 248, 500, 248)
    line(0, 310, 500, 310)
    line(0, 372, 500, 372)
    line(0, 434, 500, 434)
    line(62, 0, 62, 500)
    line(124, 0, 124, 500)
    line(186, 0, 186, 500)
    line(248, 0, 248, 500)
    line(310, 0, 310, 500)
    line(372, 0, 372, 500)
    line(434, 0, 434, 500)
    stroke(126);
}

function draw(){
rect(62, 124, 62, 124);
rect(248, 310, 186, 62);
//   x1   y1   x2   y2
}

function mouseClicked(){
    fill("red")
rect(mouseX, mouseY, 62, 62);
// prevent default???
return false;
}


