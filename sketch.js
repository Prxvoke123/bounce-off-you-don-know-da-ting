function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 500, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 500,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  
}

function draw() {
  background(255,255,255);  
  if(abs(movingRect.y-fixedRect.y)<movingRect.height/2+fixedRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  if(abs(movingRect.x-fixedRect.x)<movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  drawSprites();
}