var car,wall
var car2,wall2










function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 100, 20, 100);
  car=createSprite(100,100,20,20);

  wall2=createSprite(700, 300, 20, 100);
  car2=createSprite(100,300,20,20);
}

function draw() {
  background("black");
  
  if(keyCode===RIGHT_ARROW){
    car.velocityX=9
  }

if(car.isTouching(wall)){
  car.velocityX=0;
  wall.shapeColor="red"
}

if(keyCode===UP_ARROW){
  car2.velocityX=8
}
if(car2.isTouching(wall2)){
car2.velocityX=0;
  wall2.shapeColor="green"
}
  drawSprites();
}