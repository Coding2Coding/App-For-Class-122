xCoordinate = 0;
yCoordinate = 0;
drawCircle = "";
drawRectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Please speak what you want to draw (circle, rectangle)";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var data = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "What was recognized: " + data;
    if(data == "Circle") {
        xCoordinate = Math.floor(Math.random()*870);
        yCoordinate = Math.floor(Math.random()*620);
        document.getElementById("status").innerHTML = "Drawing circle";
        drawCircle = "set";
    }
    if(data == "rectangle") {
        xCoordinate = Math.floor(Math.random()*870);
        yCoordinate = Math.floor(Math.random()*620);
        document.getElementById("status").innerHTML = "Drawing rectangle";
        drawRectangle = "set";
    }
}

function setup() {
    canvas =  createCanvas(870, 620);
}

function draw() {
    if(drawCircle == "set") {
        radius = Math.floor(Math.random()*100);
        circle(xCoordinate, yCoordinate, radius);
        document.getElementById("status").innerHTML = "The circle has been drawn";
        drawCircle = "";
    }
    if(drawRectangle == "set") {
        rect(xCoordinate, yCoordinate, 70, 40);
        document.getElementById("status").innerHTML = "The rectangle has been drawn";
        drawRectangle = "";
    }
}