// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const myFunction = (name) => {
  let myEmail = name.replace(' ', '_').toLowerCase();
  return obj = { nomeCompleto: name, email: `${myEmail}@hotmail.com` };
}



const newEmployees = () => {
  const employees = {
    id1: myFunction('Pedro Guerra'),
    id2: myFunction('Laura Lima'),
    id3: myFunction('Pedro Silva'),
  }
  return employees;
};

console.log(newEmployees(myFunction('Laura Lima')));