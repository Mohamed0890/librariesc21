var fr,mr;
var mohamed,yusuf;


function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 80, 40);
  mr=createSprite(350,350,40,80);
  fr.debug=true;
  mr.debug=true;
  mohamed=createSprite(50,200,50,50);
  yusuf=createSprite(750,200,50,50);
  mohamed.shapeColor='blue';
  yusuf.shapeColor='blue';
  mohamed.velocityX=5;
  yusuf.velocityX=-5;
}

function draw() {
  background(0); 
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  bounceOff(mohamed,yusuf);
  if(isTouching(fr,mr)){
    mr.shapeColor='red';
    fr.shapeColor='red';
  }
  else{
    mr.shapeColor='green';
    fr.shapeColor='green';
  }
  drawSprites();  
}

