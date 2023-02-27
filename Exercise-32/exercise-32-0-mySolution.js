/*
# Enunciado Ejercicio 32:

    Dado un array de números, devolver el array con sus números elevados al 
   cuadrado (número multiplicado por si mismo).

    El array debe eliminar cualquier contenido que no sea numérico.
   
#Ejemplos:

   arrayNumberToSquare([5, 6, 7])
      Return:
            [25, 36, 49]

# Sugerencias de cómo hacerlo: 
   - Crear una función con parámetro números.
   - Filtrar array.
   - Modificar contenido array
   - Devolver resultado.

*/

function arrayNumberToSquare( arrayNumber ) {

   arrayNumber = arrayNumber
                  .filter( elem => typeof elem === 'number')
                  .map( num => num * num);

   return arrayNumber;

}


console.log( arrayNumberToSquare([5, 6, 'test', 7]));

