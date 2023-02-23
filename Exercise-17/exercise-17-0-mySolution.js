/*
# Enunciado Ejercicio 17:
    Dado un número, mostrar los números de 1 hasta el número dado. Pero para 
   múltiplos de tres imprimir "buzz" en lugar del número y para los múltiplos
   de 5 imprimir "lightyear". Para múltiplos de 3 y 5, imprimir "BuzzLightyear"


#Ejemplos:
   
   buzz(5);
   Devuelve:
      1
      2
      buzz
      4
      lightyear
      
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que reciba el número
   - Condiciones numero actual multiplo de 3 o 5
   - Crar una función para recorrer y mostrar
   - Bucle del 1 al número

*/



/**
 * 
 * @param {Number} num 
 * @returns {String}
 */
function multiplyBy3Or5(num) {

   let reminderBy3 = num % 3;
   let reminderBy5 = num % 5;

   if( (reminderBy3 + reminderBy5) === 0) {
      return 'BuzzLightyear';
   }

   if( reminderBy3 === 0) {
      return 'buzz';
   }

   if( reminderBy5 === 0) {
      return 'lightyear';
   }

   return num.toString();

}

/**
 * 
 * @param {Number} num 
 * @returns {String}
 */
function buzz( num ) {

   let count = 0;
   let str = '';
   while( ++count <= num ) {
      
      str +=  multiplyBy3Or5(count) + '\n';
   }

   return str;

}


console.log( buzz(15) );