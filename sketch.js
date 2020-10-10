
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground,dustbin1,dustbin2,dustbin3,dustbin;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,100,70);
	ground = new Ground();
	dustbin1 = new Dustbin(450,500,20,400);
	dustbin2 = new Dustbin(650,628,400,20);
	dustbin3 = new Dustbin(720,500,20,400);
	dustbin = new DustbinImage();


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  paper.display();
  ground.display();
  dustbin.display();

 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paper.body,paper.body.position,{x:115,y:-115});

	}
}

