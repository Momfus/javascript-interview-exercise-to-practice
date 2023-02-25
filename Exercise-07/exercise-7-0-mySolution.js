/*

   # Enunciado Ejercicio 7:
       Dado dos numeros, devolver cuantos números impares hay entre ellos.  

   #Ejemplos:
      odds(1, 100);  // Return: 50

   # Sugerencias de cómo hacerlo: 
      - Función que reciba los dos números.
      - Bucle de numero1 al numero2
      - Condición, si el resto es distinto a cero, es impar.
      - Aumentar en uno el contador.
      - Devolver contador.
*/

// Funciones

/**
 * 
 * @param {Number} minNumber 
 * @param {Number} maxNumber
 * @return {Number} 
 */
function odds( minNumber, maxNumber) {

   let countOdds = 0;

   for( let i = minNumber; i <= maxNumber; i++){

      if( i % 2 !== 0) {
         countOdds++;
      }

   }

   return countOdds; 
}

// Ejecutar

const numero1 = 1,
      numero2 = 100;

console.log(
   `La cantidad de números impares entre ${numero1} y ${numero2} es:`,
   odds(numero1, numero2)
);