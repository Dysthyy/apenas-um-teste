// Variáveis para armazenar as coordenadas do clique inicial
let painting = false;
let lastX = 0;
let lastY = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    if (painting) {
        stroke(0); // Cor do traço (preto)
        strokeWeight(2); // Espessura do traço
        line(lastX, lastY, mouseX, mouseY); // Desenha uma linha do último ponto ao ponto atual
        lastX = mouseX;
        lastY = mouseY;
    }
}

function mousePressed() {
    painting = true;
    lastX = mouseX;
    lastY = mouseY;
}

function mouseReleased() {
    painting = false;
}
