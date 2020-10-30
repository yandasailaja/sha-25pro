
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbinObj;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600,height,1200,20);
paper = new Paper(100,350,40);
//dustbin1 = new Dustbin(1000,height-22,200,20);
dustbinObj=new dustbin(700,650);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  dustbinObj.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode == UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

 }
}

