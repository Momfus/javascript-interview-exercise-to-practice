/*

   # Enunciado Ejercicio 9:
      Dados dos arrays, devolver array con solo los elementos comunes entre ambos.
      
   #Ejemplos:
      commonElements( [4,5,6,7], [7,8,9,7,5]);  Return: [5,7]
      
   # Sugerencias de cómo hacerlo: 
      - Función que recibe dos array.
      - Filtrar array y evaluar una condición.
      - Devolver un array nuevo
*/

/**
 * 
 * @param {Array<Number>} array1 
 * @param {Array<Number>} array2 
 * @returns {Array<Number>}
 */
function commonElements(array1, array2) {

   let newArray = [];
   
   // I use a forEach instead of filter, i have problems with repeat elements
   array1.forEach( element => {

      if( array2.includes(element) && !newArray.includes(element) ) {
         newArray.push(element);
      }

   });

   return newArray;

}

const array1 = [4,5,6,7],
      array2 = [7,8,9,7,5];

console.log(
   `The common elements of ${array1} and ${array2} are: `,
   commonElements( array1, array2)
);