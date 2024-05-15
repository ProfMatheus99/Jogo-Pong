let cor;
//let posicaoHorizontal; // x
//et posicaoVertical; // y
//let posicaoHorizontal2;
//let posicaoVertical2;
let circuloX;
let circuloY;

function setup() {
  createCanvas(400, 400);
  circuloX = [0,0, 0];
  circuloY = [random(height), random(height), random(height)];
   background(color(100,0,0));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 0;
  posicaoHorizontal2 = 0;
  posicaoVertical = random(height);
  posicaoVertical2 = random(height);
}


function draw() {
  
  fill(cor);
  
  //console.log("circuloX lenght");
  for(let contador in circuloX){
    console.log(contador);
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 3);
    circuloY[contador] += random(-3, 3);
  
  
  if(circuloX[contador] >= width) {
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
    }
  }
  
  circle(circuloX[0], circuloY[0], 50);
  circle(circuloX[1], circuloY[1], 50);
  circle(circuloX[2], circuloY[1], 50);
  circuloX[0] += random(0, 3);
  circuloY[0] += random(-3, 3);
  circuloX[1] += random(0, 3);
  circuloY[1] += random(-3, 3);
  circuloX[2] += random(0, 3);
  circuloY[2] += random(-3, 3);
  posicaoHorizontal += random(0, 3);
  posicaoVertical += random(-3, 3);
  posicaoHorizontal2 += random(0, 3);
  posicaoVertical2 += random(-3, 3);
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}
