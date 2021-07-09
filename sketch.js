const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var circlee;


function preload(){
    polyImg= loadImage("polygon.png")
}

function setup(){
 createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    circlee =Bodies.circle(70,70, 50)
    World.add(world, circlee)

    ground1= new Ground(500,590,1000,20)
    stand1 = new Stand(490,400,280,20)
    //level 1
    block1 = new Block(400,375,30,40)
    block2 = new Block(430,375,30,40)
    block3 = new Block(460,375,30,40)
    block4 = new Block(490,375,30,40)
    block5 = new Block(520,375,30,40)
    block6 = new Block(550,375,30,40)
    block7 = new Block(580,375,30,40)
   
    //level2
    block8 = new Block(430,335,30,40)
    block9 = new Block(460,335,30,40)
    block10 = new Block(490,335,30,40)
    block11 = new Block(520,335,30,40)
    block12 = new Block(550,335,30,40)

    //level3
    block13 = new Block(460,295,30,40)
    block14 = new Block(490,295,30,40)
    block15 = new Block(520,295,30,40)

    //level4
    block16 = new Block(490,255,30,40)
    
    stand2 = new Stand(800,250,200,15)
    block17= new Block(740,210,30,40)
    block18= new Block(770,210,30,40)
    block19= new Block(800,210,30,40)
    block20= new Block(830,210,30,40)
    block21= new Block(860,210,30,40)

    block22= new Block(770,170,30,40)
    block23= new Block(800,170,30,40)
    block24= new Block(830,170,30,40)

    block25 = new Block(800,130,30,40)
    

   slingshot = new SlingShot(this.circlee,{x:100, y:100});

 
}
function draw(){
    background("lightgreen")
   rectMode(CENTER)
    Engine.update(engine);
    textSize(30);
    fill("black")
   
    text("Press Space To Play it again",300,70)

imageMode(CENTER);

image(polyImg,circlee.position.x, circlee.position.y, 50,50 )

  //  ellipse(this.circlee.position.x, this.circlee.position.y, 50,50)
    //level1 
   fill("yellow")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

fill("tan")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();


block17.display()
block18.display()
block19.display()
block20.display()
block21.display()

fill("lightblue")
block13.display();
block14.display();
block15.display();

block22.display()
block23.display()
block24.display()




fill("pink")
 block16.display();

 block25.display()



stand1.display();


 slingshot.display()






 ground1.display();
 stand2.display()
 
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.circlee, {x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
     // Matter.Body.setPosition(circlee.body, {x:235, y:420})
      slingshot.attach(this.circlee)
    }
  }