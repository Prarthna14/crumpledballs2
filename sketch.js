
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground1;
var box1,box2,box3;
var boxIMG;
function preload()
{
	boxIMG=loadImage("sprites/dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(100,500,30);


ground1=new ground(400,695,800,10);

    

	box2=createSprite(520,640,20,100);
	box2.shapeColor="red";

	box3=createSprite(570,640,20,100);
	box3.shapeColor="red";

	box1=createSprite(550,640,200,20);
	//box1.shapeColor="red";
	box1.addImage(boxIMG)
	box1.scale=0.35;
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  
  
  //box2.display();
 //box3.display();
  
  drawSprites();
  paper1.display();
  ground1.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-100});
	}
}


