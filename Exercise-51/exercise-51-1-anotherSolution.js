// Resolución realizada por quien hizo el ejercicio:

function pares(numeros) {

   return {
      pares: numeros.filter( num => num % 2 === 0),
      impares: numeros.filter( num => num % 2 === 1)
   };

}

console.log( pares([1,2,3,4]) );