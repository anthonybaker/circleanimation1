
// Get the canvas object and the context
var canvas = document.getElementById('canvas');
var mainContext = canvas.getContext('2d');

// variable for the circle angle
var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

// Function to draw
function drawCircle() {

    // clear all contents of the canvas
    mainContext.clearRect(0, 0, canvas.width, canvas.height);
         
    // color in the background
    mainContext.fillStyle = "#EEEEEE";
    mainContext.fillRect(0, 0, canvas.width, canvas.height);
     
    // draw the circle
    mainContext.beginPath();
    
    // calculate the radious 
    var radius = 25 + 150 * Math.abs(Math.cos(angle));

    mainContext.arc(canvas.width/2, canvas.height/2, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
     
    // color in the circle
    mainContext.fillStyle = "#006699";
    mainContext.fill();

    // modify the angle
    angle += Math.PI / 64;

    // call drawCircle every time Browser redraws (around 60 times per second)
    requestAnimationFrame(drawCircle);

}


// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth - 25;
    canvas.height = window.innerHeight - 25;

    /**
     * Your drawings need to be inside this function otherwise they will be reset when 
     * you resize the browser window and the canvas goes will be cleared.
     */

    drawCircle();
}
resizeCanvas();