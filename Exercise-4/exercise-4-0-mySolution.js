/*

   # Enunciado Ejercicio 4:
      Dada una cadena de texto, darle la vuelta e invertir el orden de sus
   caracteres, sin usar métodos propios del lenguaje, solo estructuras de
   control.   

   #Ejemplos:

      inverse('hola')      // Return: 'aloh'
      inverse('victor')    // Return: 'retciv'
      inverse('robles')    // Return: 'selbor'

   # Sugerencias de cómo hacerlo: 
      - Función con parametro "texto"
      - Crear una variable para guardar la cadena invertida
      - Bucle que recorra el string y guarde los caractgeres en la variable que devuelve.
*/


/**
 * 
 * @param {String} text 
 * @returns {String}
 */
function inverse( text ) {

   let inverseText = '';

   for( let i = text.length - 1; i > -1; i-- ) {
      inverseText += text[i];
   }

   return inverseText;

}

console.log(
   inverse('Momfus')
);