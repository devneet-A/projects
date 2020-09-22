var player,playerImg;
var backgroundImage;
var background1;
function preload(){
//playerImg = loadAnimation("Character2/CH1.png","Character2/CH2.png","Character2/CH3.png");
backgroundImage = loadImage("Images/Forest1.gif")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
  background1 = createSprite(displayWidth/2,displayHeight/2);
  background1.addImage(backgroundImage)
  background1.scale =4.5;
  player = createSprite(200,790);
  //player.addAnimation(playerImg);
}


function draw() {

 background1.velocityX = -5;

 if(background1.x<600){
   background1.x = displayWidth/2 ;
   
 }
 
 
  
 
 
 
 drawSprites();
}