// let quantidade = 10;
// let ingredientes = ['queijo', 'presunto', 'maionese'];
// let sacola = [];    

// for (let i = 0; i < 10; i += 1) {
//     let pao = [];   

//     for (let p = 0; p < ingredientes.length; p += 1) {
//         pao.push(ingredientes[p]);
//     }
    
//     sacola.push(pao);

// }

// console.log("sacola, ", sacola);

// let xTrybe = ['pão', 'queijo', 'bacon', 'alface', 'ketchup', 'pão'];
// let indiceRetornado = xTrybe.indexOf('bacon');
// console.log('indice retornado: ', indiceRetornado);
// xTrybe.splice(indiceRetornado, 1);

// console.log(xTrybe)


// --------- DINÂMICA

let quantidade = 5;
let ingredientesPlanned  = ['pão', 'queijo', 'carne', 'manteiga'];
let pessoaVeg = false;
let pedido = [];

for (let index = 0; index < quantidade; index += 1) {
    let pao = [];
    for (let index2 = 0; index2 < ingredientesPlanned.length; index2 +=1) {
            pao.push(ingredientesPlanned[index2]);
    }
        if (pessoaVeg === true) {
            let indiceRetornado = pao.indexOf('carne');
            pao.splice(indiceRetornado, 1);
        } else {
            pao
        }
        pedido.push(pao)
}

console.log(pedido)

