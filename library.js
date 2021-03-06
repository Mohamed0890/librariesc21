function isTouching(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2 &&
      ob2.x-ob1.x<ob1.width/2+ob2.width/2 &&
      ob1.y-ob2.y<ob1.height/2+ob2.height/2 &&
      ob2.y-ob1.y<ob1.height/2+ob2.height/2){
      return true;
    }
    else{
      return false;
    }
  }

  function bounceOff(a,b){
    if (a.x - b.x < b.width/2 + a.width/2
        && b.x - a.x < b.width/2 + a.width/2) {
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
    }
    if (a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
    }
  }