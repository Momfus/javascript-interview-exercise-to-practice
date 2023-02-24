/*
# Enunciado Ejercicio 24:

    Dada un array de enteros y un número, detectar si esa lista de números es
   una permutación del 1 al número apartado.

    En este caso una permutación es de una secuencia de números en orden sin
   que falte ninguno entre ellos.

#Ejemplos:
   permutation([1, 2, 3, 4, 5], 5)  // Devuelve: true
   permutation([1, 2, 3, 5], 5)     // Devuelve: false

# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetros secuencia y número
   - Bucle del 0 al número.
   - return false si el número actual  + 1, no se encuentra
   - Si salimos del bucle, devolver true.
*/

function permutation( arrayNumber, num ) {

   for( let i = 0; i < arrayNumber.length; i++) {

      if( i + 1 < arrayNumber.length ) {
         if( !arrayNumber.includes(arrayNumber[i] + 1) ) {
            return false;
         }

      }  

   }

   return true;

}


console.log( permutation([1, 2, 3, 4, 5], 5) );
console.log( permutation([1, 2, 3, 5], 5) );
console.log( permutation([1, 2, 3, 5, 6], 5) );
