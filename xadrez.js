/**
 * As linhas abaixo são as declarações das variáveis do ambiente
 */
const pecaTemp = document.createElement('div'); // variável atribuída para uso do elemento <div id="pecaTemp">
pecaTemp.id = "pecaTemp";
pecaTemp.style.display = "none"; 
pecaTemp.style.position = "absolute"; 
pecaTemp.style.zIndex = 999;
document.body.appendChild(pecaTemp);

const pecasVencidasBrancas = document.createElement('div');
const pecasVencidasPretas = document.createElement('div');

const cor1 = "#fff"; // cor branca para uso no tabuleiro
const cor2 = "#000"; // cor preta para uso no tabuleiro
const medida = "px"; // variável para uso de unidade de medida em pixel para uso nos valores dos stributos css/style
const larguraCelulaPadrao = 100; // variável utilizada para definir o tamanho da largura padrão da célula/quadrante padrão do tabuleiro
const alturaCelulaPadrao = 100; // variável utilizada para definir o tamanho da altura padrão da célula/quadrante padrão do tabuleiro
const larguraPecaPadrao = 50; // variável utilizada para definir o tamanho da largura padrão das peças
const alturaPecaPadrao = 50; // variável utilizada para definir o tamanho da altura padrão das peças

const linhas = ["1","2","3","4","5","6","7","8"]; // variável do tipo matriz para definir a quantidade e nomes das linhas do tabuleiro

const colunas = ["a","b","c","d","e","f","g","h"]; // variável do tipo matriz para definir a quantidade e nomes das colunas do tabuleiro

var pecas = []; // variável do tipo matriz que vai atribuir os objetos das peças
var celula = []; // variável do tipo matriz que vai atribuir os objetos das células/quadrantes
var numCelula = 0; // variável que vai contabilizar a quantidade de células dos quadrantes (linhas * colunas)
var corAtual = cor1; // variável que vai definir a cor atual da repetição entre linhas e colunas
const posicaoSuperiorInicial = 10; // variável que vai definir a posição superior inicial das células/quadrantes do tabuleiro, para uso na estrutura de repetição (for) das linhas e colunas
const posicaoEsquerdaInicial = 10;
var posicaoSuperior = posicaoSuperiorInicial; // variável que vai definir a posição superior inicial das células/quadrantes do tabuleiro, para uso na estrutura de repetição (for) das linhas e colunas
var posicaoEsquerda = posicaoEsquerdaInicial;
var divsCelulas = []; // variável do tipo matriz que vai atribuir os elementos <div> das células/quadrantes
const dirPecas = "./pecas/"; // variável somente leitura que armazena o caminho do diretório de imagens das peças
const dirQuadrantes = "./quadrantes/"; // variável somente leitura que armazena o caminho do diretório de imagens dos quadrantes
var corPermitida = cor1;
var pecaClicada;

class HistoricoMovimento { // criação da classe HistoricoMovimento
    constructor () { // declaração do construtor da classe
        this.pecaMovimentada = []; // declaração da variavel de objeto/classe pecaMovimentada, do tipo matriz
        this.linhaOrigem = []; // declaração da variavel de objeto/classe linhaOrigem, do tipo matriz
        this.colunaOrigem = []; // declaração da variavel de objeto/classe colunaOrigem, do tipo matriz
        this.linhaDestino = []; // declaração da variavel de objeto/classe linhaDestino, do tipo matriz
        this.colunaDestino = []; // declaração da variavel de objeto/classe colunaDestino, do tipo matriz
    }
}

const historico_movimentos = new HistoricoMovimento(); // declaração da variável historico_movimentos a qual receberá o novo objeto HistoricoMovimento

class Tabuleiro { // declaração da classe Tabuleiro
    constructor (cor, x, y, linha, coluna, altura, largura, nome, posicaoVetor) { // declaração do construtor do objeto Tabuleiro e parâmetros
        this.cor = cor; // declaração da variável cor do objeto Tabuleiro
        this.x = x; // declaração da variável x do objeto Tabuleiro
        this.y = y; // declaração da variável y do objeto Tabuleiro
        this.linha = linha; // declaração da variável linha do objeto Tabuleiro
        this.coluna = coluna; // declaração da variável coluna do objeto Tabuleiro
        this.altura = altura; // declaração da variável altura do objeto Tabuleiro
        this.largura = largura; // declaração da variável largura do objeto Tabuleiro
        this.nome = nome; // declaração da variável nome do objeto Tabuleiro
        this.posicaoVetor = posicaoVetor; // declaração da variável posicaoVetor do objeto Tabuleiro
    }
}

class Peca { // declaração da classe Peca
    constructor (cor, linha, coluna, altura, largura, nome, img, tipo, posicaoVetor, nMovimento) { // declaração do construtor do objeto Peca e parâmetros
        this.cor = cor; // declaração da variável cor do objeto Peca
        this.linha = linha; // declaração da variável linha do objeto Peca
        this.coluna = coluna; // declaração da variável coluna do objeto Peca
        this.altura = altura; // declaração da variável altura do objeto Peca
        this.largura = largura; // declaração da variável largura do objeto Peca
        this.nome = nome; // declaração da variável nome do objeto Peca
        this.img = img; // declaração da variável img do objeto Peca
        this.tipo = tipo; // declaração da variável tipo do objeto Peca
        this.posicaoVetor = posicaoVetor; // declaração da variável posicaoVetor do objeto Peca
        this.nMovimento = nMovimento; // declaração da variável nMovimento do objeto Peca
    }
}

/**
 * As variáveis abaixo servirão para declarar os vetores da variável "pecas", os quais são proveniente da criação do objeto Peca
 */
pecas[0] = new Peca(cor2, linhas[0], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_1", 'torre_preta.png', "torre", 0, 0);
pecas[1] = new Peca(cor2, linhas[0], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_preto_2", 'torre_preta.png', "torre", 1, 0);
pecas[2] = new Peca(cor2, linhas[0], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_1", 'cavalo_preto.png', "cavalo", 2, 0);
pecas[3] = new Peca(cor2, linhas[0], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_preto_2", 'cavalo_preto.png', "cavalo", 3, 0);
pecas[4] = new Peca(cor2, linhas[0], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_1", 'bispo_preto.png', "bispo", 4, 0);
pecas[5] = new Peca(cor2, linhas[0], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_preto_2", 'bispo_preto.png', "bispo", 5, 0);
pecas[6] = new Peca(cor2, linhas[0], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rei_preto", 'rei_preto.png', "rei", 6, 0);
pecas[7] = new Peca(cor2, linhas[0], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rainha_preto", 'rainha_preta.png', "rainha", 7, 0);
pecas[8] = new Peca(cor2, linhas[1], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_1", 'peao_preto.png', "peao", 8, 0);
pecas[9] = new Peca(cor2, linhas[1], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_2", 'peao_preto.png', "peao", 9, 0);
pecas[10] = new Peca(cor2, linhas[1], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_3", 'peao_preto.png', "peao", 10, 0);
pecas[11] = new Peca(cor2, linhas[1], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_4", 'peao_preto.png', "peao", 11, 0);
pecas[12] = new Peca(cor2, linhas[1], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_5", 'peao_preto.png', "peao", 12, 0);
pecas[13] = new Peca(cor2, linhas[1], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_6", 'peao_preto.png', "peao", 13, 0);
pecas[14] = new Peca(cor2, linhas[1], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_7", 'peao_preto.png', "peao", 14, 0);
pecas[15] = new Peca(cor2, linhas[1], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_preto_8", 'peao_preto.png', "peao", 15, 0);

pecas[16] = new Peca(cor1, linhas[7], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_1", 'torre_branca.png', "torre", 16, 0);
pecas[17] = new Peca(cor1, linhas[7], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "torre_branco_2", 'torre_branca.png', "torre", 17, 0);
pecas[18] = new Peca(cor1, linhas[7], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_1", 'cavalo_branco.png', "cavalo", 18, 0);
pecas[19] = new Peca(cor1, linhas[7], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "cavalo_branco_2", 'cavalo_branco.png', "cavalo", 19, 0);
pecas[20] = new Peca(cor1, linhas[7], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_1", 'bispo_branco.png', "bispo", 20, 0);
pecas[21] = new Peca(cor1, linhas[7], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "bispo_branco_2", 'bispo_branco.png', "bispo", 21, 0);
pecas[22] = new Peca(cor1, linhas[7], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "rei_branco", 'rei_branco.png', "rei", 22, 0);
pecas[23] = new Peca(cor1, linhas[7], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "rainha_branco", 'rainha_branca.png', "rei", 23, 0);
pecas[24] = new Peca(cor1, linhas[6], colunas[0], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_1", 'peao_branco.png', "peao", 24, 0);
pecas[25] = new Peca(cor1, linhas[6], colunas[1], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_2", 'peao_branco.png', "peao", 25, 0);
pecas[26] = new Peca(cor1, linhas[6], colunas[2], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_3", 'peao_branco.png', "peao", 26, 0);
pecas[27] = new Peca(cor1, linhas[6], colunas[3], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_4", 'peao_branco.png', "peao", 27, 0);
pecas[28] = new Peca(cor1, linhas[6], colunas[4], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_5", 'peao_branco.png', "peao", 28, 0);
pecas[29] = new Peca(cor1, linhas[6], colunas[5], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_6", 'peao_branco.png', "peao", 29, 0);
pecas[30] = new Peca(cor1, linhas[6], colunas[6], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_7", 'peao_branco.png', "peao", 30, 0);
pecas[31] = new Peca(cor1, linhas[6], colunas[7], alturaPecaPadrao, larguraPecaPadrao, "peao_branco_8", 'peao_branco.png', "peao", 31, 0);

/**
 * Desafio concluído: criar todos os 64 "objetos" em uma estrutura de loop
 */
try {
    for (let l = 0; l < linhas.length; l++) { // estrutura de repetição que vai repetir todas as linhas da variável "linhas" 
        posicaoEsquerda = posicaoEsquerdaInicial; // variável que vai definir a posição inicial da esquerda das células/quadrantes do tabuleiro, a cada repetição de linha

        if (corAtual == cor1) { // estrutura de validação que vai validar se a cor atual é a cor 1 e executar a linha de código abaixo, caso seja verdadeira a validação
            corAtual = cor2; // variável corAtual receberá o valor da outra variável cor 2, ou seja, vai trocar de cor
        } else { // bloco de código a ser executado caso a validação seja falsa
            corAtual = cor1; // variável corAtual receberá o valor da outra variável cor 1, ou seja, vai trocar de cor
        } // fechamento do if (bloco de códigos da estrutura de validação)

        for (let c = 0; c < colunas.length; c++) { // estrutura de repetição que vai repetir todas as colunas da variável "colunas"
            celula[numCelula] = new Tabuleiro(corAtual, posicaoSuperior, posicaoEsquerda, linhas[l], colunas[c], alturaCelulaPadrao, larguraCelulaPadrao, "celula_" + colunas[c] + "_" + linhas[l], l); // declaração dos vetores da variável "celula", os quais são proveniente da criação do objeto Tabuleiro
            posicaoEsquerda += larguraCelulaPadrao; // variável posicaoEsquerda será atribuído o valor dela mesmo + a largura de célula padrão, para alinhar horizontalmente as células/quadrantes do tabuleiro

            if (corAtual == cor1) { // estrutura de validação que vai validar se a cor atual é a cor 1 e executar a linha de código abaixo, caso seja verdadeira a validação
                corAtual = cor2; // variável corAtual receberá o valor da outra variável cor 2, ou seja, vai trocar de cor
            } else { // bloco de código a ser executado caso a validação seja falsa
                corAtual = cor1; // variável corAtual receberá o valor da outra variável cor 1, ou seja, vai trocar de cor
            } // fechamento do if (bloco de códigos da estrutura de validação)

            numCelula++; // a variável numCelula receberá o valor dela mesmo + 1
        } // fechamento do for (bloco de códigos da estrutura de repetição)
        posicaoSuperior += alturaCelulaPadrao; // variável posicaoSuperior será atribuído o valor dela mesmo + a altura de célula padrão, para alinhar verticalmente as células/quadrantes do tabuleiro
    } // fechamento do for (bloco de códigos da estrutura de repetição)
} catch (e) {
    console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para a criação dos quadrantes. Veja o erro: ", e);
}

try {
    for (let c = 0; c < celula.length; c++) { // estrutura de repetição que vai repetir todos os vetores da variável/matriz "celula"
        divsCelulas[c] = document.createElement("div"); // <div></div>
        divsCelulas[c].id = celula[c].nome; // <div id="..."></div>
        divsCelulas[c].style.backgroundColor = celula[c].cor; // <div id="..." style="background-color: ...;"></div>
        divsCelulas[c].style.position = "absolute"; // <div id="..." style="background-color: ...; position: absolute;"></div>
        divsCelulas[c].style.top = celula[c].x + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px;"></div>
        divsCelulas[c].style.left = celula[c].y + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px;"></div>
        divsCelulas[c].style.height = celula[c].altura + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px;"></div>
        divsCelulas[c].style.width = celula[c].largura + medida; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;"></div>
        divsCelulas[c].dataset.line = celula[c].linha; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;" data-line=".."></div>
        divsCelulas[c].dataset.column = celula[c].coluna; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;" data-line=".." data-column=".."></div>
        // divsCelulas[c].innerText = celula[c].coluna + celula[c].linha; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px;" data-line=".." data-column=".."> a1 </div>
        divsCelulas[c].style.border = "solid 1px #000"; // <div id="..." style="background-color: ...; position: absolute; top: ..px; left: ..px; height: ..px; width: ..px; border: solid 1px #000;" data-line=".." data-column=".."> a1 </div>

        if (celula[c].cor == cor1) { // estrutura de validação que vai validar se a cor atual é a cor 1 e executar a linha de código abaixo, caso seja verdadeira a validação
            divsCelulas[c].style.color = cor2; // o atributo css divsCelulas[c].style.color receberá o valor da outra variável cor 2, ou seja, vai trocar de cor
        } else { // bloco de código a ser executado caso a validação seja falsa
            divsCelulas[c].style.color = cor1; // o atributo css divsCelulas[c].style.color receberá o valor da outra variável cor 1, ou seja, vai trocar de cor
        } // fechamento do if (bloco de códigos da estrutura de validação)

        divsCelulas[c].style.display = "grid"; // o atributo css divsCelulas[c].style.display receberá o valor "grid", para melhor uso do alinhamento de itens dentro da <div>
        // divsCelulas[c].style.textAlign = "center";
        divsCelulas[c].style.alignItems = "center"; // o atributo css divsCelulas[c].style.alignItems receberá o valor "center", para alinhar verticalmente ao centro os elementos que estiverem dentro da <div>
        divsCelulas[c].style.backgroundImage = "url(" + dirQuadrantes + celula[c].coluna + celula[c].linha + ".png)"; // o atributo css divsCelulas[c].style.backgroundImage receberá o valor "url(...)", para adicionar uma imagem de fundo da <div>
        divsCelulas[c].style.backgroundSize = "20% 20%";
        divsCelulas[c].style.backgroundRepeat = "no-repeat";
        divsCelulas[c].style.backgroundPosition = "center";

        for (let p = 0; p < pecas.length; p++) { // estrutura de repetição que vai repetir todos os vetores da variável/matriz pecas
            if (celula[c].linha == pecas[p].linha && celula[c].coluna == pecas[p].coluna) { // estrutura de validação que vai validar se a linha e coluna do vetor/objeto Tabuleiro é igual à linha e coluna do vetor/objeto Peca
                let peca_tmp = document.createElement("img"); // <img />
                peca_tmp.src = dirPecas + pecas[p].img; // <img src="..." />
                peca_tmp.width = pecas[p].largura; // <img src="..." width="..." />
                peca_tmp.height = pecas[p].altura; // <img src="..." width="..." height="..." />
                peca_tmp.style.marginLeft = "auto"; // <img src="..." width="..." height="..." style="margin-left: auto;" />
                peca_tmp.style.marginRight = "auto"; // <img src="..." width="..." height="..." style="margin-left: auto; margin-left: auto;" />
                peca_tmp.dataset.indexNumber = pecas[p].posicaoVetor; // <img src="..." width="..." height="..." style="margin-left: auto; margin-left: auto;" data-index-number=".." />
                peca_tmp.id = pecas[p].nome; // <img src="..." width="..." height="..." style="margin-left: auto; margin-left: auto;" data-index-number=".." id=".." />
                divsCelulas[c].appendChild(peca_tmp); // vetor variável/matriz <div> que receberá a peça/<img/> temporária 
            } // fechamento do if (bloco de códigos da estrutura de validação)
        } // fechamento do for (bloc de códigos da estrutura de repetição)

        document.body.appendChild(divsCelulas[c]); // o elemento <body> receberá a célula/quadrante/<div> da variável/matriz divsCelulas
    } // fechamento do for (bloco de códigos da estrutura de repetição)
} catch (e) {
    console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para a criação das peças. Veja o erro: ", e);
}

pecasVencidasPretas.id = "pecasVencidasPretas";
// pecasVencidasPretas.style.display = "none"; 
pecasVencidasPretas.style.position = "absolute";
pecasVencidasPretas.style.top = divsCelulas[7].style.top;
pecasVencidasPretas.style.left = (parseInt(divsCelulas[7].style.left.replace("px","")) + (larguraCelulaPadrao * 2)) + medida;
pecasVencidasPretas.style.zIndex = 999;
// pecasVencidasPretas.style.width = larguraCelulaPadrao + medida;
// pecasVencidasPretas.style.height = alturaCelulaPadrao + medida;
pecasVencidasPretas.innerHTML = "<p>Aqui ficarão as peças brancas vencidas</p>";
pecasVencidasPretas.style.backgroundColor = cor2;
pecasVencidasPretas.style.color = cor1;
pecasVencidasPretas.style.border = "solid 1px " + cor1;
pecasVencidasPretas.style.padding = "10px 10px 10px 10px";
pecasVencidasPretas.style.display = "flex";
pecasVencidasPretas.style.flexWrap = "wrap";
document.body.appendChild(pecasVencidasPretas);

pecasVencidasBrancas.id = "pecasVencidasBrancas";
// pecasVencidasBrancas.style.display = "none";
pecasVencidasBrancas.style.position = "absolute";
pecasVencidasBrancas.style.top = divsCelulas[63].style.top;
pecasVencidasBrancas.style.left = (parseInt(divsCelulas[63].style.left.replace("px","")) + (larguraCelulaPadrao * 2)) + medida;
pecasVencidasBrancas.style.zIndex = 999;
// pecasVencidasBrancas.style.width = larguraCelulaPadrao + medida;
// pecasVencidasBrancas.style.height = alturaCelulaPadrao + medida;
pecasVencidasBrancas.innerHTML = "<p>Aqui ficarão as peças pretas vencidas</p>";
pecasVencidasBrancas.style.backgroundColor = cor1;
pecasVencidasBrancas.style.color = cor2;
pecasVencidasBrancas.style.border = "solid 1px " + cor2;
pecasVencidasBrancas.style.padding = "10px 10px 10px 10px";
pecasVencidasBrancas.style.display = "flex";
pecasVencidasBrancas.style.flexWrap = "wrap";
document.body.appendChild(pecasVencidasBrancas);

function inverterCor() {
    if (corPermitida == cor1) {
        corPermitida = cor2;
    } else {
        corPermitida = cor1;
    }
}

function moverPeao(pecaAnalisada, elementoDestino) {
    try {
        let permitirMovimento = false;
        /**
         * As linhas de código abaixo analisam o movimento dos peões pretos e autorizam os movimentos dos mesmos
         */
        if (
            pecaAnalisada.linha < elementoDestino.dataset.line && 
            pecaAnalisada.coluna == elementoDestino.dataset.column && 
            pecaAnalisada.tipo == "peao" && pecaAnalisada.cor == cor2
        ) {
            if (
                pecaAnalisada.nMovimento == 0 && 
                elementoDestino.dataset.line <= (parseInt(pecaAnalisada.linha) + 2)
            ) {
                permitirMovimento = true;
            } else if (
                pecaAnalisada.nMovimento > 0 && 
                elementoDestino.dataset.line == (parseInt(pecaAnalisada.linha) + 1)
            ) {
                permitirMovimento = true;
            }
        }

        /**
         * As linhas de código abaixo analisam o movimento dos peões brancos e autorizam os movimentos dos mesmos
         */
        if (
            pecaAnalisada.linha > elementoDestino.dataset.line && 
            pecaAnalisada.coluna == elementoDestino.dataset.column && 
            pecaAnalisada.tipo == "peao" && pecaAnalisada.cor == cor1
        ) {
            if (
                pecaAnalisada.nMovimento == 0 && 
                elementoDestino.dataset.line >= (parseInt(pecaAnalisada.linha) - 2)
            ) {
                permitirMovimento = true;
            } else if (
                pecaAnalisada.nMovimento > 0 && 
                elementoDestino.dataset.line == (parseInt(pecaAnalisada.linha) - 1)
            ) {
                permitirMovimento = true;
            }
        }

        return permitirMovimento;
    } catch (e) {
        console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para mover o peão. Veja o erro: ", e);
    }
}

function moverTorre(pecaAnalisada, elementoDestino) {
    try {
        /**
         * As linhas de código abaixo analisam o movimento das torres pretas e autorizam os movimentos das mesmas
         */
        let permitirMovimento = false;
        if (
            pecaAnalisada.linha == elementoDestino.dataset.line && // elementoDestino.dataset.line é uma string e precisa ser convertida para tipo numérico, caso precise ser utilizada como número
            pecaAnalisada.coluna != elementoDestino.dataset.column && 
            pecaAnalisada.tipo == "torre"
        ) {
            // console.log("elementoDestino.dataset.column: ", elementoDestino.dataset.column);
            // console.log("colunas.indexOf(elementoDestino.dataset.column): ", colunas.indexOf(elementoDestino.dataset.column));
            // console.log("colunas.indexOf(pecaAnalisada.coluna): ", colunas.indexOf(pecaAnalisada.coluna));
            let quadrantesLateraisLivres = [];
            let colunasLivres = true;
            if (colunas.indexOf(elementoDestino.dataset.column) > colunas.indexOf(pecaAnalisada.coluna)) {
                for (let cc = colunas.indexOf(pecaAnalisada.coluna) + 1; cc <= colunas.indexOf(elementoDestino.dataset.column); cc++) {
                    let celulaTemp = document.getElementById("celula_" + colunas[cc] + "_" + pecaAnalisada.linha);
                    if (celulaTemp.innerHTML != "") {
                        // console.log(celulaTemp);
                        colunasLivres = false;
                    }
                }
            }
            for (let c = 0; c < colunas.length; c++) {
                let quadranteTemp = document.getElementById("celula_" + colunas[c] + "_" + pecaAnalisada.linha);
                if (quadranteTemp.innerHTML == "" && colunas[c] != pecaAnalisada.linha) {
                    quadrantesLateraisLivres.push(colunas[c]);
                    pecaAnalisada.coluna = colunas[c];
                    if (colunasLivres == true) {
                        movimentoPermitido = true;
                    }
                }
            }
            // console.log("quadrantesLateraisLivres: ", quadrantesLateraisLivres);
        }
    } catch (e) {
        console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para mover a torre. Veja o erro: ", e);
    }
}

function moverCavalo(pecaAnalisada, elementoDestino) {
    /**
     * criar código que vai analisar se o movimento em L está correto
     * 
     * o cavalo se movimenta em L, ou seja:
     * 
     * - dois quadrantes para frente ou para trás e 1 quadrante para algum lado (esquerdo ou direito)
     * - dois quadrantes para algum lado (direito ou esquerdo) e 1 quadrante para cima ou para baixo
     */
    // console.clear();
    let linhaQuadrantePecaAtual = pecaAnalisada.linha;
    let colunaQuadrantePecaAtual = pecaAnalisada.coluna;
    let numVetorColunaPeca = colunas.indexOf(colunaQuadrantePecaAtual);
    let numVetorLinhaPeca = linhas.indexOf(linhaQuadrantePecaAtual);
    // console.log("numVetorColunaPeca: ", numVetorColunaPeca);
    // console.log("numVetorLinhaPeca: ", numVetorLinhaPeca);
    let numVetorColunaQuadrante = colunas.indexOf(elementoDestino.dataset.column);
    let numVetorLinhaQuadrante = linhas.indexOf(elementoDestino.dataset.line);
    // console.log("numVetorColunaQuadrante: ", numVetorColunaQuadrante);
    // console.log("numVetorLinhaQuadrante: ", numVetorLinhaQuadrante);
    let permitirMovimento = false;
    if ( // valida o movimento do cavalo dois quadrantes para cima e um quadrante para esquerda
        numVetorColunaQuadrante == (numVetorColunaPeca - 1) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca - 2)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para cima e um quadrante para direita
        numVetorColunaQuadrante == (numVetorColunaPeca + 1) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca - 2)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para direita e um quadrante para cima
        numVetorColunaQuadrante == (numVetorColunaPeca + 2) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca - 1)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para direita e um quadrante para baixo
        numVetorColunaQuadrante == (numVetorColunaPeca + 2) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca + 1)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para baixo e um quadrante para direita
        numVetorColunaQuadrante == (numVetorColunaPeca + 1) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca + 2)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para baixo e um quadrante para esquerda
        numVetorColunaQuadrante == (numVetorColunaPeca - 1) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca + 2)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para esquerda e um quadrante para baixo
        numVetorColunaQuadrante == (numVetorColunaPeca - 2) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca + 1)
    ) {
        permitirMovimento = true;
    } else if ( // valida o movimento do cavalo dois quadrantes para esquerda e um quadrante para cima
        numVetorColunaQuadrante == (numVetorColunaPeca - 2) &&
        numVetorLinhaQuadrante == (numVetorLinhaPeca - 1)
    ) {
        permitirMovimento = true;
    }
    return permitirMovimento;
}

function moverPeca(pecaAnalisada, pecaClicada, elementoDestino) {
    if (pecas[pecaClicada.dataset.indexNumber].cor == corPermitida) {
        historico_movimentos.pecaMovimentada.push(pecaClicada);
        historico_movimentos.linhaOrigem.push(pecas[pecaClicada.dataset.indexNumber].linha);
        historico_movimentos.colunaOrigem.push(pecas[pecaClicada.dataset.indexNumber].coluna);
        historico_movimentos.linhaDestino.push(elementoDestino.dataset.line);
        historico_movimentos.colunaDestino.push(elementoDestino.dataset.column);
        // console.log(historico_movimentos);

        pecaAnalisada.linha = elementoDestino.dataset.line;
        pecaAnalisada.coluna = elementoDestino.dataset.column;
        // console.log(pecas);
        pecaAnalisada.nMovimento++;

        let pecaClicadaTemp = pecaClicada;
        pecaClicada.remove();
        elementoDestino.innerHTML = "";
        elementoDestino.appendChild(pecaClicadaTemp);
        inverterCor();
    } else {
        console.error("É... parece que não é sua vez ainda. Guenta aí...");
    }
}

function vencerPeao(pecaAnalisada, pecaClicada) {
    let permitirMovimento = false;
    let numVetorLinhaPecaClicada = linhas.indexOf(pecas[pecaClicada.dataset.indexNumber].linha);
    let numVetorColunaPecaClicada = colunas.indexOf(pecas[pecaClicada.dataset.indexNumber].coluna);
    let objPecaClicada = pecas[pecaClicada.dataset.indexNumber];
    let numVetorColunaPecaAnalisada = colunas.indexOf(pecaAnalisada.coluna);
    let numVetorLinhaPecaAnalisada = linhas.indexOf(pecaAnalisada.linha);
    if (
        objPecaClicada.cor == cor1 &&
        (
            (numVetorColunaPecaClicada - 1) == numVetorColunaPecaAnalisada ||
            (numVetorColunaPecaClicada + 1) == numVetorColunaPecaAnalisada
        ) &&
        (numVetorLinhaPecaClicada - 1) == numVetorLinhaPecaAnalisada
    ) {
        permitirMovimento = true;
    } else if (
        objPecaClicada.cor == cor2 &&
        (
            (numVetorColunaPecaClicada - 1) == numVetorColunaPecaAnalisada ||
            (numVetorColunaPecaClicada + 1) == numVetorColunaPecaAnalisada
        ) &&
        (numVetorLinhaPecaClicada + 1) == numVetorLinhaPecaAnalisada
    ) {
        permitirMovimento = true;
    }

    return permitirMovimento;
}

function vencerCavalo(pecaAnalisada, pecaClicada) {
    let permitirMovimento = false;
    let numVetorLinhaPecaClicada = linhas.indexOf(pecas[pecaClicada.dataset.indexNumber].linha);
    let numVetorColunaPecaClicada = colunas.indexOf(pecas[pecaClicada.dataset.indexNumber].coluna);
    let corPecaClicada = colunas.indexOf(pecas[pecaClicada.dataset.indexNumber].cor);
    let objPecaClicada = pecas[pecaClicada.dataset.indexNumber];
    let numVetorColunaPecaAnalisada = colunas.indexOf(pecaAnalisada.coluna);
    let numVetorLinhaPecaAnalisada = linhas.indexOf(pecaAnalisada.linha);
    if (
        objPecaClicada.cor == cor1 &&
        (
            (numVetorColunaPecaClicada - 1) == numVetorColunaPecaAnalisada ||
            (numVetorColunaPecaClicada + 1) == numVetorColunaPecaAnalisada
        ) &&
        (numVetorLinhaPecaClicada - 1) == numVetorLinhaPecaAnalisada
    ) {
        permitirMovimento = true;
    }
    return permitirMovimento;}


(function() { // execução em tempo real das linhas de código do bloco de função inominada
    document.onmousedown = handleMouseDown;
    function handleMouseDown(event) {
        try {
            event = event || window.event; // IE-ism
            pecaClicada = event.target;
            if (pecaClicada.tagName == "IMG" || pecaClicada.tagName == "img") {
                if (pecaClicada.dataset.indexNumber) {
                    pecaClicada.style.display = "none";
                    let imgPecaTemp = document.createElement('img'); // <img />
                    imgPecaTemp.src = dirPecas + pecaClicada.src.replace(/^.*[\\/]/, ''); // <img src="./pecas/peca.png" />
                    imgPecaTemp.width = larguraPecaPadrao; // <img src="./pecas/peca.png" width="..." />
                    imgPecaTemp.height = alturaPecaPadrao; // <img src="./pecas/peca.png" width="..." height="..." />
                    pecaTemp.appendChild(imgPecaTemp);
                    pecaTemp.style.display = "block";
                }
            }
            console.log("pecaClicada.id: ", pecaClicada.id);
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmousedown. Veja o erro: ", e);
        }
    }

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        try {
            var eventDoc,
                doc,
                body;

            event = event || window.event; // IE-ism

            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }

            pecaTemp.style.left = (event.pageX + 50) + medida;
            pecaTemp.style.top = event.pageY + medida;
            return false;
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmousemove. Veja o erro: ", e);
        }
    }

    document.onmouseup = handleMouseUp;
    function handleMouseUp(event) {
        try {
            pecaClicada.style.display = "grid";
            // console.log(pecaClicada);
            pecaTemp.innerHTML = '';
            pecaTemp.style.display = "none";
            event = event || window.event; // IE-ism
            let elementoDestino = event.target;
            let quadranteDestino = event.target;
            if (elementoDestino.tagName == "IMG" || elementoDestino.tagName == "img") {
                quadranteDestino = event.target.parentElement;
            }
            let movimentoPermitido = false; // todos os movimentos estão bloqueados
            /**
             * As linhas de código abaixo analisam o movimento das peças e autorizam as mesmas
             */
            let pecaAnalisada;
            let nVetorPeca = pecaClicada.dataset.indexNumber;
            if (nVetorPeca) {
                pecaAnalisada = pecas[nVetorPeca];
                continuarJogada = true;
            }

            switch (pecaAnalisada.tipo) {
                case "peao":
                    movimentoPermitido = moverPeao(pecaAnalisada, elementoDestino);
                    break;
                case "torre":
                    movimentoPermitido = moverTorre(pecaAnalisada, elementoDestino);
                    break;
                case "cavalo":
                    movimentoPermitido = moverCavalo(pecaAnalisada, elementoDestino);
                    break;
                default:
                    console.error("Peça selecionada não identificada ou ainda não permitida mover-se!");
                    break;
            }

            /**
             * A estrutura de validação abaixo verifica se o movimento está autorizado e executa as linhas de código do bloco if{}
             */
            if (movimentoPermitido == true) {
                moverPeca(pecaAnalisada, pecaClicada, quadranteDestino);
            } else {
                let nVetorElementoDestino = elementoDestino.dataset.indexNumber;
                if (corPermitida != pecas[nVetorElementoDestino].cor) {
                    // aqui tem q adicionar as regras de bloquear o movimento se não a peça não puder ser vencida, se não puder "comer" a peça
                    let permitirMovimento = false;
                    switch (pecas[nVetorElementoDestino].tipo) {
                        case "peao":
                            permitirMovimento = vencerPeao(pecas[nVetorElementoDestino], pecaClicada);
                            break;
                        case "cavalo":
                            permitirMovimento = vencerCavalo(pecas[nVetorElementoDestino], pecaClicada);
                            break;
    
                        default:
                            console.error("Peça não identificada ou ainda não programada para vencer a peça oponente.");
                            break;
                    }
                    if (permitirMovimento == true) {
                        if (corPermitida == cor1) {
                            pecasVencidasBrancas.innerHTML += quadranteDestino.innerHTML;
                        } else {
                            pecasVencidasPretas.innerHTML += quadranteDestino.innerHTML;
                        }
                        moverPeca(pecaAnalisada, pecaClicada, quadranteDestino);
                    } else {
                        console.error("Ops! Não é possível vencer a peça: " + quadranteDestino.children.item(0).id);
                    }
                } else {
                    console.error("Movimento não permitido.");
                    console.error("Ops! Não é possível realizar este movimento, pois o quadrante " + quadranteDestino.id + " já está ocupado por: " + quadranteDestino.children.item(0).id);
                }
            }
            pecaClicada = null;
        } catch (e) {
            console.error("Eita! Aconteceu alguma coisa que não deu certo finalizar as linhas de código para o evento onmouseup. Veja o erro: ", e);
        }
    }
})();