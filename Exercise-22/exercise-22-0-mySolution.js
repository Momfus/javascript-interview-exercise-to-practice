/*
# Enunciado Ejercicio 22:

   Dados dos numeros, indicar cual es mayor y cual es menor.

#Ejemplos:
   greaterSmaller(8, 6);

   // Return:
      El numero mayor es: 8
      El numero menor es: 6


# Sugerencias de cómo hacerlo: 
   - Crear una función
   - Condiciones para ver cual es mayor
   - Devolver resultado.
*/

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns {string}
 */
function greaterSmaller(num1, num2) {

   if( num1 === num2 ) {
      return 'Los números son iguales';
   }

   const [mayor, menor] = (num1 > num2) ? [num1, num2] : [num2, num1];

   return `El numero mayor es: ${mayor}\nEl numero menor es: ${menor}`;

}

console.log( greaterSmaller(8, 6) );