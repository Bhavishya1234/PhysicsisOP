
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var object2;
var object3;
var object4;

function setup(){
  var canvas = createCanvas(500,400);
  
  
  engine = Engine.create();
  world = engine.world;

  
  object=Bodies.rectangle(100,50,50,50);

  World.add(world,object);

  object2=Bodies.circle(200,50,40);
  World.add(world,object2);

  object3=Bodies.rectangle(300,50,69,50);
  World.add(world,object3);

  object4=Bodies.circle(400,50,40);
  World.add(world,object4);

  //console.log(object.position.x);
  //console.log(object.position.y);
}
function draw()
{
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  fill("orange");
    rect(object.position.x,object.position.y,50,50);
  fill("red");
    circle(object2.position.x,object2.position.y,40);
  fill("green");
    rect(object3.position.x,object3.position.y,50,69);
  fill("yellow");
    circle(object4.position.x,object4.position.y,40);
  
}
