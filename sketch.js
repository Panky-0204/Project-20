var car1,car2,car3,car4;
var wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car1 = createSprite(50,100,50,50);
    car1.velocityX = speed;
 /* car2 = createSprite(50,200,50,50);
    car2.velocityX = speed;
  car3 = createSprite(50,300,50,50);
    car3.velocityX = speed;
 car4 = createSprite(50,350,50,50);
    car4.velocityX = speed;*/

  wall1 = createSprite(1200,100,60,height/2);
    wall1.shapeColor = color(80,80,80);
 /* wall2 = createSprite(1500,200,60,height/2);
    wall2.shapeColor = color(80,80,80);
  wall3 = createSprite(1500,300,60,height/2);
    wall3.shapeColor = color(80,80,80);
  wall4 = createSprite(1500,350,60,height/2);
    wall4.shapeColor = color(80,80,80);*/
}

function draw() {
  background(0); 
  
  if(wall1.x-car1.x<(car1.width+wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car1.shapeColor = color(255,0,0);
      //car2.shapeColor = color(255,0,0);
      //car3.shapeColor = color(255,0,0);
      //car4.shapeColor = color(255,0,0);
    }
    else if(deformation<180 && deformation>100){
      car1.shapeColor = color(230,230,0);
      //car2.shapeColor = color(230,230,0);
      //car3.shapeColor = color(230,230,0);
      //car4.shapeColor = color(230,230,0);
    }
    else if(deformation<100){
      car1.shapeColor = color(0.255,0);
      //car2.shapeColor = color(0.255,0);
      //car3.shapeColor = color(0.255,0);
      //car4.shapeColor = color(0.255,0);
    }
  }

  drawSprites();
}