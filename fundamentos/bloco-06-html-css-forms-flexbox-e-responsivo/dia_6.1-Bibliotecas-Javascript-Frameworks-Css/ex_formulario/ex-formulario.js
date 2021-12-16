window.onload = function() {
  createStateOptions(); // add função dos estados

  const submitBotton = document.querySelector('#submit-button');
  submitBotton.addEventListener('click', avoidSubmit);
}

let inputsData = [];

function avoidSubmit(event) { // tudo que ocorrer após o envio dos dados vai acontecer aqui
  event.preventDefault(); // ao carregar a página ela não irá atualizar (que é o seu comportamento padrão)
  
  //validação de dados:
  let answers = document.querySelector('#answers'); // peguei div para colocar os acertos
  let wrongValues = document.querySelector('#wrongValues'); // peguei div para colocar os erros

  inputsData = []; // quando a página carregar o inputData esvazia e quando cai na função se tiver algo ele preenche
  wrongValues.innerHTML = ''; // quando a página a div wrong esvazia e quando cai na função se tiver algo ela enche
  answers.innerHTML = ''; // quando a página a div wrong esvazia e quando cai na função se tiver algo ela enche 

  let name = validateName();
  let date = checkDate();
  let email = checkEmail();
  let cpf = checkCPF();
  let address = checkAddress();
  let city = checkCity();
  let house = checkHouse();
  let role = checkRole();
  let roleDescription = checkRoleDescription();
  let textArea = checkTextArea();
  let stateArea = state();

  if (inputsData.length > 0) {
    for (let xablau = 0; xablau < inputsData.length; xablau += 1) {
      let items = document.createElement('p');
      items.innerText = inputsData[xablau];
      
      wrongValues.appendChild(items);
    }
  } else {
    let inputs = {name, date, email, cpf, address, city, house, role, roleDescription, textArea, stateArea}; // objeto com todas as funções
    for (let items in inputs) {
      const form = document.querySelector('#cv-form');
      form.innerHTML = '';
      const h1 = document.querySelector('#h1');
      h1.innerHTML = 'Informações enviadas com sucesso!';
      const paragraph = document.querySelector('#p');
      paragraph.innerHTML = '';
      let inputsItems = document.createElement('p');
      inputsItems.innerText = inputs[items];
      answers.appendChild(inputsItems);
    }
  }
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearAllInputs);

const allInputs = document.querySelectorAll('input');

function clearAllInputs() {
  for (let index = 0; index < allInputs.length; index += 1) {
    allInputs[index].value = '';
  }
  document.querySelector('#resume');
}

function validateName() { // verifica nome;
const name = document.querySelector('#name');

if (name.value === '') {
  inputsData.push('nome inválido!');
} else {
  return name.value;
}
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

  if (inputDate.value === '') {
    inputsData.push('preencha a data!');
    return;
  }

  const dd = inputDate.value.match(/\d+/g)[0]; // \d = [0-9]
  const mes = inputDate.value.match(/\d+/g)[1];;
  const ano = inputDate.value.match(/\d+/g)[2];
    
  if (inputDate.value.match(/(\d{2}\/){2}\d{4}/)) { // verifica formato correto
    if (dd > 31 || dd < 0) { // verifica formato de data
      inputsData.push('data inválida');
    } else if (mes > 12 || mes < 0) {
      inputsData.push('data inválida');
    } else if (ano < 0) {
      inputsData.push('data inválida');
    } else {
      return inputDate.value;
    } 
  } else {
    inputsData.push('Insira a data o formato correto "dd/mm/aaaa"');
  }
}

function checkEmail() {
  const emailInput = document.querySelector('#email');
  const correctEmail = emailInput.value.match(/^[a-z-0-9]+\@\w+\.\w+$/g);
  if (emailInput.value === '') { // typeof emailInput.value = string. Você não pode comparar uma string com 0.
    inputsData.push('E-mail vazio. Preencha.');
  } else if (!correctEmail) {
    inputsData.push('Email incorreto');
  } else {
    return emailInput.value;
  }
}

function checkCPF() {
  const cpfInput = document.querySelector('#cpf-number');
  const correctCPF = cpfInput.value.match(/\d\d\d\d\d\d\d\d\d\d\d/);
  const checkIfCPFIsANumber = cpfInput.value.match(/\d+/g);

  if (cpfInput.value === '') {
    inputsData.push('Preencha o campo do CPF.');
  } else if (correctCPF < 11) {
    inputsData.push('CPF não atingiu o mínimo de dígitos'); 
  } else {
    return cpfInput.value;
  }
}

function checkAddress() {
  const addressInput = document.querySelector('#address');
  if (addressInput.value === '') {
    inputsData.push('Campo de endereço vazio. Preencha.');
  } else {
    return addressInput.value;
  }
}

function checkCity() {
  const cityInput = document.querySelector('#city');
  if (cityInput.value === '') {
    inputsData.push('Campo de cidade vazio. Preencha.');
  } else {
    return cityInput.value;
  }
}


function checkHouse() {
  const houseInput = document.getElementsByName('houseType');

  for (let index = 0; index < houseInput.length; index += 1) {
    if (houseInput[index].checked) {
      return houseInput[index].value;
    }
  }
  if (!houseInput.checked) {
    inputsData.push('Selecione o seu tipo de residência.');
  }
}

function checkRole() {
  const role = document.querySelector('#role').value;
  if (role === '') {
    inputsData.push('Preencha o campo "cargo"');
  } else {
    return role;
  }
}

function checkRoleDescription() {
  const roleDescription = document.querySelector('#roleDescription').value;
  if (roleDescription === '') {
    inputsData.push('Preencha o campo "Descrição de cargo"');
  } else {
    return roleDescription;
  }
}

function checkTextArea() {
  const textArea = document.querySelector('#resume').value;
  if (textArea === '') {
    inputsData.push('Preencha o campo de texto.');
  } else {
    return textArea;  
  }
}

function state() {
  const state = document.querySelector('#state');
  return state.value;
}