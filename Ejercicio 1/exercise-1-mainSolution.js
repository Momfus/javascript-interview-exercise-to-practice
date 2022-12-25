/*

   # Enunciado Ejercicio 1:
      Dado un número, devolver su tabla de multiplicar completa

   # Ejemplos
      Ejecuta esta función: multiplicationTable(5)

      << Table of 5 >>
      1 x 5 = 5
      2 x 5 = 10
      3 x 5 = 15
      4 x 5 = 20
      5 x 5 = 25
      6 x 5 = 30
      7 x 5 = 35
      8 x 5 = 40
      9 x 5 = 45
      10 x 5 = 50

   # Sugerencias de cómo hacerlo: 
      - Función con parámetro "número"
      - Variable con texto encabezado
      - Bucle del 1 al 10
      - Concatener a la variable string con multiplicación y su resultado

*/

// Functions

/**
 * 
 * @param {Number<Integer>} myNumber 
 * @returns {Number<Integer>}
 */
function multiplicationTable( myNumber ){

   // Message errors
   if( arguments.length === 0 || myNumber === null ) {
      console.error('No number has been entered.');
      return;
   }

   if( typeof(myNumber) !== 'number' || !Number.isInteger(myNumber)){
      console.error(`${myNumber} was sent, which is not a numeric or integer type`);
      return;
   }

   // Table
  let res = `<< Table of ${myNumber}>>\n`;
   
   for( let i = 1; i <= 10; i++ ) {
      res += `${i} x ${myNumber} = ${i * myNumber}\n`;
   }

   return res;

}

// Ejecución
console.log( multiplicationTable(3) );

