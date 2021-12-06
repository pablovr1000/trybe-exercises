// Faça uma função que retorne o array oddsAndEvens em ordem crescente.

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [5, 3, 4, 8, 0, 1, 7, 2, 85, 15, 35, 23];

const oddsAndEvensFunction = () => {
  let array = oddsAndEvens.sort((a, b) => a - b);
    return array;
}

console.log(oddsAndEvensFunction(oddsAndEvens));