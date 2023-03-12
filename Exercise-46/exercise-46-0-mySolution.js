/*
# Enunciado Ejercicio 45:

    Dado un string, devolver todos los posibles substrings.

# Ejemplos:

   allSubStrings('hola');
   
      Return:
      {
         'h',  'o',  'l',
         'a',  'ho', 'ol',
         'la', 'hol','ola',
         'hola'
      }
       
*/

function allSubStrings(text) {

   let longSub = 1;
   let arraySubstrings = [];

   while( longSub <= text.length ) {

      for( let i = 0; i < text.length; i++) {

         if( (i + longSub) <= text.length) {
            arraySubstrings.push( text.substring(i, i+longSub) );
         }
      }

      longSub++;

   }

   return arraySubstrings;
}


console.log( allSubStrings('hola') );
