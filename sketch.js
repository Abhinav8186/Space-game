var shuttle,spaceCraft;
var hasDocked = false;
function preload(){
  iss = loadImage("images/iss.png")
  craft = loadImage("images/spacecraft1.png")
  space = loadImage("images/spacebg.jpg")
  s1 = loadImage("images/spaceCraft2.png")
  s2 = loadImage("images/spaceCraft3.png")
  s3 = loadImage("images/spaceCraft4.png")

}
function setup() {
  createCanvas(800,400);

  spaceCraft = createSprite(285,240)
  spaceCraft.addImage(craft)
  spaceCraft.scale = 0.3
  shuttle = createSprite(330,130);
  shuttle.addImage(iss)



}

function draw() {
  background(space); 
  spaceCraft.addImage(craft)
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1)
    if(keyDown("up")){
      spaceCraft.y = spaceCraft.y - 2
    }
    if(keyDown("down")){
      //spaceCraft.y = spaceCraft.y + 2
      spaceCraft.addImage(s1)
    }
    if(keyDown("left")){
      spaceCraft.x = spaceCraft.x - 2
      spaceCraft.addImage(s3)

    }
    if(keyDown("right")){
      spaceCraft.x = spaceCraft.x + 2
      spaceCraft.addImage(s2)
    }  
  }
  if(spaceCraft.y <= (shuttle.y + 70 ) && spaceCraft.x<=(shuttle.x - 10)){
    console.log('here')
    hasDocked = true
    fill("white")
    stroke(10)
    text("DOCKING SUCCESSFUL",500,300)
  }
  drawSprites();
    
}