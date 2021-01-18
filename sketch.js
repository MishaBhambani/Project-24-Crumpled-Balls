
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var ground;
var box1;
var box2;
var box3;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100, 680, 10);
	ground = new Ground(400,height,800,20)

	box1 = new Box(600, 680, 100, 20);
	box2 = new Box(550, 652.5, 20, 75);
	box3 = new Box(650, 652.5, 20, 75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBall.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x: 20, y: -10});
	 }
   }