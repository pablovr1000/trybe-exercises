// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.


const custo = 20;
const valorFinal = 58;

if (custo >= 0 && valorFinal >= 0) {
    let custoDoProduto = (custo * 0.2) + custo;
    let lucro = (valorFinal - custoDoProduto) * 1000;
    console.log(lucro) ;
} else {
    console.log ('ERRO: O preço do produto não pode ser menos que 0.')
}

