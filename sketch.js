const Bodies = Matter.Bodies;
var car , carImage;
var roadImage;
var backGround;
var restart , restartImage;
var obstacle ,obstacle1,obstacle2,obstacle3,obstacle4;
var gameState = 0;
var score = 0;
var obstacleGroup;


function preload() {
	carImage = loadImage("car.png");
  roadImage = loadImage("road1.png");
	restartImage = loadImage("restart.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
} 

function setup() {
 createCanvas(800,700);

	backGround = createSprite(800,50,900,0)
	backGround.addImage(roadImage);
	backGround.scale = 7.2;
	backGround.velocityX = -3;

  car = createSprite(100 , 200 , 100 , 5);
  car.addImage(carImage);

	restart = createSprite(200,200,50,50);
	restart.addImage(restartImage);
  restart.visible = false;

  obstacleGroup = new Group();
	
}


function draw() {
  rectMode(CENTER);
  background("white");

 
 
  if (backGround.x < 90) {
    backGround.x = backGround.width / 2;
  }

  if (keyDown("up")) {
    car.y = car.y - 2;
  }

  if (keyDown("down")){
    car.y = car.y + 2;
  }

  
  car.setCollider("rectangle" , 100 , 200 , 100 , 5);
  

  
 
 spawnObstacles();
 //if(car.x - obstacle.x < obstacle.width/2 + car.width/2 && 
 // obstacle.x - car.x < obstacle.width/2 + car.width/2 &&
 // car.y - object2.y < obstacle.width/2 + car.width/2 &&
  //obstacle.y - car.y < obstacle.width/2 + car.width/2)
  //{
 //  
 //}

 //if((car.x)-(obstacle.x) < (obstacle.width+car.width)/2){
 //  

 
  
 if(obstacleGroup.isTouching(car)){
  restart.visible = true;
 }

 drawSprites();

 score = score + Math.round(getFrameRate()/60);
 fill("white")
 textSize(25);
  text("Score : " + score , 20, 50);
 }

function spawnObstacles() {
  if (frameCount % 50 === 0) {
    
    obstacle = createSprite(Math.round(random(100, 700)), Math.round(random(100, 200)));
        obstacle.scale = 0.5;
    obstacle.velocityX = -2;
   // obstacle.lifetime = 100;
    obstacle.depth = car.depth;
    obstacle.depth += 1;
    obstacleGroup.add(obstacle);
    
    
     var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      default: break;
    
    }
  
}
}

 



