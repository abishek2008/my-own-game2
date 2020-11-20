var champion,ground,sceneimg,sanitizer,maskimg,sanitizerimg,manimg1,manimg2,manimg3,manimg4,manimg5,manimg6,manimg7,virusimg;

function preload(){
sceneimg=loadImage("road.jpg");
maskimg=loadImage("mask1.png");
sanitizerimg=loadImage("sanitizer.gif")
manimg=loadAnimation("sprite1.png","sprite2.png","sprite3.png","sprite4.png","sprite5.png","sprite6.png","sprite7.png")
virusimg=loadImage("virus.png");
}


function setup() {
  createCanvas(1000,600);
    PLAY = 0;
    END =0;
    gameState=PLAY; 
   scene=createSprite(0,0,1300,600);
   scene.x=scene.width/2;
   scene.addImage(sceneimg);
   scene.scale=1.7;
   
   
  champion=createSprite(200,480,50,50);
  champion.addAnimation("m1",manimg)
  ground=createSprite(600,550,10000,10);
 // mask=createSprite(220,400);
 // mask.addImage(maskimg);
  ground.visible=false;
  maskcount=0;
  //sanitizerimgcount=0;
  virusgroup=new Group();
  edges = createEdgeSprites();
}

function draw() {
  background("black"); 

  noStroke();
  textSize(35)
  fill("black")
      
if(gameState===PLAY){
  if(keyDown("space")&& champion.y>470){
    
    champion.velocityY=-26;
    }

    champion.velocityY=champion.velocityY+1;
   
    if(scene.x<0){
      scene.x=scene.width/2;
    }
    scene.velocityX=-5;

   if(mas)

    spawnMask();
    spawnSanitizer();
    spawnVirus();
    if(virusgroup.isTouching(champion)){
      gameState=END;
    }
  }

  else if(gameState===END){
    console.log("end");
  
  }
  
   
    champion.collide(edges[3])

  drawSprites();
  text("Score  " + maskcount, 250,100)
}


function spawnMask() {
  if(frameCount % 350 === 0) {
   var mask =createSprite(1000,100,50,50);
   mask.y = Math.round(random(100,300));
   mask.addImage(maskimg);
    mask.scale = 0.3;
    mask.velocityX = -3;
    
  }
}

function spawnSanitizer(){
  if(frameCount % 230 === 0) {
    var sanitizer =createSprite(1000,700,50,50);
   sanitizer.y = Math.round(random(80,120));
    sanitizer.addImage(sanitizerimg);
     sanitizer.scale = 0.2;
     sanitizer.velocityX =- 3;
     
   }
}


function spawnVirus(){
  if(frameCount % 40 === 0) {
    var virus =createSprite(1000,700,50,50);
     virus.y = Math.round(random(80,500));
     virus.scale=random(0.2,0.8)
    virus.addImage(virusimg);
     virus.velocityX = -3;
     virusgroup.add(virus);
   }
}
