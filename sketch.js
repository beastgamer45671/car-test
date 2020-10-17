var car, wall
var speed, weight;
var D;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

 wall = createSprite(1500, 200, 60, height/2);
 wall.shapeColor = "black";

 car = createSprite(50, 200, 50, 50);
 //car.shapeColor = "green";
car.velocityX = speed;

}

function draw() {
  background(255,255,255);

 // rect1.x = World.mouseX;
  //rect1.y = World.mouseY;
  
  if(wall.x - car.x < wall.width/2 + car.width/2) {
   car.velocityX = 0;
   D = 0.5 * weight * speed * speed / 22500;
   if(D>180) {
     car.shapeColor = "green";
   }
   if(D<180 && D>100) {
     car.shapeColor = "yellow";
   }
   if(D<100) {
     car.shapeColor = "red";
   }
  }
  
  drawSprites();
}