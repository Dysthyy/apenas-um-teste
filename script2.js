**
 *  Esse script mostra mais recursos do canvas e da JS
 */

// A `main()` só deve ser executada quando tudo estiver carregado
window.onload = main();

// variáveis globais
var ctx;  // contexto de desenho

//==================================================================
/**
 * função principal
 */
 function main() {
    // veja o canvas id definido no arquivo index.html
    const canvas = document.getElementById('meucanvas');
    // vamos definir um contexto para desenhar em 2D
    ctx = canvas.getContext('2d');
    if (!ctx) alert("Não consegui abrir o contexto 2d :-( ");

    let pontos = [ [20, 40], [180, 120], [180, 40], [20, 120] ];
    desenhePoligono( pontos );

    pontos = []  // array vazio
    pontos.push( [100, 60] ); // coloca um ponto 
    pontos.push( [440, 60] ); // experimente alterar 
    pontos.push( [440, 340] ); // a ordem para ver o que acontece!
    desenhePoligono( pontos, 'red' );

    pontos.push( [100, 340] ); // descomente essa linha
    desenhePoligono( pontos, 'black', 2 );

    cor = 'green';
    pontos = [ [320, 240], [620, 240] ] // array não começa vazio
    pontos.push( [320, 460] );
    pontos.push( [620, 460] );
    desenhePoligono( pontos, 'green', 0 );

   desenheTexto("Exemplo de stroke e fill", 120, 420, 36, 'magenta' );
};

//==================================================================
// outras funções
// ------------------------------------------------------------------
/**
 * desenha um poligono definido por pts e
 * preenchido com uma cor sólida caso wid = 0.
 * Caso contrário, desenha o contorno com lagura wid.
 * @param {array} pts - array de pontos
 * @param {string} cor - cor para pintar o poligono
 * @param {number} wid - largura da borda se wid>0.
 */
function desenhePoligono( pts, cor='blue', wid = 10 ) {
    let tam = pts.length;
    console.log("Desenhando poligono", cor, pts, tam);

    let poli = new Path2D();
    poli.moveTo( pts[0][0], pts[0][1] );
    for (let i = 1; i < pts.length; i++) {
        poli.lineTo( pts[i][0], pts[i][1] );
        console.log( pts[i][0], pts[i][1]  );
    }
    poli.closePath(); // cria um contorno fechado.

    if (wid > 0) { 
        ctx.strokeStyle = cor;
        ctx.lineWidth = wid;
        ctx.stroke( poli );
    }
    else { // wid <= 0 preenche o polígono
        ctx.fillStyle=cor;
        ctx.fill( poli );
    }
}

// ------------------------------------------------------------------
/**
 * recebe o texto msg e o desenha na posição (x,y) do canvas.
 * @param {string} msg 
 * @param {number} x 
 * @param {number} y 
 * @param {number} tam - tamanho da fonte
 * @param {string} cor - cor do texto
 */
function desenheTexto (msg, x, y, tam=24, cor = 'black') {
    ctx.fillStyle = cor;
    ctx.font = `${tam}px serif`;  
    ctx.fillText(msg, x, y);
}
