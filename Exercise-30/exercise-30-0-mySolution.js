/*
# Enunciado Ejercicio 29:

   Dado un array de numeros, devolver el array sin elementos duplicados.
   Si hay un string eliminarlo del array.

#Ejemplos:
   
   deleteDuplicates([1,2,1,1,1,3,4]);   // Return: [1, 2, 3, 4] 
   
# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro array.
   - Recorrer el array y eliminar strings.
   - Usar objeto para eliminar duplicados.

*/


function deleteDuplicates( arrayNumbers ) {

   arrayNumbers = arrayNumbers.filter(
      x => (typeof x !== 'string')
   );

   let numberMap = {};

   arrayNumbers.forEach(

      x => {
         if( numberMap.hasOwnProperty(x) ) {
            numberMap[x]++;
         } else {
            numberMap[x] = 1;
         }
      }
   );
   
   arrayNumbers = Object.keys(numberMap);

   return arrayNumbers;

}

console.log( deleteDuplicates([1,2,1,1,1,3,4]) );
console.log( deleteDuplicates(['asd', 1,2,1, 'asd',1,1,3,4]) );