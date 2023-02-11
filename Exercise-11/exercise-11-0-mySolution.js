/*

   # Enunciado Ejercicio 11:
       Dado un texto y una búsqueda, censurar todas las coincidencias de la búsqueda
      en el texto co [-CENSURADO-].
      
       Si el texto o búsqueda están vacio, mostrar:
         "No puedes leer el texto y la búsqueda" en el caso de que ambos
         parámetros no lleguen.
      
   #Ejemplos:

      censorship("hola hola", "hola")
         Devuelve: [-CENSORSHIP-] [-CENSORSHIP-]

      censurado(); 
         Devuelve: "No puedes leer el texto y la búsqueda"
      
      censurado("hola");
         Devuelve: "No pudes realizar la búsqueda"
      
   # Sugerencias de cómo hacerlo: 
      - Función que reciba un texto y una búsqueda
      - Condiciones en el caso de que algún parámetro de false
      - Reemplazar la búsqueda por [-CENSORSHIP-] en el texto
*/

/**
 * 
 * @param {String} text 
 * @param {String} search 
 * @returns 
 */
function censorship(text = false, search = false) {

   if( text === false && search === false ) {
      return 'No puedes leer el texto y la búsqueda';
   } else if( search === false ) {
      return 'No pudes realizar la búsqueda';
   } else if( text === false ) {
      return 'No puedes leer el texto';
   }

   let regExprToSearch = new RegExp(search, 'g'); // Create a new Regular expresion that is for all results (global) with the argument search
   text = text.replace(regExprToSearch, '[-CENSORSHIP-]');
   return text;

}

console.log( censorship('hola hola', 'hola') );