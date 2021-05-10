
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 =new Bob(200,200);
	bob2 = new Bob(300,200);
	bob3 = new Bob(400,200);
	bob4 = new Bob(500,200);
	bob5 = new Bob(600,200);
	roof = new Roof(400,180,500,20)
	rope1 = new Rope(bob1.body,{x:200,y:190});
	rope2 = new Rope(bob2.body,{x:300,y:190});
	rope3 = new Rope(bob3.body,{x:400,y:190});
	rope4 = new Rope(bob4.body,{x:500,y:190});
	rope5 = new Rope(bob5.body,{x:600,y:190});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine)
  bob1 .display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
	function mouseDragged(){
		Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
	}


