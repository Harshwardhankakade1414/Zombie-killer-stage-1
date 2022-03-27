var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombieImg,zombieGroup
var lifeImg

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg= loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
  lifeImg=loadImage("assets/heart_3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1

life=createSprite(displayWidth-150,30,50,50)
life.addImage(lifeImg)
life.scale=0.3
  


//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombieGroup=new Group()


}

function draw() {
  background(0); 


  spawnZombies()

  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-15
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+15
  }


  //release bullets and change the image of shooter to shooting position when space is pressed
  if(keyWentDown("space")){
  
    player.addImage(shooter_shooting)
  
  }

  //player goes back to original standing image once we stop pressing the space bar
  else if(keyWentUp("space")){
    player.addImage(shooterImg)

    
  }


  drawSprites();


}
function spawnZombies(){
  if(frameCount%250===0){
   var zombie=createSprite(displayWidth,displayHeight-300,50,50)
   zombie.velocityX=-5
   zombie.y=random(displayHeight-500,displayHeight-150)
   zombie.addImage(zombieImg)
   zombie.scale=0.15
   zombieGroup.add(zombie)
  }
    

}
