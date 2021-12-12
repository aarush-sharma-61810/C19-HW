var lambo1, lambo2, lamboIMG
var road, roadIMG;
var sound;




function preload(){
    lamboIMG  = loadImage("lambo.png")
    roadIMG = loadImage("Road.png")
    sound = loadSound("bmw_car_sound.mp3")
}

function setup() {
    createCanvas(600,600);
    road=createSprite(300,600);
    road.addImage("Road.png",roadIMG);
    road.velocityY = 10;
    road.velocityY = road.velocityY + 100
    lambo1 = createSprite(150,400,50,50)
    lambo1.scale=0.4
    lambo1.addImage(lamboIMG)
    lambo2 =createSprite(450,400,50,50)
    lambo2.scale=0.4
    lambo2.addImage(lamboIMG)
    sound.loop()
}

function draw() {
    background(0);
    if(road.y > 600) {
        road.y=height/2
    }
    if(keyDown(UP_ARROW)) {
        lambo2.y=lambo2.y-1
    }

    if(keyDown(DOWN_ARROW)) {
        lambo2.y =lambo2.y + 1
    }

    if(keyDown(RIGHT_ARROW)){
        lambo2.x=lambo2.x + 1
    }

    if(keyDown(LEFT_ARROW)) {
        lambo2.x =  lambo2.x -1
    }

    if(keyDown("Q")) {
        lambo1.y = lambo1.y-1
    }

    if(keyDown("Z")) {
        lambo1.y=lambo1.y+1
    }

    if(keyDown("S")) {
        lambo1.x=lambo1.x+1
    }

    if(keyDown("A")) {
        lambo1.x=lambo1.x-1
    }

    if(lambo1.isTouching(lambo2)) {
        lambo1.bounceOff(lambo2);
        lambo2.bounceOff(lambo1);
    }
    drawSprites();
}