const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,d1,d2,d3,d4,d5,d6,d7;
var particles = [];
var plinkos= [];
var divisions = [];
var score=0;
function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,780,480,20);
  d1 = new Divisions(7.5,600,15,400);
  d2 = new Divisions(75.5,600,15,400);
  d3 = new Divisions(151,600,15,400);
  d4 = new Divisions(228.5,600,15,400);
  d5 = new Divisions(295,600,15,400);
  d6 = new Divisions(375.5,600,15,400);
  d7 = new Divisions(488,600,15,400);
  
 for(var j =40; j <=width; j=j+50)
 {
   plinkos.push(new Plinko(j,75,10));
 }
 for (var j = 15; j <=width-10; j=j+50)
 {
   plinkos.push(new Plinko(j,155,10));
 }
 for(var j =40; j <=width; j=j+50)
 {
   plinkos.push(new Plinko(j,235,10));
 } 
   for(var j =15; j <=width-10; j=j+50)
{
     plinkos.push(new Plinko(j,315,10));
}

}
function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  d7.display();
  
  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
     } if(frameCount%60===0){
        particles.push(new Particles(random(width/2-30, width/2+30), 10,10)); score++; 
      } 
        for (var j = 0; j < particles.length; j++) { 
          particles[j].display(); 
        } 
        for (var k = 0; k < divisions.length; k++) { 
          divisions[k].display(); 
        }
  drawSprites();
}