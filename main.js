var rover_x = 10;
var rover_y = 10;
var rover_width = 100;
var rover_height = 90;

rover_image = "rover.png";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_images_array =["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number = Math.floor(Math.random() * 4);
mars_land = nasa_mars_images_array[random_number];

function add() {
    //defining a var with a new img
    backgound_imgTag = new Image();
    //setting a function onload of the var
    backgound_imgTag.onload = uploadBackground;
    //load img
    backgound_imgTag.src = mars_land;

    //load image in browser before loading in canvas
    rover_imgTag = new Image();
    //setting a function onload of the var
    rover_imgTag.onload = uploadrover;
    //load img
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(backgound_imgTag, 0, 0, canvas.width, canvas.height);
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

function up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow pressed, x ="+ rover_x +" | y ="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When up arrow pressed, x ="+ rover_x +" | y ="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When up arrow pressed, x ="+ rover_x +" | y ="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When up arrow pressed, x ="+ rover_x +" | y ="+ rover_y);
        uploadBackground();
        uploadrover();
    }
}