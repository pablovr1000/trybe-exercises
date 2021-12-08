// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector('#btn');
const div = document.querySelector('#div');
button.addEventListener('click', addCounting);

let soma = 0;

function addCounting() {
  soma += 1
  div.innerText = soma;
}