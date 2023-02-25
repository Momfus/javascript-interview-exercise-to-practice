/*

   # Enunciado Ejercicio 5:
      ¿Cuánto es el X por ciento de X número?

   #Ejemplos:
      numberPercent(20, 100)   // Return: 20
      numberPercent(43, 897)   // Return: 385,71

   # Sugerencias de cómo hacerlo: 
      - Función con parametros "porcentraje" y "numero"
      - Crear una variable para la operación del porcentaje
      - Devolver un string que responda a la pregunta del enunciado.
*/

/**
 * 
 * @param {percent} percent 
 * @param {completeNumber} completeNumber 
 * @returns 
 */
function numberPercent( percent, completeNumber) {

   // This cases (multiply by a 0.01) it return a big number with a lot of decimals
   // let newNumber = (percent * completeNumber) * 0.01; 
   // newNumber = parseFloat(newNumber.toFixed(2)); // It return a number with two decimals in an string and then return it as a float number.

   // With this return with two decimals directly
   let newNumber = ( percent * completeNumber) / 100;
    
   return `The ${percent}% of ${completeNumber} is: ${newNumber}`; 

}

// Execute
console.log( numberPercent(43, 897) );