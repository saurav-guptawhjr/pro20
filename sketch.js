var canvas,bg
var tom,toma,tomb,tomc,jerry,jerrya,jerryb,jerryc
function preload() {
    //load the images here
    jerrya=loadAnimation("images/mouse1.png")
    jerryb=loadAnimation("images/mouse2.png","images/mouse3.png")
    jerryc=loadAnimation("images/mouse4.png") 
    
    toma=loadAnimation("images/cat1.png")
    tomb=loadAnimation("images/cat2.png","images/cat3.png")
    tomc=loadAnimation("images/cat4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
   cavas= createCanvas(1000,800);
   tom=createSprite(870,600);
   tom.addAnimation("sleeping",toma)
   tom.scale=0.2

   jerry=createSprite(200,600);
   jerry.addAnimation("standing",jerrya)
   jerry.scale=0.15

    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.addAnimation("last",tomc)
        tom.x=300
        tom.scale=0.2
        tom.changeAnimation("last")

        jerry.addAnimation("lastimage",jerryc)
        jerry.scale=0.15
        jerry.changeAnimation("lastimage")

    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("running",tomb)
    tom.changeAnimation("running")
    jerry.addAnimation("teasing",jerryb)
    jerry.frameDelay=25
    jerry.changeAnimation("teasing")
}

}
