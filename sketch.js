var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombieGroup;
var heart1, heart1Img;
var hear2, heart2Img;
var heart3, heart3Img;

function preload(){
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  bgImg = loadImage("assets/bg.jpeg")
  zombieImg = loadImage("assets/zombie.png")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  zombieGroup = createGroup();

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
 
   player.debug = true
   //player.debug = false
    // player.Debug =false
    // Player.debug = true

   //player.Collider("rectagle",0,0,300,300)
   //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,300,300)
  // player.Setcollider("rectangle",0,0,300,300)

  heart = createSprite(width-200, 100)
  heart.addAnimation ("heart3", heart3Img);
  heart.addAnimation ("heart2", heart2Img);
  heart.addAnimation ("heart1", heart1Img);
  heart.scale = 0.3

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  //player.addImage( shooter_shooting )
 // player.addImage()
 player.addImage(shooterImg)
 //player.addImage(shooter_2.png)
}
spawnZombies();
drawSprites();

}

function spawnZombies(){
  if(frameCount % 45 === 0){
    zombie = createSprite(windowWidth,windowHeight-30);
    zombie.y = Math.round(random(600,660));
    zombie.addImage(zombieImg);
    zombie.scale = 0.15;
    zombie.velocityX = -3;
    zombie.lifetime = 600;
    zombieGroup.add(zombie);
  }
}