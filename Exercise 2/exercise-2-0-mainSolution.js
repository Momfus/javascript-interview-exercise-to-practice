/*

   # Enunciado Ejercicio 2:
      Dada una cadena de texto, comprobar si es un palíndromo o no. Los palíndromos son palabras que se leen igual aun estando invertidos.
      Por ejemplo: ana, bob, otto, allivessevilla

      No tener en cuenta espacios o simbolos raros.

   #Ejemplos:

      palindrome("otto") // Return: true
      palindrome("victor") // Return: false

   # Sugerencias de cómo hacerlo: 
      - Función con parámetro "texto"
      - Separar el texto en un array de letras.
      - Darle la vuelta
      - Unir el array de letras en un string y comparar con el parámetro.

*/


/**
 * 
 * @param {String} str 
 * @returns {String} str but reverse
 */
function reverseString( str ) {
   return str.split('').reverse().join('');
}

/**
 * 
 * @param {String} word 
 * @returns {Boolean}
 */
function palindrome( word ) {

   // Error message
   if( typeof(word) !== 'string' ) {
      return console.error("The input isn't a string");
   }
   
   word = word.trim(); // Remote initial and end spaces

   if(word.length == 0){
      return console.error("The input is empty (with only spaces)");
   }

   if( /\s/.test(word) ) { // Check if has an empty space in some place in the string
      return console.error(`The word '${word}' must not have spaces`);
   }

   // Reverse

   word = word.toLowerCase();
   let inverseWord = reverseString(word);

   return (word === inverseWord);
}

// Run function 
console.log(
  "Otto : " + palindrome("otto") + "\n" +
  "victor : " + palindrome("victor") + "\n" +
  "Bob : " + palindrome("Bob") + "\n" 
);