const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ball,ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8;
var bgImg;
var mon,monImg;
var lad,ladImg;
var mar,marImg;
var bar,bar1,bar2,barImg;
var help,helpImg;
var gameOver,gameOverImg;
var logo,logoImg;
var restart,restartImg;
var start,startImg;
var ywon,ywonImg;

function preload(){
  bgImg=loadImage("Img/bg.png");
  monImg=loadImage("Img/Mon.png");
  ladImg=loadImage("Img/Lad.png");
  marImg=loadImage("Img/Mar.png");
  barImg=loadImage("Img/bar1.png");
  helpImg=loadImage("Img/help.png");
  gameOverImg=loadImage("Img/gameOver.png");
  logoImg=loadImage("Img/name.png");
  restartImg=loadImage("Img/restart.png");
  startImg=loadImage("Img/start.png");
  ywonImg=loadImage("Img/ywon.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

engine=Engine.create();
world=engine.world;

  ball=Bodies.circle(400,100,30);
  World.add(world,ball);
  //this.image=loadImage("Img/ball.png");


ground1=new Ground(1075,180,610,73);
ground2=new Ground(613,253,310,73);
ground3=new Ground(405,396,1110,73);
ground4=new Ground(1513,469,1110,73);
ground5=new Ground(1513,683,1110,73);
ground6=new Ground(405,756,1110,73);
ground7=new Ground(405,973,1110,73);
ground8=new Ground(1513,1043,1110,73);

mon=createSprite(620,140,50,50);
mon.addImage(monImg);
mon.scale=0.4;

lad=createSprite(1200,80,50,50);
lad.addImage(ladImg);
lad.scale=0.4;

mar=createSprite(1450,950,50,50);
mar.addImage(marImg);
mar.scale=0.3;

bar=createSprite(850,100,50,50);
bar.addImage(barImg);
bar.scale=0.2;

bar1=createSprite(930,100,50,50);
bar1.addImage(barImg);
bar1.scale=0.2;

bar2=createSprite(897,20,50,50);
bar2.addImage(barImg);
bar2.scale=0.2;

help=createSprite(1350,50,50,50);
help.addImage(helpImg);
help.scale=0.6;

gameOver=createSprite(500,650,50,50);
gameOver.addImage(gameOverImg);

logo=createSprite(1700,80,50,50);
logo.addImage(logoImg);
logo.scale=0.8;

restart=createSprite(1700,300,50,50);
restart.addImage(restartImg);
restart.scale=0.1;

start=createSprite(1500,580,50,50);
start.addImage(startImg);
start.scale=0.2;

ywon=createSprite(1150,950,50,50);
ywon.addImage(ywonImg);


}

function draw() {
  background(bgImg);
  Engine.update(engine);

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,30,30);

if(frameCount%100!=0){
  help.visible=false;
}

if(frameCount%30===0){
  help.visible=true;
}


  drawSprites();
}
