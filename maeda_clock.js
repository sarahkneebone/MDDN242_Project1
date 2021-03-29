// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {

  background(0); //  black

let firstDigCornerX = 215; //the top left corner X value of the first digit's space

let bothDigCornerY = 125; //top left corner Y value of both digits
 
let secondDigCornerX = 515; //the top left corner X value of the second digit's space



let space = 45; //how far each ellipse is spaced apart from the other



let hourDiameter = 45; //hour ellipse (red) size value

let minDiameter = 40; //minute ellipse (yellow) size value

let secDiameter = 35; //seconds ellipse (blue) size value


strokeWeight(2);


//HOURS (red)
push();
 
  stroke(255,0,0); //red
 
  noFill();
 
//first hour digit (1)

	ellipse(firstDigCornerX + 3*space, bothDigCornerY, hourDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + space, hourDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 2*space, hourDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 3*space, hourDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 4*space, hourDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 5*space, hourDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 6*space, hourDiameter);
	ellipse(firstDigCornerX + 2*space, bothDigCornerY + space, hourDiameter);



//second hour digit (1)

	ellipse(secondDigCornerX + 3*space, bothDigCornerY, hourDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY + space,hourDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY + 2*space,hourDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY + 3*space,hourDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY + 4*space,hourDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY + 5*space,hourDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY + 6*space,hourDiameter);
	ellipse(secondDigCornerX + 2*space, bothDigCornerY + space, hourDiameter);

pop();





//MINUTES (yellow)
push();

	stroke(255,255,0); //yellow

	noFill();

//first minute digit (0)

	//top row
	ellipse(firstDigCornerX + space, bothDigCornerY, minDiameter);
	ellipse(firstDigCornerX + 2*space,bothDigCornerY, minDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY, minDiameter);
	//right side
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + space, minDiameter);
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 2*space, minDiameter);
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 3*space, minDiameter);
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 4*space, minDiameter);
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 5*space, minDiameter);
	//bottom row
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 6*space,minDiameter);
	ellipse(firstDigCornerX + 2*space, bothDigCornerY + 6*space,minDiameter);
	ellipse(firstDigCornerX + space, bothDigCornerY + 6*space,minDiameter);
	//left side
	ellipse(firstDigCornerX, bothDigCornerY + space,minDiameter);
	ellipse(firstDigCornerX, bothDigCornerY + 2*space,minDiameter);
	ellipse(firstDigCornerX, bothDigCornerY + 3*space,minDiameter);
	ellipse(firstDigCornerX, bothDigCornerY + 4*space,minDiameter);
	ellipse(firstDigCornerX, bothDigCornerY + 5*space,minDiameter);



//second minute digit (7)

	ellipse(secondDigCornerX, bothDigCornerY, minDiameter);
	ellipse(secondDigCornerX + space, bothDigCornerY, minDiameter);
	ellipse(secondDigCornerX + 2*space, bothDigCornerY, minDiameter);
	ellipse(secondDigCornerX + 3*space, bothDigCornerY, minDiameter);
	ellipse(secondDigCornerX + 4*space, bothDigCornerY, minDiameter);

	ellipse(secondDigCornerX + 4*space, bothDigCornerY + space, minDiameter);
	ellipse(secondDigCornerX + 4*space, bothDigCornerY + 2*space, minDiameter);

	ellipse(secondDigCornerX + 3*space, bothDigCornerY + 3*space, minDiameter);

	ellipse(secondDigCornerX + 2*space, bothDigCornerY + 4*space, minDiameter);
	ellipse(secondDigCornerX + 2*space, bothDigCornerY + 5*space, minDiameter);
	ellipse(secondDigCornerX + 2*space, bothDigCornerY + 6*space, minDiameter);

pop();








//SECONDS (blue)

push();

stroke(0,0,255); //blue

noFill();

//first second digit (5)

	ellipse(firstDigCornerX + 4*space, bothDigCornerY, secDiameter); 
	ellipse(firstDigCornerX + 3*space, bothDigCornerY, secDiameter);
	ellipse(firstDigCornerX + 2*space, bothDigCornerY, secDiameter);
	ellipse(firstDigCornerX + space, bothDigCornerY, secDiameter);
	ellipse(firstDigCornerX, bothDigCornerY, secDiameter);

	ellipse(firstDigCornerX,bothDigCornerY + space, secDiameter);
	ellipse(firstDigCornerX,bothDigCornerY + 2*space, secDiameter);

	ellipse(firstDigCornerX + space, bothDigCornerY + 2*space, secDiameter);
	ellipse(firstDigCornerX + 2*space, bothDigCornerY + 2*space, secDiameter);
	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 2*space, secDiameter);

	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 3*space, secDiameter);
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 4*space, secDiameter);
	ellipse(firstDigCornerX + 4*space, bothDigCornerY + 5*space, secDiameter);

	ellipse(firstDigCornerX + 3*space, bothDigCornerY + 6*space, secDiameter);
	ellipse(firstDigCornerX + 2*space, bothDigCornerY + 6*space, secDiameter);
	ellipse(firstDigCornerX + space, bothDigCornerY + 6*space, secDiameter);

	ellipse(firstDigCornerX, bothDigCornerY + 5*space, secDiameter);




//second second digit (4)

	//starts from most right ellipse and progresses clockwise
	 ellipse(secondDigCornerX + 4*space, bothDigCornerY + 4*space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + 4*space, secDiameter);
	 ellipse(secondDigCornerX + 2*space, bothDigCornerY + 4*space, secDiameter);
	 ellipse(secondDigCornerX + space, bothDigCornerY + 4*space, secDiameter);
	 ellipse(secondDigCornerX, bothDigCornerY + 4*space, secDiameter);
	 ellipse(secondDigCornerX, bothDigCornerY + 3*space, secDiameter);	 
	 ellipse(secondDigCornerX + space, bothDigCornerY + 2*space, secDiameter);
	 ellipse(secondDigCornerX + 2*space, bothDigCornerY + space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + 2*space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + 3*space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + 4*space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + 5*space, secDiameter);
	 ellipse(secondDigCornerX + 3*space, bothDigCornerY + 6*space, secDiameter);

pop();


}
