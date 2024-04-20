var img;
var initials ='ji';
var choice = '1';
var screenbg = 250;
var lastscreenshot=61;

function preload() {
  img = loadImage('https://tipsyputtjoe.github.io/images/stage.jpg');
  cole = loadImage('https://tipsyputtjoe.github.io/images/jcole2.png');
  kendrick = loadImage('https://tipsyputtjoe.github.io/images/kendrick.png');
  drake = loadImage('https://tipsyputtjoe.github.io/images/drake.png')
  method = loadImage('https://tipsyputtjoe.github.io/images/method.png')
  nas = loadImage('https://tipsyputtjoe.github.io/images/nas.png')
  jayz = loadImage('https://tipsyputtjoe.github.io/images/jayz2.png')
  common = loadImage('https://tipsyputtjoe.github.io/images/common2.png')
  yasiinbey = loadImage('https://tipsyputtjoe.github.io/images/yasiinbey.png')
  hand = loadImage('https://tipsyputtjoe.github.io/images/hand2.png')
  dmx = loadImage('https://tipsyputtjoe.github.io/images/dmx3.png')

}

function setup() {
createCanvas(1518, 851);  // canvas size
background(img); 
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    image(cole, mouseX-1125, mouseY-550, 2250, 1250);
    
  } else if (toolChoice == '2') { // second tool
    image(kendrick, mouseX-100, mouseY-50, 250, 200);
    
  } else if (toolChoice == '3') { // third tool
    image(drake, mouseX-125, mouseY-80, 250, 200);
   
  } else if (toolChoice == '4') {
    image(method, mouseX-120, mouseY-50, 250, 250);
    
  } else if (key == '5') { 
    image(nas, mouseX-120, mouseY-50, 250, 250);
    
  } else if (toolChoice == '6') {
    image(jayz, mouseX-120, mouseY-50, 275, 280);
    
  } else if (toolChoice == '7') {
    image(common, mouseX-120, mouseY-50, 250, 250);
    
  } else if (toolChoice == '8') {
    image(yasiinbey, mouseX-50, mouseY-50, 110, 110);
    
  } else if (toolChoice == '9') {
    image(hand, mouseX-90, mouseY-50, 180, 180);
    
  } else if (toolChoice == '0') {
    image(dmx, mouseX-50, mouseY-30, 110, 60);
    
  }
 }

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(img); 
  } else if (key == 'p' || key == 'P') {
     saveme();  
  }
}

function saveme(){
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { 
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second();
  
}
