// variáveis da bolinha
let xBolinha = 300; // cria e define valor à variável
let yBolinha = 200
let diametro = 15;
let raio = diametro/2; // cria a variável raio e define que seu valor deve ser a metade do diâmetro do círculo; utilizada para verificar colisão

// variáveis de velocidade da bolinha
let velocidadeXBolinha = 6; // cria a variável e define a velocidade da bolinha no eixo x
let velocidadeYBolinha = 6; // cria a variável e define a velocidade da bolinha no eixo y

// variáveis da raquete; utilizadas para definir os valores nos eixos x, y, comprimento "width" e altura "height"
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altRaquete = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}


function setup() {
  createCanvas(600, 400) // cria uma tela de 600x400px
  trilha.loop();
}

function draw() {
  background('purple'); // define a cor de fundo
  
  mostraBolinha(); // executa função criada
  movimentaBolinha();
  verificaColisaoBordas();
  
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  movimentaRaqueteOponente();
  
  marcaPonto();
  incluiPlacar();

  //colisaoMinhaRaqueteBiblioteca();
}

function mostraBolinha(){ // cria função
  circle(xBolinha, yBolinha, diametro); // estabelece os valores atribuídos nas variáveis ao círculo criado
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBordas(){
  if (xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  } //se a posição da bolinha no eixo x for menor que 0, ou seja, se a bolinha colidir com a borda esquerda ou se a bolinha colidir com a borda direita da tela a direção do movimento é alterada para o sentido contrário
  // a adição da variável raio tem a função de fazer com que a bolinha colida simplesmente ao tocar na borda, pois caso contrário o código reconhece que o x da bolinha está bem no centro dela, portanto do meio do diâmetro
  
  if (yBolinha + raio > height || yBolinha - raio < 0){
      velocidadeYBolinha *= -1;

      } //se a posição da bolinha no eixo y for menor que 0, ou seja, se a bolinha colidir com a borda superior ou se a bolinha colidir com a borda inferior da tela a direção do movimento é alterada para o sentido contrário
}

function mostraRaquete(x , y){
  rect(x, y, compRaquete, altRaquete);// função que atribui quais variáveis são utilizadas para a criação da raquete 
}


function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
      }
  if (keyIsDown(DOWN_ARROW)){
      yRaquete += 10;
      }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + compRaquete && yBolinha - raio < yRaquete + altRaquete && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, raio);
    if (colidiu){
        velocidadeXBolinha *= -1;
        raquetada.play();
    }
}

function mostraRaqueteOponente() {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente() {
    if (keyIsDown(87)) {
      yRaqueteOponente -= 10;
      }
  if (keyIsDown(83)){
      yRaqueteOponente += 10;
      }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}


function marcaPonto() {
    if (xBolinha > 590) {
        meusPontos += 1;
        ponto.play();    
    }
    if (xBolinha < 10) {
        pontosDoOponente += 1;
        ponto.play(); 
    }
}
