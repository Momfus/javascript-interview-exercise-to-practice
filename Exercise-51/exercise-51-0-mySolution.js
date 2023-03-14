/*
# Enunciado Ejercicio 51:

    Dada un array de números, devolver un array nuevo con los números pares e
   impares separados.   

# Ejemplos:

   pares([1,2,3,4])

   // Return: 
         pares: [2, 4]
         impares: [1, 3]
       
*/

function evens( arrayNumber ) {

   let evensArray = [];
   let oddsArray = [];

   arrayNumber.forEach( num => {

      if( num % 2 === 0) {
         evensArray.push(num);
      } else {
         oddsArray.push(num);
      }

   });

   return [ evensArray, oddsArray ];

}

const evenOddsArray = evens([1,2,3,4]); 
console.log( `Pares: [${evenOddsArray[0]}]\nImpares: [${evenOddsArray[1]}]` );