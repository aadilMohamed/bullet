var bullet
var wall
var speed,thickness

function setup() {
  createCanvas(1600,400);
bullet = createSprite(100,200,40,30)
wall = createSprite(1500,200,50,300)
bullet.velocityX = speed;
speed = random(15,40)
wall.width = random(22,83)
bullet.shapeColor = color("black")
}

function draw() {
  background(255,255,255);
if(hasCollided(bullet,wall)){
  bullet.velocityX = 0
  var damage = 0.5*(speed*speed/(wall.width*wall.width*wall.width));
  if(damage>10){
    wall.shapeColor=color("green");
  }
  if(damage<10){
    wall.shapeColor=color("red");
  }
}
bullet.depth = wall.depth+1
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x+ lbullet.width;
wallLeftEdge = lwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}