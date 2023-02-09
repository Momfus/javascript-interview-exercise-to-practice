/*

   # Enunciado Ejercicio 10:
       Dado un número, mostrar una escalera con escalones "[-]" usando el número
      para los niveles de la escalera.
      
   #Ejemplos:
      stair(4) // Return

      [-]
      [-][-]
      [-][-][-]
      [-][-][-][-]
      
   # Sugerencias de cómo hacerlo: 
      - Función que reciba un número
      - Recorrer el número de niveles de la escalera
      - En cada iteración pintar los escalones de ese nivel
      - Haciendo un ucle desde 1 hasta el nivel en el que estamos.
*/


/**
 * 
 * @param {String} steps 
 * @returns {String}
 */
function stair(steps) {

   let currentStep = '';
   
   if( steps > 1) {
      currentStep = stair(steps - 1) + '\n';
   }

   return currentStep + ('[-]').repeat(steps);
}

console.log( stair(4) );

