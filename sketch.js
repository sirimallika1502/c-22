const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground,ball;
var engine, world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ground_options = {
    isStatic:true
  }
ground = Bodies.rectagle(200,390,390,200,20,ground_options);
World.add(world,ground)

var ball_options = {
  restitution:1.0
ball = Bodies.rectangle(200,100,20,ball_options);
World.add(world,ball)


}
function draw() {
  background(255,255,255);  
  drawSprites();
}