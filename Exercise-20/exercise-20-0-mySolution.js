/*
# Enunciado Ejercicio 20:
    Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas
   entre sí.

    Una cadena es un anagrama de otra si usa los mismos caracteres en la misma
   cantidad.

   No tener en cuenta espacios, simbolos raros, puntos, etc.

#Ejemplos:
   
   anagram('Riesgo', 'Sergio');  // Devuelve: true
   anagram('Victor', 'Robles');  // Devuelve: false
   
# Sugerencias de cómo hacerlo: 
   - Crear una función para limpiar los textos
   - Quitar todo lo que no sea texto
   - Poner en minusculas
   - Crear array de letras
   - Ordenarlo
   - Unirlo
   - Función para compararar dos palabras.
*/

function cleanString(str) {

   str = str.toLowerCase().trim(); // No white spaces in the borders
   str = str.replace(/[^\w\s]/g, ''); // Remove all characters that arent alphanumeric
   str = str.replace(/\s+/g, ''); // Remove all the spaces
   str = str.replace(/[\.,;]/g, ''); // Remove poins
   return str;
}

function anagram( str1, str2 ) {

   // Clean strings
   str1 = cleanString(str1);
   str2 = cleanString(str2);

   // Create character arrays
   str1 = str1.split('');
   str2 = str2.split('');

   // Check if the length is the same to discard if is not anagram
   if( str1.length !== str2.length ) {
      return false; 
   }

   // Sort the characters in order and then join them, so if the have the same characters and in the same number, it will be equal
   str1 = str1.sort();
   str2 = str2.sort();

   str1 = str1.join('');
   str2 = str2.join('');

   return ( str1 === str2 );

}


console.log( anagram('Riesgo', 'Sergio') );
console.log( anagram('Victor', 'Robles') );



