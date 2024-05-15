/*
 * ==================================================================
 *
 *  Esqueleto de um script JavaScript
 *
 * ==================================================================
*/

// A `main()` só deve ser executada quando tudo estiver carregado
window.onload = main();

// Lista de variáveis globais
var ctx;  // contexto com a API para desenhar

/**
 * função principal
 */
function main() {
    // veja o canvas id definido no arquivo index.html
    const canvas = document.getElementById('meucanvas');
    // vamos definir um contexto para desenhar em 2D
    ctx = canvas.getContext('2d');
    if (!ctx) alert("Não consegui abrir o contexto 2d :-( ");

    let cor = 'blue';
    desenheRect( cor, 20, 40, 160, 80 );
    cor = 'red';
    desenheRect( cor, 100, 60, 340, 280 );
    cor = 'green';
    desenheRect( cor, 320, 240, 300, 220 );
};

// ==================================================================
//   outras funções

/**
 * recebe uma cor e os parâmetros de um retângulo e
 * desenha a região interna do retângulo com cor.
 * @param {string} cor 
 * @param {number} left - coluna esquerda
 * @param {number} top  - linha superior
 * @param {number} width - largura do retângulo
 * @param {number} height - altura
 */
function desenheRect( cor, left, top, width, height ) {
    console.log("Desenhando retângulo ", cor);
    ctx.fillStyle = cor;
    ctx.fillRect( left, top, width, height );
};
