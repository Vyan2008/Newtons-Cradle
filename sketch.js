
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobobject1,bobobject2,bobobject3,bobobject4,bobobject5;
var roof1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(960, 700);


	engine = Engine.create();
	world = engine.world;




	//Create the Bodies Here.

bobobject1 = new bob(160,650,100);
bobobject2 = new bob(320,650,100);
bobobject3 = new bob(480,650,100);
bobobject4 = new bob(640,650,100);
bobobject5 = new bob(800,650,100);

roof1 = new roof(480,100,960,50);

rope1 = new rope(bobobject1.body,roof1.body,-300,0);
rope2 = new rope(bobobject2.body,roof1.body,-150,0);
rope3 = new rope(bobobject3.body,roof1.body,0,0);
rope4 = new rope(bobobject4.body,roof1.body,150,0);
rope5 = new rope(bobobject5.body,roof1.body,300,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 

  drawSprites();
 
}

function keyPressed() {
  if(keyCode===UP_ARROW) {
    Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-50,y:-45})
    }
  }




