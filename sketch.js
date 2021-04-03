var bg,bgimage
var mainplayer,mainplayerImage
var mainplayertwo,mainplayerimagetwo
var bulletfire,bulletfireimage
var bullet,bulletimage
var bullet2,bullet2image
var bulletcount=0
var start,startimage
var loadingscreen,loadingscreenimage
var next,nextimage
var gamestate="start"
var count1=5;
var count2=5;
var rebullet1;
var rebullet2;
var bulletgroup;




function preload(){
  bgimage=loadImage("bg.jpg");
mainplayerimagetwo=loadImage("main player 2.png")
  mainplayerImage=loadImage("main player.png")
bulletfireimage=loadImage("bullet fire.png")
  bulletimage=loadImage("bullet.png")
  bullet2image=loadImage("bullet2.png")
startimage=loadImage("start.jpg")
loadingscreenimage=loadImage("loading screen.jpg")
nextimage=loadImage("next.png");
regenbullet1=loadImage("bullet.png");
regenbullet2=loadImage("bullet2.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
   
  //rebullet1.visible=false;
  
  //rebullet2.visible=false;
  mainplayer=createSprite(200,displayHeight-100,50,50)
  mainplayer.addImage("hero",mainplayerImage);
  mainplayer.scale=1.3
  mainplayer.visible=false
  mainplayertwo=createSprite(displayWidth-100,displayHeight-100,50,50)
  mainplayertwo.visible=false
  mainplayertwo.addImage("zero",mainplayerimagetwo)

  mainplayertwo.scale=0.7;
 // bullet=createSprite(380,displayHeight-110,50,50);
 // bullet.addImage("goli",bulletimage);
 // bullet.visible=false
  //bullet.scale=0.3;
  healthone=createSprite(300,380,400,20);
 healthone.visible=false
  healthone.shapeColor="red";
  healthtwo=createSprite(displayWidth-400,380,400,20);
  healthtwo.visible=false
  healthtwo.shapeColor="red";
  mainplayertwo.setCollider("circle",0,0,90)
  //mainplayertwo.debug=true;
//bullet2=createSprite(displayWidth-250,displayHeight-110,50,50);
//bullet2.visible=false
  //bullet2.addImage("goli2",bullet2image);
  //bullet2.scale=0.3;
  mainplayer.setCollider("circle",0,0,90)
  //mainplayer.debug=true;
  start=createSprite(displayWidth/2,displayHeight/2)

  start.addImage("chalu",startimage)
  start.scale=3
  loadingscreen=createSprite(displayWidth/2,displayHeight/2)
  loadingscreen.scale=5
  loadingscreen.addImage("sabarkaro",loadingscreenimage)
  loadingscreen.visible=false
next=createSprite(1036,725)
next.addImage("doosra",nextimage);
next.scale=0.7
bulletgroup1= new Group();
bulletgroup2=new Group();
}

function draw() {
 
  if (gamestate=="start"){
    background(0);

  }
  if(mousePressedOver(next)){
    start.visible=false
    //loadingscreen.visible=true
     next.visible=false
      gamestate="play";


    }
     
    if(gamestate==="play"){

      background(bgimage);
      textSize(20);
      stroke("brown")
      fill("white");
      text("Press Space for player one",200,200);
      text("Press Enter for player two",displayWidth-600,200);

      fill("black");
      text("Number of lives left for player 1 :"+count1,200,500);
      text("Number of lives left for player 2 :"+count2,displayWidth-400,500);
      mainplayer.visible=true
      mainplayertwo.visible=true
     // bullet.visible=true

     // bullet2.visible=true
      healthone.visible=true
      healthtwo.visible=true
      if(keyDown("SPACE"))
    { 
      regeneratebullet1();    
       
    }

  if(keyDown("ENTER")){ 
    regeneratebullet2(); 
   
    }
    if(bulletgroup2.isTouching(mainplayer))
    {
    bulletgroup2.setVelocityEach(0);
     healthone.width-=80;
     count1-=1;
    }
    if(bulletgroup1.isTouching(mainplayertwo))
    {
    bulletgroup1.setVelocityEach(0);
     healthtwo.width-=80;
     count2-=1;
     
    }
    if(count1===0 || count2===0 || healthone.width===0 || healthtwo.width===0){
    background(0);
    mainplayer.visible=false;
    mainplayertwo.visible=false;
   healthone.visible=false;
    healthtwo.visible=false;
    fill("White");
    stroke("red")
    textSize(70);
    text("GAMEOVER", 500,486);

     
    }
    }
     
  drawSprites();
 //text(mouseX+","+mouseY, mouseX, mouseY);
 
  
}

function regeneratebullet1(){
  rebullet1=createSprite(380,displayHeight-110,50,50);
  rebullet1.addImage("regenerated",regenbullet1);
  rebullet1.visible=true;
  //rebullet1.velocityX=5;
  rebullet1.scale=0.3;
  rebullet1.velocityX=9
  bulletgroup1.add(rebullet1) ;
     
}
function regeneratebullet2(){
  rebullet2=createSprite(displayWidth-250,displayHeight-110,50,50);
  rebullet2.addImage("regenerated",regenbullet2);
  //rebullet2.visible=true;
  rebullet2.scale=0.3;
  //rebullet2.velocityX=-5;
  rebullet2.velocityX=-9 ;  
  bulletgroup2.add(rebullet2) ; 
  
}
  
  
    
  


