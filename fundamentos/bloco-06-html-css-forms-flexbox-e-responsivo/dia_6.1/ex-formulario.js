  const submitBotton = document.querySelector('.submit-button');
  submitBotton.addEventListener('click', avoidSubmit);

  let inputsData = [];

  function avoidSubmit(event, input) {
    event.preventDefault();

    

    // fazer callback de todas as funções
    //apagar todos inputs
  }





// Cria tag option, adiciona estados nela e depois adiciona estados no select
function createStateOptions() {
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    let option = document.createElement('option');
    option.innerText = stateOptions[index];
    option.value = stateOptions[index];
    states.appendChild(option);
  }
}
createStateOptions();

function checkDate() {
  const inputDate = document.querySelector('#startDate');

  if (inputDate.value === 0) {
    inputsData.push('preencha a data!');  
  }

  const dd = inputDate.value.match(/\d+/g)[0]; // \d = [0-9]
  const mes  = inputDate.value.match(/\d+/g)[1];;
  const ano = inputDate.value.match(/\d+/g)[2];
    
  if (inputDate.value.match(/(\d{2}\/){2}\d{4}/)) { // verifica formato correto
    if (dd > 31 || dd < 0) { // verifica formato de data
      inputsData.push('data inválida');
    } else if (mes > 12 || mes < 0) {
      inputsData.push('data inválida');
    } else if (ano < 0) {
      inputsData.push('data inválida');
    } else {
      inputsData.push(inputsData.value);
    }
  }
}

function checkName() {
  const name = document.querySelector('.name');
  if (name.value === 0); {
    inputsData.push('preencha seu nome!');
  }
  if (name.value !==[a-zA-z]) {
    inputsData.push('corrija o seu nome!');
  } else {
    inputsData.push(name.value);
  }
}

function checkChar(event) {
  // vai transformar o carectere estranho em charcode
  const char = String.fromCharCode
}