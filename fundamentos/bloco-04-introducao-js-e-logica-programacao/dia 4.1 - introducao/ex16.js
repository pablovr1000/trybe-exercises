 

const custo = 20;
const valorFinal = 58;

if (custo >= 0 && valorFinal >= 0) {
  let custoDoProduto = (custo * 0.2) + custo;
  let lucro = (valorFinal - custoDoProduto) * 1000;
  console.log(lucro);
} else {
  console.log ('ERRO: O preço do produto não pode ser menos que 0.');
}

