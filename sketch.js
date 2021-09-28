var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var shots, arrowGroup;
var red, blue, green, pink;
var score = 0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;

  shots = 1;
  
  arrowGroup = createGroup();

  RedGroup = createGroup();

  BlueGroup = createGroup();

  GreenGroup = createGroup();

  PinkGroup = createGroup();
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3

    if(frameCount % 2 === 0){
      score = score + 1;
    }

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  
  if(RedGroup.isTouching(arrow)){
    arrow.destory();
    RedGroup.destoryEach();

  }

  if(BlueGroup.isTouching(arrow)){
    arrow.destory();
    BlueGroup.destoryEach();

  }

  if(GreenGroup.isTouching(arrow)){
    arrow.destory();
    GreenGroup.destoryEach();

  }

  if(PinkGroup.isTouching(arrow)){
    arrow.destory();
    PinkGroup.destoryEach();

  }
  
   //release arrow when space key is pressed

  
    if (keyDown("space" && shots === 1)) {
      createArrow();
      shots = 0;
    }
    

  if (World.frameCount % 70 == 0){
    shots = 1;
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }

    if (select_balloon == 2) {
      blueBalloon();
    }

    if (select_balloon == 3) {
      greenBalloon();
    }

    if (select_balloon == 4) {
      pinkBalloon();
    }
    
  }
 
  
  
  drawSprites();


  textSize(20);
  stroke("white");
  fill("white");
  text("Score: "+score, 20, 20);
}


// Creating arrows for bow
 function createArrow() {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

}


function redBalloon() {   
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150; 
  red.scale = 0.1;
  RedGroup.add(red);
  
}

function blueBalloon() {
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  BlueGroup.add(blue);

}

function greenBalloon() {
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  GreenGroup.add(green);

}

function pinkBalloon() {
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.25;
  PinkGroup.add(pink); 

}
