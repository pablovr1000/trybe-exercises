// Formas de adicionar novas propriedades em um objeto sem colocar diretamente no objeto

// Adicinando diretamente no código:
// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };

// Adicionando através do '.'
// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// customer1.lastName = 'Faria';

// // Adicionando com chave []
// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// customer2['lastName'] = 'Silva';

// Como adicionar várias informações:

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName'; // propriedade
const lastName = 'Ferreira';
customer[newKey] = lastName; // objeto customer vai receber newKey como propriedade e seu valor a variável lastName 
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);