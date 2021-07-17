  var man_running,runner
  var pathimg,path
  var score

  function preload(){
  //pre-load images
  man_running = loadAnimation("runner-1.png","runner-2.png");
  pathimg = loadImage("path.png")
  }

  function setup(){
  createCanvas(400,400);


  path = createSprite(400,400,50,50)
  path.addImage(pathimg)

  runner=createSprite(180,340,50,170);
  runner.addAnimation("running",man_running);
  runner.velocityX = 4;
  runner.scale =1.2;

  

  left_boundary=createSprite(0,200,20,400);
  right_boundary=createSprite(390,200,20,400);
  left_boundary.visible=false;
  right_boundary.visible=false;
  }

    function draw() {
    background("lightgreen");

    if(path.x < 450 ){
      path.x = 641;
    }

    runner.velocityX = runner.velocityX + 0.5;
  
   runner.x = mouseX;
    runner.collide(right_boundary);
    runner.collide(left_boundary);
    if(runner.x < 43){
      runner.x = 43;
    }
    
    console.log(runner.x)
    if (path.y> 400) {
    path.x = height/2
    }

    runner.collide(right_boundary)
    runner.collide(left_boundary)
    drawSprites();
    }
