
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
 var roofObject;
 var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
 var rope1 , rope2 , rope3 , rope4 , rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject=new roof(width/2,height/4,width/7,20);
 bobObject1 = new bob(720,500,40)
 bobObject2 = new bob(760,500,40)
 bobObject3 = new bob(800,500,40)
 bobObject4 = new bob(840,500,40)
 bobObject5 = new bob(880,500,40)
 rope1 = new rope(bobObject1.body,{x:720,y:175})
 rope2 = new rope(bobObject2.body,{x:760,y:175})
 rope3 = new rope(bobObject3.body,{x:800,y:175})
 rope4 = new rope(bobObject4.body,{x:840,y:175})
 rope5 = new rope(bobObject5.body,{x:880,y:175})
	
 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  //drawSprites();
  roofObject.display();
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();

}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50 , y:-45})
}

}


