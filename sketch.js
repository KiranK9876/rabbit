var garden,rabbit;
var gardenImg,rabbitImg;
var appleimg, apple
var orangeleafimg, orangeleaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  orangeleafimg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(200,200,20,20)
apple.addImage(appleimg)
apple.scale = 0.1
apple.velocityY=4
orangeleaf = createSprite(random(200,200,20,20))
orangeleaf.addImage(orangeleafimg)
orangeleaf.scale = 0.1
orangeleaf.velocityY=4
}


function draw() {
  background(0);

  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10)
}