const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var body1,body2,body3,body4,body5;
var rope1,rope2,rope3,rope4,rope5;




    bodyObject1 = new Body (170,500,55);
	bodyObject2 = new Body(280,500,55);
	bodyObject3 = new Body(390,500,55);
	bodyObject4 = new Body(500,500,55);
	bodyObject5 = new Body(610,500,55);

	rope1=new rope(bobObject1.body, roof.body, -50*2, 0);
    rope2=new rope(bobObject2.body, roof.body, -50, 0);
    rope3=new rope(bobObject3.body, roof.body, 0, 0);
    rope4=new rope(bobObject4.body, roof.body, 50, 0);
    rope5=new rope(bobObject5.body, roof.body, 50 * 2, 0);
	Engine.run(engine);



	function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  bodyObject1.display();
  bodyObject2.display();
  bodyObject3.display();
  bodyObject4.display();
  bodyObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
  
  //create ellipse shape for multiple bobs here

 
}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}
