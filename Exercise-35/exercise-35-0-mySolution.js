/*
# Enunciado Ejercicio 35:

   Dado un array, crear otro con el primer y el último elemento del original

# Ejemplos:

   firstAndLast([100, 200, 300, 780])

      Return:
         [100, 780]
   
# Sugerencias de cómo hacerlo: 
   - Función con parámetro array,
   - Array push del primer y último elemento
   - Devolver resultado

*/

function firstAndLast( arrayElements ){

   let newArray = [];

   newArray.push( arrayElements[0], arrayElements[ arrayElements.length - 1]);

   return newArray;
}

console.log( firstAndLast([100, 200, 300, 780]));