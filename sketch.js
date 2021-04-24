
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

function setup() 
{
	createCanvas(750,700);

	engine=Engine.create();
	world=engine.world;

	ground=new Ground(600,700,1200,20)
	D1=new Dustbin(600,680,200,15);
	D2=new Dustbin(500,615,15,150);
    D3=new Dustbin(700,615,15,150);

	paper=new Paper(100,600,50);
	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);

  drawSprites();
  paper.display();
  ground.display();
  D1.display();
  D2.display();
  D3.display();
}

function keyPressed()
{

if(keyCode===UP_ARROW) 
{
Matter.Body.applyForce(paper.body,paper.body.position,{x:370,y:-370});
}

}

