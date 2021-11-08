// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA = 8;
const anguloB = 8;
const anguloC = 5;

let somaDosAngulos = anguloA + anguloB + anguloC;
let resultado = anguloA >  0 && anguloB > 0 && anguloC > 0;

if (resultado) {
    if (somaDosAngulos === 21) {    
        console.log(true);
} else {
    console.log(false);
};

} else {
    console.log('zero'); 
}   