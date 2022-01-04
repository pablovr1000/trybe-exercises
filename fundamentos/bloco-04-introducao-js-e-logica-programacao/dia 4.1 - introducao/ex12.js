// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA = 100;
const anguloB = 40;
const anguloC = 30;


if (anguloA > 0 && anguloB > 0 && anguloC > 0) {
  let somaDosAngulos = anguloA + anguloB + anguloC;
  if (somaDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
  console.log('valor válido, porém soma diferente de 180');
} else {
  console.log('valor inválido');
}




// let degreeAngleA = 65;
// let degreeAngleB = 100;
// let degreeAngleC = 15;


// let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

// if(allAnglesArePositives){
//   if (sumOfAngles === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('Erro: ângulo inválido');
// }