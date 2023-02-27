class Particle {
  constructor(){
    this.x = random(-800,800);
    this.y = random(-800,800);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  createParticle() {
    noStroke();
    fill(mouseX, mouseY,random(0,255));
    circle(this.x,this.y,this.r);
  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
}

let man;
let particles = [];

function preload(){
  frontImg = loadImage('images/front.png');
  leftImg = loadImage('images/left.png');
  topImg = loadImage('images/top.png');
  rightImg = loadImage('images/right.png');
  bottomImg = loadImage('images/bottom.png');
  backImg = loadImage('images/back.png');
  man = loadModel('assets/man.obj',true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES); 
  stroke(255);
  cursor('grab');
    for(let i = 0;i<width/5;i++){
    particles.push(new Particle());
  }
}

function drawMyBox(front, top, right, bottom, left, back){
  

  let h = windowHeight/1.5;
  let w = h/2;
  let d = h/2;
  translate(-w / 2 , -h / 2, d / 2);  
  
  push();
    noFill();
  noStroke();
  texture(front); 
  quad(0, 0, w, 0, w, h, 0, h);
  pop();
      
  push();
    noFill();
  noStroke();
  texture(left);
  translate(0, 0, -d);
  rotateY(-90);
  quad(0, 0, d, 0, d, h, 0, h);
  pop();
      
  push();
    noFill();
  noStroke();
  texture(top);
  translate(0, 0, -d);
  rotateX(90);
  quad(0, 0, w, 0, w, d, 0, d);
  pop();
  
  push();
    noFill();
  noStroke();
  texture(right);
  translate(w, 0, 0);
  rotateY(90);
  quad(0, 0, d, 0, d, h, 0, h);
  pop();
      
  push();
    noFill();
  noStroke();
  texture(bottom);
  translate(0, h, 0);
  rotateX(-90);
  quad(0, 0, w, 0, w, d, 0, d);
  pop();
  
  push();
    noFill();
  noStroke();
  texture(back);
  rotateY(180);
  translate(-w, 0, d);
  quad(0, 0, w, 0, w, h, 0, h);
  pop();
  
  push();
  noFill();
  stroke(mouseX,mouseY,100)
  translate(w / 2, h / 2, -d / 2);
  box(w, h, d) ;
  pop();
  
}

function draw() {
  background(0,0,0,0);
  orbitControl();
  
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(200, 200, 200, locX, locY, 50);
  
  
  ambientLight(mouseX/2, mouseY/2, 100);//changing text reflected light
  // pointLight(255,255,255,300,300,0); //enviromental lights

  
  push();
  // noStroke();
  // // translate(50,0,0);
  // stroke('rgba(100%,100%,100%,0.5)')
  strokeWeight(0.5)
  fill(200,0,0)
  ambientMaterial(255);
  rotateX(180);
  rotateY(90);
  scale(windowHeight/330);
  model(man);
  pop();
  
  drawMyBox(frontImg, topImg,rightImg, bottomImg, leftImg, backImg);
  
  push();
  translate(0,0,-80);
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    // particles[i].joinParticles(particles.slice(i));
  }
  pop();
  
  push();
  translate(100,0,-80)
  rotateY(90);
    for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    // particles[i].joinParticles(particles.slice(i));
  }
  pop();
  

}