// 1. Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// 2. Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
// 3. Implemente condicionais para que:

const currentHour = 14;
let message ="";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour < 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour < 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message)