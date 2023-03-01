/*
# Enunciado Ejercicio 40:

   Dado un array de números, devolver el valor más bajo y el más alto.

# Ejemplos:
   lowHighNumber([2,3,1,4,5]);

      Return: 
         bajo: 1,
         alto: 5

# Sugerencias de cómo hacerlo: 
   -  Ordenar el array original.
   - Selectionar el primer y último elemento.

*/

function lowHighNumberQuick( arrayNumber ) {

   arrayNumber.sort((a, b) => a - b);

   console.log( `bajo: ${arrayNumber[0]}\nalto: ${arrayNumber[arrayNumber.length - 1]}`);
}


function lowHighNumber( arrayNumber ) {

   let aux = 0;
   for( let i = 0; i < arrayNumber.length; i++ ) {

      for( let j = i + 1; j < arrayNumber.length; j++) {

         if( arrayNumber[i] > arrayNumber[j]) {
            aux = arrayNumber[i];
            arrayNumber[i] = arrayNumber[j];
            arrayNumber[j] = aux;
         }

      }

   }

   console.log( `bajo: ${arrayNumber[0]}\nalto: ${arrayNumber[arrayNumber.length - 1]}`);

}

lowHighNumberQuick([2, 1,3,4,0,5]);
console.log('-----');
lowHighNumber([2,1,3,4,0,5]);