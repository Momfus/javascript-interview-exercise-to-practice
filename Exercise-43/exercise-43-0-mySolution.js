/*
# Enunciado Ejercicio 43:

   Dado un array de números, sacar la media de todos ellos.

# Ejemplos:

   meanNumber([1, 2, 3]);

      Return: 3

*/

/**
 * This help to check if the array given is array with numbers in Javascript Vainilla
 * @param {Array<any>} arrayToCheck 
 * @returns {boolean}
 */
function isArrayNumber( arrayToCheck ) {

   if( !Array.isArray(arrayToCheck)) {
      return false;
   }

   return arrayToCheck.every(
      element => typeof element === 'number'
   );

}


/**
 * 
 * @param {Array<number>} arrayNumber 
 * @returns {number}
 */
function meanNumber( arrayNumber ) {

   if( !isArrayNumber(arrayNumber)) {
      console.error('Error: The array must be fill with numbers');
      return;
   }

   let total = 0;

   arrayNumber.forEach(numb => {
      total += numb;
   });

   return (total / arrayNumber.length );

}


console.log( meanNumber([1, 2, 3]) );