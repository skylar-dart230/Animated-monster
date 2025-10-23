let rotation=45;


function setup() {
  createCanvas(400,600)
}
function draw() {
  background(220);
  
  //body of monster
  fill(55,128,10);
  rect(65,200,290,200);
  rect(65,400,290,200);
  
  
  //left eye of monster
  fill(239,240,235);
  ellipse(130,350,80);
  
  //right eye of monster
  ellipse(300,350,80);
  
  //right pupil of monster
  fill(58,69,61);
  ellipse(301,340,35);
  
  //left pupil of monster
  ellipse(130,353,35);
  
  //mouth of monster
  fill(249,245,240);
  rect(109,450,200,55);
  
  //teeth of monster
  fill(167,168,150);
  rect(250,450,40,60);
  rect(135,450,40,60);
  
  
  
  push();
  
  translate(55,450);
  rotate(radians(rotation));
  //left arm of monster
  fill(56,61,74)
  rect(0,0,40,100);
  rotation=rotation+2
  
  if (rotation>159 )
    rotation=0
  
  
  pop();
  
  
  
  
  
  
  //right arm of monster
  fill(56,61,74)
  rect(330, 450, 40, 100);
  
  
  
  //Hair of monster
  fill(92,54,6);
  rect(50,170,310, 70);
  
  //outline of monster edges of hair
  fill(92,54,6);
  line(400,300,400,3900);
  
  
  
  
  
  
  drawGrid();
}
function drawGrid() {
  textSize(10);
  stroke(200);
  fill(120);
  for (let x= -width; x<width; x += 40){
    line(x, -height, x,height);
    text(x,x+1, 12);
  }
  for(let y= -height; y< height; y +=40) {
    line(-width,y,width,y);
    fill(245,101,0);
    text(y, 1,y + 12);
  }
}