var canvas;
var music;
var box1, box2, box3, box4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    box1 = createSprite(-1,598,20,20);
    box1.shapeColor = "pink";

    box2 = createSprite(30,598,20,20);
    box2.shapeColor = "blue";

    box3 = createSprite(60,598,20,20);
    box3.shapeColor = "red";
    
    box4 = createSprite(90,598,20,20);
    box4.shapeColor = "green";

    //create box sprite and give velocity
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    //add condition to check if box touching surface and make it box

    drawSprite();
}
