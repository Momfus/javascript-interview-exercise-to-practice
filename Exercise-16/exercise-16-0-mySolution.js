/*
# Enunciado Ejercicio 16:
   Dada una cadena de texto, devolver cuantas vocales (a,e,i,o,u) tiens

#Ejemplos:
   
   vowels('github.com/Momfus")
   Devuelve:
      5
      
   
# Sugerencias de cómo hacerlo: 
   - Crear una función que reciba el texto.
   - Método match con expresión regular
   - Devolver un resultado

*/

/**
 * 
 * @param {String} str 
 * @returns {Number}
 */
function vowels( str ) {

   str = str.toLowerCase();
   count = ( str.match(/[aeiou]/g) );
   return count ? count.length : 0;

}

console.log( vowels('github.com/Momfus') );