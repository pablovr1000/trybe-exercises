window.onload = () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', secondFunction);
}

function checkNumber(value1, value2) {
  if (!value1 || !value2) { // não tem como uma string vazia ser falsa.
    throw new Error ('Insira os dois valores');
  } else if (isNaN(value1) || isNaN(value2)) {
    throw new Error ('Insira somente números');
  }
}

function secondFunction() {
  try {
    const value1 = document.querySelector('#value1').value;
    const value2 = document.querySelector('#value2').value;
    checkNumber(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.querySelector('#result').innerHTML = `Resultado: ${result}`;
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
  } catch (error) {
    document.querySelector('#result').innerHTML = `Erro: ${error.message}`;
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
  } finally { // sempre vai ser executado, não importa o que aconteça
    document.querySelector('#value1').value = '';
    document.querySelector('#value2').value = '';
  }
}