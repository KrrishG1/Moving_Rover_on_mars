var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;

rover_image = "rover.png";
mars_image = "mars.jpg";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function add() {
    //defining a var with a new img
    backgound_imgTag = new Image();
    //setting a function onload of the var
    backgound_imgTag.onload = uploadBackground;
    //load img
    backgound_imgTag.src = mars_image;

    //load image in browser before loading in canvas
    rover_imgTag = new Image();
    //setting a function onload of the var
    rover_imgTag.onload = uploadrover;
    //load img
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

/*checking keys on the keyboard based on the ASCII value*/
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);
//ASCII Value for up key is 38
if(keyPressed == '38'){
    up();
console.log("up");
}
//ASCII Value for down key is 40
if(keyPressed == '40'){
    down();
    console.log("down");
}
//ASCII Value for left key is 37
if(keyPressed == '37'){
    left();
    console.log("left");
}
//ASCII Value for right key is 39
if(keyPressed == '39'){
    right();
    console.log("right");
}
}