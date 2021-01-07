
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground,invisibleGround
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  console.log(monkey.y)
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width /2
  console.log(ground.x)
  invisibleGround = createSprite(400,360,400,20);
  invisibleGround.visible = false;
  obstacleGroup=createGroup()
  foodGroup=createGroup()
   score=0
}


function draw() {
   background("lime")
  
  stroke("black")
  textSize(20);
  fill("black")
  text("Survival Time: "+ score,200,50)
  score=Math.ceil(frameCount/frameRate())
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
 
   if(keyDown("space")&& monkey.y >=300) {
        monkey.velocityY = -12;
        }
   monkey.velocityY = monkey.velocityY + 0.8
    
   
  
   obstacles();
  food();
  drawSprites()
}

function obstacles(){
 if (frameCount % 80 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -6
   obstacle.addImage(obstaceImage)
             
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   
    obstacleGroup.add(obstacle);
 }
}
function food(){
  
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var food = createSprite(600,320,40,10);
    food.y = Math.round(random(120,200));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    food.lifetime = 200;
    foodGroup.add(food);
  }
}





