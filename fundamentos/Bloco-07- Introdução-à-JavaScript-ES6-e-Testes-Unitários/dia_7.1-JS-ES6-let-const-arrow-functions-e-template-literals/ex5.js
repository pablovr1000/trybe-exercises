// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.querySelector('#btn');
const div = document.querySelector('#div');
button.addEventListener('click', addCounting);
const button1 = document.querySelector('#btn1');
button1.addEventListener('click', addCounting1);

let soma = 0;
let subtração = 0;

function addCounting() {
  soma += 1;
  div.innerText = soma;
}

function addCounting1 () {
  subtração = div.innerText - 1;
  div.innerText = subtração;
}

// let soma = 0;
// function addCounting() {
//   soma += 1;
//   div.innerText = soma;
// }

// function addCounting1 () {
//   soma -= 1
//   div.innerText = soma ;
// }