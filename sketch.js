// variables the ball
let xBolinha = 300;       
let yBolinha = 200;
let dBolinha = 10;
let raio = dBolinha / 2;

// ball speed variable
let velXBolinha = 5;      
let velYBolinha = 5;       

// rackets variable
let xRacketsPlayer = 10;
let yRacketsPlayer = 180;
let widthRackets = 10;
let heightRackets = 80;

// rackets and Computer speed
let xRacketsComputer = 580;
let yRacketsComputer = 180;
let speedYComputer;
//let computerNotHaveChance = 0;


// library P5.collide2d

let hitP5 = false;

// score game variables

let playerPoints = 0;
let computerPoints = 0;

// Sounds effect

let racketsActionSound;
let pointsSound;
let celineDionSound;

function preload(){
  celineDionSound = loadSound("CélineDion.mp3");
  pointsSound = loadSound("points.mp3")
  racketsActionSound = loadSound("RacketsAction.mp3");
}


//main game and body
function setup() {
  createCanvas(600, 400);
  celineDionSound.loop();
}

//THE GAME!
function draw() {
  background("black");
  map1();
  showBall() ;
  moveBall() ;
  edgeCollision();
  showRackets();
  showRacketsComputer();
  moveRackets();
  //touchRackets();
  collisionLibrary(xRacketsPlayer, yRacketsPlayer);
  collisionLibrary(xRacketsComputer, yRacketsComputer);
  moveComputerRackets();
  drawScore();
  scorePoints();
}

function map1(){
 rect (300, 0, 5, 50);
  rect (300, 50, 5, 50);
   rect (300, 100, 5, 50);
    rect (300, 150, 5, 50);
     rect (300, 200, 5, 50);
      rect (300, 250, 5, 50);
       rect (300, 300, 5, 50);
        rect (300, 350, 5, 50);
  
}

// draw ball 
function showBall(){
  circle(xBolinha, yBolinha, dBolinha);

}

// ball moves
function moveBall(){ 
   xBolinha += velXBolinha;
   yBolinha += velYBolinha;
}

// ball collision with a edge
function edgeCollision(){

   if(xBolinha + raio > width ||     
      xBolinha - raio < 0) {
     velXBolinha *= -1;

    }

    if (yBolinha + raio> height || 
        yBolinha - raio < 0){ 
      velYBolinha *= -1;
    } 
}

// rackets Player and enemy(computer if u prefer)

function showRackets () {
  rect(xRacketsPlayer, yRacketsPlayer, widthRackets, heightRackets);
 

}
 // enemy rackets (can refactor here to up line) 
function showRacketsComputer() {
  rect(xRacketsComputer, yRacketsComputer, widthRackets, heightRackets);
}


//move up/down my rackets

function moveRackets(){
  if (keyIsDown(UP_ARROW)) {
    yRacketsPlayer -= 10;
    
   }
  if (keyIsDown(DOWN_ARROW)){ 
    yRacketsPlayer += 10;
  }
}

//move computer rackets 
 function moveComputerRackets(){
   speedYComputer = yBolinha - yRacketsComputer - widthRackets /2 - 30;
   
   yRacketsComputer += speedYComputer; 
   
   //+ computerNotHaveChance  CalculeComputerNotHaveChance();
   
   
 }

/*
function CalculeComputerNotHaveChance() {
  if (computerPoints >= playerPoints) {
    computerNotHaveChance += 1;
    if (computerNotHaveChance >= 39){
    computerNotHaveChance = 40;
    }
  } else {
    computerNotHaveChance -= 1;
    if (computerNotHaveChance <= 35){
    computerNotHaveChance = 35;
    }
  }
} */

// collision with rackets
function touchRackets(){
  
  if(xBolinha - raio < xRacketsPlayer + widthRackets && yBolinha - raio < yRacketsPlayer + heightRackets && yBolinha + raio > yRacketsPlayer) {
    
    velXBolinha *= -1;
  
  } 
  
}

// Colission Library P5

function collisionLibrary(x, y) {
  
 hitP5 = collideRectCircle (x, y, widthRackets, heightRackets, xBolinha, yBolinha, raio);

  if (hitP5){ 
     velXBolinha *= -1;
    racketsActionSound.play();
  } 
}

//style and score game 


function drawScore(){
  stroke(255)
  textAlign(CENTER);
  textSize(18);
  
  fill(color(0, 255, 0));
  rect(130, 10, 40, 30, 10);
  fill(255);
  text(playerPoints, 150, 30)
  
  fill(color(0, 255, 0));
  rect(440, 10, 40, 30, 10);
  fill(255);
  text(computerPoints, 460, 30)
  }

function scorePoints() {
  
  if(xBolinha > 595 ){
    playerPoints++;
    pointsSound.play();
  }
  if(xBolinha < 5 ){
    computerPoints++;
    pointsSound.play();
  }
  
}


 





