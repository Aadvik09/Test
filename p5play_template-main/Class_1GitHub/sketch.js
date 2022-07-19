



//box var
var box


//setup function
function setup() {
  createCanvas(400,400); //canvas creation

  //sprite creation
  box = createSprite(200,200,50,50)
}



//function draw
function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
    box.x = box.x + 5
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 5
  }

  if (keyIsDown(UP_ARROW)) {
    box.y = box.y - 5
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.y = box.y + 5
  }


  drawSprites();
}




