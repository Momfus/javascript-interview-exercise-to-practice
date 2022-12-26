/*

   # Enunciado Ejercicio 2:
      Dada una palabra, buscarla en una frase y devolver cuantas veces aparece
   en ella.
      la frase y la palabre deben ser parámetros de una función.

   #Ejemplos:

      wordMatches("hola soy una palabra en una frase, PALABRA", "palabra"); // Return: 2
      wordMatches("soy la frase", "victor"); // Return: 0

   # Sugerencias de cómo hacerlo: 
      - Función con parametro dos parametros "frase" y "busqueda"
      - Poner string en minúsculas y limpiarlo.
      - Comprobar si la búsqueda esta incluida en la frase.
      - Crear una array de palabras de la frase.
      - Mapear esas palabras y hacer un contador de cada una.
      - Devolver el contador de la busqueda. 

*/

/**
 * Return the number of time a word appear inside a phrase
 * @param {String} phrase 
 * @param {String} wordToSearch 
 * @returns {Number}
 */
function wordMatches(phrase, wordToSearch) {

   // Check first for errors
   if( phrase === undefined || wordToSearch === undefined) {
      console.error('The phrase and wordToSearch must be sent as argument');
      return;
   }

   wordToSearch = wordToSearch.trim();

   if( wordToSearch.length === 0) {
      console.error('The word to search in the phrase is empty or with only spaces');
   }

   let countWord = 0;
   phrase = phrase.toLowerCase();
   wordToSearch = wordToSearch.toLocaleLowerCase();

   if( phrase.includes( wordToSearch ) ) {
      
      phrase = phrase.trim().split(/[, .]+/); // Regular expresion that detect each comma, point and spaces

      if( phrase.length == 0 ) { // There are only empty spaces
         return 0;
      }

      phrase.forEach( element => {
         countWord += ( element === wordToSearch) ? 1 : 0;
      });
   }


   return countWord;
}

let word = "PALABRA";
console.log(
   `The word '${word}' is in the phrase ${wordMatches("hola soy una palabra en una frase, PALABRA", word) } times`
);
