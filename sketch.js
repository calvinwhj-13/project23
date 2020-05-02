const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4;
var wall1,wall2,wall3,wall4,wall5;
var floor;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

box1 = new box(200,320,100,100);
box2 = new box(300,320,100,100);
box3 = new box(400,320,100,100);
box4 = new box(300,270,100,100);

wall1 = new box(140,270,20,250);
wall2 = new box(460,270,20,250);

wall3 = new box(200,220,100,100);
wall4 = new box(300,220,100,100);
wall5 = new box(400,220,100,100);

floor = new ground(400,380,800,20);

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  floor.display();  
  drawSprites();
}