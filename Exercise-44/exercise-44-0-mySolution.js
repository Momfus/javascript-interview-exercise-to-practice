/*
# Enunciado Ejercicio 43:

    Dado un array de strings, devolver otro con los valores que esten formados 
   por más de dos palabras.
   
# Ejemplos:

   twoWords(['hola', 'argentina', 'buenos aires', 'momfus arboleo']);

   Return: 
      ['buenos aires', 'momfus arboleo']

# Sugerencias de cómo hacerlo: 
   -   
*/


function twoWords( arrayString ) {

   let arrayAux;

   // Filter the elements with less than two words
   return arrayString.filter(element => {
      
      // Filter each element if is empty (a lot of spaces)
      arrayAux = element.split(' ').filter( subElement => {

         return (subElement.trim().length > 0);

      });

      return (arrayAux.length > 1);

   });

}


console.log( twoWords(['hola ', 'argentina', 'buenos aires', 'momfus arboleo']) );