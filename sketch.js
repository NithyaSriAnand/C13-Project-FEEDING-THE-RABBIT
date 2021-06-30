var garden,rabbit,apple,orangeleaf,greenleaf, redleaf;
var gardenImg,rabbitImg,appleImg,greenleafImg,orangeleafImg;redleafImg ;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeLeaf.png");
  greenleafImg = loadImage("leaf.png");
  redleafImg = loadImage("redImage.png");
}

function setup(){
  
createCanvas(400,400);
//create garden 
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  rabbit.x = World.mouseX; //rabbit moving on x axis
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites();
  var select_sprites = Math.round(random(1,4));
  if (frameCount % 80 == 0)
  {
    if(select_sprites == 1)
    {
      createApples()
    }
    else  if(select_sprites == 2) {
      createorangeleaf()
    }
    else  if(select_sprites == 3) {
      creategreenleaf();
    }
    else 
    {
      createred();
    }
  }
  
}
function createApples()
{
  //creating apples
apple = createSprite(random(50, 350),40,10,10);
apple.addImage(appleImg); //add image to apple sprite
apple.scale = 0.05;
apple.velocityY = 9;
apple.lifetime = 150;
}

function createorangeleaf()
{
  //creating leafs
orangeleaf = createSprite(random(50, 350),40,10,10);
orangeleaf.addImage(orangeleafImg); //add image to leaf
orangeleaf.scale = 0.05;
orangeleaf.velocityY = 9;
orangeleaf.lifetime = 150;
}

function creategreenleaf()
{
  //creating green leafs
greenleaf = createSprite(random(50, 350),40,10,10);
greenleaf.addImage(greenleafImg); //add image to leaf
greenleaf.scale = 0.05;
greenleaf.velocityY = 9;
greenleaf.lifetime = 150;
}

function createred()
{
  //creating red leafs
redleaf = createSprite(random(50, 350),40,10,10);
redleaf.addImage(redleafImg); //add image to leaf
redleaf.scale = 0.05;
redleaf.velocityY = 9;
redleaf.lifetime = 150;
}