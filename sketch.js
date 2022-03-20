var ship , ship_running;

var sea;





function preload(){


ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

seaImg = loadImage("sea.png");
    
    
sea.addImage(seaImg)

if(sea.x  < 0 ) {  
sea.x= sea.width/2;
}




}

function setup(){
  createCanvas(400,400);
  
  //barco
ship=createSprite(50,160,20,50)
ship.addAnimation("flutuando",ship_running);
ship.scale=0.2



  



}

function draw() {
  background("blue");
    drawSprites();
 


}
