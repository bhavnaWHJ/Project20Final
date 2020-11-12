var car, carImg;
var wall;
var carDeform, carDeform1;

function preload(){
     carImg = loadAnimation("car.png");
     carDeform1 = loadAnimation("carCrash3.png");
     carDeform = loadAnimation("carCrash2.png");

}

function setup(){
 createCanvas(800,500);
 car = createSprite(50,250,200,200);
 car.addAnimation("car", carImg);
 car.addAnimation("deformed1",carDeform1);
 car.addAnimation("deformed",carDeform)
 // car.scale = 0.5;
 car.velocityX = 4;

 wall = createSprite(700,250,20,500);
 wall.shapeColor="red";

 speed = random(55,90);
 //console.log(speed);
 weight = random(400,1500);

 car.velocityX = speed;

}
function draw(){
  background(0);

  if(wall.x-car.x <= wall.width/2 + car.width/2) {

    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed /22509;

    if(deformation > 180){
       
      car.changeAnimation("deformed1", carDeform1);
      textSize(20);
      fill("red");
      strokeWeight(2);
      stroke("white");
      text("VERY HIGH DEFORMATION( >180 )=>LETHAL for Passengers", 10,40);
      //car.shapeColor = "red"
    }
    if(deformation<180 && deformation > 100){
      textSize(20);
      fill("orange");
      strokeWeight(2);
      stroke("white");
      text("HIGH DEFORMATION=>AVERAGE for Passengers( inbetween 180 & 100 )",10 ,40);
      car.changeAnimation("deformed", carDeform)
      //car.shapeColor = "blue"
    }
    if(deformation<100){
      textSize(20);
      fill("green");
      strokeWeight(2);
      stroke("white");
      text("LOW DEFORMATION=>FINE for Passengers( < 100 )", 10,40);
      car.changeAnimation("car", carImg);
     //car.shapeColor = "green";
    }
  }

  

   

  drawSprites();
}