var x = [];
var y = [];

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(50);
  for(var i = 0; i < x.length; i++){
    fill(255);
    rect(x[i],y[i],10,10);
    if(i > 0){
      stroke(255);
      line(x[i-1],y[i-1],x[i],y[i]);
    }
  }
}

function mousePressed(){
  x.push(mouseX);
  y.push(mouseY);
  redraw();
}