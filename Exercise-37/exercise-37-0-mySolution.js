/*
# Enunciado Ejercicio 37:

   
#Ejemplos:

   Dado un array o un texto, devolver el elemento o palabra que más aparece.

   Ejemplo: 
      
      theMostRepeat('momfus arboleo momfus');   // Return: momfus
      theMostRepeat([1, 2, 3, 4, 1]);           // Return: 1
         


# Sugerencias de cómo hacerlo: 
   - Mapear elementos en un json y hacer un contador
*/

/**
 * 
 * @param {String || Array<any>} elements 
 * @returns {any} element
 */
function theMostRepeat( elements ) {

   let objectElements = {};

   // If is a string, separate by the spaces
   if(!Array.isArray(elements)) {
      elements = elements.split(' ');
   }

   // Count elements
   elements.forEach(el => {
      
      if( objectElements.hasOwnProperty(el) ) {
         objectElements[el]++;
      } else {
         objectElements[el] = 1;
      }

   });

   // Search for the element most used
   let   element = null,
         mostRepeat = 0;
   
   for( let el in objectElements) {
      
      if( objectElements[el] > mostRepeat ) {
         mostRepeat = objectElements[el];
         element = el;
      }
   }
   
   return element;
}

console.log( theMostRepeat('momfus arboleo momfus') );
console.log( theMostRepeat([1, 2, 3, 4, 1]) );