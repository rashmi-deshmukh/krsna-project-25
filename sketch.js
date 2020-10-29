
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var border1;
var border2;
var border3;

var ground;
var ground1;

var dustbin1;

function preload(){
     dustbin1 = loadImage("dustbin3.png");
}

function setup() {
	var canvas = createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	var ground = Bodies.rectangle(400,650,800,5, {isStatic:true});
	World.add(world,ground)
		
	border1 = new dustbin(480,600,100,PI/4);
	border2 = new dustbin(565,640,180,PI/0.035);
	border3 = new dustbin(650,600,100,PI/4);

	
	//Create the Bodies Here.
	ball = new paper(100,200);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(255);
  Engine.update(engine);

  border1.display();
  border2.display();
  border3.display();
  ball.display();
  rect(0,650, 800,5)
  image(dustbin1, 570,580, 200,150)
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-120});
	}
}


