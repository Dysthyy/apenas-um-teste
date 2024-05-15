let canvas;
let isDrawing = false;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('board');
    background(0);
}

function draw() {
    if (isDrawing && mouseButton === LEFT) {
        stroke(255);
        strokeWeight(5);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function mousePressed() {
    if (mouseButton === LEFT) {
        isDrawing = true;
    }
}

function mouseReleased() {
    isDrawing = false;
}
