
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone;
var rubber;
var hammer;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
  world = engine.world;
  hammer=new Hammer(200,200,50,50)
  stone=new Sammer(200,150,60,60)
  rubber=new Rammer(200,250,80,80)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display()
  rubber.display()
  stone.diaplay()
  drawSprites();
 
}



