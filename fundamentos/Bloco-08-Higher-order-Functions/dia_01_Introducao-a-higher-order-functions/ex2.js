// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (meuNumero, numeroDoSorteio) => meuNumero === numeroDoSorteio;

const check = (meuNumero, callback) => { 
  const numeroDoSorteio = Math.floor(Math.random() * 5) + 1;
  if (callback) {
    return 'Parabéns! Você ganhou!';
  } else {
    return 'Tente novamente';
  }
}

console.log(check(3, sorteio));
// Math.random gera um número aleatório de 0 a 0.99
// Math.floor arrendoda para baixo. Sem somar o 1 ele pode arrendodar para 0