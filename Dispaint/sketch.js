//All variables 

var gameState=0;
var form;
var player;
var canvas;
var canvas2;
var cx=1800;
var cy=900;
var drawing=[];
var startPath=[];
var red;
var blue;
var green;
var r;
var g;
var b;




function setup(){
  //crrating a canvas
canvas=createCanvas(1800,900);
//creating a connection between Form.js and Sketch.js
 form=new Form(); 
 //Creating RGB values
red=createInput("Red");
blue=createInput("Blue");
green=createInput("Green");


  



}
//Creating and Adding point to the drawing array
function mouseDragged(){
  var point={
    x:mouseX,
    y:mouseY
  }
  
  
  drawing.push(point);}

function draw(){
  //Adding background
  background("white");
 form.display();

 if(gameState===3){
   //Adding positions to rgb inputs
  red.position(600,15);
  blue.position(750,15);
  green.position(900,15);
  //Assigning values
  r=red.value();
  g=green.value();
  b=blue.value();
  //Enabling drawing  
   beginShape(); 
   stroke(r,g,b);
   strokeWeight(4);
   for(var i=0;i<drawing.length;i++){
   vertex(drawing[i].x,drawing[i].y);
   endShape();}

   
 }

}
