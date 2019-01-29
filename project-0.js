var offset;
var slope;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
	translate(windowWidth/2, windowHeight/2);

	//draw an array of the shape with slope, color, and number of itterations
	//dependent on windowWidth
	slope = windowWidth/10;
	for(var i = -windowWidth/5; i < windowWidth/5; i = i + 30){
		fill(abs(i));
		drawShape(i);
    }
 }

 function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
 }

 //function to generate the repeated shape
 function drawShape(offset) {
 	beginShape()
 	vertex(-20 + offset - slope, -200);
 	vertex(-10 + offset - slope, -185);
 	vertex(-10 + offset + slope, 185);
 	vertex(20 + offset + slope, 200);
 	vertex(10 + offset + slope, 185);
 	vertex(10 + offset - slope, -185);
 	endShape();

 }
