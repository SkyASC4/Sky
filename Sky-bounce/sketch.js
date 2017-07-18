function setup(){
    createCanvas(500, 500);
    background(175, 100, 220);
}

var x = 250;
var y = 250;

var xSpeed = 10;
var ySpeed = 10;

function draw() {
background(175, 100, 220);
ellipse(x, y, 50);
x += xSpeed;
y += ySpeed;


if (y <=  0){
    ySpeed *= -1;
}

if (y  >= 500){
    ySpeed *= -1;
}

//if the ball reaches 500 on the y side, it will bounce off of it..
// not sure if that will work, but the x axis has to be similar

if (x <= 500){
    xSpeed *= -1;
}

if (x >= 500){ //i'm using ellipse instead of dx or dy..
    xSpeed *= -1;
}
}

// if these conditions are right, the ball will bounce off of the corners and the walls, i'm not sure if it will work
// First Attempt: failure. the ball went straight into the corner and sunk in.
// Second Attempt: i only changed the fourth if statement, it still failed on the second attempt.


