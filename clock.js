/*
 * use p5.js to draw a clock on a 960x500 canvas
 */ 
function draw_clock(obj) {
    // draw your own clock here based on the values of obj:
    //    obj.hours goes from 0-23
    //    obj.minutes goes from 0-59
    //    obj.seconds goes from 0-59
    //    obj.millis goes from 0-999
    //    obj.seconds_until_alarm is:
    //        < 0 if no alarm is set
    //        = 0 if the alarm is currently going off
    //        > 0 --> the number of seconds until alarm should go off

    // YOUR MAIN CLOCK CODE GOES HERE
    background(0);


    //var milliMap = map(obj.millis,0,999,50,width);
    // >var secMap = map(obj.seconds,0,59,50,width-50);
    //var minsMap = map(obj.minutes,0,59,width-50);
    //var hoursMap = map(obj.hours,0,23,20,100);
  
    angleMode(DEGREES)



let hours = obj.hours;
let minutes = obj.minutes;
let seconds = obj.seconds;
let millis = obj.millis;
let alarm = obj.seconds_until_alarm;


let rotateHour = map(hours,0,12,0,360);
let rotateMins = map(minutes,0,59,0,360);
let rotateSec = map(seconds,0,59,0,360);
let rotateMilli = map(millis,0,999,0,360);


let secondsFraction = seconds + (millis/1000);
let secondsWidth = map(secondsFraction, 0, 60, 0, width - 15);
let secondsHeight = map(secondsFraction, 0, 60, 0, height - 15);

let minutesFraction = minutes + (seconds/60);
let minutesWidth = map(minutesFraction, 0, 60, 0, width - 10);
let minutesHeight = map(minutesFraction, 0, 60, 0, height - 10);

let hoursFraction = hours + (minutes/60);
let hoursWidth = map(hoursFraction, 0, 24, 0, width - 15);
let hoursHeight = map(hoursFraction, 0, 24, 0, height - 15);


let alarm_message = ""
let alarmBarWidth = 15;




noStroke();


 


push();
    
    translate(width/2,height/2)
    rotate(90);

    //hours arc
    push();
        fill(250,201,1); //yellow
        arc(0,0,400,400,0 + rotateHour,180 + rotateHour);
    pop();


    //minutes arc
    push();
        fill(255,255,255); //white
        arc(0,0,300,300,0 + rotateMins,180 + rotateMins);
    pop();


    //seconds arc
    push();
        fill(221,1,0); //red
        arc(0,0,200,200,0 + rotateSec,180 + rotateSec);
    pop();


    //milliseconds arc
    push();
        fill(34,80,149); //blue
        arc(0,0,100,100,0 + rotateMilli,180 + rotateMilli);
    pop();

pop();



//hours bar
fill(250,201,1); //yellow
    //top horizontal
    rect(0,0,hoursWidth,5);
    //right vertical
    rect(955,0,5, hoursHeight,5);


//minutes bar
fill(255,255,255); //white
    //top horizontal
    rect(0,5,minutesWidth,5);
    //right vertical
    rect(950,0,5, minutesHeight,5);


//seconds bar 
fill(221,1,0); //red
    //top horizontal
    rect(0,10,secondsWidth, 5);
    //right vertical
    rect(945,0,5, secondsHeight);




push();

translate(width,height);
rotate(180);




//hours bar
fill(250,201,1); //yellow
    //bottom horizontal
    rect(0,0,hoursWidth,5);
    //lwft vertical
    rect(955,0,5, hoursHeight,5);


//minutes bar
fill(255,255,255); //white
    //bottom horizontal
    rect(0,5,minutesWidth,5);
    //left vertical
    rect(950,0,5, minutesHeight,5);


//seconds bar
fill(221,1,0); //red
    //bottom horizontal
    rect(0,10,secondsWidth, 5);
    //left vertical
    rect(945,0,5, secondsHeight);

pop();





//ALARM
    if(alarm < 0);

    else if(alarm == 0) {
        alarm_message = "Alarm"
        background(255,255,255);

        //outer alarm ellipse
        fill(34,80,149); //blue
        ellipse(width/2,height/2,400);

        //middle alarm ellipse
        fill(250,201,1); //red
        ellipse(width/2,height/2,385);

        //inner alarm ellipse
        fill(0,0,0); //black
        ellipse(width/2,height/2,370);

        //border
        fill(221,1,0); //red
        rect(0,0,width,alarmBarWidth); //top
        rect(width-alarmBarWidth,alarmBarWidth,width,height); //right
        rect(0,height-alarmBarWidth,width,height); //bottom
        rect(0,0,alarmBarWidth,height); //left
    
    }



}
