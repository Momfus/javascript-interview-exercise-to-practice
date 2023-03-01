/*
# Enunciado Ejercicio 36:

   
   Dado un texto, devolver cuantas consonantes y cuantas vocales tiene.
   
# Ejemplo: 
      countLetters('momfusArboleo.com');

      Return:
         Consonantes: 10
         Vocales: 7


# Sugerencias de cómo hacerlo: 
   - Función con parámetro texto
   - Recorrer cada letra
   - Testear con expresión regular.

*/

function countLetters( text ) {

   let cantidadVocales = 0,
       cantidadConsonantes = 0;

   // First separte as array, then only use the letters (no special characters) and then search for vowels
   let textArrayChar = text.split('').filter( char => ( isNaN(char) && (/[\w]/gi).test(char) ) );

   textArrayChar.forEach( letter => {
      
      if( (/^[aeiou]$/i).test(letter) ) {
         cantidadVocales++;
      } else {
         cantidadConsonantes++;
      }
      
   });
   
   console.log(`
   Consonantes: ${cantidadConsonantes}
   Vocales: ${cantidadVocales}
   `
   );

}

countLetters('momfusArboleo1234.com');