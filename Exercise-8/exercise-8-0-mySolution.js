/*

   # Enunciado Ejercicio 8:
      Dado un número entero, inviertelo y devuelve de nuevl el entero.    

   #Ejemplos:
      inverseNumber(67);   // Return: 76

   # Sugerencias de cómo hacerlo: 
      - Función que reciba los números.
      - Convertir número en string.
      - Crear un array por cada letra.
      - Darle la vuelta.
      - Unir el array en un string.
      - Convertir el String en un número.
*/

/**
 * 
 * @param {Number} numberToInverse 
 * @returns {Number}
 */
function reverseNumber( numberToInverse){

   if( typeof(numberToInverse) !== 'number' || !Number.isInteger(numberToInverse) ) {
      console.error(`The argument send '${numberToInverse}' isn't a number (or a integer)`);
      return;
   }

   const sign = Math.sign(numberToInverse);
   numberToInverse = numberToInverse.toString().split('').reverse().join('');
   return parseInt(numberToInverse) * sign;
}


const myNumber = -67;
console.log(
   `The inverse number of ${myNumber} is: ${reverseNumber(myNumber)}`
);
