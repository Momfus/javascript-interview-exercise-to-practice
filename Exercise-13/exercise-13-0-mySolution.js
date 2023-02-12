/*
# Enunciado Ejercicio 13:
    Dado un array, dividirlo en tantos sub-arrayas como sea necesario
   basándonos en un número que indique su tamaño.

    Dividirlo en arrays de X elementos. En caso de resto, que el último tenga
   el resto de los elementos.

#Ejemplos:

   divideArray([7, 8, 9, 10], 2);
      Devuelve: [[7, 8], [9, 10]]
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que reciba los dos parámetros.
   - Crear un array.
   - Recorrer array e ir añadiendo sub arrays
*/

/**
 * 
 * @param {Array<any>} array 
 * @param {Number<Int>} quantity 
 * @returns 
 */
function divideArray( array, quantity) {

   let newArray = [];
   let count = quantity;
   let auxArray = [];

   array.forEach(element => {
      
      auxArray.push( element );
      count--;

      if( count === 0 ) {

         newArray.push(auxArray);
         count = quantity;
         auxArray = [];
      }

   });

   if( auxArray.length > 0) { // In case there are elements left
      newArray.push(auxArray);
   }

   return newArray;
}

console.log( divideArray([7, 8, 9, 10], 2) );