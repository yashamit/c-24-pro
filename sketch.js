
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone 
var floor
var hammer
var iron
var rubber
function preload()
{
	
}

function setup() {
	createCanvas(displayWidth-50, displayHeight-50);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone = new Stone(400,30,100,100)
   floor = new Ground(displayWidth/2 , displayHeight-200 , displayWidth , 20)
   hammer = new Hammer(300 , 400)
   iron = new Iron(600 , 0)
   rubber = new Rubber(100 , 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  
 stone.display();
 floor.display();
 hammer.display();
 iron.display();
 rubber.display()

  drawSprites();
 
}



