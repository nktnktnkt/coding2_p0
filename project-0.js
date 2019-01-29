
var my50shades = [50];
var offset = 0;
var slope = 20;


function setup() {
	createCanvas(windowWidth,windowHeight);
	noStroke();
	

}

function draw() {
	
	translate(windowWidth/2,windowHeight/2);
	slope = windowWidth/10;

	for(var offset = -windowWidth/5; offset < windowWidth/5; offset = offset + 30){
		fill(abs(offset));
		drawShape(offset);
    }

 }

 function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
 }

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
