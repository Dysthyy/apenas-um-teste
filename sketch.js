function setup() {
    createCanvas(400, 400); // Cria uma lousa de 400x400 pixels
    background(0); // Define o fundo preto
}

function draw() {
    if (mouseIsPressed) { // Se o mouse estiver pressionado
        stroke(255); // Cor do traço branca
        strokeWeight(5); // Espessura do traço
        line(pmouseX, pmouseY, mouseX, mouseY); // Desenha uma linha do último ponto ao ponto atual
    }
}
