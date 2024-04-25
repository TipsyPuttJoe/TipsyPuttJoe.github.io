var img;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function preload(){
  diner= loadImage('https://tipsyputtjoe.github.io/images/diner.jpg');
  apartment= loadImage('https://tipsyputtjoe.github.io/pulpfiction/apartment.jpg');
  butchandvince= loadImage('https://tipsyputtjoe.github.io/pulpfiction/butchandvince.jpg');
  drugs= loadImage('https://tipsyputtjoe.github.io/pulpfiction/drugs.jpg');
  dance= loadImage('https://tipsyputtjoe.github.io/pulpfiction/dance.jpg');
  adrenaline= loadImage('https://tipsyputtjoe.github.io/pulpfiction/adrenaline.jpg');
  goldwatch= loadImage('https://tipsyputtjoe.github.io/pulpfiction/goldwatch.jpg');
  butch= loadImage('https://tipsyputtjoe.github.io/pulpfiction/butch.jpg');
  death= loadImage('https://tipsyputtjoe.github.io/pulpfiction/death.jpg');
  gimp= loadImage('https://tipsyputtjoe.github.io/pulpfiction/gimp.jpg');
  marvin= loadImage('https://tipsyputtjoe.github.io/pulpfiction/marvin.jpg');
  dinerfinal= loadImage('https://tipsyputtjoe.github.io/pulpfiction/dinerfinal.jpg');
  cover= loadImage('https://tipsyputtjoe.github.io/pulpfiction/cover.jpg');
}

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);

} // end setup


function draw() {
 
background(diner);
 if (gameState == "L1") {
  levelOne();
 }
 if (gameState =="L2") {
   levelTwo();
 }
 if (gameState =="L3") {
   levelThree();
 }
  if (gameState =="L4") {
   levelFour();
 }
  if (gameState =="L5") {
   levelFive();
 }
  if (gameState =="L6") {
   levelSix();
 }
  if (gameState =="L7") {
   levelSeven();
 }
 if (gameState =="L8") {
   levelEight();
 }
 if (gameState =="L9") {
   levelNine();
 }
  if (gameState =="L10") {
   levelTen();
 }
 if (gameState =="L11") {
   levelEleven();
 }
 if (gameState =="L12") {
   levelTwelve();
 }
 if (gameState =="L13") {
   levelThirteen();
 }
text(("Score: " +score), width/2, 40); 
} // end draw

function levelOne(){ 
  fill(255)
  text("Nobody ever robs restaurants...why not?", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1
  }
  if (score>=5){
    gameState ="L2";
  // background (random(255)); 
  } 
  line(ballx, bally, mouseX, mouseY);
  
  ellipse(ballx, bally, ballSize, ballSize); 
  
} // end of level 1 


function levelTwo(){
  background(apartment);

  text("Why the fuck didnt you tell us somebody was in the bathroom", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=10){
  gameState ="L3"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level two
  
  
  function levelThree(){
    background(butchandvince);

  text("You lookin' at somethin' friend?", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=15){
  gameState ="L4";
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level three
  
  function levelFour(){
  background(drugs);

  text("This is Panda from Mexico very good stuff", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=20){
  gameState ="L5"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level four
  
  
  function levelFive(){
    background(dance);
  fill(0);
  text("I want to dance, I want to win, I want that damn trophy", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=25){
  gameState ="L6";
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level five
  
  function levelSix(){
  background(adrenaline);
fill(255);
  text("If you're alright, then say something....Something.", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=30){
  gameState ="L7"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level six
  
   function levelSeven(){
  background(goldwatch);

  text("So he hid it in one place he knew he could hide something his ass", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=35){
  gameState ="L8"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level seven
    
    function levelEight(){
  background(butch);

  text("Its time Butch", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=40){
  gameState ="L9"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level eight
     
     function levelNine(){
  background(death);

  text("*awkward silence", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=45){
  gameState ="L10"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level nine
  
       function levelTen(){
  background(gimp);

  text("eenie meenie miney moe", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=50){
  gameState ="L11"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level ten
  
  
   function levelEleven(){
  background(marvin);

  text("Oh man I shot Marvin in the face", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=55){
  gameState ="L12"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level eleven
  
  
  function levelTwelve(){
  background(dinerfinal);

  text("Yolanda its cool baby its cool!", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if(distToBall <ballSize/2){
    ballx=random(width);
    bally=random(height);
    score=score+1;
  }
  if (score>=60){
  gameState ="L13"; 
  }
  // line(ballx, bally, mouseX, mouseY); 
  
  ellipse(ballx, bally, ballSize, ballSize); 
 
  } // End level twelve
  
  
  function levelThirteen(){
  background(cover);
  
 
  } // End level thirteen
